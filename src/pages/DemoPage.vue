<template>
    <div class="demo-page">
        <div class="demo-page-title">{{ $t('message.title') }}</div>

        <b-btn
            class="demo-page-btn"
            active="demo-page-btn-hover"
            @click="regist">{{ $t('message.btn.regist') }}</b-btn>
    </div>
</template>

<script>
import Button from '@/components/Button/Button'

export default {
    methods: {
        regist(e) {
            console.log(e);
        }
    },
    components: {
        'b-btn': Button
    }
}
</script>

<style lang="scss" scoped>
@import '../style/base';
@import '../style/commom';
.demo-page {
    &-title {
        @include font-dpr(28px);
    }

    &-btn {
        height: px2rem(30px);
        width: px2rem(78px);
        @include font-dpr(14px);
        text-align: center;
        line-height: px2rem(30px);
        border: 1px solid #fff;
        border-radius: px2rem(2px);
        background-color: #006CE1;
        color: #fff;
        &-hover {
            color: #006CE1;
            background-color: #fff;
        }
    }
}
</style>