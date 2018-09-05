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
                <i class="icon icon-nav"></i>
            </div>
        </div>
        <nav>
            
        </nav> 
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../style/base';
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
                // @include font-dpr(14px);
                font-size: px2rem(14px);
                text-align: center;
                @include rounded-corners-2;
                border: 1px solid rgba(255, 255, 255, .5);
                a{
                    color: #fff;
                }
            }
            .icon-nav{
                width: px2rem(16px);
                height: px2rem(16px);
                margin: px2rem(17px) px2rem(16px) 0 px2rem(20px);
                display: inline-block;
                background: url(../../assets/images/icon-nav@2x.png) center center/px2rem(16px) px2rem(16px) no-repeat;
            }
        }
    }
        
}
</style>
