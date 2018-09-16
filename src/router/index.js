import Vue from 'vue'
import Router from 'vue-router'
import DemoPage from '@/pages/DemoPage'
import Home from '@/pages/Home'
import RegistPage from '@/pages/RegistPage'
import LoginPage from '@/pages/LoginPage'
import ForgetPasswordPage from '@/pages/ForgetPasswordPage'
import GoogleAuthenticator from '@/pages/GoogleAuthenticator'
import resetLoginPasswordByEmailPage from '@/pages/ResetLoginPasswordByEmailPage'
import ResetGoogleAuthenticator from '@/pages/ResetGoogleAuthenticator'
import CheckMail from '@/pages/CheckMail'
import FooterServer from '@/pages/FooterServer'
import Privacy from '@/pages/Privacy'
import Risk from '@/pages/Risk'
import Wx from '@/pages/Wx'
import EmailVerify from '@/pages/EmailVerify'
import Balance from '@/pages/assets/balance'
import Recharge from '@/pages/assets/recharge'
import RechargeDetail from '@/pages/assets/rechargeDetail'
import Withdraw from '@/pages/assets/withdraw'
import WithdrawDetail from '@/pages/assets/withdrawDetail'
import Record from '@/pages/assets/record'

Vue.use(Router)

const mainRouter =  new Router({
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
            path: '/register',
            name: 'Register',
            component: RegistPage
        },
        {
            path: '/resetLoginPasswordByEmail/:code',
            name: 'ResetLoginPasswordByEmail',
            component: resetLoginPasswordByEmailPage
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
            path: '/footerServer',
            name: 'FooterServer',
            component: FooterServer
        },
        {
            path: '/privacy',
            name: 'Privacy',
            component: Privacy
        },
        {
            path: '/risk',
            name: 'Risk',
            component: Risk
        },
        {
            path: '/wx',
            name: 'Wx',
            component: Wx
        },
        {
            path: '/emailVerify',
            name: 'EmailVerify',
            component: EmailVerify
        },
        {
            path: '/assets/balance',
            name: 'Balance',
            component: Balance
        },
        {
            path: '/assets/recharge',
            name: 'Recharge',
            component: Recharge
        },
        {
            path: '/assets/rechargeDetail',
            name: 'RechargeDetail',
            component: RechargeDetail
        },
        {
            path: '/assets/withdraw',
            name: 'Withdraw',
            component: Withdraw
        },
        {
            path: '/assets/withdrawDetail',
            name: 'WithdrawDetail',
            component: WithdrawDetail
        },
        {
            path: '/assets/record',
            name: 'Record',
            component: Record
        },
        {
            path: '/demopage',
            name: 'DemoPage',
            component: DemoPage
        }
    ]
})
// 导航守卫
mainRouter.beforeEach((to, from, next) => {
    // 判断当前模块是否需要登录
    window.scrollTo(0, 0);
    if (to.matched.length === 0) { 
        from.name ? next({
          name: from.name
        }) : next('/home'); 
      } else {
        next(); //如果匹配到正确跳转
      }
})
export default mainRouter;