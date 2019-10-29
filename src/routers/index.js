/*
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-08-04 15:34:32
 * @LastEditors: suckson
 * @LastEditTime: 2019-09-29 16:18:51
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './moudles/index'

Vue.use(Router)

const createRouter = () => new Router({
  // mode: 'history',
  routes: routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
