import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import home from '@/components/home'
import sixhund from '@/components/sixhund'
import crayrobb from '@/components/crayrobb'
import selected from '@/components/selected'

Vue.use(Router)
const router = new Router({
  mode: 'history', // 取消 /#/
  linkActiveClass: 'activeClass',
  routes: [{
      path: '/',
      name: 'register',
      component: register
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
        },
        {
          path: '/home/selected/:id',
          name: 'selected',
          component: selected
        },
      ]
    },
   
    
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.path==='/login') return next()
  if(to.path === '/register') return next()
  const tokenStr = window.localStorage.getItem('regkey')
  if (!tokenStr) return next('/login')
  next()
})
export default router
