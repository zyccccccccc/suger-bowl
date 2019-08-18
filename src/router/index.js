import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Son from '@/components/Son'
import Car from '@/components/Car'
import Index from '@/callme/Index'
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about/:id',
      name: 'About',
      component: About
    },
    {
      path: '/son',
      name: 'Son',
      component: Son
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
