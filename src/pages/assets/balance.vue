<template>
    <div class="balance-page">
        <v-header class="header"></v-header>
        <v-tab class="balance-page-tab"></v-tab>
        <div class="balance-page-total">
            <div class="balance-page-total-top">
                <p class="balance-page-total-top-title">总资产估值</p>
                <p class="balance-page-total-top-coin"><span>0</span> <span>USD</span> ≈ <span>0.0000</span> <span>BTC</span></p>
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
                <icon-svg class="icon-select" icon-class="weixuanzhong" /><icon-svg class="icon-select" icon-class="xuanzhong" />隐藏小额资产
            </div>
            <div class="balance-page-list-item">
                <div class="balance-page-list-item-name">
                    <span>EOS</span> · <span>Ethereum</span>
                </div>
                <div class="balance-page-list-item-hold">
                    <p class="value">0.123456789</p>
                    <p class="exchange">≈ <span>0.0000</span> <span>BTC</span></p>
                    <div class="balance">
                        <p><span class="title">可用余额：</span><span>7,891.12345678</span></p>
                        <p><span class="title">冻结：</span><span>7,891.12345678</span></p>
                    </div>
                </div>
                <div class="balance-page-list-item-control">
                    <div class="recharge balance-page-list-item-control-btn">提币</div>
                    <div class="withdraw balance-page-list-item-control-btn">充币</div>
                </div>
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
    },
    mounted() {
        HTTP.getAllBalance().then(res => {
            debugger;
            // this.showBalance = res.data;
            // this.showBalance.forEach(function (item, index, array) {
            //     if (item.btcValue == undefined) {
            //     item.btcValue = '--';
            //     }
            // });
        })
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
        color: $black-color;
        @include font-dpr(14px);
        &-btn{
            padding: px2rem(16px);
            .icon-select{
                width: px2rem(16px);
                height: px2rem(16px);
                margin-right: px2rem(8px);
            }
        }
        &-item{
            padding: px2rem(16px) 0 0;
            margin: 0 px2rem(16px) px2rem(16px) ;
            background: $white-color;
            border: 1px solid #F0F0F2;
            box-shadow: 0 px2rem(2px) px2rem(10px) 0 rgba(153,153,153,0.20);
            border-radius: px2rem(4px);
            &-name{
                padding: 0 px2rem(16px);
                @include font-dpr(16px);
            }
            &-hold{
                padding: 0 px2rem(16px) px2rem(16px);
                .value{
                    color: #34A753;
                    @include font-dpr(36px);
                    line-height: px2rem(50px);
                }
                .exchange{
                    @include font-dpr(12px);
                }
                .balance{
                    margin-top: px2rem(16px);
                    @include font-dpr(14px);
                    .title{
                        color: #6B798E;
                    }
                }
            }
            &-control{
                border-top: 1px solid #F0F0F2;
                display: flex;
                line-height: px2rem(50px);
                color: $base-color;
                &-btn{
                    width: 50%;
                    @include ta_c;
                    &.recharge{
                        border-right: 1px solid #F0F0F2;
                    }
                }
            }
        }
    }
}
</style>
