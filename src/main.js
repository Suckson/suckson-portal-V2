import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store/store'
import animated from 'animate.css'
import '@/icons' // icon
Vue.use(animated)
import '@/assets/css/demo.css'
import '@/assets/css/component.css'
import '@/assets/css/logo.styl'
import '@/assets/css/normalize.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
