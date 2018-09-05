<template>
    <div id="app">
        <div class="toptips">
            <icon-svg class="icon-gonggao_icon" icon-class="gonggao_icon" />
            <p>公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符</p>
            <span>(8-24)</span>
        </div>
        <v-header></v-header>
        <router-view />
    </div>
</template>

<script>
import header from './components/Header/Header.vue';
export default {
    name: 'App',
    components: {
      'v-header': header
    }
}
</script>

<style lang="scss" scoped>
@import './style/base.scss';
#app {
    .toptips{
        height: px2rem(30px);
        background: #004FA4;
        display: flex;
        justify-content: space-between;
        color: #fff;
        line-height: px2rem(30px);
        font-size: px2rem(12px);
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
    
}
</style>
