import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.scss'
import 'styles/border.scss'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App />'
})
