import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entrance',
      component: require('@/views/entrance/index').default
    }, {
      path: '/entrance',
      name: 'entrance',
      component: require('@/views/entrance/index').default
    },
    {
      path: '/interface',
      name: 'interface',
      component: require('@/views/interface/index').default
    }
  ]
})
