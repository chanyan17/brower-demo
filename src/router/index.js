import Vue from 'vue'
import Router from 'vue-router'
import { Loading } from 'element-ui'
import Layout from '@/views/Layout/Layout'

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
    path: '/AccountManage',
    redirect: '/AccountManage/index',
    component: Layout,
    children: [
      {
        path: '/AccountManage/index',
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
    path: '/RootRoleManage',
    redirect: '/RoleManage',
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
    path: '/UserCenter',
    redirect: '/UserCenter/index',
    component: Layout,
    children: [
      {
        path: '/UserCenter/index',
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
    path: '/DirectiveFilter',
    redirect: '/DirectiveFilter/index',
    component: Layout,
    children: [
      {
        path: '/DirectiveFilter/index',
        component: resolve => require(['@/views/DirectiveFilter.vue'], resolve),
        meta: {
          title: '指令与过滤器',
          icon: ''
        }
      }
    ]
  },
  {
    path: '/LoadingSwitch',
    redirect: '/LoadingSwitch/index',
    component: Layout,
    children: [
      {
        path: '/LoadingSwitch/index',
        component: resolve => require(['@/views/LoadingSwitch.vue'], resolve),
        meta: {
          title: 'Loading开关',
          icon: ''
        }
      }
    ]
  },
  {
    path: '/NonePermission',
    redirect: '/NonePermission/index',
    component: Layout,
    children: [
      {
        path: '/NonePermission/index',
        name: 'NonePermission',
        component: resolve => require(['@/views/NonePermission.vue'], resolve),
        meta: {
          title: '无权限示例',
          icon: '',
          roles: ['nobody']
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

const router = new Router({
  routes
})

export default router
