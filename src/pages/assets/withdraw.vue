<template>
    <div class="withdraw-page">
        <v-header class="header"></v-header>
        <v-tab class="withdraw-page-tab"></v-tab>
        <div class="withdraw-page-content" v-if="false">
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
        <div class="withdraw-page-verifyContent">
            <icon-svg class="icon-jinggao" icon-class="jinggao" />
            <p>提币操作需要谷歌验证，请前往 bitmax.io 完成谷歌验证</p>
            <p>提币操作需要先提交身份认证第一步信息，请前往 bitmax.io 完成身份验证</p>
            <p>提币操作需要谷歌验证及身份认证第一步信息请前往 bitmax.io 完成验证</p>
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
    &-verifyContent{
        @include ta_c;
        @include font-dpr(14px);
        padding: px2rem(56px) px2rem(34px) px2rem(100px);
        .icon-jinggao{
            width: px2rem(52px);
            height: px2rem(52px);
            line-height: px2rem(24px);
            margin-bottom: px2rem(56px);
        }
    }
}
</style>
