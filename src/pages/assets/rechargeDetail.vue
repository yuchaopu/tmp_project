<template>
    <div class="recharge-page">
        <v-header class="header"></v-header>
        <div class="recharge-page-content">
            <div class="recharge-page-content-title"><span>ETH</span></div>
            <div class="recharge-page-content-top">
                <div class="recharge-page-content-top-title"><span>ETH</span> 充币地址</div>
                <input type="text" class="recharge-page-content-top-input" readonly value="0ssfabcs7234006533ns7s89sff00sf7f8v9v8s">
                <b-button
                class="recharge-page-content-top-btn"
                active="recharge-page-content-top-btn-active">复制地址</b-button>
            </div>
            <div class="recharge-page-content-qrcode">
                <p>使用钱包扫码支付</p>
                <img src="../../assets/images/Bitmap@2x.png" alt="">
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
    import Button from "@/components/Button/Button";
export default {
    name: 'balance',
    components: {
        'v-header': header,
        'v-footer': footer,
        'v-fixedTools': fixedTools,
        "b-button": Button
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/base';
    @import '../../style/commom';
.recharge-page{
    color: $black-color;
    &-content{
        margin-top: px2rem(50px);
        background-color: $white-color;
        &-title{
            padding: 0 px2rem(16px);
            box-shadow: 0 px2rem(2px) px2rem(10px) 0 rgba(153,153,153,0.20);
            line-height: px2rem(56px);
            @include font-dpr(18px);
            display: flex;
            align-items: center;
        }
        &-top{
            padding: 0 px2rem(20px) px2rem(32px) px2rem(20px);
            border-bottom: 1px solid #F0F0F2;
            @include font-dpr(14px);
            @include ta_c;
            &-title{
                margin: px2rem(24px) 0;
                color: $c-333;
            }
            &-input{
                display: block;
                width: 100%;
                padding: 0 px2rem(10px);
                border: none;
                color: #9EA7B4;
                @include ta_c;
                -webkit-appearance: none;
                background: #F7F8FA;
                height: px2rem(44px);
                line-height: px2rem(44px);
                @include rounded-corners-2;
            }
            &-btn {
                @include ta_c;
                @include font-dpr(16px);
                color: $white-color;
                width: 100%;
                height: px2rem(42px);
                line-height: px2rem(42px);
                margin-top: px2rem(16px);
                opacity: 1;
                background-color: #006ce1;
                &-active {
                    opacity: 0.7 !important;
                }
            }
        }
        &-qrcode{
            @include ta_c;
            @include font-dpr(14px);
            color: $c-333;
            padding: px2rem(32px) 0 px2rem(70px) 0;
            img{
                width: px2rem(120px);
                height: px2rem(120px);
                padding-top: px2rem(24px);
            }
        }
    }
}
</style>
