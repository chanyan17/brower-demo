<template>
  <div
    id="app"
    v-loading.fullscreen.lock="isLoading"
    :element-loading-text="loadingText"
    :element-loading-spinner="loadingSpinner"
    :element-loading-background="loadingBackground">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'isLoading',
      'loadingText',
      'loadingSpinner',
      'loadingBackground'
    ])
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