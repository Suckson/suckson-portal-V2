/*
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-08-10 17:20:46
 * @LastEditors: suckson
 * @LastEditTime: 2019-08-10 17:21:44
 */
import Vue from 'vue'

import 'normalize.css/normalize.css' // 覆盖浏览器的默认样式

import App from './App.vue'

import sucksonUI from '@/components/suckson'  // 封装自己的UI库
import '@/assets/suckson/suckson.globe.styl' // 引入css
Vue.use(sucksonUI)

import animated from 'animate.css'
Vue.use(animated)

import '@/assets/css/global.styl' // 当前项目的css

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
