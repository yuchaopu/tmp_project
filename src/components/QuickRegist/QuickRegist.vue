<template>
    <div id="QuickRegist">
        <input type="text" :placeholder="$t('message.placeholder.mail')" v-model="registMail">
        <button @click="regist()" ref="button">{{$t('message.btn.regist')}}<icon-svg class="icon-tiaozhuan" icon-class="tiaozhuan" /></button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                registMail: "",
                active: 'active'
            }
        },
        mounted() {
            this.attatchTouch();
        },
        computed: {
            activeClass() {
                return ' ' + this.active;
            }
        },
        methods: {
            attatchTouch() {
                this.$refs.button.ontouchstart = () => {
                    this.$refs.button.className += this.activeClass;
                }
                this.$refs.button.ontouchend = () => {
                    this.$refs.button.className = this.$refs.button.className.split(this.activeClass)[0];
                }
            },
            regist() {
                if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.registMail)) {
                    this.$Toast.error({
                        text: '请输入正确的邮箱地址',
                        duration: 1500
                    });
                } else {
                    this.$router.push({
                        name: 'Regist',
                        params: {
                            email: this.registMail
                        }
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/base';
@import '../../style/commom';
#QuickRegist{
    width: px2rem(305px);
    margin: 0 auto;
    input {
        width: px2rem(305px);
        height: px2rem(44px);
        line-height: px2rem(24px);
        padding: px2rem(10px);
        @include font-dpr(16px);
        border: 1px solid rgba($color: #fff, $alpha: 0.6);
        background: transparent;
        -webkit-appearance: none;
        color: #fff;
        &::-webkit-input-placeholder{
            color: rgba($color: #fff, $alpha: 0.6);
        }
        &:focus{
            border-color: #fff;
        }
        @include rounded-corners-2;
    }
    button{
        width: px2rem(305px);
        height: px2rem(44px);
        line-height: px2rem(44px);
        margin-top: px2rem(20px);
        @include font-dpr(16px);
        color: $base-color;
        background: #FFFFFF;
        border: none;
        @include rounded-corners-2;
        @include ta_c;
        &.active{
            opacity: 0.5!important;
        }
        .icon-tiaozhuan{
            width: px2rem(16px);
            height: px2rem(12px);
            margin-left: px2rem(10px);
            margin-top: px2rem(-2px);
            @include va-middle;
        }
    }
}
</style>

