<template>
  <el-row>
    <el-col :span="12"><div class="grid-content logo-content">LOGO</div></el-col>
    <el-col :span="12">
      <div class="grid-content">
        <ul class="action-content">
          <li>Admin</li>
          <li><svg-icon  :icon-class="'login-out'"></svg-icon> 退出</li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'TopHead',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
  .logo-content {
    color: #FFF;
  }
  .action-content {
    margin: 0;
    padding: 0;
    list-style: none;
    color: #FFF;
    text-align: right;

    li {
      display: inline-block;
      margin: 0 10px;
      cursor: pointer;
    }
  }
</style>