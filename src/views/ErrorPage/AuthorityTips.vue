<template>
  <div class="authority-tips">
    <el-alert
      :title="alertText"
      :closable="false"
      type="error"
      show-icon>
    </el-alert>
    <div class="next-step">
      <h3>您可以：</h3>
      <div class="tc">
        <el-button type="button" @click="gotoHome">返回首页</el-button>
        <span v-if="isExistPrevPage">或者 <el-button type="button" @click="gotoPrevPage">返回上一页</el-button></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      alertText: '您没有权限访问此页面',
      isExistPrevPage: false
    }
  },
  methods: {
    gotoHome () {
      this.$router.push({path: '/'})
    },
    gotoPrevPage () {
      this.$router.go(-1)
    }
  },
  created () {
    this.isExistPrevPage = window.history.length > 1
  }
}
</script>
<style scoped>
  .authority-tips {
    margin: 100px auto 0;
    width: 500px;
    height: 400px;
    font-size: 14px;
  }
  .next-step {
    margin: 20px auto 0;
  }
</style>