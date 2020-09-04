<template>
  <div id="app">
    <Toast></Toast>
    <router-view/>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'

export default {
  components: {
    Toast
  }
}
</script>

<style lang="scss">
// 載入 Bootstrap
// @import 'bootstrap';

// 載入客製化 Bootstrap
@import './assets/all';
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Microsoft JhengHei,Helvetica Neue,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFFFFA;
  overflow-x: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
