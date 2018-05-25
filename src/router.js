import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Weather from '@/components/Weather'
import iPhone from '@/components/iPhone'
import Gallery from '@/components/Gallery'
import PaperGame from '@/components/PaperGame'
import Innerframe from '@/components/Innerframe'

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
      path: 'weather',
      name: 'Weather',
      component: Weather
    },{
      path: 'iphone',
      name: 'iPhone',
      component: iPhone,
      children: [{
        path: ':url',
        name: 'Project',
        component: Innerframe,
        props: true
      }]
    },{
      path: 'gallery',
      name: 'Gallery',
      component: Gallery
    },{
      path: 'game',
      name: 'PaperGame',
      component: PaperGame
    }]
  }, ],
  mode: 'history',
})
export default router
