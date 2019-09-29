/*
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-09-29 00:14:26
 * @LastEditors: suckson
 * @LastEditTime: 2019-09-29 16:48:42
 */
import Vue from 'vue'

import 'normalize.css/normalize.css' // 覆盖浏览器的默认样式

import App from './App.vue'
import router from './routers'
import store from './store/store'
import '@/icons' // icon

import sucksonUI from '../sucksonUI/suckson'  // 封装自己的UI库
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
