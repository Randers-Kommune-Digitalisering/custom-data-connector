<script setup>
  let env = window.location.href.includes('data.randers') ? "drift" : "test"
</script>

<template>
  <main>
    <div>
      <p>Uautoriseret - du har ikke adgang, kontakt BI-teamet via <a :href = "'mailto: BI-post@randers.dk?subject=Adgang til custom-data-connector ('+ env + ')'">BI-post@randers.dk</a></p>
    </div>
  </main>
</template>


<style scoped>
div {
  min-width: 800px;
}
p {
  font-size: large;
}

a {
  font-size: large;
  color: var(--vt-c-blue);
}

a:hover {
  text-decoration: underline;
  background-color: transparent;
}
</style>