import Vue from 'vue'
import App from './App.vue'
import router from './router'
const pug = require('pug')
import 'the-new-css-reset/css/reset.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  pug,
  store,
  render: h => h(App)
}).$mount('#app')
