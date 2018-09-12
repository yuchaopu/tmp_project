<template>
    <div id="footer">
        <icon-svg class="icon-logo" icon-class="logo" />
        <ul>
            <!-- <li @click = 'openAnnounce()'>
            {{$t('message.btn.announcements')}}
            </li> -->
            <li @click = "openHelp()">
                {{$t('message.btn.help')}}
            </li>
            <li @click = "openTerm">
                {{$t('message.btn.termService')}}
            </li>
            <li @click = "openPrivacy">
                {{$t('message.btn.privacyPolicy')}}
            </li>
            <li @click = "openDiscla">
                {{$t('message.btn.disclaimer')}}
            </li>
            <li @click = "openFees">
                {{$t('message.btn.fees')}}
            </li>
            <li @click = "openApi()">
                {{$t('message.btn.apidoc')}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            const navLang = navigator.language;
            let language = localStorage.getItem('lang');
            if (!language) {
                localStorage.setItem('lang', navLang);
                language = navLang;
            }
            return {
                lang: language
            }
        },
        methods: {
            openHelp() {
                if (this.lang == 'zh') {
                    window.open('https://bitmaxhelp.zendesk.com/hc/zh-cn');
                } else {
                    window.open('https://bitmaxhelp.zendesk.com/hc/en-us')
                }
            },
            openTerm() {
                window.open(window.location.origin + '/#/footerServer')
            },
            openPrivacy() {
                window.open(window.location.origin + '/#/privacy')
            },
            openDiscla() {
                window.open(window.location.origin + '/#/risk')
            },
            openFees() {
                if (this.lang == 'zh') {
                    window.open( 'https://bitmaxhelp.zendesk.com/hc/zh-cn/articles/360007941073-%E4%BA%A4%E6%98%93%E6%89%8B%E7%BB%AD%E8%B4%B9');
                } else {
                    window.open('https://bitmaxhelp.zendesk.com/hc/en-us/articles/360007881894-Trading-Fees');
                }
            },
            openApi() {
                window.open('https://github.com/bitmax-exchange/api-doc');
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/base';
@import '../../style/commom';
#footer{
    background-color: $black-color;
    padding: px2rem(40px) 0 px2rem(30px);;
    @include ta_c;
    color: #fff;
    @include font-dpr(16px);
    .icon-logo{
        width: px2rem(112px);
        height: px2rem(22px);
    }
    ul{
        margin-top: px2rem(10px);
        li{
            margin-top: px2rem(30px);;
        }
    }
}
</style>
