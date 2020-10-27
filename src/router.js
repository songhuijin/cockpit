import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import demo1 from './pages/demo1.vue'
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
    }
  ]
})