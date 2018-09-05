<template>
    <div id="homePage">
        <div class="toptips">
            <icon-svg class="icon-gonggao_icon" icon-class="gonggao_icon" />
            <p>公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符</p>
            <span>(8-24)</span>
        </div>
        <v-header></v-header>
        <div class="banner">

        </div>
    </div>
    
</template>
<script>
    import header from '@/components/Header/Header';
    export default {
        name: 'Home',
        components: {
            'v-header': header
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
    }
</style>

