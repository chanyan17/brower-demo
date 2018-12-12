<template>
  <div id="app" v-loading="fullscreenLoading">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      fullscreenLoading: false
    }
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