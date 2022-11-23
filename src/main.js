import Vue from 'vue'
import App from './App.vue'
import router from './router'
const pug = require('pug')
import 'the-new-css-reset/css/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  pug,
  render: h => h(App)
}).$mount('#app')
