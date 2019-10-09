import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import '@/assets/styles/reset.scss'
import '@/assets/styles/border.scss'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // render: h => h(App)
  components: { App },
  template: '<App />'
})
