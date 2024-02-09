<script setup>

import { ref, watch } from 'vue';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import * as XLSX from 'xlsx';

const props = defineProps(['method', 'name'])
const err = ref(false);
const msg = ref(null);
const msgStyle = ref({color: 'green'});
const file = ref(null);
const fileInput = ref(null);

const emit = defineEmits(['upload', 'busy'])

//Loader
const loading = ref(false)
const color = "#325d88"
const size = "30px"

let URL = "/in/"
const allowedFileExtensions = ['.csv', '.xlsx', '.xlsb','.xlsm','.xls','.ods']

watch(err, function(err) {
  if(err) msgStyle.value = {color: 'red'};
  else msgStyle.value = {color: 'green'};
});

function onFileChanged($event) {
  if ($event.target.files) {
    const file_extension = $event.target.files[0].name.substring($event.target.files[0].name.lastIndexOf('.'));
    if(!allowedFileExtensions.includes(file_extension)) throw Error('Unknown file type')
    else file.value = $event.target.files[0];
      
  }
}

function submitFile() {
  loading.value = true;
  emit('busy', true);
  var data = null;
  var url = URL;

  if(props.name) {
    if(props.name.slice(0,4) === "Aut_") url = url + "aut/"
    url  = url + props.name;
    let header = { "Content-Type": "text/csv" }
    var reader = new FileReader();


    if(file.value.type !== 'text/csv') {
      reader.onload = function(evt) {
        if(evt.target.readyState != 2) return;
        if(evt.target.error) {
            throw Error('Error while reading file');
        }
        data = readExcelData(evt.target.result);
        sendRequest(header)
        };
      reader.readAsArrayBuffer(file.value);
    } else {
      reader.onload = function(evt) {
        if(evt.target.readyState != 2) return;
        if(evt.target.error) {
            throw Error('Error while reading file');
        }
        data = evt.target.result;
        sendRequest(header)
      };

      reader.readAsText(file.value);
    }

  } else throw Error('No file name')

  function sendRequest(header) {
    let request = { method: props.method, body: data }
    
    if(header) request = { method: props.method, headers: header, body: data }
    
    fetch(encodeURI(url), request)
    .then((res) => res.json())
    .then((data) => {
      loading.value = false;
      msg.value = data.message;
      err.value = !data.success;
      emit('upload', err.value);
      emit('busy', false);
      if(err.value) console.log(msg.value)
      fileInput.value.value = null;
      file.value = null;
    });
  }
}

function readExcelData(file_data) {
  let workbook = XLSX.read(file_data);
  return XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]], {FS:";", blankrows:false});;
}
</script>

<template>
  <div class="upload">
    <!-- <p :style="msgStyle">{{msg}}</p> -->
    <form v-on:submit.prevent="submitFile">
      <input :disabled="loading" v-if="!props.name" multiple @change="onFileChanged($event)" ref="fileInput" type="file" accept=".csv" class="file-input">
      <input :disabled="loading" v-if="props.name" @change="onFileChanged($event)" ref="fileInput" type="file" accept="text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, application/vnd.oasis.opendocument.spreadsheet, application/vnd.ms-excel.sheet.binary.macroenabled.12, application/vnd.ms-excel.sheet.macroEnabled.12" class="file-input">
      <div style="display: flex; align-items: center; flex-direction: row;">
        <input :disabled="!file || loading" type="submit" value="Upload" class="submit-button green">
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
    min-width: 400px;
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
  background-color: var(--vt-c-blue-soft);
}

.submit-button:disabled {
  background-color:var(--vt-c-grey);
  cursor: not-allowed;
}

.loader {
  padding: 23px 0 0 20px;
}

.success {
  position: relative;
  top: 9px;
  left: 9px;
  font-size: 30px;
  color: var(--vt-c-green);
}

.fail {
  position: relative;
  top: 9px;
  left: 9px;
  font-size: 30px;
  color: var(--vt-c-red);
}

.green {
  background-color:var(--vt-c-green);
}
</style>
