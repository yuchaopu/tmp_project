<template>
    <div id="header">
        <div class="header-main">
            <div class="logo">
                <router-link to="/">
                    <icon-svg class="icon-logo" icon-class="logo" />
                </router-link>
                
            </div>
            
            <div class="header-right">
                <div class="regist">
                    <router-link to="/demopage">{{ $t('message.btn.regist') }}</router-link>
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
                            简体中文
                        </div>
                        <transition name="lan-toggle"
                                    v-on:enter="enter"
                                    v-on:after-enter="afterEnter"
                                    v-on:leave="leave"
                                    v-on:after-leave="afterLeave">
                            <div class="sel-lan" v-show="subNavShow">
                                English
                            </div>
                        </transition>
                    </li>
                    <li>
                        币币交易
                    </li>
                    <li>
                        白皮书
                    </li>
                    <li>
                        公告中心
                    </li>
                    <li>
                        登录
                    </li>
                    <li>
                        免费注册
                    </li>
                </ul>
            </div>
        </transition>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            navShow: false,
            subNavShow: false
        };
    },
    methods: {
        changeNav() {
            this.navShow = !this.navShow;
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
            var endWidth = window.getComputedStyle(el).height
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
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/base';
@import '../../style/commom';
#header{
    height: px2rem(50px);
    background-color: $base-color;
    position: relative;
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
                display: inline-block;
                margin-top: px2rem(10px);
                @include font-dpr(14px);
                text-align: center;
                @include rounded-corners-2;
                border: 1px solid rgba($color: #fff, $alpha: 0.5);
                a{
                    color: #fff;
                }
            }
            .icon-nav{
                width: px2rem(16px);
                height: px2rem(16px);
                margin: px2rem(17px) px2rem(16px) 0 px2rem(20px);
                display: inline-block;
                .icon-hanbaobao{
                    width: px2rem(16px);
                    height: px2rem(16px);
                    color: #fff;
                }
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
            @include font-dpr(14px);
            .sel-lan{
                color: #6B798E;
                background-color: rgba($color: #E1E2E6, $alpha: 0.5);
                transition: height .2s ease-in-out;
                overflow: hidden;
            }
        }
    }  
}
</style>
