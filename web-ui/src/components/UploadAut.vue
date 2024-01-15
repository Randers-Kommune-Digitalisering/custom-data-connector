<script setup>

import { ref, watch } from 'vue';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import vSelect from 'vue-select';
import "vue-select/dist/vue-select.css";
import * as XLSX from 'xlsx';

const props = defineProps(['data_files', 'loading'])
const emit = defineEmits(['busy'])

const err = ref(false);
const msg = ref(null);
const msgStyle = ref({color: 'green'});
const file = ref(null);
const fileInput = ref(null);
const fileName = ref(null)
const autName = ref(null)
const allowedFileExtensions = ['.csv', '.xlsx', '.xlsb','.xlsm','.xls','.ods']

//Loader
const color = "#325d88"
const size = "30px"

let URL = "/in/aut"

watch(err, function(err) {
  if(err) msgStyle.value = {color: 'red'};
  else msgStyle.value = {color: 'green'};
});

watch(fileName, function(err) {
  if(fileName.value)autName.value = "Aut" + fileName.value.slice(4)
});

function onFileChanged($event) {
  if ($event.target.files) {
      file.value = $event.target.files[0];

      if(file.value) {
        const file_extension = file.value.name.substring(file.value.name.lastIndexOf('.'));

        if(!allowedFileExtensions.includes(file_extension)) throw Error('Unknown file type')

        if(file.value.type !== 'text/csv') {
          emit('busy', true)
          var reader = new FileReader();
          reader.onload = function(e) {
            let data = readExcelData(e.target.result);
            file.value = new File([data], 'temp_file', {type: 'text/csv'})
            emit('busy', false)
          };
          reader.readAsArrayBuffer(file.value);
        }
      }
  }
}


function readExcelData(file_data) {
  let workbook = XLSX.read(file_data);
  return XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]], {FS:";", blankrows:false});
}

function submitFile() {
  emit('busy', true)

  let data = new FormData()
  let new_file = new File([file.value], autName.value, { type: file.value.type });
  data.append('file', new_file)

  let request = { method: 'POST', body: data }
      
  fetch(URL, request)
  .then((res) => res.json())
  .then((data) => {
    emit('busy', false)
    msg.value = data.message;
    err.value = !data.success;
    if(err.value) console.log(msg.value)
    fileInput.value.value = null;
    file.value = null;
  });
}
</script>

<template>
  <div class="upload">
    <h1>Upload Autorisation</h1>
    <!-- <p :style="msgStyle">{{msg}}</p> -->
    <form v-on:submit.prevent="submitFile">
      <label>Datafil</label>
      <v-select :disabled="loading" v-model="fileName" :options="data_files" label="label"></v-select>
      <input :disabled="loading" @change="onFileChanged($event)" ref="fileInput" type="file" accept="text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, application/vnd.oasis.opendocument.spreadsheet, application/vnd.ms-excel.sheet.binary.macroenabled.12, application/vnd.ms-excel.sheet.macroEnabled.12" class="file-input">
      <label v-if="autName">Genereret filnavn</label>
      <span v-if="autName">{{autName}}</span>
      <input :disabled="!file || loading" type="submit" value="Upload" class="submit-button green">
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