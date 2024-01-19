<script setup>
import Imported from '../components/Imported.vue'

const props = defineProps(['roles'])
</script>

<template>
  <main>
    <Imported :roles="props.roles"/>
  </main>
</template>
