<template>
    <div id="footer">
        <icon-svg class="icon-logo" icon-class="logo" />
        <ul>
            <li>
                {{$t('message.btn.announcements')}}
            </li>
            <li>
                {{$t('message.btn.help')}}
            </li>
            <li>
                {{$t('message.btn.termService')}}
            </li>
            <li>
                {{$t('message.btn.privacyPolicy')}}
            </li>
            <li>
                {{$t('message.btn.disclaimer')}}
            </li>
            <li>
                {{$t('message.btn.fees')}}
            </li>
            <li>
                {{$t('message.btn.apidoc')}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
@import '../../style/base';
@import '../../style/commom';
#footer{
    background-color: $black-color;
    padding: px2rem(40px) 0 px2rem(30px);;
    @include ta_c;
    color: #fff;
    @include font-dpr(16px);
    .icon-logo{
        width: px2rem(112px);
        height: px2rem(22px);
    }
    ul{
        margin-top: px2rem(10px);
        li{
            margin-top: px2rem(30px);;
        }
    }
}
</style>
