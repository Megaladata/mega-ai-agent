import {createHash} from 'node:crypto';
import {JAVASCRIPT_DECLARED_TYPES,JAVASCRIPT_DECLARED_COLUMN_LIMIT} from './javascript-column-types.mjs';

// This is a versioned, inert knowledge asset. A future JavaScript handler may
// publish it only after checking the observed Megaladata build before any effect.
const knowledge=Object.freeze({
  version:'1.0.0',
  validated_for:Object.freeze({
    megaladata_build:'7.4.2',
    server_os:'Linux',
    server_os_evidence:'owned Session.Version.IsWindows=false',
    source_prompt_sha256:'c9c2d44d4dc4cf34b8f21a98504cf9f6acfc70cac510c36fe2725e7c0d7c2d16',
    proof_scope:'headed Ubuntu discovery; exact examples only, not full autonomous acceptance',
  }),
  sources:Object.freeze({
    original_prompt:'docs/node-development/nodes/programming-javascript/references/js_node_megaladata_system_prompt.md',
    observed_profile:'docs/node-development/nodes/programming-javascript/engine-profile.json',
    official_help:Object.freeze([
      'https://help.megaladata.ru/userguide/processors/programming/java-script/index.html',
      'https://help.megaladata.ru/userguide/processors/programming/java-script/input-tables.html',
      'https://help.megaladata.ru/userguide/processors/programming/java-script/output-tables.html',
      'https://help.megaladata.ru/userguide/processors/programming/java-script/api-description.html',
    ]),
    official_help_build_scope:'online help is not pinned to build 7.4.2; executable examples are backed by the observed profile',
  }),
  limitations:Object.freeze([
    'Только Megaladata 7.4.2 и табличный v1: другой наблюдённый build требует отказа до мутации.',
    'Import Data statically from builtIn/Data; external modules, FS, Fetch, and Calc are outside this contract.',
    'Use only syntax and API verified on this build; a clean editor does not prove Execute.',
    'For a code-defined output table call AssignColumns before the first Append; declared mode uses the saved schema.',
    'Take technical column names and types from a fresh observation; RowID in the examples is the test input name, not a universal field.',
    'JavaScript numbers have Number limits; an exact read of a large Integer needs a separate confirmed result.',
    'Do not rely on globals surviving between runs; read the actual source, mappings, output, and saved package.',
  ]),
  scalar_data_api:Object.freeze({
    import:'import {InputTable,OutputTable,DataType} from "builtIn/Data";',
    input:'InputTable.RowCount and InputTable.Get(row, technicalName) read the observed input table.',
    output:'OutputTable.Append() adds a row; OutputTable.Set(technicalName, value) writes the last appended row.',
    code_schema:'In schema_mode=code, OutputTable.AssignColumns(...) defines typed columns before Append.',
    declared_schema:'In schema_mode=declared, columns are set in the wizard before Execute; the code does not call AssignColumns.',
  }),
  examples:Object.freeze([
    Object.freeze({
      id:'declared-table-v1',schema_mode:'declared',input_technical_name:'RowID',
      source_sha256:'816b086fe447eb42afbf87ac46b18b01153f731f3baf0de2bcd280da1104957f',
      source:'import {InputTable,OutputTable,DataType} from "builtIn/Data";\nfor (let row=0;row<InputTable.RowCount;row++) {\n    OutputTable.Append();\n    OutputTable.Set("ObservedID",InputTable.Get(row,"RowID"));\n    OutputTable.Set("PhaseMarker","JS_G2_TABLE_V1");\n}\n',
      scope:'Diagnostic example: declare ObservedID Integer and PhaseMarker String in the wizard; replace RowID and the marker with the observed task data.',
      evidence:'G2/G7 headed Ubuntu; six verified rows, a clean Save, and a cold Execute for a fixed package.',
    }),
    Object.freeze({
      id:'code-table-v1',schema_mode:'code',input_technical_name:'RowID',
      source_sha256:'d2af9d87e75042c5debf58475d92060b359d888fcfce51082c1e3e13e01efcb2',
      source:'import {InputTable,OutputTable,DataType} from "builtIn/Data";\nOutputTable.AssignColumns([{Name:"ObservedID",DataType:DataType.Integer},{Name:"PhaseMarker",DataType:DataType.String}]);\nfor (let row=0;row<InputTable.RowCount;row++) {\n    OutputTable.Append();\n    OutputTable.Set("ObservedID",InputTable.Get(row,"RowID"));\n    OutputTable.Set("PhaseMarker","JS_G2_TABLE_V1");\n}\n',
      scope:'Diagnostic example: replace RowID, the output names and types, and the marker with the observed task data.',
      evidence:'G2/G7 headed Ubuntu; six verified rows, a clean Save, and a cold Execute for a fixed package.',
    }),
  ]),
});

// Preserve the exact 1.0 asset and its two already accepted example identities.
// New guidance changes the default asset/cache identity without rewriting history.
const previous=Object.freeze({...knowledge,version:'1.1.0',
  limitations:Object.freeze([...knowledge.limitations,
    'For new code prefer an ASCII Name; put a user Unicode caption in DisplayName. After Execute take the actual names from schema/readback and do not guess normalization.']),
  column_names:Object.freeze({
    method:'AssignColumns',
    evidence:'docs/node-development/nodes/programming-javascript/public-column-names-design.md',
    scope:'Five fixed headed public Code cases on Megaladata7.4.2/Linux; observed code API, native mapping and physical schema.',
    name:'Technical name used to access the column; it can differ from the requested Name.',
    display_name:'User caption; in the verified case the caption Amount was kept unchanged.',
    observed_pairs:Object.freeze([
      Object.freeze({requested_name:'Value',actual_name:'Value',display_name:'Value'}),
      Object.freeze({requested_name:'Sum',actual_name:'Summa',display_name:'Value'}),
      Object.freeze({requested_name:'Value Total',actual_name:'Value_Total',display_name:'Value'}),
      Object.freeze({requested_name:'1Value',actual_name:'_1Value',display_name:'Value'}),
      Object.freeze({requested_name:'Value',actual_name:'Value',display_name:'Amount'}),
    ]),
    normalization_algorithm_verified:false,
    add_column_verified:false,
    rule:'These are specific observations, not a general algorithm. Do not apply the result to AddColumn, empty names, or collisions without a check.',
  }),
});

const declared=Object.freeze({...previous,version:'1.2.0',
  limitations:Object.freeze([...previous.limitations,
    'schema_mode=declared: 1–64 columns with name, label, type, data_kind, and usage. For integer/real/datetime data_kind=Continuous; for string/boolean data_kind=Discrete; another kind is unsupported by this writer. usage=Unspecified keeps the default role. The code fills the declared schema without AssignColumns.']),
  declared_columns:Object.freeze({max_columns:JAVASCRIPT_DECLARED_COLUMN_LIMIT,
    default_data_kind:Object.freeze(Object.fromEntries(Object.entries(JAVASCRIPT_DECLARED_TYPES).map(([type,value])=>[type,value.kind]))),
    required_fields:Object.freeze(['name','label','type','data_kind','usage']),
    scope:'Existing managed column writer contract; selecting a non-default data kind is unsupported.',
  }),
});

const dataOnly=Object.freeze({...declared,version:'1.3.0',
  limitations:Object.freeze([...declared.limitations,
    'In parameters.source_text for AssignColumns use DataType.Integer, DataType.Float (real), DataType.String, DataType.Boolean, and DataType.DateTime from builtIn/Data. DataType.Real does not exist; parameters.columns uses the string type="real", which is a different contract.']),
  scalar_data_api:Object.freeze({...declared.scalar_data_api,
    column_types:Object.freeze({integer:'DataType.Integer',real:'DataType.Float',string:'DataType.String',boolean:'DataType.Boolean',datetime:'DataType.DateTime'}),
  }),
});

const current=Object.freeze({...dataOnly,version:'1.4.0',
  limitations:Object.freeze([
    'Megaladata 7.4.2: tabular Data retains input/output 0; sources require input_state:unconnected and verified absence of incoming links.',
    'Static builtIn/Data; builtIn/FS only in the unconnected source branch. Fetch, Calc, external modules and dynamic import/require remain refused.',
    ...dataOnly.limitations.slice(2),
  ]),
  filesystem:Object.freeze({
    import:'import * as fs from "builtIn/FS";',
    scope:'Megaladata7.4.2/Linux native operator probes LAB-1549; candidate pending autonomous acceptance.',
    paths:'Only the assigned user-storage subtree. Unsaved relative paths use the personal folder; saved paths use the MGP directory; a moved package needs its sidecar separately.',
    bytes:'readFileSync without encoding returns ArrayBuffer; use Uint8Array, not Node Buffer.',
    effects:'Declared output: dock_node_apply with finish:execute maps first, then runs once, including existing nodes. Code output without FS/Fetch runs twice: materialize, map, reactivate. Cold/downstream runs once. FS/Fetch scripts need declared output columns. a and wx are not idempotent; never retry unknown or partial effects.',
  }),
});

export const JAVASCRIPT_KNOWLEDGE_SHA256=createHash('sha256').update(JSON.stringify(current)).digest('hex');
export const JAVASCRIPT_CARD_LIMITATIONS=current.limitations;

export function describeJavascriptKnowledge(observedBuild,version=current.version) {
  if(observedBuild!==knowledge.validated_for.megaladata_build)throw Error('JavaScript knowledge is not validated for observed Megaladata build');
  const selected=version===knowledge.version?knowledge:version===previous.version?previous:version===declared.version?declared:version===dataOnly.version?dataOnly:version===current.version?current:null;
  if(!selected)throw Error('Unsupported JavaScript knowledge version');
  return structuredClone({...selected,knowledge_sha256:createHash('sha256').update(JSON.stringify(selected)).digest('hex')});
}
