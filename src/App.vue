<template>
  <div id="app">
    <Editor msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Editor from '@/components/Editor.vue'

export default {
  name: 'app',
  components: {
    Editor
  }
}
</script>

<style lang="scss" src="./assets/sass/main.scss"></style>
<style lang="scss">
#app {
  font-family: 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  padding-top: 2rem;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #333;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
