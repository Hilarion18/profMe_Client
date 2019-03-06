<template>
  <div id="app">
    <app-registration></app-registration>
    <app-registrations></app-registrations>
  </div>
</template>

<script>
  import Registration from '@/components/sandbox/Tes1.vue';
  import Registrations from '@/components/sandbox/Tes2.vue';
export default {
    components: {
        appRegistration: Registration,
        appRegistrations: Registrations
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
  margin-top: 60px;
}
</style>