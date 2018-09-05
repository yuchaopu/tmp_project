<template>
    <div id="footer">
        <icon-svg class="icon-logo" icon-class="logo" />
        <ul>
            <li>
                公告中心
            </li>
            <li>
                帮助中心
            </li>
            <li>
                服务协议
            </li>
            <li>
                隐私协议
            </li>
            <li>
                免责声明
            </li>
            <li>
                费率标准
            </li>
            <li>
                API接入
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
