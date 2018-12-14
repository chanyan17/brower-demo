import request from '@/utils/request'
import Mock from 'mockjs'

console.log(process.env.NODE_ENV)
console.log(Mock)

export function login (params) {
  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve) => {
      resolve({
        token: Mock.mock({
          'list|1-10': [{
            'id|+1': 1
          }]
        })
      })
    })
  }
  return request({
    url: '/static/json/login.json',
    method: 'get',
    params: params
  })
}

export function getUserInfo () {
  return request({
    url: '/static/json/userInfo.json',
    method: 'get',
    params: {},
    isHideLoading: false
  })
}