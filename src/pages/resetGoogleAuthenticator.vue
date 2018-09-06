<template>
    <div class="reset-page">
        <v-header class="reset-page-header" :show-regist="false" />
        <div class="reset-page-content">
            <b-button
                class="reset-page-content-btn"
                :class="{'enabled': resetEnabled}"
                active="reset-page-content-btn-active"
                :disabled="!resetEnabled">{{ $t('message.btn.sure') }}</b-button>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button'

export default {
    data() {
        return {
            resetEnabled: false,
            resetData: {
                google: ''
            }
        }
    },
    methods: {
        
    },
    components: {
        'v-header': Header,
        'b-input': Input,
        'b-button': Button
    }
}
</script>

<style lang="scss" scoped>
@import '../style/base';
@import '../style/commom';
.reset-page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    &-header {
        width: 100%;
        flex-grow: 0;
        z-index: 2;
    }

    &-content {
        width: 100%;
        flex-grow: 1;
        background-color: $white-color;
        padding: px2rem(30px) px2rem(20px);
        margin-top: px2rem(50px);
        &-title {
            @include font-dpr(30px);
            font-weight: 300;
        }
        &-form {
            margin: px2rem(30px) 0 px2rem(20px);
            &-input {
                @include font-dpr(14px);
            }
        }
        &-btn {
            @include ta_c;
            @include font-dpr(16px);
            color: $white-color;
            width: 100%;
            height: px2rem(42px);
            line-height: px2rem(42px);
            background-color: #172B4D;
            opacity: .2;
            &-active {
                opacity: .7!important;
            }
            &.enabled {
                opacity: 1;
                background-color: #006CE1;
            }
        }
        &-footer {
            @include font-dpr(12px);
            color: #A8ACB9;
            display: flex;
            justify-content: space-between;
            flex-direction: row-reverse;
            &-login {
                color: #006CE1;
            }
        }
    }
    &-gap-top_20 {
        margin-top: px2rem(20px);
    }
}
</style>
