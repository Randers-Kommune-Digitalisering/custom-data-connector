<script setup>
import Upload from '../components/UploadSingle.vue'
</script>

<template>
  <main>
    <div class="container">
      <Upload />
    </div>
  </main>
</template>


<style scope>
@media (min-width: 1024px) {
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

span {
  display: flex;
}

input {
  display: flex;
}
</style>