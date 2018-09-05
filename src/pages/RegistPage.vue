<template>
    <div class="regist-page">
        <v-header class="regist-page-header" :show-regist="false" />
        <div class="regist-page-content">
            <div class="regist-page-content-title">{{ $t('message.title.regist') }}</div>
            <div class="regist-page-content-form">
                <b-input
                    v-model="registData.email"
                    class="regist-page-content-form-input"
                    icon="email_icon"
                    :placeholder="$t('message.placeholder.registMail')"
                    :verify="emailVerify"/>
                <b-input
                    v-model="registData.passd"
                    class="regist-page-content-form-input regist-page-gap-top_20"
                    icon="password_icon"
                    type="password"
                    :placeholder="$t('message.placeholder.registPassd')"
                    :verify="passdVerify"/>
                <b-input
                    v-model="registData.passdConf"
                    class="regist-page-content-form-input regist-page-gap-top_20"
                    icon="password_icon"
                    type="password"
                    :placeholder="$t('message.placeholder.registPassdConf')"
                    :verify="passdConfVerify"/>
                <b-input
                    v-model="registData.recommend"
                    class="regist-page-content-form-input regist-page-gap-top_20"
                    icon="referral_icon"
                    :placeholder="$t('message.placeholder.registRecommend')"/>
            </div>
            <b-button
                class="regist-page-content-btn"
                :class="{'enabled': registEnabled}"
                active="regist-page-content-btn-active"
                :disabled="!registEnabled">{{ $t('message.btn.registBtn') }}</b-button>
            <div class="regist-page-content-footer regist-page-gap-top_20">
                <div>
                    {{ $t('message.content.registText1') }}
                    <router-link class="regist-page-content-footer-login" to="/demopage">{{ $t('message.content.registLogin') }}</router-link>
                </div>
                <div class="regist-page-gap-top_10">
                    {{ $t('message.content.registText2') }}
                    {{ contact }}
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
            contact: 'support@bitmax.io',
            registEnabled: true,
            registData: {
                email: 'test@163.com',
                passd: '',
                passdConf: '',
                recommend: ''
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
        },
        passdConfVerify(data) {
            if (!data) {
                return this.$t('message.verify.notEmpty', {
                    key: this.$t('message.placeholder.registPassdConf')
                });
            }

            if (data !== this.registData.passd) {
                return this.$t('message.verify.passdNotUnify');
            }
            return false;
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
.regist-page {
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
            &-login {
                color: #006CE1;
            }
        }
    }

    &-gap-top_10 {
        margin-top: px2rem(10px);
    }
    &-gap-top_20 {
        margin-top: px2rem(20px);
    }
}
</style>
