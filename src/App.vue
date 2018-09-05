<template>
    <div id="app">
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
@import './style/base';
@import './style/commom';
#app {
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
    
}
</style>
