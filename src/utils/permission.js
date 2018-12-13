import router from '@/router'
import { getToken } from '@/utils/token'
import store from '@/store'

// 免登录名单
const whiteList = ['/Login', '/NotFound', '/AuthorityTips']

// 权限判断
function hasPermission (to, roles) {
  // 免登录名单内 - 有权限
  if (whiteList.indexOf(to.path) !== -1) return true
  // 角色列表为空 - 无权限
  if (!roles.length) return false
  // 该路由无角色限制 - 有权限
  if (!to.meta.roles || !to.meta.roles.length) return true
  return roles.some(role => to.meta.roles.indexOf(role) > -1)
}

router.beforeEach((to, from, next) => {
  // 已登录
  if (getToken()) {
    store.commit('GET_TOKEN')
    // 进入登录界面,则进入主页
    if (to.path === '/Login') {
      next({ path: '/' })
    } else {
      if (store.state.userinfo.username) {
        // 已获取用户信息
        hasPermission(to, store.state.userinfo.roles) ? next() : next({path: '/AuthorityTips'})
      } else {
        // 请求获取用户信息
        store.dispatch('getUserInfo').then(() => {
          hasPermission(to, store.state.userinfo.roles) ? next() : next({path: '/AuthorityTips'})
        })
      }
    }
  } else {
    // 未登录
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录名单内
      next()
    } else {
      // 不在免登录名单内
      next(`/Login?redirect=${to.path}`)
    }
  }
  next()
})
