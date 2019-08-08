import Vue from 'vue'

import 'normalize.css/normalize.css' // 覆盖浏览器的默认样式

import App from './App.vue'
import router from './routers'
import store from './store/store'
import '@/icons' // icon

import sucksonUI from '@/components/suckson'  // 封装自己的UI库
import '@/assets/suckson/suckson.globe.styl' // 引入css
Vue.use(sucksonUI)

import animated from 'animate.css'
Vue.use(animated)

import '@/assets/css/global.styl' // 当前项目的css

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
