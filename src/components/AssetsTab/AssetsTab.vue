<template>
    <div id="AssetsTab" class="tab-component">
        <nav>
            <div class="tab-component-wrapper">
                <router-link class="tab-component-wrapper-item" :class="{active: item.path === $route.path}" v-for="(item, index) in tabList" :key="index" :to="{path: item.path}">
                    <span >{{item.name}}</span> 
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                tabList: [
                    {
                        name: '账户余额',
                        path: '/assets/balance'
                    },
                    {
                        name: '冲币',
                        path: '/assets/recharge'
                    },
                    {
                        name: '提币',
                        path: '/assets/withdraw'
                    },
                    {
                        name: '转账记录',
                        path: '/assets/record'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/base';
@import '../../style/commom';
.tab-component{
    height: px2rem(70px);
    background-color: $base-color;
    &-wrapper{
        width: px2rem(375px);
        &-item{
            display: inline-block;
            margin: 0 px2rem(17px);
            border-bottom: px2rem(3px) solid $base-color;
            padding: px2rem(18px) 0;
            color: rgba($color: $white-color, $alpha: 0.7);
            &:hover{
                text-decoration: none;
            }
            &.active{
                color: $white-color;
                border-color: $white-color;
            }
        }
    }
}
</style>
