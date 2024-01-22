<script setup>
import { ref } from 'vue';
const version = APP_VERSION;

const roles = ref([])
const user = ref('')

function getRoles(){
  fetch('/roles')
  .then((res) => res.json())
  .then((data) => {
      roles.value = data.roles
      user.value = data.username
  });
}

if(process.env.NODE_ENV === 'development') {
  roles.value = ['admin']
  user.value = 'admin@test.com'
} else getRoles()
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="./assets/logo.svg" />
    <div class="wrapper">
      <h1>BI Custom Data</h1>
      <span class="version">Version {{version}}</span>
      <span class="user">{{ user }} : {{ roles }}</span>
      <nav>
        <!-- <RouterLink to="/">Hjem</RouterLink> -->
        <RouterLink to="/upload">Upload</RouterLink>
        <RouterLink to="/status">Status</RouterLink>
        <RouterLink to="/imported">Indlæst</RouterLink>
        <RouterLink v-if="roles.includes('admin')" to="/exported">Udtræk</RouterLink>
      </nav>
    </div>
  </header>
  <body>
    <RouterView :roles=roles />
  </body>
</template>

<style scoped>
header {
  position:fixed;
  left:0;
  top:0;
  width:100vw;
  z-index:200;
  height:100px;
  background-color: var(--vt-c-blue);
}

h1 {
  margin-left: 15px;
  color: var(--vt-c-white);
}

 header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    max-height: 100px;
  }

.logo {
  display: block;
  max-height: 50px;
  padding-left: 20px;
}

.version {
  position:absolute;
  font-size: small;
  font-weight: bold;
  top:0;
  right:0;
  color: var(--vt-c-white);
  margin-right: 10px;
  margin-top: 10px;
}

.user {
  position:absolute;
  font-size: small;
  top:20px;
  right:0;
  color: var(--vt-c-white);
  margin-right: 10px;
  margin-top: 10px;
}

nav {
  width: 100%;
  text-align: left;
  max-height: 20px;
}

nav a.router-link-exact-active {
  color: var(--vt-c-white);
  text-decoration: underline;

}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0.2rem 1rem 0.2rem 1rem;
  font-size: 18px;
  border-radius: 10px;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 512px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
  }
}
</style>