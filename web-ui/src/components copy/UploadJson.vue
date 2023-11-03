<script setup>

import { ref, watch } from 'vue';

const fileSelected = ref(false);
const jsonText = ref('{"name":"myname", "data":[{"myColNum": 1, "myColText":"mytext1"},{"myColNum": 2, "myColText":"mytext2"}]}');
const err = ref(false);
const msg = ref(null);
const msgStyle = ref({color: 'green'});
makePretty()


watch(err, function(err) {
  if(err) msgStyle.value = {color: 'red'};
  else if(err) msgStyle.value = {color: 'green'};
});


function onFileChanged($event) {
  fileSelected.value = $event.target.files.length < 1 ? false : true;

}

function makePretty() {
  try {
    var obj = JSON.parse(jsonText.value);
    var pretty = JSON.stringify(obj, undefined, 4);
    jsonText.value = pretty;
  } catch (e) {
    if (e instanceof SyntaxError) {
      msg.value = "Syntax Error";
      err.value = true;
    }
  }
}

async function submitJson() {
  const response = await fetch(import.meta.env.VITE_API_URL + "/universe", { method: "POST", headers: { "Content-Type": "application/json" }, body: jsonText.value });
  const res = await response.json();
  msg.value = res.message;
  err.value = !res.success;
}

function chooseFiles() {
  document.getElementById("fileUpload").click()
}

</script>

<template>
<div class="upload">
  <h2 :style="msgStyle">{{msg}}</h2>
  <h1>Upload JSON</h1>
  <textarea v-model="jsonText" @change="makePretty($event)" id="jsonText" cols=50 rows=15 class="json-input"></textarea>
  <button class="submit-button" @click="submitJson()">Upload</button>
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

.container {
  display: flex;
  align-items: top;
  flex-direction: row;
}

form {
  min-width: 400px;
  margin-bottom: 30px;
}

.form-group {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
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
