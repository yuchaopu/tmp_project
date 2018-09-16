<template>
    <div class="record-page">
        <v-header class="header"></v-header>
        <v-tab class="record-page-tab"></v-tab>
        <div class="record-page-content">
            <div class="record-page-content-tab">
                <span class="record-page-content-tab-title">类型</span>
                <div class="record-page-content-tab-options">
                    <span class="record-page-content-tab-options-item record-page-content-tab-options-current"><icon-svg class="icon-select" icon-class="xuanzhong" />充币记录</span>
                    <span class="record-page-content-tab-item"><icon-svg class="icon-select" icon-class="xuanzhong" />提币记录</span>
                </div>
            </div>
            <div class="record-page-content-main">
                <div>
                    <ul>
                        <li class="record-page-content-main-item">
                            <div>
                                <p><span>BTC</span>   <span>40,234.12345678</span></p>
                                <span class="record-page-content-main-item-time">08/18/18 23:00:27</span>
                            </div>
                            <span class="success">
                                充币成功
                            </span>
                        </li>
                        <li class="record-page-content-main-item">
                            <div>
                                <p><span>BTC</span>   <span>40,234.12345678</span></p>
                                <span class="record-page-content-main-item-time">08/18/18 23:00:27</span>
                            </div>
                            <span class="fail">
                                充币失败
                            </span>
                        </li>
                        <li class="record-page-content-main-item">
                            <div>
                                <p><span>BTC</span>   <span>40,234.12345678</span></p>
                                <span class="record-page-content-main-item-time">08/18/18 23:00:27</span>
                            </div>
                            <span class="wait">
                                等待处理
                            </span>
                        </li>
                    </ul>
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
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/base';
    @import '../../style/commom';
.record-page{
    color: $black-color;
    &-tab{
        margin-top: px2rem(50px);
    }
    &-content{
        background-color: $white-color;
        // margin-bottom: px2rem(70px);
        &-tab{
            padding: 0 px2rem(16px);
            box-shadow: 0 px2rem(2px) px2rem(10px) 0 rgba(153,153,153,0.20);
            line-height: px2rem(60px);
            display: flex;
            align-items: center;
            @include font-dpr(14px);
            &-title{
                margin-right: px2rem(40px);
            }
            &-options{
                color: $grey-color;
                .icon-select{
                    width: px2rem(16px);
                    height: px2rem(16px);
                    margin-right: px2rem(6px);
                }
                &-item{
                    margin-right: px2rem(30px);
                }
                &-current{
                    color: $base-color;
                }
            }
        }
        &-main{
            &-item{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: px2rem(10px) px2rem(16px);
                color: $black-color;
                border-bottom: 1px solid #F0F0F2;
                p{
                    @include font-dpr(14px);
                    line-height: px2rem(20px);
                }
                &-time{
                    @include font-dpr(10px);
                    color: $grey-color;
                }
                .success{
                    color: #34A753;
                }
                .fail{
                    color: #F05253;
                }
                .wait{
                    color: #F5A623;
                }
            }
        }
    }
}
</style>
