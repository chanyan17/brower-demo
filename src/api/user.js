import request from '@/utils/request'

export function login (account, pwd) {
  return request({
    url: '/static/json/login.json',
    method: 'get',
    params: {
      account: account,
      password: pwd
    }
  })
}

export function getUserInfo () {
  return request({
    url: '/static/json/userInfo.json',
    method: 'get',
    params: {}
  })
}