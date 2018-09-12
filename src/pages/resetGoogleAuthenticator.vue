<template>
    <div class="reset-page">
        <v-header class="reset-page-header" :show-regist="false" />
        <div class="reset-page-content">
            <div class="reset-page-content-title">
                重置谷歌验证
            </div>
            <div class="reset-page-content-example">
                <div class="reset-page-content-example-img">

                </div>
                <div class="reset-page-content-example-text">
                    如果您已备份过谷歌16位密钥，可以通过密钥快速找回谷歌验证，无需重置。<a href="#">详细教程 » </a>
                </div>
            </div>
            <div class="reset-page-content-select">
                <div class="reset-page-content-select-item">
                    <icon-svg class="reset-page-content-select-item-safe icon" icon-class="safe"></icon-svg>
                    <div class="reset-page-content-select-item-text">
                        重置操作会导致您的账户失去谷歌验证的保护，请确保您的邮箱及登录密码安全，并在重置成功后立刻重新绑定谷歌验证，以免造成损失。
                    </div>
                    <div class="reset-page-content-select-item-radio" @click="check(1)">
                        <icon-svg class="icon" icon-class="weixuanzhong" v-if="!resetData.check_1"></icon-svg>
                        <icon-svg class="icon" icon-class="xuanzhong" v-if="resetData.check_1"></icon-svg>
                    </div>
                </div>
                <div class="reset-page-content-select-item">
                    <icon-svg class="reset-page-content-select-item-safe icon" icon-class="safe"></icon-svg>
                    <div class="reset-page-content-select-item-text">
                        重置流程需人工审核，将花费2日以上时间，完成重置后48小时内禁止提现。
                    </div>
                    <div class="reset-page-content-select-item-radio" @click="check(2)">
                        <icon-svg class="icon" icon-class="weixuanzhong" v-if="!resetData.check_2"></icon-svg>
                        <icon-svg class="icon" icon-class="xuanzhong" v-if="resetData.check_2"></icon-svg>
                    </div>
                </div>
            </div>
            <b-button
                class="reset-page-content-btn"
                :class="{'enabled': resetEnabled}"
                active="reset-page-content-btn-active"
                :disabled="!resetEnabled">{{ $t('message.btn.reset') }}</b-button>
        </div>
    </div>
    
</template>

<script>
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button'

export default {
    data() {
        return {
            resetEnabled: false,
            resetData: {
                check_1: false,
                check_2: false,
            }
        }
    },
    methods: {
        check(index){
            this.resetData['check_' + index] = !this.resetData['check_' + index];
            this.resetEnabled = this.resetData.check_1 && this.resetData.check_2;
        }
    },
    components: {
        'v-header': Header,
        'b-input': Input,
        'b-button': Button
    }
}
</script>

<style lang="scss" scoped>
@import '../style/base';
@import '../style/commom';
.reset-page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    &-header {
        width: 100%;
        flex-grow: 0;
        z-index: 2;
    }

    &-content {
        width: 100%;
        flex-grow: 1;
        background-color: $white-color;
        padding: px2rem(20px) 0;
        margin-top: px2rem(50px);
        &-title {
            @include font-dpr(16px);
            border-bottom: 1px solid #E1E2E6;
            color: $black-color;
            padding: 0 0 px2rem(20px) px2rem(15px);
        }
        &-example{
            padding: px2rem(20px) px2rem(15px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #E1E2E6;
            &-img{
                width: px2rem(190px);
                height: px2rem(190px);
                background: url(../assets/images/reset-example@2x.png) center center/px2rem(215px) px2rem(206px) no-repeat;
            }
            &-text{
                @include font-dpr(14px);
                line-height: px2rem(22px);
                flex: 1;
                margin-left: px2rem(10px);
                a {
                    text-decoration: underline;
                    color: #0082FE;
                }
            }
        }
        &-select{
            &-item{
                padding: px2rem(20px) px2rem(15px);
                border-bottom: 1px solid #E1E2E6;
                display: flex;
                justify-content: space-between;
                align-items: center;
                &-safe.icon{
                    width: px2rem(18px);
                    height: px2rem(20px);
                }
                &-text{
                    flex: 1;
                    @include font-dpr(14px);
                    margin: 0 px2rem(30px) 0 px2rem(20px);
                    line-height: px2rem(22px);
                }
                &-radio{
                    .icon{
                        width: px2rem(18px);
                        height: px2rem(18px);
                    }
                }
            }
        }
        &-form {
            margin: px2rem(30px) 0 px2rem(20px);
            &-input {
                @include font-dpr(14px);
            }
        }
        &-btn {
            margin: px2rem(30px) auto px2rem(20px);
            @include ta_c;
            @include font-dpr(16px);
            color: $white-color;
            width: px2rem(350px);
            height: px2rem(42px);
            line-height: px2rem(42px);
            background-color: #172B4D;
            opacity: .2;
            &-active {
                opacity: .7!important;
            }
            &.enabled {
                opacity: 1;
                background-color: #006CE1;
            }
        }
        &-footer {
            @include font-dpr(12px);
            color: #A8ACB9;
            display: flex;
            justify-content: space-between;
            flex-direction: row-reverse;
            &-login {
                color: #006CE1;
            }
        }
    }
    &-gap-top_20 {
        margin-top: px2rem(20px);
    }
}
</style>
