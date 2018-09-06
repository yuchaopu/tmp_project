import Vue from 'vue'
import Router from 'vue-router'
import DemoPage from '@/pages/DemoPage'
import Home from '@/pages/Home'
import RegistPage from '@/pages/RegistPage'
import LoginPage from '@/pages/LoginPage'
import ForgetPasswordPage from '@/pages/ForgetPasswordPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'Home'
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/regist',
            name: 'Regist',
            component: RegistPage
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginPage
        },
        {
            path: '/forgetpassword',
            name: 'Forgetpassword',
            component: ForgetPasswordPage
        },
        {
            path: '/demopage',
            name: 'DemoPage',
            component: DemoPage
        }
    ]
})
