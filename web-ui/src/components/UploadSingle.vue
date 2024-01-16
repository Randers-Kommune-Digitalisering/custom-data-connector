<script setup>

import { toRef, ref, watch } from 'vue';
import vSelect from 'vue-select';
import "vue-select/dist/vue-select.css";
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import * as XLSX from 'xlsx';

const props = defineProps(['existing_files', 'loading', 'roles'])
const emit = defineEmits(['busy', 'refresh'])

const err = ref(false);
const msg = ref(null);
const nameError = ref(false)
const duplicateError = ref(false)
const msgStyle = ref({color: 'green'});
const fileInput = ref(null);

const file = ref(null);
const excelData = ref(null);

const department = ref(null);
const group = ref(null);
const name = ref(null);

const metaName = ref(null);
const fileName = ref(null);
const fileNames = ref(null); 

const existing_files = toRef(props, 'existing_files');
const file_already_exists = ref(false);
const overwrite = ref(false);

//Loader
const color = "#325d88";
const size = "30px";

let URL = "/in/";
let METHOD = "POST";
const allowedFileExtensions = ['.csv', '.xlsx', '.xlsb','.xlsm','.xls','.ods']

// { value: '', label: 'Ingen afdeling' },  
let departments = [
  { value: 'BS', label: 'Børn og Skole (BS)' },
  { value: 'SA', label: 'Social og Arbejdsmarked (SA)' },
  { value: 'SKO', label: 'Sundhed, Kultur og Omsorg (SKO)' },
  { value: 'UMT', label: 'Udvikling, Miljø og Teknik (UMT)' },
  { value: 'HR', label: 'Personale og HR (HR)' },
  { value: 'ØK', label: 'Økonomi (ØK)' },
  { value: 'IT', label: 'IT og Digitalisering (IT)' },
];

if(!props.roles.includes('admin'))
  departments = departments.filter((obj) => props.roles.includes(obj.value))

watch(err, () => {
  if(err.value) msgStyle.value = {color: 'red'};
  else msgStyle.value = {color: 'green'};
});

watch([name, group, department], function() {
  if(!excelData.value) {

    if(group.value && department.value && file.value && name.value) fileName.value = [[department.value.value + group.value, name.value].join('_'), file.value.name.split('.').pop()].join('.');
    else if(group.value && department.value && file.value) fileName.value = [[department.value.value + group.value].join('_'), file.value.name.split('.').pop()].join('.');

    if(existing_files.value.includes("Data_" + fileName.value)) file_already_exists.value = true;
    else file_already_exists.value = false;

    fileNames.value = null;
  } else fileName.value = null;

  if(department.value && file.value && group.value) {
    let meta_name = [["Meta", department.value.value + group.value].join('_'), 'csv'].join('.')
    if(meta_name !== metaName.value) {
      if(existing_files.value.includes(meta_name)) metaName.value = null;
      else metaName.value = meta_name;
    }
  }
});

watch([file_already_exists, overwrite], function() {
  if(file_already_exists.value && overwrite.value) METHOD = "PUT";
  else METHOD = "POST";
});

watch([file_already_exists, overwrite], function() {
  if(file_already_exists.value && overwrite.value) METHOD = "PUT";
  else METHOD = "POST";
});


watch(group, function() {
    if(group.value) {
      if(group.value.includes('_'))
      nameError.value = true;
    else
      nameError.value = false;
    }
});

watch(fileNames, function() {
    // Check if two files have the same name
    if(fileNames.value) {
      let seen = new Set();
      if(fileNames.value.some(function(fn) { return seen.size === seen.add(fn.name).size; })) 
        duplicateError.value = true;
      else
        duplicateError.value = false;

      // Check if there are any dupplicate files and if they should be overwritten
      file_already_exists.value = fileNames.value.filter((fn) => fn.already_exists === true).length > 0;
      overwrite.value = fileNames.value.filter((fn) => fn.already_exists !== fn.overwrite).length === 0;
    }
  },
  {deep: true}
);

function clearAll(){
  fileInput.value.value = null;
  file.value = null;
  group.value = null;
  name.value = null;
  department.value = null;
  fileName.value = null;
  metaName.value = null;
  overwrite.value = false;
  file_already_exists.value = false;
  fileNames.value = null;
  excelData.value = null;
}

function onFileChanged($event) {
  name.value = '';
  group.value = '';
  msg.value = '';
  excelData.value = null;

  if($event.target.files.length > 0) {
    file.value = $event.target.files[0];

    if(file.value) {
      const file_extension = file.value.name.substring(file.value.name.lastIndexOf('.'));

      if(!allowedFileExtensions.includes(file_extension)) throw Error('Unknown file type')

      if(file.value.type !== 'text/csv') {
        emit('busy', true)
        var reader = new FileReader();
        excelData.value = [{name: 'placeholder'}];
        reader.onload = function(e) {
          excelData.value = readExcelData(e.target.result);
          emit('busy', false)
        };
        reader.readAsArrayBuffer(file.value);
      }

      let fn = file.value.name.substring(0, file.value.name.lastIndexOf('.')) || file.value.name;
      let dep = departments.find(o => o.value === fn.slice(0,2));
      
      if(dep) department.value = dep;

      if(fn.split('_').length > 1) {
        group.value = fn.split('_')[0]
        name.value = fn.split('_').slice(1).join('_')
      } else group.value = fn.split('_')[0]
    } 
  } else {
    group. value = null;
    name.value = null;
    excelData.value = null;
  }
}


function removeSheet(index) {
  excelData.value.splice(index, 1);
}

function submitFile() {
  emit('busy', true)

  let data = new FormData();
  let url = URL;

  if(excelData.value) {
    let data = new FormData();

    let new_files = fileNames.value.filter((fn) => fn.overwrite === false);
    let overwtite_files = fileNames.value.filter((fn) => fn.overwrite === true);

    new_files.forEach((fn) => {  
      data.append(fn.name, new File([fn.data], encodeURI(fn.name), {type: 'text/csv'}));
    });

    overwtite_files.forEach((fn) => {
      let temp_url = url + "Data_" + fn.name;
      let header = { "Content-Type": "text/csv" };
      sendRequest(temp_url, 'PUT', fn.data, header);
    });

    if(Array.from(data.keys()).length > 0) 
      sendRequest(url, 'POST', data)

  } else {
    if(METHOD === "PUT"){
      url = url + "Data_" + fileName.value;
      let header = { "Content-Type": "text/csv" }

      var reader = new FileReader();
      reader.onload = function(evt) {
        if(evt.target.readyState != 2) return;
        if(evt.target.error) {
            throw Error('Error while reading file');
        }
        data = evt.target.result;
        sendRequest(url, METHOD, data, header)
      };

      reader.readAsText(file.value);
    } else {
      data.append(fileName.value, new File([file.value], encodeURI(fileName.value), {type: file.value.type}));
      sendRequest(url, METHOD, data);
    }
  }
}

function sendRequest(url, method, data, header) {
    let request = { method: method, body: data }
    
    if(header) request = { method: METHOD, headers: header, body: data }
    
    fetch(url, request)
    .then((res) => res.json())
    .then((data) => {
      emit('busy', false)
      msg.value = data.message;
      err.value = !data.success;
      if(!err.value) {
        fileInput.value.value = null;
        file.value = null;
        emit('refresh')
        clearAll();
      } else console.log(msg.value)
    });
  }
  
function readExcelData(file_data) {
  let workbook = XLSX.read(file_data);
  let header = null;
  let uniform_sheets = [];

  for (const sheet of workbook.SheetNames) {
      let csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheet], {FS:";", blankrows:false});
      if(!header) {
          header = csv.split('\n')[0]
          uniform_sheets.push({name: sheet, data: csv})
      } else if(header === csv.split('\n')[0]){
          uniform_sheets.push({name: sheet, data: csv})
      }
  }

  if(uniform_sheets.length < 2 )uniform_sheets[0].name = '';

  return uniform_sheets;
}
</script>

<template>
  <div class="upload">
    <h1>Upload Data</h1>
    <p :style="msgStyle">{{msg}}</p>
    <form @submit.prevent="submitFile">
      <label>Organisatorisk enhed</label>
      <v-select :disabled="loading" id="mySelect" v-model="department" :options="departments" label="label"></v-select>
      <!-- <input multiple @change="onFileChanged($event)" ref="fileInput" type="file" accept=".csv" class="file-input"> -->
      <input :disabled="loading" @change="onFileChanged($event)" ref="fileInput" type="file" accept="text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, application/vnd.oasis.opendocument.spreadsheet, application/vnd.ms-excel.sheet.binary.macroenabled.12, application/vnd.ms-excel.sheet.macroEnabled.12" class="file-input">
      <label>Kilde gruppe</label>
      <input :disabled="!file" v-model="group" placeholder="gruppe" type="text">
      <label v-if="!excelData">Kilde navn</label>
      <input v-if="!excelData" :disabled="!file" v-model="name" placeholder="navn" type="text">
      <div v-for="(item, index) in excelData" :key="index">
        <label>Kilde navn Ark {{index + 1 }}</label>
        <div style="display: flex; align-items: center; flex-direction: row;">
          <input :disabled="!file" v-model="item.name" placeholder="navn" type="text">
          <button :disabled="loading" type="button" @click="removeSheet(index)" class="remove-button red">Fjern</button>
        </div>
      </div>
      <label v-if="fileName || fileNames">Genereret filnavn(e)</label>
      <span v-if="metaName">{{metaName}}</span>
      <span v-if="fileName">Data_{{fileName}}</span>
      <div v-if="excelData">
        <div v-for="fn in fileNames" :key="fn">
          <span>Data_{{fn.name}}</span>
        </div>
      </div>
      <div v-if="file_already_exists && !excelData" style="display: flex; align-items: center; flex-direction: row;">
        <label for="overwrite" >Filen <i>{{fileName}}</i> findes allerede, skal dn overskrives? </label>
        <input type="checkbox" name="overwirte" v-model="overwrite"/>
      </div>
      <div v-if="excelData">
        <div v-for="fn in fileNames" :key="fn">
          <div v-if="fn.already_exists" style="display: flex; align-items: center; flex-direction: row;">
            <label for="overwrite" >Filen <i>{{fn.name}}</i> findes allerede, skal den overskrives? </label>
            <input type="checkbox" name="overwirte" v-model="fn.overwrite"/>
          </div>
        </div>
      </div>
      <span v-if="nameError" class="error">Kilde gruppe må ikke indeholde '_'</span>
      <span v-if="duplicateError" class="error">To eller flere af filerne har samme navn</span>
      <div style="display: flex; align-items: center; flex-direction: row;">
        <input :disabled="!file || !department || !group || duplicateError || loading || nameError || (file_already_exists && !overwrite)" type="submit" value="Upload" class="submit-button green">
        <button :disabled="loading" type="button" @click="clearAll()" class="remove-button red" style="margin-left: auto; margin-top: 10px;">Ryd</button>
      </div>
      <div style="display: flex; align-items: center; flex-direction: row;">
        <ClipLoader :loading="loading" :color="color" :size="size" class="loader"/>
        <span v-if="!err && msg && !loading" class="success">&#10004;</span>
        <span v-if="err && msg && !loading" class="fail">&#10008;</span>
      </div>
    </form>
  </div>
</template>

<style scoped>
@media (min-width: 512px) {
  .upload {
    display: flex;
    align-items: top;
    flex-direction: column;
    min-height: 400px;
    min-width: 350px;
  }
}

form {
  width: 100%;
}

label {
  color: var(--vt-c-blue);
  font-size: 14px;
  font-weight: bold;
}

h3 {
  color: var(--vt-c-blue);
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
}

.file-input {
  width: 100%;
}

input {
  margin-top: 10px;
  margin-bottom: 10px;
}

input[type="text"] {
  border-radius: 0.3em;
  border-style:solid;
  border-width: 1px;
  padding: 8px 8px;
  width: 100%;
  border-color: var(--vs-border-color)
}

input[type="checkbox"] {
  appearance: none;
  margin-left: 18px;
  height: 18px;
  width: 18px;
  border-radius: 0.3em;
  background-clip: content-box;
	padding: 3px;
  place-content: center;
  border: 1px solid var(--vs-border-color);
}

input[type="checkbox"]:checked {
  background-color: var(--vt-c-blue);
  border: 1px solid var(--vt-c-black);
}

input[type="file"]::file-selector-button {
  width: 100px;
  border-radius: 4px;
  padding: 0 16px;
  height: 35px;
  cursor: pointer;
  background-color:var(--vt-c-blue);
  color: var(--vt-c-white);
  border: 1px solid rgba(0, 0, 0, 0.16);
  margin-right: 16px;
}

input[type="file"]::file-selector-button:hover {
  background-color: var(--vt-c-blue-soft);
}

input[type="file"][disabled]::file-selector-button {
  border: none;
  background-color:var(--vt-c-grey);
  cursor: not-allowed;
}

.submit-button {
  width: 100px;
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: var(--vt-c-blue);
  color: var(--vt-c-white);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: var(--vt-c-green-soft);
}

.submit-button:disabled {
  background-color:var(--vt-c-grey);
  cursor: not-allowed;
}

.remove-button {
  width: 100px;
  display: block;
  margin-left: 10px;
  padding: 10px 20px;
  background-color: var(--vt-c-blue);
  color: var(--vt-c-white);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: var(--vt-c-red-soft);
}

.remove-button:disabled {
  background-color:var(--vt-c-grey);
  cursor: not-allowed;
}

.loader {
  padding: 23px 0 0 20px;
}

.success {
  position: relative;
  top: 7px;
  left: 7px;
  font-size: 30px;
  color: var(--vt-c-green);
}

.fail {
  position: relative;
  top: 7px;
  left: 7px;
  font-size: 30px;
  color: var(--vt-c-red);
}

.green {
  background-color:var(--vt-c-green);
}

.red {
  background-color:var(--vt-c-red);
}

.error {
  color: var(--vt-c-red);
  font-size: 15px;
  font-weight: 700;
}
</style>
