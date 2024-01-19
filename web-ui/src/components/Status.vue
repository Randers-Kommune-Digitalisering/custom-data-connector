<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import UploadFile from '../components/UploadFile.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

const router = useRouter();
const error = ref(false);
const msg = ref(null);
const msgStyle = ref({color: 'green'});
const textInput = ref(null);
const busy = ref(false);
const fileBusy = ref(false);
const name = ref(null);
const editing = ref(false)

const files_waiting = ref(null);
const files_failed = ref(null);

const URL = "/in/"

//Loader
const loading = ref(false)
const loadingEditor = ref(false)
const color = "#325d88"
const size = "150px"
const sizeSmall = "18px"

getFiles();

watch(error, function(err) {
  if(error) msgStyle.value = {color: 'red'};
  else msgStyle.value = {color: 'green'};
});

watch(fileBusy, function() {
  if(fileBusy) busy.value = true;
});

function getFiles() {
  busy.value = true;
  loading.value = true;
  editing.value = false;
  fetch(URL, { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    error.value = !data.success;
    if(!error.value){
      files_waiting.value = data.files.waiting.map(file => ({"name": file, "loading": false})).sort((a, b) => a.name.slice(5).localeCompare(b.name.slice(5)));
      files_failed.value = data.files.failed.map(file => ({"name": file, "loading": false})).sort((a, b) => a.name.slice(5).localeCompare(b.name.slice(5)));
    } else {
      msg.value = data.message;
    }
    loading.value = false;
    busy.value = false;
  });
}

function downloadFile(file) {
  const a = document.createElement('a') 
  a.setAttribute('href', URL + file.name) 
  a.setAttribute('download', file.name); 
  a.click();
}

function editFile(file){
  busy.value = true;
  file.loading =true;
  name.value = file.name;
  
  fetch(URL + file.name, { method: "GET" })
  .then((res) => {
    const contentType = res.headers.get("Content-Type");
    if(contentType.includes("application/json")){
      res.json().then((data) => {
        error.value = !data.success;
        msg.value = data.message;
        file.loading = false;
        busy.value = false;
      });
    } else if(contentType.includes("text/csv")){
        res.text()
        .then((data) => {
          textInput.value = data;
          file.loading = false;
          busy.value = false;
          editing.value = true;
        });      
    } else throw Error("Unknown response!")
  });
}

function updateFile(err) {
  if(!err) editFile({"name": name.value})
}

function saveFile() {
    loadingEditor.value = true
    let url = URL
    if(name.value.slice(0,4) === "Aut_") url = url + "aut/"
    url = url + name.value;
    const header = { "Content-Type": "text/csv" };
    const request = { method: "PUT", headers: header, body: textInput.value };
    
    fetch(url, request)
    .then((res) => res.json())
    .then((data) => {
        
        msg.value = data.message;
        error.value = !data.success;
        if(error.value) console.log(msg.value)
        loadingEditor.value = false
        //hideEditor();
    });
}

function hideEditor(){
   editing.value = false;
}

function deleteFile(file) {
  if(file.name === name.value) hideEditor()
  busy.value = true;
  file.loading = true
  fetch(URL + file.name, { method: "DELETE" })
  .then((res) => res.json())
  .then((data) => {
    let err = !data.success;
    if(!err) {
      const index = files_failed.value.indexOf(file);
      files_failed.value.splice(index,1);
    }
    msg.value = data.message;
    error.value = err;
    file.loading = false;
    busy.value = false;
  });
}
</script>

<template>
  <div class="download">
    <h2 :style="msgStyle">{{msg}}</h2>
    <button :disabled="busy" @click="getFiles()" class="button update">Opdater</button>
    <ClipLoader :loading="loading" :color="color" :size="size" class="loader"/>
    <div v-if="!loading" style="display: flex; flex-direction: row;">
      <div style="display: flex; flex-direction: column;">
        <table>
          <h1>Fejlet</h1>
          <tr v-for="file in files_failed" :key="file">
              <th>{{file.name}}</th>
              <th><button :disabled="busy" @click="downloadFile(file)" class="button green">Download</button></th>
              <th><button :disabled="busy" @click="deleteFile(file)" class="button red">Slet</button></th>
              <th><div class="loaderSmallContainer"><ClipLoader :loading="file.loading" :color="color" :size="sizeSmall" class="loaderSmall"/></div></th>
          </tr>
        </table>
        <table>
          <h1>Venter</h1>
          <tr v-for="file in files_waiting" :key="file">
              <th>{{file.name}}</th>
              <th><button :disabled="busy" @click="downloadFile(file)" class="button green">Download</button></th>
              <th><button :disabled="busy || file.name.slice(0,4) === 'Data'" @click="editFile(file)" class="button">Rediger</button></th>
              <!-- <th><button :disabled="busy" @click="deleteFile(file)" class="button red">Slet</button></th> -->
              <th><div class="loaderSmallContainer"><ClipLoader :loading="file.loading" :color="color" :size="sizeSmall" class="loaderSmall"/></div></th>
          </tr>
        </table>
      </div>
      <div v-show="editing" style="display: flex; align-items: left; flex-direction: column;">
        <h3>{{name}}</h3>
        <div style="display: flex; align-items: center; flex-direction: row;">
          <div style="display: flex; align-items: top; flex-direction: column;">
              <textarea v-model="textInput" class="text"/>
              <div style="display: flex; align-items: center; flex-direction: row;">
                <button :disabled="loading || busy" @click="saveFile()" class="button save green">Gem</button>
                <button @click="hideEditor()" class="button save red">Annuller</button>
                <ClipLoader :loading="loadingEditor" :color="color" :size="sizeSmall" class="loaderEditor"/>
                <span v-if="!error && msg && !loading" class="success">&#10004;</span>
                <span v-if="error && msg && !loading" class="fail">&#10008;</span>
              </div>
          </div>
          <UploadFile @upload="updateFile" @busy="(busy) => fileBusy=busy" :name=name method="PUT" style="margin-top: 50px; margin-left:30px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .download {
    display: flex;
    align-items: top;
    flex-direction: column;
    min-height: 500px;
    min-width: 500px;
  }
}

.button {
  display: block;
  padding: 10px 10px;
  background-color: var(--vt-c-blue);
  color: var(--vt-c-white);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: var(--vt-c-blue-soft);
}

.button:disabled {
  background-color:var(--vt-c-grey);
  cursor: not-allowed;
}

.update{
  max-width: 150px;
}

.loader {
  margin-top: 100px;
}

.loaderSmall {
  display: block;
  margin-top: 4px;
}

.text {
  resize: both;
  min-width: 300px;
  max-width: 100%;
  min-height: 300px;
  max-height: 82%;
}

h1 {
  text-decoration: underline;
}

h3 {
  color: var(--vt-c-blue);
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
}

table {
  margin-top: 22px;
  text-align: left;
  border-collapse: collapse;
}

.header {
  text-decoration: underline;
  font-weight: bold;
}

th {
  margin-top: 8px;
  font-size: 16px;
  padding: 5px 5px;
  padding-right: 18px;
}

.loaderSmallContainer {
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
}

.red {
  background-color:var(--vt-c-red);
}

.red:hover {
  background-color: var(--vt-c-red-soft);
}


.green {
  background-color:var(--vt-c-green);
}

.green:hover {
  background-color: var(--vt-c-green-soft);
}

.save {
  margin-left: 10px;
  margin-top: 10px;
}

.loaderEditor {
  padding: 18px 0 0 20px;
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
</style>
