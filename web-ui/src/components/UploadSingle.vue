<script setup>

import { ref, watch } from 'vue';
import vSelect from 'vue-select';
import "vue-select/dist/vue-select.css";
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import axios from 'axios';

const err = ref(false);
const msg = ref(null);
const msgStyle = ref({color: 'green'});
const file = ref(null);
const fileInput = ref(null);
const department = ref(null);
const group = ref(null);
const name = ref(null);
const fileName = ref(null);

//Loader
const loading = ref(false)
const color = "#325d88"
const size = "30px"

let URL = "/data/"

const departments = [
  { value: '', label: 'Ingen afdeling' },  
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

  if(name.value && group.value && department.value && file.value) fileName.value = [[department.value.value + group.value, name.value].join('_'), file.value.name.split('.').pop()].join('.');
});

function onFileChanged($event) {
  if($event.target.files.length > 0) {
    file.value = $event.target.files[0];

    if(file.value) {
      let fn = file.value.name.substring(0, file.value.name.lastIndexOf('.')) || file.value.name;
      let dep = departments.find(o => o.value === fn.slice(0,2));
      
      if(dep) {
        department.value = dep;
        fn = fn.slice(2);
      }

      if(fn.split('_').length > 1) {
        group.value = fn.split('_')[0]
        name.value = fn.split('_').slice(1).join('_')
      } else name.value = fn.split('_')[0]
    } 
  } else {
    group. value = null;
    name.value = null;
  }
}

async function makePostRequest(url, data, timeoutMillis) {
      try {
        const response = await axios.post(url, data, {
          timeout: timeoutMillis,
          headers: {
            "Content-Type": "multipart/form-data",
            // Add any other headers as needed
          },
        });

        // Process responseData as needed
        return response.data;
      } catch (error) {
        // Handle errors, e.g., timeout or network issues
        console.error('Error making POST request:', error.message);
      }
    }

function submitFile() {
  loading.value = true;
  let data = new FormData();

  /*
  for(let i=0; i<files.value.length; i++){
    data.append('file', files.value[i])
  }
  */
  
  data.append(fileName.value, new File([file.value], fileName.value, {type: file.value.type}));
  //makePostRequest(URL, data, 360000).then((res) => console.log(res))
  
  let request = { method: 'POST', body: data };
  fetch(URL, request)
  .then((res) => res.json())
  .then((data) => {
    loading.value = false;
    msg.value = data.message;
    err.value = !data.success;
    if(!err.value) {
      fileInput.value.value = null;
      file.value = null;
    } else console.log(msg.value)
  });
  
}
</script>

<template>
  <div class="upload">
    <!-- <p :style="msgStyle">{{msg}}</p> -->
    <form v-on:submit.prevent="submitFile">
      <label>Afdeling</label>
      <v-select id="mySelect" v-model="department" :options="departments" label="label"></v-select>
      <!-- <input multiple @change="onFileChanged($event)" ref="fileInput" type="file" accept=".csv" class="file-input"> -->
      <input @change="onFileChanged($event)" ref="fileInput" type="file" accept=".csv" class="file-input">
      <label>Kildegruppe</label>
      <input :disabled="!file" v-model="group" placeholder="gruppe" type="text">
      <label>Kildenavn</label>
      <input :disabled="!file" v-model="name" placeholder="navn" type="text">
      <label v-if="fileName">Genereret filnavn</label>
      <span>{{fileName}}</span>
      <div style="display: flex; align-items: center; flex-direction: row;">
        <input :disabled="!file || !department || !group || !name || loading" type="submit" value="Upload" class="submit-button green">
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
    min-width: 300px;
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
