<template>
    <div class="balance-page">
        <v-header class="header"></v-header>
        <v-tab class="balance-page-tab"></v-tab>
        <div class="balance-page-total">
            <div class="balance-page-total-top">
                <p class="balance-page-total-top-title">总资产</p>
                <p class="balance-page-total-top-coin"><span>0</span><span>USD</span>≈<span> 0.0000 </span><span>BTC</span></p>
            </div>
            <div class="balance-page-total-percentage">
                <div class="balance-page-total-percentage-item">
                    <div class="type">BTC</div>
                    <div class="percentage">
                        <span style="width: 50%"></span>
                    </div>
                    <div class="name">
                        ≈ <span>400</span> USD
                    </div>
                </div>
                <div class="balance-page-total-percentage-item">
                    <div class="type">Others</div>
                    <div class="percentage">
                        <span style="width: 20%"></span>
                    </div>
                    <div class="name">
                        ≈ <span>400</span> USD
                    </div>
                </div>
            </div>
        </div>

        <div class="balance-page-list">
            <div class="balance-page-list-btn">
                <icon-svg class="icon-select" icon-class="weixuanzhong" />
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
.balance-page{
    &-tab{
        margin-top: px2rem(50px);
    }
    &-total{
        background: $white-color;
        box-shadow: 0 px2rem(2px) px2rem(10px) 0 rgba(153,153,153,0.20);
        &-top{
            border-bottom: 1px solid #F0F0F2;
            padding: px2rem(24px) px2rem(16px);
            &-title{
                @include font-dpr(18px);
                margin-bottom: px2rem(5px);
            }
            &-coin{
                @include font-dpr(20px);
            }
        }
        &-percentage{
            padding: px2rem(24px) px2rem(16px);
            @include font-dpr(14px);
            color: $black-color;
            &-item{
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-bottom: px2rem(2px);
                .type{
                    width: px2rem(44px);
                }
                .percentage{
                    flex: 1;
                    height: px2rem(10px);
                    margin: 0 px2rem(17px) 0 px2rem(10px);
                    span{
                        height: px2rem(10px);
                        display: block;
                        border-radius: px2rem(5px);
                        background-color: #FFA716;
                    }
                }
            }

        }
    }
    &-list{

        &-btn{
            .icon-select{
                width: px2rem(16px);
                height: px2rem(16px);
            }
        }
    }
}
</style>
