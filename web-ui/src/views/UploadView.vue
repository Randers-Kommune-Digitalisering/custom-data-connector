<script setup>
import { ref } from 'vue';
import Data from '../components/UploadSingle.vue'
import Aut from '../components/UploadAut.vue'

const props = defineProps(['roles'])

const existing_files = ref([]);
const data_files = ref([]);

const loading = ref(false)
const err = ref(false);
const msg = ref(null);
let URL = "/in/"

function getFiles() {
  loading.value = true;
  fetch(URL, { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    err.value = !data.success;
    if(!err.value){
      existing_files.value = data.files.waiting.concat(data.files.imported);
      data_files.value = existing_files.value.filter((file) => file.slice(0,5) === 'Data_')
    } else {
      msg.value = data.message;
    }
    loading.value = false;
  });
}

getFiles();
</script>

<template>
  <main>
    <div class="container">
      <Data @busy="(busy) => loading=busy" @refresh="getFiles" v-bind:loading="loading" v-bind:existing_files="existing_files" :roles="props.roles"/>
      <Aut @busy="(busy) => loading=busy" @refresh="getFiles" v-bind:loading="loading" v-bind:data_files="data_files"/>
    </div>
  </main>
</template>


<style scope>
@media (min-width: 1024px) {
  .container {
    display: flex;
    gap: 40px;
    align-items: top;
    flex-direction: row;
  }
}

span {
  display: flex;
}

input {
  display: flex;
}
</style>