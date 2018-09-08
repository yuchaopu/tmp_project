<template>
    <div id="wx" class="wx">
        <v-header class="header"></v-header>
        <div class="content">
            <img src="../assets/images/Bitmap@2x.png" alt="">
            <p>{{$t('message.content.wxText')}}</p>
        </div>
        <v-footer></v-footer>
        <v-fixedTools></v-fixedTools>
    </div>
</template>

<script>
import header from "@/components/Header/Header";
import footer from "@/components/Footer/Footer";
import fixedTools from "@/components/FixedTools/FixedTools";
export default {
    components: {
        'v-header': header,
        'v-footer': footer,
        'v-fixedTools': fixedTools
    },
};
</script>

<style lang="scss" scoped>
@import "../style/base";
@import "../style/commom";
.wx{
    .content{
        padding: px2rem(100px) px2rem(20px) px2rem(40px);
        @include font-dpr(14px);
        @include ta_c;
        color: $black-color;
        line-height: px2rem(22px);
        img{
            width: px2rem(212px);
            height: px2rem(212px);
            display: block;
            margin: 0 auto px2rem(20px);
        }
    }
}
</style>
