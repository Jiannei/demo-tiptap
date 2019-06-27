import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-exact-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/Basic',
      name: 'Basic',
      component: () => import('./examples/Basic/Index.vue')
    },
    {
      path: '/MenuBubble',
      name: 'MenuBubble',
      component: () => import('./examples/MenuBubble/Index.vue')
    },
    {
      path: '/FloatingMenu',
      name: 'FloatingMenu',
      component: () => import('./examples/FloatingMenu/Index.vue')
    },
    {
      path: '/Links',
      name: 'Links',
      component: () => import('./examples/Links/Index.vue')
    }
  ]
})
