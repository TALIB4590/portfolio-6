import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Weather from '@/components/Weather'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/pc',
    name: 'Main',
    component: Main,
    children: [{
      path: '/pc/weather',
      name: 'Weather',
      component: Weather
    }]
  }, ],
  mode: 'history',
})
export default router
