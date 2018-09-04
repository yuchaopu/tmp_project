import Vue from 'vue'
import Router from 'vue-router'
import DemoPage from '@/pages/DemoPage'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/demopage',
        name: 'DemoPage',
        component: DemoPage
    }]
})
