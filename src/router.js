import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import demo1 from './pages/demo1.vue'
import demo2 from './pages/demo2.vue'
import demo3 from './pages/demo3.vue'
Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3
    }
  ]
})