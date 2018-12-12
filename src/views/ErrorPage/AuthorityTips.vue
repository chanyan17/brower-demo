<template>
  <div>
    <b>AuthorityTips</b>
    <div @click="gotoHome">返回首页</div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    gotoHome () {
      this.$router.push({path: '/'})
    }
  }
}
</script>