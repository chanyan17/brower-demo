import Vue from 'vue'
import Vuex from 'vuex'
import { login, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userinfo: {},
    token: ''
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