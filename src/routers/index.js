import Vue from 'vue'
import Router from 'vue-router'
import routes from './moudles/index.js'

Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history',
  routes: routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
