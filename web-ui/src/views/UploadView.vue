<script setup>
import UploadFile from '../components/UploadFile.vue'
import UploadJson from '../components/UploadJson.vue'
</script>

<template>
  <main>
    <div class="container">
      <UploadFile />
      <UploadJson />
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