<template>
    <div class="withdraw-page">
        <v-header class="header"></v-header>
        <v-tab class="withdraw-page-tab"></v-tab>
        <div class="withdraw-page-content">
            <div class="withdraw-page-content-title">选择币种</div>
            <div class="withdraw-page-content-list">
                <ul>
                    <li>
                        <i class="coin-icon"></i>
                        <router-link to="/assets/withdrawDetail"  class="coin-name">
                            <p>ETH</p>
                            <icon-svg class="icon-xiala" icon-class="xiala" />
                        </router-link>
                    </li>
                    <li>
                        <i class="coin-icon"></i>
                        <router-link to="/assets/withdrawDetail"  class="coin-name">
                            <p>ETH</p>
                            <icon-svg class="icon-xiala" icon-class="xiala" />
                        </router-link>
                    </li>
                    <li>
                        <i class="coin-icon"></i>
                        <router-link to="/assets/withdrawDetail"  class="coin-name">
                            <p>ETH</p>
                            <icon-svg class="icon-xiala" icon-class="xiala" />
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <v-footer></v-footer>
        <v-fixedTools></v-fixedTools>
    </div>
</template>

<script>
    import header from '@/components/Header/Header';
    import footer from '@/components/Footer/Footer';
    import fixedTools from '@/components/FixedTools/FixedTools';
    import AssetsTab from '@/components/AssetsTab/AssetsTab';
    import HTTP from '@/api/HttpRequest';
export default {
    name: 'balance',
    components: {
        'v-header': header,
        'v-footer': footer,
        'v-fixedTools': fixedTools,
        'v-tab': AssetsTab
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/base';
    @import '../../style/commom';
.withdraw-page{
    color: $black-color;
    &-tab{
        margin-top: px2rem(50px);
    }
    &-content{
        background-color: $white-color;
        margin-bottom: px2rem(70px);
        &-title{
            padding: 0 px2rem(16px);
            box-shadow: 0 px2rem(2px) px2rem(10px) 0 rgba(153,153,153,0.20);
            line-height: px2rem(56px);
            @include font-dpr(18px);
        }
        &-list{
            li{
                height: px2rem(52px);
                .coin-name{
                    color: $c-333;
                    flex: 1;
                    border-bottom: 1px solid #eee;
                    height: px2rem(52px);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 px2rem(18px);
                    &:hover{
                        text-decoration: none;
                    }
                    .icon-xiala{
                        width: px2rem(14px);
                        height: px2rem(14px);
                        transform: rotate(90deg);
                        color: #9EA7B4;
                    }
                }
                &:last-child{
                    .coin-name{
                        border: none;
                    }
                }
            }
        }
    }
}
</style>
