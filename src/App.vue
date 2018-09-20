<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/hello-kitty.png">
    <toDoList></toDoList>
  </div>
</template>

<script>
import toDoList from './components/toDoList.vue'

export default {
  name: 'app',
  components: {
    toDoList
  }
}
</script>

<style>
html {
  background: #fcc7c8;
}
#app {
  font-family: 'Jua', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 15px;
  text-align: center;
  color: #332929;
  margin-top: 60px;
  letter-spacing: 0.03em;
}
</style>
