<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <div v-for="(route, index) in routes" v-bind:key="index" v-if="!route.hidden">
          <el-submenu :index="route.path" v-if="route.meta">
            <template slot="title">
              <svg-icon :icon-class="route.meta.icon"></svg-icon>
              <span>{{route.meta.title}}</span>
            </template>
            <el-menu-item-group v-for="(subRoute, index) in route.children" v-bind:key="index">
              <router-link :to="subRoute.path">
                <el-menu-item :index="subRoute.path">
                  <svg-icon :icon-class="subRoute.meta.icon"></svg-icon>
                  <span>{{subRoute.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <router-link :to="subRoute.path" v-else v-for="(subRoute, index) in route.children" v-bind:key="index">
            <el-menu-item :index="subRoute.path">
              <svg-icon :icon-class="subRoute.meta.icon"></svg-icon>
              <span slot="title">{{subRoute.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import { routes } from '@/router'
export default {
  name: 'SideNav',
  data () {
    console.log(routes)
    return {
      routes: routes
    }
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
  }
}
</script>
<style lang="less">
.el-menu {
  a {
    text-decoration: none;
    color: #1196db;
  }
  .svg-icon {
    font-size: 20px;
    vertical-align: middle;
  }
}
.el-menu-item,
.el-submenu__title {
  color: #666;
  font-size: 16px;
}
</style>