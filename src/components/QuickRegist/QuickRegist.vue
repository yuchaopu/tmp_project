<template>
    <div id="QuickRegist">
        <input type="text" placeholder="输入邮箱地址" v-model="registMail">
        <button @click = "regist()">免费注册<icon-svg class="icon-tiaozhuan" icon-class="tiaozhuan" /></button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                registMail: ""
            }
        },
        methods: {
            regist() {
                if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.registMail)) {
                    alert("注意你的邮箱格式")
                } else {
                    alert('跳转到注册页面')
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
        font-size: px2rem(16px);
        border: 1px solid rgba(255,255,255,.6);
        background: transparent;
        color: #fff;
        &::-webkit-input-placeholder{
            color: rgba(255,255,255,.6);
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
        font-size: px2rem(16px);
        color: $base-color;
        background: #FFFFFF;
        border: none;
        @include rounded-corners-2;
        @include ta_c;
        &:active,&:hover{
            opacity: 0.5;
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

