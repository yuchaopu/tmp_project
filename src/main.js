// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import moment from 'moment'

import messages from './i18n/i18n'
import IconSvg from '@/components/IconSvg/IconSvg'
import Toast from '@/components/Toast/Toast'
import '../static/geetest/index.js'

Vue.config.productionTip = false

Vue.use(Vue => {
    Vue.prototype.$getCookie = (name, defaultValue) => {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        } else {
            return defaultValue;
        }
    }
    Vue.prototype.$setCookie = (name, value) => {
        let Days = 30;
		let exp = new Date();
		exp.setTime(exp.getTime() + Days*24*60*60*30);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
})

Vue.use(VueI18n)
Vue.use(Toast)

// 自动设置语言
const navLang = navigator.language
let localLang;
if (navLang === 'zh-CN') {
    localLang = 'zh';
} else if (navLang === 'en-US') {
    localLang = 'en';
}
const lang = window.localStorage.lang || localLang || 'en'
localStorage.setItem('lang', lang);
Vue.prototype.$setCookie('locale', lang === 'zh' ? 'zh-CN' : 'en-US');
Vue.config.lang = lang;
const i18n = new VueI18n({
    locale: Vue.config.lang,
    messages
})

Vue.prototype.$moment = moment;
Vue.component('icon-svg', IconSvg);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    router,
    components: {
        App
    },
    template: '<App/>'
})