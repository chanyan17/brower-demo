<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  }
}
</script>
<style>
  html, body, #app {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>