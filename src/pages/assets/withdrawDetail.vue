<template>
    <div class="withdraw-page">
        <v-header class="header"></v-header>
        <div class="withdraw-page-content">
            <div class="withdraw-page-content-title"><span>ETH</span></div>
            <div class="withdraw-page-content-mian">
                <div class="withdraw-page-content-mian-title">
                    <p class="title">可用资产</p>
                    <p class="withdraw-page-content-mian-title-available">172839.8288 <span>ETH</span> </p>
                </div>
                <div class="withdraw-page-inputwrapper">
                    <p class="title">提现金额</p>
                    <!-- <b-input
                        v-model="withdrawData.amount"
                        class="withdraw-page-input"
                        @input="check()"
                        :verify="amountVerify"/> -->
                    <input type="text" 
                        class="withdraw-page-input pr_1"
                        v-model="withdrawData.amount"
                        @input="check()"
                        :verify="amountVerify">
                    <span class="getAll">全部提出</span>
                    <div class="tips"><span>最小提币数量：40</span><p>手续费：<span>20</span> <span>BAT</span></p></div>
                </div>
                <div class="withdraw-page-inputwrapper">
                    <p class="title">提笔地址</p>
                    <input type="text" class="withdraw-page-input pr_2" readonly>
                    <icon-svg class="icon-xiala" icon-class="xiala" />
                </div>
                <div class="withdraw-page-inputwrapper">
                    <p>谷歌验证</p>
                    <input type="text" class="withdraw-page-input">
                </div>
                <b-button
                    class="withdraw-page-btn"
                    :class="{'enabled': withdrawEnabled}"
                    active="withdraw-page-btn-active"
                    @click="create()"
                    :disabled="!withdrawEnabled">确认提币</b-button>
            </div>
        </div>
        <v-footer></v-footer>
        <v-fixedTools></v-fixedTools>
        <transition name="up-bottom">
            <div class="withdraw-page-create" v-if="showCreate">
                <div class="withdraw-page-create-header">
                    <span>添加新地址</span>
                    <span @click="showCreate = false">x</span>
                </div>
                <div class="withdraw-page-create-main">
                    <div class="withdraw-page-inputwrapper">
                        <p>提币地址</p>
                        <input type="text" class="withdraw-page-input">
                    </div>
                    <div class="withdraw-page-inputwrapper">
                        <p>备注（选填）</p>
                        <input type="text" class="withdraw-page-input">
                    </div>
                    <b-button
                        class="withdraw-page-btn"
                        :class="{'enabled': withdrawEnabled}"
                        active="withdraw-page-btn-active"
                        :disabled="!withdrawEnabled">确定</b-button>
                </div>
            </div>
        </transition>
    </div>
        
</template>

<script>
    import header from '@/components/Header/Header';
    import footer from '@/components/Footer/Footer';
    import fixedTools from '@/components/FixedTools/FixedTools';
    import AssetsTab from '@/components/AssetsTab/AssetsTab';
    import HTTP from '@/api/HttpRequest';
    import Button from "@/components/Button/Button";
    import Input from "@/components/Input/Input";
export default {
    name: 'balance',
    data() {
        return{
            showCreate: false,
            withdrawEnabled: false,
            withdrawData: {
                amount: ''
            }
        }
    },
    components: {
        'v-header': header,
        'v-footer': footer,
        'v-fixedTools': fixedTools,
        "b-button": Button,
        "b-input": Input
    },
    methods: {
        check() {
            console.log(11)
            if (this.withdrawData.amount) {
                this.withdrawEnabled = true;
            }
        },
        amountVerify(data){
            console.log(data);
        },
        create(){
            this.showCreate = true;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/base';
    @import '../../style/commom';
.withdraw-page{
    color: $black-color;
    height: 100%;
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
        &-mian{
            padding: 0 px2rem(20px) px2rem(32px) px2rem(20px);
            border-bottom: 1px solid #F0F0F2;
            @include font-dpr(14px);
            &-title{
                @include ta_c;
                margin: px2rem(24px) 0;
                color: $c-333;
                &-available{
                    color: $black-color;
                    @include font-dpr(20px);
                }
            }
        }
    }
    &-create{
        background-color: #fff;
        position: fixed;
        z-index: 9999;
        height: 100%;
        width: 100%;
        left: 0;
        bottom: 0;
        &-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: px2rem(50px);
            padding: 0 px2rem(16px);
            background-color: $base-color;
            @include font-dpr(18px);
            color: $white-color;
        }
        &-main{
            padding: px2rem(24px) px2rem(20px) px2rem(32px) px2rem(20px);
        }
    }
    &-inputwrapper{
        color: $c-333;
        margin-bottom: px2rem(24px);
        position: relative;
        .title{
            height: px2rem(20px);
            line-height: px2rem(20px);
        }
        .tips{
            display: flex;
            height: px2rem(18px);
            line-height: px2rem(18px);
            justify-content: space-between;
            margin-top: px2rem(6px);
            color: #9EA7B4;
            @include font-dpr(12px);
        }
        .getAll{
            color: $base-color;
            height: px2rem(44px);
            line-height: px2rem(44px);
            padding: 0 px2rem(16px) 0 px2rem(5px);
            position: absolute;
            right: 0;
            top: px2rem(27px);
        }
        .icon-xiala{
            width: px2rem(14px);
            height: px2rem(14px);
            color: #9EA7B4;
            transform: rotate(180deg);
            position: absolute;
            right: px2rem(16px);
            top: px2rem(42px);
        }
    }
    &-input{
        display: block;
        width: 100%;
        padding: px2rem(10px);
        margin-top: px2rem(8px);
        border: none;
        color: $c-333;
        -webkit-appearance: none;
        background: #F7F8FA;
        height: px2rem(44px);
        line-height: px2rem(22px);
        border: 1px solid #E1E2E6;
        @include rounded-corners-2;
        &.pr_1{
            padding-right: px2rem(84px);
        }
        &.pr_2{
            padding-right: px2rem(40px);
        }
    }
    &-btn {
        @include ta_c;
        @include font-dpr(16px);
        color: $white-color;
        width: 100%;
        height: px2rem(42px);
        line-height: px2rem(42px);
        background-color: #172b4d;
        opacity: 0.2;
        &-active {
            opacity: 0.7 !important;
        }
        &.enabled {
            opacity: 1;
            background-color: #006ce1;
        }
    }
}
.up-bottom-enter-active, .up-bottom-leave-active {
    transition: all .3s ease;
}
.up-bottom-enter {
    opacity: 0;
    transform: translateY(100%);
}
.up-bottom-leave-to{
    opacity: 0;
    transform: translateY(100%);
}
</style>
