<template>
  <nav class="navbar fixed-top navbar-expand-md navbar-light mb-3">
    <div class="container">
      <a class="navbar-brand" href="#">Hilarion Web</a>
      <div class="text-right">
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" >
          <form class="form-inline">
            <input type="text" class="form-control" placeholder="search" style="font-size: 13px">
            <button class="btn btn-outline-success" style="font-size: 13px">Search</button>
          </form>
          <ul class="navbar-nav" style="font-size: 13px">
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
            </li>
            <li class="nav-item">
              <portfolio></portfolio>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/contact">Contact</router-link></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue'

export default {
  components: {
    Portfolio
  }
}
</script>

<style scoped>
nav {
  opacity: .99;
  background-color:darkgrey;
  border-bottom: 1px solid;
  border-bottom-color: darkgrey;
  /* margin-top: -80px; */
}
</style>
