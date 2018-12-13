import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/token'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (config.isShowLoading) {
      store.commit('SHOW_LOADING', {
        loadingText: '努力加载数据中...',
        loadingSpinner: '',
        loadingBackground: 'rgba(0, 0, 0, 0.8)'
      })
    }

    if (getToken()) {
      config.headers['X-Token'] = getToken()
    }

    return config
  },
  error => {
    store.commit('HIDE_LOADING')
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    store.commit('HIDE_LOADING')
    const res = response.data
    if (res.ok === 0) {
      return res.data
    } else {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.msg)
    }
  },
  error => {
    store.commit('HIDE_LOADING')
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service