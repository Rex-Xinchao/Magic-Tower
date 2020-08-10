import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import utils from './lib/utils'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.prototype.Utils = utils
utils.logic_screenPx()
window.onresize = function() {
  utils.logic_screenPx()
}
Vue.config.productionTip = false
let $eventBus = new Vue()
Vue.prototype.$eventBus = {
  $on(...event) {
    $eventBus.$on(...event)
  },
  $off(...event) {
    $eventBus.$off(...event)
  },
  $once(...event) {
    $eventBus.$emit(...event)
  },
  $emit(...event) {
    $eventBus.$emit(...event)
  }
}

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
