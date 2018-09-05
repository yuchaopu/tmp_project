// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'

import messages from './i18n/i18n'
import IconSvg from '@/components/IconSvg/IconSvg'

Vue.config.productionTip = false

Vue.use(VueI18n)

function getCookie(name,defaultValue) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return defaultValue;
    }
}

// 自动设置语言
const navLang = navigator.language
let localLang;
if (navLang === 'zh-CN') {
    localLang = 'zh'
} else if (navLang === 'en-US') {
    localLang = 'en';
}
const lang = window.localStorage.lang || localLang || 'en'
localStorage.setItem('lang', lang);
Vue.config.lang = lang;
const i18n = new VueI18n({
    locale: Vue.config.lang,
    messages
})

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