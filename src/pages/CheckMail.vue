<template>
    <div id="CheckMial" class="check-page">
        <div class="check-page-content">
            <icon-svg icon-class="email_icon" class="check-page-content-icon email_icon"></icon-svg>
            <div class="check-page-content-text">
                {{$t('message.content.email1') + routerData.email + ',' + $t('message.content.email2')}}
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
import HTTP from '@/api/HttpRequest';
export default {
    data() {
        return{
            mail: '',
            checkEnabled: false,
            routerData: this.$route.params.data || {},
            time: 60
        }
    },
    beforeCreate() {
        if (!this.$route.params.data || !this.$route.params.data.email) {
            this.$router.push({
                path: "/home"
            });
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

