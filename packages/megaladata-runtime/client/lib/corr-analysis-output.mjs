export const CORR_ANALYSIS_OUTPUT=[{name:'ColSet1',label:'Field1.Name',type:'string'},{name:'ColSet1_Label',label:'Field1.Label',type:'string'},
 {name:'ColSet2',label:'Field2.Name',type:'string'},{name:'ColSet2_Label',label:'Field2.Label',type:'string'},{name:'Pirson',label:'Pearson',type:'real'}];
export async function readCorrAnalysisOutputs(channel,read,ctx){
 const ports=[];
 for(const port of read.ports){
  const {output}=await channel.readOutputPort({port,execution:ctx.portExecution,sampleRows:read.sample_rows,requireExactNumbers:read.require_exact_numbers});
  if(output.schema.length!==CORR_ANALYSIS_OUTPUT.length||output.schema.some((f,i)=>['name','label','type'].some(k=>f[k]!==CORR_ANALYSIS_OUTPUT[i][k])))throw Error('Correlation output schema differs from native Pearson fields');
  ports.push(output);
 }
 return {verified:true,cleanup_complete:true,effect_possible:true,status:ports.every(p=>p.sample_complete)?'complete':'partial',execution_id:ctx.execution.execution_id,evidence_ref:ctx.receipt_id,ports};
}
