// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'

import messages from './i18n/i18n'

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

const locale = getCookie('locale');

const i18n = new VueI18n({
    locale: locale ? locale : 'en',
    messages
})

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