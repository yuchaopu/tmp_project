<template>
    <div id="CheckMial" class="check-page">
        <div class="check-page-content">
            <div class="check-page-content-text">
                <!-- {{$t('message.content.email1') + routerData.email + ',' + $t('message.content.email2')}} -->
                您好，{{routerData.email}} <br><br>
                感谢您注册BitMax<br>
                请您激活BitMax账号以完整体验功能
            </div>
            <b-button
                class="check-page-content-btn enabled"
                active="check-page-content-btn-active"
                @click="send()">发送邮件</b-button>
            <div class="check-page-content-text2">
                如果您误收此邮件，请自动忽略或者联系客服。
            </div>
                 
        </div>
       
    </div>
</template>

<script>
import Button from '@/components/Button/Button';
import HTTP from '@/api/HttpRequest';
export default {
    data() {
        return{
            mail: '',
            routerData: this.$route.params.data || {}
        }
    },
    beforeCreate() {
        if (!this.$route.params.data || !this.$route.params.data.email) {
            // this.$router.push({
            //     path: "/home"
            // });
        }
    },
    methods: {
        send() {
            if (!this.checkEnabled || this.time > 0) {
                return;
            }
            this.checkEnabled = false;
            let that = this;
            HTTP[that.routerData.url](that.routerData.submitData).then(function(res) {
                that.time = 60;
                that.timer();
            }, function(errMessage) {
                that.checkEnabled = true;
                that.time = 0;
                that.$Toast.error({
                    text: (errMessage && errMessage.response && errMessage.response.data &&  errMessage.response.data.msg) || that.$t("message.err.err"),
                    duration: 1500
                });
            });
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

