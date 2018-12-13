import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import '@/styles/tool.css'

import '@/icons/index.js'

import App from '@/App'
import router from '@/router'
import store from '@/store'

import '@/utils/permission'
import '@/utils/golbalRegister'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
