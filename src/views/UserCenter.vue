<template>
  <div class="wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <span>陈一一</span>
      </el-form-item>
      <el-form-item label="手机号">
        <span>13560123456</span>
      </el-form-item>
      <el-form-item label="角色">
        <span>老师</span>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.newPwd">></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password" v-model="form.confirmPwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="modifyPwd">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '陈一一'
      }
    }
  },
  methods: {
    modifyPwd () {
      console.log('modifyPwd')
    }
  }
}
</script>
<style lang="less" scoped>
  .wrapper {
    width: 406px;
    span {
      color: #606266;
    }
  }
  .img {
    width: 500px;
    height: 500px;
  }
</style>