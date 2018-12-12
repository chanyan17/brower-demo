import Vue from 'vue'
import Router from 'vue-router'
import { Loading } from 'element-ui'
import Layout from '@/views/Layout/Layout'
import { getToken } from '@/utils/auth'
import store from '@/store'

Vue.use(Router)

let loadingInstance
let spinRoute = {
  show () {
    let opt = {body: true, text: 'Loading...'}
    if (!loadingInstance) loadingInstance = Loading.service(opt)
  },
  resolve (resolve) {
    return component => {
      setTimeout(() => {
        loadingInstance.close()
        resolve(component)
      }, 10)
    }
  }
}

export const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: (resolve) => {
      spinRoute.show()
      require(['@/views/Login.vue'], spinRoute.resolve(resolve))
    },
    meta: {
      title: '登录',
      icon: ''
    },
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/AccountManage',
        name: 'AccountManage',
        component: resolve => require(['@/views/AccountManage.vue'], resolve),
        meta: {
          title: '账号管理',
          icon: 'account-manage',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/RoleManage',
        name: 'RoleManage',
        component: resolve => require(['@/views/RoleManage.vue'], resolve),
        meta: {
          title: '角色管理',
          icon: 'role-manage',
          roles: ['admin']
        }
      },
      {
        path: '/RootConfig',
        name: 'RootConfig',
        component: resolve => require(['@/views/RootConfig.vue'], resolve),
        meta: {
          title: '权限配置',
          icon: 'root-config',
          roles: ['admin']
        }
      }
    ],
    meta: {
      title: '角色权限管理',
      icon: 'role-root-manage'
    }
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/UserCenter',
        name: 'UserCenter',
        component: resolve => require(['@/views/UserCenter.vue'], resolve),
        meta: {
          title: '用户中心',
          icon: 'user-center',
          roles: ['teacher']
        }
      }
    ]
  },
  {
    path: '/AuthorityTips',
    name: 'AuthorityTips',
    component: resolve => require(['@/views/ErrorPage/AuthorityTips.vue'], resolve),
    meta: {
      title: '无权限提示'
    },
    hidden: true
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: resolve => require(['@/views/ErrorPage/NotFound.vue'], resolve),
    meta: {
      title: '404'
    },
    hidden: true
  },
  {
    path: '/',
    redirect: '/AccountManage',
    hidden: true
  },
  {
    path: '*',
    redirect: '/NotFound',
    hidden: true
  }
]

// 免登录名单
const whiteList = ['/Login', '/NotFound', '/AuthorityTips']

const router = new Router({
  routes
})

function hasPermission (to, roles) {
  // 免登录名单内
  if (whiteList.indexOf(to.path) !== -1) return true
  // 角色列表为空
  if (!roles.length) return false
  // 该路由无角色限制
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

export default router
