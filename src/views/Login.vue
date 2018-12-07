<template>
  <div class="login-wrapper">
    <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="loginRules">
      <div class="logo-wrapper">
          <span>Backstage Demo</span>
      </div>
      <el-form-item prop="account">
          <el-input type="tel" placeholder="手机号" v-model="loginForm.account">
          </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
          <el-input class="pwd" :type="pwdType" placeholder="密码" v-model="loginForm.pwd" @keyup.enter.native="handleLogin" maxlength="6" minlength="6">
          </el-input>
          <div class="pwd-display" @click="toggleShowPwd">
            <svg-icon  :icon-class="{true: 'show-pwd', false: 'hide-pwd'}[isShowPwd]"></svg-icon>
          </div>
      </el-form-item>
      <el-form-item class="login">
          <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { isValidateMobile, isValidatePwd } from '@/utils/validate'
export default {
  name: 'Login',
  data () {
    const validateAccount = (rule, value, callback) => {
      if (isValidateMobile(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号'))
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!isValidatePwd(value)) {
        callback(new Error('请输入正确的密码'))
      } else {
        callback()
      }
    }
    return {
      isShowPwd: false,
      loading: false,
      loginForm: {
        account: '',
        pwd: ''
      },
      loginRules: {
        account: [
          {required: true, message: '请输入手机号', trigger: 'blur'},
          {validator: validateAccount, trigger: 'blur'}
        ],
        pwd: [
          {required: true, trigger: 'blur, change', validator: validatePassword}
        ]
      }
    }
  },
  methods: {
    toggleShowPwd () {
      this.isShowPwd = !this.isShowPwd
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$router.push({ path: this.redirect || '/' })
        } else {
          return false
        }
      })
    }
  },
  computed: {
    pwdType () {
      return this.isShowPwd ? 'text' : 'password'
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        // 记录前一个页面的路由
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  }
}
</script>
<style lang="less" scoped>
  .login-wrapper {
    width: 100%;
    height: 100%;
    background-color: #323639;
  }
  .login-form {
    position: absolute;
    left: 50%;
    top: 40%;
    margin-left: -220px;
    margin-top: -220px;
    width: 440px;
    min-height: 440px;
    color: #FFF;

    .logo-wrapper {
        margin-bottom: 30px;
        font-size: 36px;
    }

    .login,
    .action {
        font-size: 16px;
    }
  }
</style>
<style lang="less">
  .login-form {
    input {
        margin: 20px 0;
        padding: 0;
        height: 40px;
        line-height: 40px;
        width: 100%;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid #FFF;
        outline: none;
        color: #FFF;
        border-radius: 0;
        font-size: 18px;
    }
    button {
        margin: 20px 0;
        width: 100%;
        height: 40px;
        border: none;
        color: #FFF;
        background-color: rgba(64, 158, 255, .7);
    }
  }
  .pwd input {
    padding-right: 35px;
  }
  .pwd-display {
    position: absolute;
    right: 0;
    top: 20px;
    font-size: 26px;
    cursor: pointer;
  }
</style>
