<template>
    <div class="recharge-page">
        <v-header class="header"></v-header>
        <v-tab class="recharge-page-tab"></v-tab>
        
        <v-footer></v-footer>
        <v-fixedTools></v-fixedTools>
    </div>
</template>

<script>
    import header from '@/components/Header/Header';
    import footer from '@/components/Footer/Footer';
    import fixedTools from '@/components/FixedTools/FixedTools';
    import AssetsTab from '@/components/AssetsTab/AssetsTab';
    import HTTP from '@/api/HttpRequest';
export default {
    name: 'balance',
    components: {
        'v-header': header,
        'v-footer': footer,
        'v-fixedTools': fixedTools,
        'v-tab': AssetsTab
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/base';
    @import '../../style/commom';
.recharge-page{
    &-tab{
        margin-top: px2rem(50px);
    }
}
</style>
