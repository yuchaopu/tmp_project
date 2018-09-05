<template>
    <div id="homePage">
        <div class="toptips">
            <icon-svg class="icon-gonggao_icon" icon-class="gonggao_icon" />
            <p>公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符</p>
            <span>(8-24)</span>
        </div>
        <v-header></v-header>
        <div class="banner">
            <p class="slogan">
                BitMax<br>We Know Exchange
            </p>
            <v-quickRegist>
            </v-quickRegist>
            <div class="swiper">

            </div>
        </div>
    </div>
    
</template>
<script>
    import header from '@/components/Header/Header';
    import quickRegist from '@/components/QuickRegist/QuickRegist';
    export default {
        name: 'Home',
        components: {
            'v-header': header,
            'v-quickRegist': quickRegist
        }
    }
</script>
<style lang="scss" scoped>
    @import '../style/base';
    @import '../style/commom';
    .toptips{
        height: px2rem(30px);
        background: #004FA4;
        display: flex;
        justify-content: space-between;
        color: #fff;
        line-height: px2rem(30px);
        @include font-dpr(12px);
        .icon-gonggao_icon {
            width: px2rem(16px);
            height: px2rem(14px);
            margin: px2rem(8px) px2rem(16px) 0 px2rem(16px);
        }
        p {
            width: px2rem(248px);
            flex: 1;
            @include overflow-ellipsis;
        }
        span {
            margin: 0 px2rem(16px);
        }
    }
    .banner{
        background-color: $base-color; 
        height: px2rem(642px);
        border-radius: 0 0 200px 200px/0 0 50px 50px;
        position: relative;
        .slogan{
            @include ta_c;
            font-size: px2rem(32px);
            color: #fff;
            padding: px2rem(80px) 0;
        }
    }
</style>

