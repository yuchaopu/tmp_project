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
                    ref="child1"
                    :placeholder="$t('message.placeholder.registMail')"
                    :verify="emailVerify"/>
                <b-input
                    v-model="registData.passd"
                    class="regist-page-content-form-input regist-page-gap-top_20"
                    icon="password_icon"
                    ref="child2"
                    type="password"
                    :placeholder="$t('message.placeholder.registPassd')"
                    :verify="passdVerify"/>
                <b-input
                    v-model="registData.passdConf"
                    class="regist-page-content-form-input regist-page-gap-top_20"
                    icon="password_icon"
                    type="password"
                    ref="child3"
                    :placeholder="$t('message.placeholder.registPassdConf')"
                    :verify="passdConfVerify"/>
                <b-input
                    v-model="registData.inviteCode"
                    class="regist-page-content-form-input regist-page-gap-top_20"
                    icon="referral_icon"
                    :placeholder="$t('message.placeholder.registRecommend')"/>
            </div>
            <b-button
                class="regist-page-content-btn"
                :class="{'enabled': registEnabled}"
                active="regist-page-content-btn-active"
                @click="submit()"
                :disabled="!registEnabled">{{ $t('message.btn.registBtn') }}</b-button>
            <div class="regist-page-content-footer regist-page-gap-top_20">
                <div>
                    {{ $t('message.content.registText1') }}
                    <router-link class="regist-page-content-footer-login" to="/login">{{ $t('message.content.registLogin') }}</router-link>
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
import Button from '@/components/Button/Button';
import HTTP from '@/api/HttpRequest';
export default {
    data() {
        return {
            contact: 'support@bitmax.io',
            registEnabled: true,
            submiting: false,
            registData: {
                email: this.$route.params.email || '',
                passd: '',
                passdConf: '',
                inviteCode: ''
            },
            registValidata: {
                email: false,
                passd: false,
                passdConf: false
            }
        }
    },
    computed: {
        submitFormData: function() {
            return {
                email: this.registData.email,
                password: this.registData.passd,
                inviteCode: this.registData.inviteCode
            };
        }
    },
    methods: {
        emailVerify(data) {
            this.registValidata.email = false;
            if (!data) {
                return this.$t('message.verify.notEmpty', {
                    key: this.$t('message.placeholder.registMail')
                });
            }
            if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(data)) {
                return this.$t('message.verify.registEmail');
            }
            this.registValidata.email = true;
            return false;
        },
        passdVerify(data) {
            this.registValidata.passd = false;
            if (!data) {
                return this.$t('message.verify.notEmpty', {
                    key: this.$t('message.placeholder.registPassd')
                });
            }
            if ((data + '').length < 8) {
                return this.$t('message.verify.emailMinLength')
            }
            this.registValidata.passd = true;
        },
        passdConfVerify(data) {
            this.registValidata.passdConf = false;
            if (!data) {
                return this.$t('message.verify.notEmpty', {
                    key: this.$t('message.placeholder.registPassdConf')
                });
            }
            if (data !== this.registData.passd) {
                return this.$t('message.verify.passdNotUnify');
            }
            this.registValidata.passdConf = true;
            return false;
        },
        check() {
            this.$refs.child1.outVerify(this.registData.email);
            this.$refs.child2.outVerify(this.registData.passd);
            this.$refs.child3.outVerify(this.registData.passdConf);
            if (!this.registValidata.email || !this.registValidata.passd || !this.registValidata.passdConf) {
                return false;
            }
            return true;
        },
        submit() {
            if (!this.check() || !this.registEnabled || this.submiting) {
                return;
            }
            this.registEnabled = false;
            this.submiting = true;
            let that = this;
            HTTP.regist(this.submitFormData).then(function(res) {
                alert("跳转到发送邮箱页面");
                this.$router.push({
                    name: 'checkMail',
                    params: {
                        email: this.registData.email
                    }
                });
            }, function(errMessage) {
                that.$Toast.error({
                    text: '请求错误',
                    duration: 1500
                });
                that.registEnabled = true;
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
