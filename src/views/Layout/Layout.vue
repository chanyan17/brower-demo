<template>
  <el-container>
    <el-header height="60px">
      <top-head></top-head>
    </el-header>
    <el-container class="container">
      <el-aside width="200px">
          <side-nav></side-nav>
      </el-aside>
      <el-main>
          <router-view/>
      </el-main>
    </el-container>
    <el-footer height="40px">LOGO</el-footer>
  </el-container>
</template>
<script>
import TopHead from '@/views/Layout/TopHead'
import SideNav from '@/views/Layout/SideNav'
export default {
  name: 'Layout',
  components: {
    TopHead,
    SideNav
  },
  data () {
    return {}
  }
}
</script>
<style>
.el-header {
  background-color: #545c64;
  line-height: 60px;
}

.el-aside {
  background-color: #FFF;
}

.el-main {
  background-color: #E9EEF3;
}

.el-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 40px;
}
.container {
  position: absolute;
  top: 60px;
  right: 0px;
  bottom: 40px;
  left: 0px;
  width: 100%;
}
</style>