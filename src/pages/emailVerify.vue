<template>
    <div id="CheckMial" class="check-page">
        <div class="check-page-content">
            <div class="check-page-content-text">
                {{$t('message.word.hello')}}，{{email}} <br><br>
                {{$t('message.content.email4')}}<br>
                {{$t('message.content.email5')}}
            </div>
            <b-button
                v-show='canClick === true'
                class="check-page-content-btn enabled"
                active="check-page-content-btn-active"
                @click='sendEmail'>{{$t('message.btn.sendEmail')}}</b-button>
                <b-button
                v-show='canClick === false'
                class="check-page-content-btn"
                active="check-page-content-btn-active">发送邮件&nbsp;{{timeId ? `(${time}S)` : ''}}</b-button>
            <div class="check-page-content-text2">
                {{$t('message.content.email3')}}
            </div>
        </div>
    </div>
</template>
<script>
import Button from '@/components/Button/Button';
import HTTP from '@/api/HttpRequest';
export default {
    data () {
        return {
            email: '',
            code: '',
            time: 30,
            timeId: '',
            email: '',
            emailDone: false,
            canClick: true
        }
    },
    mounted () {
        this.email = this.$route.query.email
        this.code = this.$route.query.code
        this.sendVerifyEmail()
    },
    methods: {
         reduceTime() {
            this.timeId = setInterval(() => {
                if(this.time === 0) {
                    clearInterval(this.timeId);
                    this.timeId = '';
                    this.time = 30;
                    this.emailDone = false;
                    this.canClick = true
                    return false;
                }
                this.time--
            }, 1000)
        },
        sendEmail() {
            if(!this.emailDone) {
                this.reduceTime();
                let that = this;
                HTTP.sendVerificationEmail({email: this.$route.query.email}).then(res => {
                    that.emailDone = true;
                    that.$Toast.success({
                        text: that.$t('message.tip.tip2'),
                        autoClose: true,
                        duration: 1500
                    });
                    that.canClick = false;
                }, function(errMessage) {
                    that.$Toast.error({
                        text:
                        (errMessage &&
                            errMessage.response &&
                            errMessage.response.data &&
                            errMessage.response.data.msg) ||
                        that.$t("message.err.err"),
                        duration: 1500
                    });
                })
            } else {
                this.canClick = false
            }
        },
        sendVerifyEmail () {
            let that = this;
            if (this.email != '' && this.code != '' && /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.email)) {
                HTTP.verifyClientEmail({email: this.email, code: this.code}).then(res => {
                    that.$Toast.success({
                        text: that.$t('message.tip.tip1'),
                        autoClose: true,
                        duration: 1500
                    });
                    that.$router.push('/login')
                })
            }
        }
    },
    computed: {
        text: function () {
            return this.time > 0 ? this.$t('message.btn.again') + '('+ this.time + 's)' : this.$t('message.btn.again');
        }
    },
    components: {
        'b-button': Button
    }
}
</script>

<style lang="scss" scoped>
@import '../style/base';
@import '../style/commom';
.check-page{
    width: 100%;
    height: 100%;
    background-color: $white-color;
    display: flex;
    justify-content: center;
    // flex-direction: column;
    align-items: center;
    &-content{
        &-icon.email_icon{
            width: px2rem(64px);
            height: px2rem(48px);
            color: #006CE1;
            line-height: px2rem(20px);
        }
        &-text{
            color: $black-color;
            @include font-dpr(14px);
            margin-top: px2rem(20px);
            line-height: px2rem(20px);
        }
        &-btn{
            @include ta_c;
            @include font-dpr(16px);
            color: $white-color;
            width: 100%;
            height: px2rem(42px);
            line-height: px2rem(42px);
            background-color: #172B4D;
            margin: px2rem(40px) auto px2rem(30px);
            opacity: .2;
            &-active {
                opacity: .7!important;
            }
            &.enabled {
                opacity: 1;
                background-color: #006CE1;
            }
        }
    }
        
}
</style>

