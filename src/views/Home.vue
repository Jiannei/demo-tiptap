<template>
    <editor/>
    <!-- <div id="nav">
        <router-link to="/basic">Basic</router-link>|
        <router-link to="/MenuBubble">MenuBubble</router-link>|
        <router-link to="/FloatingMenu">FloatingMenu</router-link>|
        <router-link to="/Links">Links</router-link>|
    </div> -->
</template>

<script>
import Editor from '@/components/Editor.vue'

export default {
  name: 'PageHome',
  components: {
    Editor
  }
}
</script>

<style lang="scss">
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #333;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
