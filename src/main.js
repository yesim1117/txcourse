import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'scripts/fastclick.js'
import 'scripts/common.js'
import 'styles/resets.css'
import 'styles/border.css'
import 'styles/common.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
