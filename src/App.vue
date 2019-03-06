<template>
  <div id="app">
    <div id="nav">
      <navbar></navbar>
    </div>
    <router-view/>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  color:black
}

@media (min-width: 576px) {
  body {
    /* background: red; */
    font-size: 70%
  }
  .texting {
    font-size: 200%;
  }
}

@media (min-width: 768px) {
  body {
    /* background: blue; */
    font-size: 80%
  }
  .texting {
    font-size: 200%
  }
}

@media (min-width: 992px) {
  body {
    /* background: green; */
    font-size: 90%
  }
  .texting {
    font-size: 200%
  }
}

@media (min-width: 1200px) {
  body {
    /* background: yellow; */
    font-size: 100%
  }
  .texting {
    font-size: 200%
  }
}

@media (max-width: 575px) {
  body {
    /* background: coral; */
    /* font-size: 300% */
  }
}

@media (max-width: 767px) {}

@media (max-width: 991px) {}

@media (max-width: 1199px) {}
</style>
