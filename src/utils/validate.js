/**
 * validate mobile
 * @param mobile
 * @returns {boolean}
 */
export function isValidateMobile (mobile) {
  const reg = /^1[3|4|5|7|8]\d{9}$/
  return reg.test(mobile)
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function isValidateEmail (email) {
  const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
  return reg.test(email)
}

/**
 * validate pwd
 * @param pwd
 * @returns {boolean}
 */
export function isValidatePwd (pwd) {
  const reg = /^[a-zA-Z0-9\u4e00-\u9fa5]{6}/
  return reg.test(pwd)
}
