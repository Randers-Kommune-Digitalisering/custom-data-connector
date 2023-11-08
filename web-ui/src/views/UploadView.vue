<script setup>
import UploadFile from '../components/UploadFile.vue'
import UploadJson from '../components/UploadJson.vue'
import { useRoute} from "vue-router";
const route = useRoute();
const props = defineProps(['name']);
let stripedName = null;
if(props.name) stripedName = props.name.split('.')[0].slice(5);
</script>

<template>
  <main>
    <div class="container">
      <UploadFile :name=props.name :method=route.params.method />
      <UploadJson :name=stripedName :method=route.params.method />
    </div>
  </main>
</template>


<style scoped>
@media (min-width: 1024px) {
  .container {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
}
</style>