<script setup>

import { ref, watch } from 'vue';
import vSelect from 'vue-select';
import "vue-select/dist/vue-select.css";
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

const err = ref(false);
const msg = ref(null);
const msgStyle = ref({color: 'green'});
const file = ref(null);
const fileInput = ref(null);
const department = ref(null);
const group = ref(null);
const name = ref(null);
const fileName = ref(null);
const metaName = ref(null);
const existing_files = ref([]);
const file_already_exists = ref(false);
const overwrite = ref(false);

//Loader
const loading = ref(false);
const color = "#325d88";
const size = "30px";

let URL = "/data/";
let METHOD = "POST";
let STATUS_URL = "/all";

// { value: '', label: 'Ingen afdeling' },  
const departments = [
  { value: 'BS', label: 'Børn og Skole (BS)' },
  { value: 'SA', label: 'Social og Arbejdsmarked (SA)' },
  { value: 'SKO', label: 'Sundhed, Kultur og Omsorg (SKO)' },
  { value: 'UMT', label: 'Udvikling, Miljø og Teknik (UMT)' },
  { value: 'HR', label: 'Personale og HR (HR)' },
  { value: 'ØK', label: 'Økonomi (ØK)' },
  { value: 'IT', label: 'IT og Digitalisering (IT)' },
];

watch([err, name, group, department], function() {
  if(err.value) msgStyle.value = {color: 'red'};
  else msgStyle.value = {color: 'green'};

  if(group.value && department.value && file.value && name.value) fileName.value = [[department.value.value + group.value, name.value].join('_'), file.value.name.split('.').pop()].join('.');
  else if(group.value && department.value && file.value) fileName.value = [[department.value.value + group.value].join('_'), file.value.name.split('.').pop()].join('.');

  if(department.value && file.value && group.value) {
    let meta_name = [["Meta", department.value.value + group.value].join('_'), file.value.name.split('.').pop()].join('.')
    let data_name = "Data_" + fileName.value;
    if(meta_name !== metaName.value) {
      if(existing_files.value.includes(meta_name)) metaName.value = null;
      else metaName.value = meta_name;
    }

    if(existing_files.value.includes(data_name)) file_already_exists.value = true;
    else file_already_exists.value = false;
  }
});

watch([file_already_exists, overwrite], function() {
  if(file_already_exists.value && overwrite.value) METHOD = "PUT";
  else METHOD = "POST";
});

getFiles();

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
}

function getFiles() {
  loading.value = true;
  fetch(STATUS_URL, { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    err.value = !data.success;
    if(!err.value){
      existing_files.value = data.files.waiting.concat(data.files.imported);
    } else {
      msg.value = data.message;
    }
    loading.value = false;
  });
}

function onFileChanged($event) {
  name.value = '';
  group.value = '';
  msg.value = '';

  if($event.target.files.length > 0) {
    file.value = $event.target.files[0];

    if(file.value) {
      let fn = file.value.name.substring(0, file.value.name.lastIndexOf('.')) || file.value.name;
      let dep = departments.find(o => o.value === fn.slice(0,2));
      
      if(dep) {
        department.value = dep;
        //fn = fn.slice(2);
      }

      if(fn.split('_').length > 1) {
        group.value = fn.split('_')[0]
        name.value = fn.split('_').slice(1).join('_')
      } else group.value = fn.split('_')[0]
    } 
  } else {
    group. value = null;
    name.value = null;
  }
}

function submitFile() {
  loading.value = true;
  let data = new FormData();

  let url = URL;
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
      sendRequest(header)
    };

    reader.readAsText(file.value);
  } else {
    data.append(fileName.value, new File([file.value], encodeURI(fileName.value), {type: file.value.type}));
    sendRequest();
  } 

  function sendRequest(header) {
    let request = { method: METHOD, body: data }
    
    if(header) request = { method: METHOD, headers: header, body: data }
    
    fetch(url, request)
    .then((res) => res.json())
    .then((data) => {
      loading.value = false;
      msg.value = data.message;
      err.value = !data.success;
      if(!err.value) {
        fileInput.value.value = null;
        file.value = null;
        getFiles();
      } else console.log(msg.value)
      clearAll();
    });
  }
}
</script>

<template>
  <div class="upload">
    <!-- <p :style="msgStyle">{{msg}}</p> -->
    <form v-on:submit.prevent="submitFile">
      <label>Afdeling</label>
      <v-select :disabled="loading" id="mySelect" v-model="department" :options="departments" label="label"></v-select>
      <!-- <input multiple @change="onFileChanged($event)" ref="fileInput" type="file" accept=".csv" class="file-input"> -->
      <input :disabled="loading" @change="onFileChanged($event)" ref="fileInput" type="file" accept=".csv" class="file-input">
      <label>Kilde gruppe</label>
      <input :disabled="!file" v-model="group" placeholder="gruppe" type="text">
      <label>Kilde navn</label>
      <input :disabled="!file" v-model="name" placeholder="navn" type="text">
      <label v-if="fileName">Genereret filnavn(e)</label>
      <span v-if="fileName">Data_{{fileName}}</span>
      <span v-if="metaName">{{metaName}}</span>
      <div v-if="file_already_exists" style="display: flex; align-items: center; flex-direction: row;">
        <label for="overwrite" >Filen findes allerede, skal dn overskrives?</label>
        <input type="checkbox" name="overwirte" v-model="overwrite"/>
      </div>
      <div style="display: flex; align-items: center; flex-direction: row;">
        <input :disabled="!file || !department || !group || loading || (file_already_exists && !overwrite)" type="submit" value="Upload" class="submit-button green">
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
</style>
