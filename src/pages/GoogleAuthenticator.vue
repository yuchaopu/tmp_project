<template>
    <div class="verify-page">
        <v-header class="verify-page-header" :show-regist="false" />
        <div class="verify-page-content">
            <div class="verify-page-content-title">{{ $t('message.title.googleAuthenticator') }}</div>
            <div class="verify-page-content-form">
                <b-input
                    v-model="verifyData.google"
                    class="verify-page-content-form-input"
                    :verify="googlelVerify"/>
            </div>
            <b-button
                class="verify-page-content-btn"
                :class="{'enabled': verifyEnabled}"
                active="verify-page-content-btn-active"
                :disabled="!verifyEnabled">{{ $t('message.btn.sure') }}</b-button>
            <div class="verify-page-content-footer verify-page-gap-top_20">
                <div class="">
                    <router-link class="verify-page-content-footer-login" to="/resetgoogleauthenticator">{{ $t('message.content.verifyText1') }}</router-link>
                </div>
            </div>
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
            verifyEnabled: false,
            verifyData: {
                google: ''
            }
        }
    },
    methods: {
        googlelVerify(data) {
            if (!data) {
                return this.$t('message.verify.notEmpty', {
                    key: this.$t('message.placeholder.registMail')
                });
            }
            if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(data)) {
                return this.$t('message.verify.registEmail');
            }
            return false;
        },
        passdVerify(data) {
            if (!data) {
                return this.$t('message.verify.notEmpty', {
                    key: this.$t('message.placeholder.registPassd')
                });
            }
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
.verify-page {
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
        padding: px2rem(30px) px2rem(20px);
        margin-top: px2rem(50px);
        &-title {
            @include font-dpr(30px);
            font-weight: 300;
        }
        &-form {
            margin: px2rem(30px) 0 px2rem(20px);
            &-input {
                @include font-dpr(14px);
            }
        }
        &-btn {
            @include ta_c;
            @include font-dpr(16px);
            color: $white-color;
            width: 100%;
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
