<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

const router = useRouter();
const error = ref(false);
const msg = ref(null);
const msgStyle = ref({color: 'green'});
const textInput = ref(null);
const busy = ref(false);
const name = ref(null);
const editing = ref(false)

const files = ref(null);;

const URL = "/in/"

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
  loading.value = true;
  editing.value = false;
  fetch(URL, { method: "GET" }) //+ "Meta_myname.csv" 
  .then((res) => res.json())
  .then((data) => {
    error.value = !data.success;
    if(!error.value){
      files.value = data.files.imported.map(file => ({"name": file, "loading": false})).sort((a, b) => a.name.slice(5).localeCompare(b.name.slice(5)));
    } else {
      msg.value = data.message;
    }
    //msg.value = data.message;
    loading.value = false;
    busy.value = false;
  });
}

function downloadFile(file) {
  const a = document.createElement('a') 
  a.setAttribute('href', URL + file.name) 
  a.setAttribute('download', file.name); 
  a.click()
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

function saveFile() {
  const url  = URL + name.value;
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
  fetch(URL + file.name, { method: "DELETE" })
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
    <button :disabled="busy" @click="getFiles()" class="button update">Opdater</button>
    <ClipLoader :loading="loading" :color="color" :size="size" class="loader"/>
    <div v-if="!loading" style="display: flex; flex-direction: row;">
      <div style="display: flex; flex-direction: column;">
        <table>
          <h1>Indlæst</h1>
          <tr v-for="file in files" :key="file">
              <th>{{file.name}}</th>
              <th><button :disabled="busy" @click="downloadFile(file)" class="button green">Download</button></th>
              <!-- <th><button :disabled="busy" @click="editFile(file)" class="button">Rediger</button></th> -->
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
              <button @click="saveFile()" class="button save green">Gem</button>
              <button @click="hideEditor()" class="button save red">Annuller</button>
              </div>
          </div>
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
</style>
