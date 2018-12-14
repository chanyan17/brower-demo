import Vue from 'vue'
import Vuex from 'vuex'
import { login, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/token'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userinfo: {},
    token: '',
    isLoading: false,
    loadingText: 'Loading...',
    loadingSpinner: '',
    loadingBackground: 'rgba(0, 0, 0, 0.8)'
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
        loadingText: 'Loading...',
        loadingSpinner: '',
        loadingBackground: 'rgba(0, 0, 0, 0.8)'
      }
      for (const k in defaultOptions) {
        if (defaultOptions.hasOwnProperty(k)) {
          options[k] = options[k] || defaultOptions[k]
        }
      }
      const {loadingText, loadingSpinner, loadingBackground} = options
      state.loadingText = loadingText
      state.loadingSpinner = loadingSpinner
      state.loadingBackground = loadingBackground
      console.log(state)
      state.isLoading = true
    },
    HIDE_LOADING (state) {
      state.isLoading = false
    }
  },
  getters: {},
  actions: {
    userLogin ({commit}, params) {
      return new Promise((resolve, reject) => {
        login(params.account, params.pwd).then((response) => {
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