<script setup>

import { ref, watch } from 'vue';
const err = ref(false);
const msg = ref(null);
const msgStyle = ref({color: 'green'});
const files = ref(null);

watch(err, function(err) {
  if(err) msgStyle.value = {color: 'red'};
  else if(err) msgStyle.value = {color: 'green'};
});

function onFileChanged($event) {
    if ($event.target.files) {
        files.value = $event.target.files;
    }
}

async function submitFile() {
  let formData = new FormData()

  for(let i=0; i<files.value.length; i++){
    formData.append('file', files.value[i])
  }

  const response = await fetch(import.meta.env.VITE_API_URL + "/universe", { method: "POST", body: formData });
  const res = await response.json();
  msg.value = res.msg;
  err.value = !res.success;
  files.value = null;
}
</script>

<template>
  <div class="upload">
    <h2>{{msg}}</h2>
    <h1>Upload CSV filer</h1>
    <form v-on:submit.prevent="submitFile">
      <input id="fileUpload" multiple @change="onFileChanged($event)" ref="fileInput" type="file" accept=".csv" class="file-input">
      <input :disabled="!files" type="submit" value="Upload" class="submit-button">
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
</style>
