import Vue from 'vue'
import Vuex from 'vuex'
import { Loading } from 'element-ui'
import { login, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/token'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userinfo: {},
    token: '',
    loadingInstance: ''
  },
  mutations: {
    SET_USERINFO (state, userinfo) {
      state.userinfo = userinfo
    },
    SET_TOKEN (state, token) {
      state.token = token
      setToken(token)
    },
    GET_TOKEN (state) {
      state.token = getToken()
    },
    REMOVE_TOKEN (state) {
      state.token = ''
      state.userinfo = {}
      removeToken()
    },
    SHOW_LOADING (state, options) {
      if (!options) options = {}

      const defaultOptions = {
        lock: true,
        text: 'Loading',
        spinner: '',
        background: 'rgba(0, 0, 0, 0.7)'
      }

      for (const k in defaultOptions) {
        if (defaultOptions.hasOwnProperty(k)) {
          options[k] = options[k] || defaultOptions[k]
        }
      }

      // 全屏 Loading 不会创建多个实例
      options.fullscreen = true

      state.loadingInstance = Loading.service(options)
    },
    HIDE_LOADING (state) {
      state.loadingInstance && state.loadingInstance.close()
    }
  },
  getters: {},
  actions: {
    userLogin ({commit}, params) {
      return new Promise((resolve, reject) => {
        login(params).then((response) => {
          commit('SET_TOKEN', response.token)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getUserInfo ({commit}, params) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((response) => {
          commit('SET_USERINFO', response)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
})

export default store