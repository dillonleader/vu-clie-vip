import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/one'
import two from '@/components/two'
import three from '@/components/three'
import four from '@/components/four'
import comOne from '@/components/comOne'
import comTwo from '@/components/comTwo'
import comThree from '@/components/comThree'
import login from '@/components/login'
import register from '@/components/register'
import vuexTest from '@/components/vuexTest'
import details from '@/components/details'
import home from '@/components/home'
import nav from '@/components/nav'
import sixhund from '@/components/sixhund'
import crayrobb from '@/components/crayrobb'

Vue.use(Router)
const router = new Router({
  mode: 'history', // 取消 /#/
  linkActiveClass: 'activeClass',
  routes: [{
      path: '/',
      name: 'one',
      redirect: '/register',
      component: one
    }, {
      path: '/two',
      name: 'two',
      component: two,
      children: [{
        path: '/two/comTwo',
        component: comTwo
      }]
    }, {
      path: '/three',
      name: 'three',
      component: three,
      children: [{
        path: '/three/comOne',
        component: comOne
      }]
    }, {
      path: '/four',
      name: 'four',
      component: four
    },
    {
      path: '/comThree',
      name: 'comThree',
      component: comThree
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/vuexTest',
      name: 'vuexTest',
      component: vuexTest
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: '/home/sixhund',
          name: 'sixhund',
          component: sixhund
        },
        {
          path: '/home/crayrobb',
          name: 'crayrobb',
          component: crayrobb
        }
      ]
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next();
  const token = localStorage.getItem('regkey')
  if(token){
    next()
  }else{
    next('/login')
  }
})
export default router
