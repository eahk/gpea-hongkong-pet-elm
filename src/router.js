import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mermaid from './views/Mermaid.vue'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    linkExactActiveClass: "active",
    routes: [{
        path: '*',
        component: Home
    }, {
        path: '/',
        name: 'mermaid ',
        component: Mermaid
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }]
})

export default router