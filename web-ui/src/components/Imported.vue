<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import UploadFile from '../components/UploadFile.vue'

const props = defineProps(['roles']);

const router = useRouter();
const error = ref(false);
const msg = ref(null);
const msgStyle = ref({color: 'green'});
const textInput = ref(null);
const busy = ref(false);
const fileBusy = ref(false);
const name = ref(null);
const editing = ref(false)

const files = ref(null);

const URL = "/in/";

//Loader
const loading = ref(false)
const loadingEditor = ref(false)
const color = "#325d88"
const size = "150px"
const sizeSmall = "18px"

let all_files = ref([]);

let types_temp = ['Aut', 'Data', 'Meta'].map((str) => ({selected: true, name: str}));
let roles_temp = ['BS', 'SA', 'SKO', 'UMT', 'HR', 'ØK', 'IT'].map((str) => ({selected: true, name: str}));

if(!props.roles.includes('admin')){
  roles_temp = roles_temp.filter((role) => props.roles.includes(role.name));
}

const types = ref(types_temp)
const roles = ref(roles_temp)
const searchValue = ref('')

getFiles();

watch(error, function(err) {
  if(err) msgStyle.value = {color: 'red'};
  else msgStyle.value = {color: 'green'};
});

watch(fileBusy, function() {
  if(fileBusy) busy.value = true;
});

watch([all_files, roles, types, searchValue], function() {
    let temp_files_roles = []
    
    roles.value.forEach((role) => {
      if(role.selected) temp_files_roles = temp_files_roles.concat(all_files.value.filter((file) => file.name.split('_')[1].slice(0,role.name.length) === role.name))
    })

    let temp_files = []
    types.value.forEach((type) => {
      if(type.selected) temp_files = temp_files.concat(temp_files_roles.filter((file) => file.name.slice(0,type.name.length) === type.name))
    })


    if (searchValue.value != '' && searchValue.value) {
        temp_files = temp_files.filter((file) => {
          return file.name
            .toUpperCase()
            .includes(searchValue.value.toUpperCase())
        })
      }

    files.value = temp_files;
  },
  {deep: true}
);

function getFiles() {
  busy.value = true;
  loading.value = true;
  editing.value = false;
  fetch(URL, { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    error.value = !data.success;
    if(!error.value){
      all_files.value = data.files.imported.filter(file => !data.files.deleting.includes(file)).map(file => ({"name": file, "loading": false})).sort((a, b) => a.name.slice(5).localeCompare(b.name.slice(5)));
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
  loadingEditor.value = true;
  let url = URL
  if(name.value.slice(0,3) === "Aut") url = url + 'aut/'
  url  = url + name.value;
  const header = { "Content-Type": "text/csv" };
  const request = { method: "PUT", headers: header, body: textInput.value };
  
  fetch(url, request)
  .then((res) => res.json())
  .then((data) => {
    msg.value = data.message;
    error.value = !data.success;
    hideEditor();
    loadingEditor.value = false;
  });
}

function updateFile(err) {
  if(!err) editFile({"name": name.value})
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
      getFiles();
    }
    msg.value = data.message;
    error.value = err;
    file.loading = false;
    busy.value = false;
  });
}

function select(obj) {
  obj.selected = !obj.selected;
}

</script>

<template>
  <div class="download">
    <h2 :style="msgStyle">{{msg}}</h2>
    <button :disabled="busy" @click="getFiles()" class="button update">Opdater</button>
    <ClipLoader :loading="loading" :color="color" :size="size" class="loader"/>
    <div v-if="!loading" style="display: flex; flex-direction: row;">
      <div style="display: flex; flex-direction: column;">
        <input type="text" v-model="searchValue" placeholder="Søg" class="search">
        <span v-if="roles.length > 1" class="filter-label">Org. Enheder</span>
        <ul v-if="roles.length > 1" class="select-buttons">
          <li v-for="role, in roles">
            <label>
              <input type="checkbox" :checked="role.selected" @click="select(role)">
              <span>{{role.name}}</span>
            </label>
          </li>
        </ul>
        <span class="filter-label">Typer</span>
        <ul class="select-buttons">
          <li v-for="type in types">
            <label>
              <input type="checkbox" :checked="type.selected" @click="select(type)">
              <span>{{type.name}}</span>
            </label>
          </li>
        </ul>
        <table>
          <h1>Indlæst</h1>
          <tr v-for="file in files" :key="file">
              <th>{{file.name}}</th>
              <th><button :disabled="busy" @click="downloadFile(file)" class="button green">Download</button></th>
              <th><button :disabled="busy || file.name.slice(0,4) === 'Data'" @click="editFile(file)" class="button">Rediger</button></th>
              <th><button :disabled="busy" @click="deleteFile(file)" class="button red">Slet</button></th>
              <th><div class="loaderSmallContainer"><ClipLoader :loading="file.loading" :color="color" :size="sizeSmall" class="loaderSmall"/></div></th>
          </tr>
        </table>
      </div>
      <div v-show="editing" style="display: flex; align-items: left; flex-direction: column; margin-left: 100px;">
        <h3>{{name}}</h3>
        <div style="display: flex; align-items: center; flex-direction: row;">
          <div style="display: flex; align-items: top; flex-direction: column;">
              <textarea v-model="textInput" class="text"/>
              <div style="display: flex; align-items: center; flex-direction: row;">
                <button @click="saveFile()" :disabled="loading || busy" class="button save green">Gem</button>
                <button @click="hideEditor()" class="button save red">Annuller</button>
                <ClipLoader :loading="loadingEditor" :color="color" :size="sizeSmall" class="loaderEditor"/>
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

.filter-label {
  margin-top: 10px;
  font-size: medium;
  font-weight: bold;
}

.search {
  margin-top: 10px;
  font-size: medium;
}

.select-buttons {
  height: 100%;
  list-style: none;
  display: inline-flex;
  margin-bottom: 10px;
}

.select-buttons li {
  margin: 10px 10px 0 0;
}

.select-buttons label {
  float: left; line-height: 3.0em;
  width: 4.0em; height: 2.0em;
}

.select-buttons label span {
  text-align: center;
  display: block;
  border: 1px solid var(--vt-c-blue);
  border-radius: 10px;
}

.select-buttons label input {
  position: absolute;
  display: none;
}

.select-buttons input:checked + span {
    color: var(--vt-c-white);
    background-color: var(--vt-c-blue);
    border-radius: 10px;
    text-shadow: 0 0  6px rgba(0, 0, 0, 0.8);
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

.loaderEditor {
  padding: 18px 0 0 20px;
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
