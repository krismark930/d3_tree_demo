<template>
  <div class="main_container">
  <LandingHeader/>
  <router-view />
  </div>
</template>

<script setup>
import LandingHeader from '@/layout/LandingHeader.vue'
import './styles/global.scss'


</script>

<style lang="scss">
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  display: flex;
  justify-content: center;
}

body {
  background: #000000;
  height: 100%;
}

.main_container {
  width: 1330px;
 
}

</style>
