<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

const router = useRouter();
const error = ref(false);
const msg = ref(null);
const msgStyle = ref({color: 'green'});
const files = ref(null);
const textInput = ref(null);
const busy = ref(false);
const name = ref(null);
const editing = ref(false)

//Loader
const loading = ref(false)
const color = "#325d88"
const size = "150px"
const sizeSmall = "18px"

getFiles();

watch(error, function(err) {
  if(error) msgStyle.value = {color: 'red'};
  else msgStyle.value = {color: 'green'};
});

function getFiles() {
  busy.value = true;
  files.value = null;
  loading.value = true;
  fetch("/in", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    let err = !data.success;
    if(!err) files.value = data.files.waiting.map(file => ({"name": file, "loading": false})).sort((a, b) => a.name.slice(5).localeCompare(b.name.slice(5)))
    msg.value = data.message;
    error.value = err;
    loading.value = false;
    busy.value = false;
  });
}

function downloadFile(file) {
  busy.value = true;
  file.loading =true;
  
  fetch("/waiting/" + file.name, { method: "GET" })
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
          const blob = new Blob([data], { type: 'text/csv' }); 
          const url = window.URL.createObjectURL(blob) 
          const a = document.createElement('a') 
          a.setAttribute('href', url) 
          a.setAttribute('download', file.name); 
          a.click()
          file.loading = false;
          busy.value = false;
          msg.value = file.name + " downloaded";
        });      
    } else throw Error("Unknown response!")
  });
}

function editFile(file){
  busy.value = true;
  file.loading =true;
  name.value = file.name;
  
  fetch("/waiting/" + file.name, { method: "GET" })
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

function saveFile() {
  const url  = "/waiting/" + name.value;
  const header = { "Content-Type": "text/csv" };
  const request = { method: "PUT", headers: header, body: textInput.value };
  
  fetch(url, request)
  .then((res) => res.json())
  .then((data) => {
    msg.value = data.message;
    error.value = !data.success;
    hideEditor();
  });
}

function hideEditor(){
   editing.value = false;
}

function overwriteFile(file) {
  router.push({ name: 'upload', query: { name: file.name }, params: {method: 'PUT'}})
}

function deleteFile(file) {
  if(file.name === name.value) hideEditor()
  busy.value = true;
  file.loading = true
  fetch("/waiting/" + file.name, { method: "DELETE" })
  .then((res) => res.json())
  .then((data) => {
    let err = !data.success;
    if(!err) {
      const index = files.value.indexOf(file);
      files.value.splice(index,1);
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
    <h1>Download CSV filer</h1>
    <button :disabled="busy" @click="getFiles()" class="button update">Opdater</button>
    <ClipLoader :loading="loading" :color="color" :size="size" class="loader"/>
    <div style="display: flex; flex-direction: row;">
      <table>
        <tr v-for="file in files" :key="file">
            <th>{{file.name}}</th>
            <th><button :disabled="busy" @click="downloadFile(file)" class="button green">Download</button></th>
            <th><button :disabled="busy" @click="editFile(file)" class="button">Rediger</button></th>
            <th><button :disabled="busy" @click="overwriteFile(file)" class="button">Overskriv</button></th>
            <th><button :disabled="busy" @click="deleteFile(file)" class="button red">Slet</button></th>
            <th><div class="loaderSmallContainer"><ClipLoader :loading="file.loading" :color="color" :size="sizeSmall" class="loaderSmall"/></div></th>
        </tr>
      </table>
      <div v-show="editing" style="display: flex; align-items: center; flex-direction: column;">
        <textarea v-model="textInput" class="text"/>
        <div style="display: flex; align-items: center; flex-direction: row;">
          <button @click="saveFile()" class="button save green">Gem</button>
          <button @click="hideEditor()" class="button save red">Annuller</button>
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
  margin-top: 30px;
  resize: both;
  min-width: 300px;
  max-width: 100%;
  min-height: 300px;
  max-height: 82%;
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
  font-size: 18px;
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

.green {
  background-color:var(--vt-c-green);
}

.save {
  margin-left: 10px;
  margin-top: 10px;
}
</style>
