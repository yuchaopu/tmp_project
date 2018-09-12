<template>
    <div id="header" :class="{'fixed': fixed}">
        <div class="header-main">
            <div class="logo">
                <router-link to="/">
                    <icon-svg class="icon-logo" icon-class="logo_" />
                </router-link>
                
            </div>
            
            <div class="header-right">
                <div v-if="showRegist && !isLogin" class="regist">
                    <router-link to="/register">{{ $t('message.btn.regist') }}</router-link>
                </div>
                <div v-if="isLogin" class="username">
                    {{ username }}
                </div>
                <!-- <i class="icon icon-nav" @click="changeNav"></i> -->
                <div @click="changeNav" class="icon-nav">
                    <icon-svg class="icon-hanbaobao" icon-class="hanbaobao" />
                </div>
            </div>
        </div>
        <transition name="slide-toggle"
                    v-on:enter="enter"
                    v-on:after-enter="afterEnter"
                    v-on:leave="leave"
                    v-on:after-leave="afterLeave">
            <div class="nav-wrapper" v-show="navShow">
                <ul>
                    <li>
                        <div class="cur-lan" @click="changeSubNav">
                            {{text}}
                            <icon-svg class="icon-xiala" icon-class="xiala" :class="{'open': subNavShow}" />
                        </div>
                        <transition name="lan-toggle"
                                    v-on:enter="enter"
                                    v-on:after-enter="afterEnter"
                                    v-on:leave="leave"
                                    v-on:after-leave="afterLeave">
                            <div class="sel-lan" v-show="subNavShow" @click="changeLang()">
                                {{text1}}
                            </div>
                        </transition>
                    </li>
                    <li>
                        <a v-if ="this.lang == 'zh'" target="_blank" href="/static/whitePaper_CN.pdf">{{$t('message.btn.whitePaper')}}</a>
                        <a v-else target="_blank" href="/static/whitePaper_EN.pdf">{{$t('message.btn.whitePaper')}}</a>
                    </li>
                    <li>
                        <a v-if ="this.lang=='zh'" target = "_blank" href="https://bitmaxhelp.zendesk.com/hc/zh-cn">{{$t('message.btn.announcements')}}</a>
                        <a v-else target = "_blank" href="https://bitmaxhelp.zendesk.com/hc/en-us">{{$t('message.btn.announcements')}}</a>
                    </li>
                    <li v-if="!isLogin">
                        <router-link to="/login">
                            {{$t('message.btn.login')}}
                        </router-link>
                    </li>
                    <li v-if="!isLogin">
                        <router-link to="/register">
                            {{$t('message.btn.regist')}}
                        </router-link>
                    </li>
                    <!-- <li v-if="isLogin">
                        <router-link to="/regist">
                            订单
                        </router-link>
                    </li>
                    <li v-if="isLogin">
                        <router-link to="/regist">
                            我的资产
                        </router-link>
                    </li>
                    <li v-if="isLogin">
                        <router-link to="/regist">
                            个人中心
                        </router-link>
                    </li> -->
                    <li v-if="isLogin">
                        <div @click="logout">{{ $t('message.btn.logout') }}</div>
                    </li>
                </ul>
            </div>
        </transition>
        
    </div>
</template>

<script>
export default {
    props: {
        showRegist: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            isLogin: false,
            navShow: false,
            subNavShow: false,
            fixed: false,
            username: '',
            lang: window.localStorage.getItem('lang') || 'en'
        };
    },
    computed:{
        text: function(){
            return this.lang === 'en' ? 'English': '简体中文';
        },
        text1: function() {
            return this.lang === 'en' ? '简体中文': 'English';
        }
    },
    methods: {
        changeNav() {
            this.navShow = !this.navShow;
        },
        changeLang() {
            const val = this.lang === 'en' ? 'zh' : 'en';
            window.localStorage.setItem('lang', val);
            location.reload();
        },
        hideNav() {
            this.navShow = false;
        },
        changeSubNav() {
            this.subNavShow = !this.subNavShow;
        },
        enter (el) {
            el.style.height = 'auto'
            // noinspection JSSuspiciousNameCombination
            let endWidth = window.getComputedStyle(el).height
            el.style.height = '0px'
            el.offsetHeight // force repaint
            // noinspection JSSuspiciousNameCombination
            el.style.height = endWidth;
        },
        afterEnter (el) {
            el.style.height = null
        },
        leave (el) {
            el.style.height = window.getComputedStyle(el).height
            el.offsetHeight // force repaint
            el.style.height = '0px'
        },
        afterLeave (el) {
            el.style.height = null
        },
        scroll (){
            let scrollTop = this.getScrollTop(),
                elem = document.getElementsByClassName('toptips')[0];
            let scrollDistance = elem ? window.getComputedStyle(elem).height.split('px')[0] : 0;
            if(scrollTop > scrollDistance){
                this.fixed = true;
            } else {
                this.fixed = false;
            }
        },
        getScrollTop () {
            return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
        },
        logout () {
            localStorage.removeItem('authorization');
            window.location.reload();
        }
    },
    mounted() {
        if (localStorage.getItem('authorization')) {
            this.isLogin = true;
        }
        if (localStorage.getItem('email')) {
            let username = localStorage.getItem('email'),
                hideStr = username.substring(3, username.length-3);
            this.username = username.replace(hideStr,'****');
        }
        window.addEventListener("scroll", this.scroll, false),
        this.scroll()
    },
    destroyed () {
        window.removeEventListener('scroll', this.scroll)
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/base';
@import '../../style/commom';
#header{
    height: px2rem(50px);
    background-color: $base-color;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    &.fixed{
        position: fixed;
        box-shadow: 0 px2rem(3px) px2rem(9px) 0 rgba($color: #000000, $alpha: 0.25);
    }
    .header-main{
        display: flex;
        justify-content: space-between;
        .icon-logo{
            width: px2rem(90px);
            height: px2rem(18px);
            margin: px2rem(16px) 0 0 px2rem(15px);
        }
        .header-right{
            display: flex;
            justify-content: space-between;
            .regist{
                height: px2rem(30px);
                line-height: px2rem(28px);
                padding: 0 px2rem(12px);
                display: block;
                margin-top: px2rem(10px);
                @include font-dpr(14px);
                text-align: center;
                @include rounded-corners-2;
                border: 1px solid rgba($color: #fff, $alpha: 0.5);
                a{
                    color: #fff;
                    &:hover { 
                        text-decoration:none; 
                    }
                }
            }
            .icon-nav{
                width: px2rem(16px);
                height: px2rem(16px);
                margin: px2rem(17px) px2rem(16px) 0 px2rem(20px);
                display: block;
                .icon-hanbaobao{
                    width: px2rem(16px);
                    height: px2rem(16px);
                    color: #fff;
                }
            }
            .username {
                @include font-dpr(14px);
                // @include overflow-ellipsis;
                @include ta_c;
                width: px2rem(100px);
                color: $white-color;
                margin: px2rem(15px) 0 0 0;
            }
        }
    }
    .nav-wrapper{
        background-color: #fff;
        box-shadow: 0 px2rem(4px) px2rem(11px) 0 rgba($color: #000, $alpha: 0.43);;
        width: 100%;
        transition: height .3s ease-in-out;
        position: absolute;
        left: 0;
        top: px2rem(50px);
        overflow: hidden;
        li{
            // height: px2rem(50px);
            line-height: px2rem(50px);
            border-bottom: 1px solid #E1E2E6;
            text-indent: px2rem(15px);
            color: $black-color;
            @include font-dpr(14px);
            .cur-lan{
                position: relative;
                .icon-xiala{
                    width: px2rem(21px);
                    height: px2rem(14px);
                    position: absolute;
                    right: px2rem(15px);
                    top: px2rem(18px);
                    transition: all .2s ease-in-out;
                    color: $grey-color;
                    transform: rotate(180deg);
                    &.open{
                        transform: rotate(0);
                    }
                }
            }
            .sel-lan{
                color: $grey-color;
                background-color: rgba($color: #E1E2E6, $alpha: 0.5);
                border-top: 1px solid #E1E2E6;
                transition: height .2s ease-in-out;
                overflow: hidden;
            }
            a{
                display: block;
                color: $black-color;
                &:hover { 
                    text-decoration:none; 
                }
            }
        }
    }  
}
</style>
