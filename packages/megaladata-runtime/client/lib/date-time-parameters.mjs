// Calendar functions observed in DateReformWizard on Megaladata 7.4.2.
// Func is a native enum, not a rendered row position. ISO functions are separate.
export const DATE_TIME_OPERATIONS=Object.freeze(Object.fromEntries([
 ['year',4,'DoNumber','Year','Y','integer'],['quarter',5,'DoNumber','Quarter','Q','integer'],
 ['month',6,'DoNumber','Month','M','integer'],['day_of_month',10,'DoNumber','Day of month','DM','integer'],
 ['hour',12,'DoNumber','Hours','HRS','integer'],
 ['minute',13,'DoNumber','Minutes','MIN','integer'],['second',14,'DoNumber','Seconds','SEC','integer'],
 ['year_start',4,'DoDateTimeFirst','Year','Y','datetime'],['year_end',4,'DoDateTimeLast','Year','Y','datetime'],
 ['quarter_start',0,'DoDateTimeFirst','Year + quarter','YQ','datetime'],['quarter_end',0,'DoDateTimeLast','Year + quarter','YQ','datetime'],
 ['month_start',1,'DoDateTimeFirst','Year + month','YM','datetime'],['month_end',1,'DoDateTimeLast','Year + month','YM','datetime'],
 ['date',16,'DoDateTimeFirst','Date','D','datetime'],
 ['iso_year',4,'DoNumber','Year','Y','integer',true],['iso_week',7,'DoNumber','Week','WY','integer',true],
 ['iso_week_start',2,'DoDateTimeFirst','Year + week','YW','datetime',true],
 ['day_of_week',11,'DoNumber','Day of week','DW','integer'],
].map(([operation,func,flag,label,suffix,type,iso=false])=>[operation,Object.freeze({operation,func,flag,label,suffix,type,iso})])));
const need=(v,m)=>{if(!v)throw Error('Date/time: '+m);};
export function validateDateTimeParameters(p,mode,request){
 need(mode==='calendar','unsupported mode');
 need(p&&typeof p==='object'&&!Array.isArray(p)&&Object.keys(p).every(k=>k==='fields'),'unknown parameters');
 need(request.target.kind!=='new'||Array.isArray(p.fields)&&p.fields.length>0,'new node requires fields');
 need(request.mappings.every(m=>(m.fields??m.changes??[]).every(f=>f.source?.kind==='configured_field'&&(m.direction==='output'||f.excluded!==true))),'configured-field mappings required');
 need(request.mappings.every(m=>m.direction!=='output'||m.fields===undefined&&m.changes===undefined||m.autosync!==true),'explicit output layout requires autosync disabled');
 if(p.fields===undefined)return;
 need(Array.isArray(p.fields)&&p.fields.length<=128,'invalid fields');
 need(request.target.kind!=='new'||p.fields.some(f=>Array.isArray(f?.transformations)&&f.transformations.length>0),'new node requires a transformation');
 const fields=new Set(),names=new Set();
 for(const f of p.fields){
  need(f&&Object.keys(f).every(k=>['field','transformations'].includes(k))&&f.field?.kind==='input_field'
   &&Object.keys(f.field).every(k=>['kind','name'].includes(k))&&typeof f.field.name==='string'&&f.field.name.length>0&&f.field.name.length<=128&&!fields.has(f.field.name),'unique exact field required');fields.add(f.field.name);
  need(Array.isArray(f.transformations)&&f.transformations.length<=12,'invalid transformations');const ops=new Set();
  for(const t of f.transformations){need(t&&Object.keys(t).every(k=>['operation','name','label'].includes(k))&&Object.hasOwn(DATE_TIME_OPERATIONS,t.operation)&&!ops.has(t.operation),'unsupported or repeated operation');ops.add(t.operation);
   need(typeof t.name==='string'&&/^[A-Za-z_][A-Za-z0-9_]{0,127}$/.test(t.name)&&!names.has(t.name.toLowerCase()),'unique output name required');names.add(t.name.toLowerCase());
   need(typeof t.label==='string'&&t.label.length>0&&t.label.length<=120,'output label required');
  }
 }
}
export function validateDateTimeInputParameters(p,resolved,native){
 if(p.fields!==undefined)resolveDateTimeParameters(p,resolved.fields??native.target_fields);
}
export function resolveDateTimeParameters(p,inputs){
 const resolved=[];const names=new Set(inputs.map(f=>f.name.toLowerCase()));
 for(const f of p.fields??[]){const matches=inputs.filter(i=>i.name===f.field.name);need(matches.length===1&&matches[0].type==='datetime','exact datetime input required: '+f.field.name);
  for(const t of f.transformations){need(!names.has(t.name.toLowerCase()),'output collides with input or another output: '+t.name);names.add(t.name.toLowerCase());}
  resolved.push({...f,input:matches[0]});
 }return resolved;
}
