<script setup>

import { ref, watch } from 'vue';

const props = defineProps(['method', 'name'])
const err = ref(false);
const msg = ref(null);
const msgStyle = ref({color: 'green'});
const files = ref(null);
const fileInput = ref(null);

watch(err, function(err) {
  if(err) msgStyle.value = {color: 'red'};
  else if(err) msgStyle.value = {color: 'green'};
});

function onFileChanged($event) {
    if ($event.target.files) {
        files.value = $event.target.files;
    }
}

function submitFile() {
  var url = "/universe";
  var data = null;

  if(props.name) {
    url  = "/universe/" + props.name;
    let header = { "Content-Type": "text/csv" }

    var reader = new FileReader();
    reader.onload = function(evt) {
      if(evt.target.readyState != 2) return;
      if(evt.target.error) {
          throw Error('Error while reading file');
          return;
      }
      data = evt.target.result;
      sendRequest(header)
    };

    reader.readAsText(files.value[0]);

  } else {
    data = new FormData()

    for(let i=0; i<files.value.length; i++){
      data.append('file', files.value[i])
    }

    sendRequest()
  }
 
  function sendRequest(header) {
    let request = { method: props.method, body: data }
    if(header) request = { method: props.method, headers: header, body: data }
    
    fetch(url, request)
    .then((res) => res.json())
    .then((data) => {
      msg.value = data.message;
      err.value = !data.success;
      fileInput.value.value = null;
    });
  }
}
</script>

<template>
  <div class="upload">
    <p :style="msgStyle">{{msg}}</p>
    <h1 v-if="!props.name">Upload CSV filer</h1>
    <h1 v-if="props.name">Upload CSV fil</h1>
    <form v-on:submit.prevent="submitFile">
      <input v-if="!props.name" multiple @change="onFileChanged($event)" ref="fileInput" type="file" accept=".csv" class="file-input">
      <input v-if="props.name" @change="onFileChanged($event)" ref="fileInput" type="file" accept=".csv" class="file-input">
      <input :disabled="!files" type="submit" value="Upload" class="submit-button green">
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

.green {
  background-color:var(--vt-c-green);
}
</style>
