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
        margin-bottom: px2rem(70px);
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
    }
}
</style>
