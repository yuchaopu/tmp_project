import Vue from 'vue'
import Router from 'vue-router'
import DemoPage from '@/pages/DemoPage'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/demopage',
            name: 'DemoPage',
            component: DemoPage
        }
    ]
})
