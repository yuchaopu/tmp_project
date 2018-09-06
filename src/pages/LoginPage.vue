<template>
    <div class="login-page">
        <v-header class="login-page-header" :show-regist="false" />
        <div class="login-page-content">
            <div class="login-page-content-title">{{ $t('message.title.login') }}</div>
            <div class="login-page-content-form">
                <b-input
                    v-model="registData.email"
                    class="login-page-content-form-input"
                    icon="email_icon"
                    :placeholder="$t('message.placeholder.registMail')"
                    :verify="emailVerify"/>
                <b-input
                    v-model="registData.passd"
                    class="login-page-content-form-input login-page-gap-top_20"
                    icon="password_icon"
                    type="password"
                    :placeholder="$t('message.placeholder.registPassd')"
                    :verify="passdVerify"/>
            </div>
            <b-button
                class="login-page-content-btn"
                :class="{'enabled': registEnabled}"
                active="login-page-content-btn-active"
                :disabled="!registEnabled">{{ $t('message.content.registLogin') }}</b-button>
            <div class="login-page-content-footer login-page-gap-top_20">
                <div>
                    {{ $t('message.content.loginText1') }}
                    <router-link class="login-page-content-footer-login" to="/regist">{{ $t('message.content.loginText2') }}</router-link>
                </div>
                <div class="">
                    <router-link class="login-page-content-footer-login" to="/forgetpassword">{{ $t('message.content.loginText3') }}</router-link>
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
            registEnabled: true,
            registData: {
                email: '',
                passd: ''
            }
        }
    },
    methods: {
        emailVerify(data) {
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
.login-page {
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
