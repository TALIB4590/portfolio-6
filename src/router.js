import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/pc',
        name: 'Main',
        component: Main
    }],
    mode: 'history',
})
export default router