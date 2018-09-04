<template>
    <div id="app">
        <div class="toptips">
            <svg class="icon icon-gonggao_icon" aria-hidden="true">
                <use xlink:href="#icon-gonggao_icon"></use>
            </svg>
            <p>公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符</p>
            <span>(8-24)</span>
        </div>
        <v-header></v-header>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-logo_"></use>
        </svg>
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

<style lang="scss">
@import './style/base.scss';
#app {
    .toptips{
        height: px2rem(30px);
        background: #004FA4;
        display: flex;
        
        color: #fff;
        line-height: px2rem(30px);
        .icon-gonggao_icon {
            width: px2rem(16px);
            height: px2rem(14px);
            margin: px2rem(8px) px2rem(16px) 0 px2rem(16px);
        }
        p{
            width: px2rem(248px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-right: px2rem(16px);
        }
    }
    
}
</style>
