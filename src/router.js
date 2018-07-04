import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Weather from '@/components/Weather'
import iPhone from '@/components/iPhone'
import Youtube from '@/components/Youtube'
import PaperGame from '@/components/PaperGame'
import Innerframe from '@/components/Innerframe'
import Contact from '@/components/Contact'

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
    }, {
      path: 'iphone',
      name: 'iPhone',
      component: iPhone,
      children: [{
        path: ':url',
        name: 'Project',
        component: Innerframe,
        props: true
      }]
    }, {
      path: 'youtube',
      name: 'Youtube',
      component: Youtube
    }, {
      path: 'game',
      name: 'PaperGame',
      component: PaperGame
    }, {
      path: 'contact/:about?',
      name: 'Contact',
      component: Contact
    }]
  }, ]
})
export default router
