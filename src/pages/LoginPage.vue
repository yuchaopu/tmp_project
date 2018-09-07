<template>
    <div class="login-page">
        <v-header class="login-page-header" :show-regist="false" />
        <div class="login-page-content">
            <div class="login-page-content-title">{{ $t('message.title.login') }}</div>
            <div class="login-page-content-form">
                <b-input
                    v-model="loginData.email"
                    class="login-page-content-form-input"
                    icon="email_icon"
                    :placeholder="$t('message.placeholder.registMail')"
                    :verify="emailVerify"/>
                <b-input
                    v-model="loginData.passd"
                    class="login-page-content-form-input login-page-gap-top_20"
                    icon="password_icon"
                    type="password"
                    :placeholder="$t('message.placeholder.registPassd')"
                    :verify="passdVerify"/>
            </div>
            <b-button
                class="login-page-content-btn"
                :class="{'enabled': loginEnabled}"
                active="login-page-content-btn-active"
                @click = "submit()"
                :disabled="!loginEnabled">{{ $t('message.content.registLogin') }}</b-button>
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
import HTTP from '@/api/HttpRequest';
export default {
    data() {
        return {
            loginEnabled: false,
            submiting: false,
            loginData: {
                email: '',
                passd: ''
            },
            loginValidata: {
                email: false,
                passd: false
            }
        }
    },
    computed: {
        submitFormData: function() {
            return {
                email: this.loginData.email,
                password: this.loginData.passd
            };
        }
    },
    methods: {
        check() {
            if (this.loginValidata.email && this.loginValidata.passd) {
                this.loginEnabled = true;
            }
        },
        emailVerify(data) {
            this.loginValidata.email = false;
            this.loginEnabled = false;
            if (!data) {
                return this.$t('message.verify.notEmpty', {
                    key: this.$t('message.placeholder.registMail')
                });
            }
            if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(data)) {
                return this.$t('message.verify.registEmail');
            }
            this.loginValidata.email = true;
            this.check();
            return false;
        },
        passdVerify(data) {
            this.loginValidata.passd = false;
            this.loginEnabled = false;
            if (!data) {
                return this.$t('message.verify.notEmpty', {
                    key: this.$t('message.placeholder.registPassd')
                });
            }
            if ((data + '').length < 8) {
                return this.$t('message.verify.emailMinLength')
            }
            this.loginValidata.passd = true;
            this.check();
        },
        submit() {
            if (!this.loginEnabled || this.submiting) {
                return;
            }
            this.loginEnabled = false;
            this.submiting = true;
            let that = this;
            HTTP.login(this.submitFormData).then(function(res) {
                alert("看他有没有设置谷歌登陆，没设置就直接到首页,设置了就到谷歌验证");
            }, function(errMessage) {
                that.$Toast.error({
                    text: (errMessage && errMessage.response && errMessage.response.data &&  errMessage.response.data.msg) || that.$t("message.err.err"),
                    duration: 1500
                });
                that.loginEnabled = true;
                that.submiting = false;
            })
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
