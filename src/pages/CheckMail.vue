<template>
    <div id="CheckMial" class="check-page">
        <div class="check-page-content">
            <icon-svg icon-class="email_icon" class="check-page-content-icon email_icon"></icon-svg>
            <div class="check-page-content-text">
                验证电子邮件已发送到{{mail}}，请检查此电子邮件以完成验证。
            </div>
            <b-button
                class="check-page-content-btn"
                :class="{'enabled': checkEnabled}"
                active="check-page-content-btn-active"
                @click="again()"
                :disabled="!checkEnabled">{{ text }}</b-button>
                 
        </div>
       
    </div>
</template>

<script>
import Button from '@/components/Button/Button';
export default {
    data() {
        return{
            mail: this.$route.params.email || '1@12.com',
            checkEnabled: false,
            time: 60
        }
    },
    mounted() {
        this.timer();
    },
    methods: {
        timer: function () {
            if (this.time > 0) {
                this.time--;
                this.checkEnabled = this.time == 0;
                setTimeout(this.timer, 1000);
            }
        },
        again() {
            if (!this.checkEnabled) {
                return;
            }
            this.time = 5;
            this.timer();
        }
    },
    computed: {
        text: function () {
            // return this.time > 0 ? this.time + 's 后重新获取' : '获取验证码';
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
    @include ta_c;
    display: flex;
    justify-content: center;
    // flex-direction: column;
    align-items: center;
    &-content{
        &-icon.email_icon{
            width: px2rem(64px);
            height: px2rem(48px);
            color: #006CE1;
        }
        &-text{
            color: $black-color;
            @include font-dpr(14px);
            padding: 0 px2rem(40px);
            margin-top: px2rem(20px);
            line-height: px2rem(20px);
        }
        &-btn{
            @include ta_c;
            @include font-dpr(16px);
            color: $white-color;
            width: px2rem(200px);
            height: px2rem(42px);
            line-height: px2rem(42px);
            background-color: #172B4D;
            margin: px2rem(100px) auto 0;
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

