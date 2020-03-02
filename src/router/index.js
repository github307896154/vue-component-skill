import Vue from 'vue'
import Router from 'vue-router'
import pageA from '@/view/pageA'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageA',
      component: pageA
    }
  ]
})
