import Vue from 'vue'
import Router from 'vue-router'
import DemoPage from '@/pages/DemoPage'
import Home from '@/pages/Home'
import RegistPage from '@/pages/RegistPage'
import LoginPage from '@/pages/LoginPage'
import ForgetPasswordPage from '@/pages/ForgetPasswordPage'
import GoogleAuthenticator from '@/pages/GoogleAuthenticator'
import ResetGoogleAuthenticator from '@/pages/ResetGoogleAuthenticator'
import CheckMail from '@/pages/CheckMail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
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
            path: '/googleauthenticator',
            name: 'GoogleAuthenticator',
            component: GoogleAuthenticator
        },
        {
            path: '/resetgoogleauthenticator',
            name: 'ResetGoogleAuthenticator',
            component: ResetGoogleAuthenticator
        },
        {
            path: '/checkMail',
            name: 'CheckMail',
            component: CheckMail
        },
        {
            path: '/demopage',
            name: 'DemoPage',
            component: DemoPage
        }
    ]
})
