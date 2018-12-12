import axios from 'axios'
import { Message, Loading } from 'element-ui'
import { getToken } from '@/utils/auth'

// 定义loading变量
let loading

// 使用Element loading-start 方法
function startLoading () {
  loading = Loading.service({
    body: true,
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

// 使用Element loading-close 方法
function endLoading () {
  loading.close()
}

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    startLoading()
    if (getToken()) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    endLoading()
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    endLoading()
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
    endLoading()
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service