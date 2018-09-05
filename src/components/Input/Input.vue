<template>
    <div class="b-input">
        <icon-svg
            v-if="icon"
            class="b-input-icon"
            :icon-class="icon"/>
        <input
            class="b-input-ipt"
            :class="{'with-icon': icon, 'verify-error': !verifyPass}"
            :placeholder="placeholder"
            @input="onInput($event)"
            :type="type">
        <div v-if="errorText" class="b-input-error-text">{{ errorText }}</div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: [String, Number, Boolean]
        },
        type: {
            type: String,
            default: 'text'
        },
        icon: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        verify: {
            type: Function,
            default: () => ''
        }
    },
    data() {
        return {
            verifyPass: true,
            errorText: ''
        }
    },
    methods: {
        onInput(e) {
            this.$emit('input', e.target.value);

            let result = this.verify(e.target.value);

            if (result) {
                this.verifyPass = false;
                this.errorText = result;
            } else {
                this.verifyPass = true;
                this.errorText = '';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/base';
@import '../../style/commom';
.b-input {
    width: 100%;

    &-icon {
        position: absolute;
        height: px2rem(16px);
        width: px2rem(16px);
        margin: px2rem(13px);
    }

    &-ipt {
        width: 100%;
        -webkit-appearance: none;
        height: px2rem(42px);
        border: 1px solid #E1E2E6;
        @include rounded-corners-2;
        transition: .2s;
        transition-property: border;
        &.verify-error {
            border-color: #F05253!important;
        }
        &:focus {
            outline: none;
            border-color: #006CE1;
        }
        &.with-icon {
            padding: 0 px2rem(10px) 0 px2rem(42px);
        }
    }

    &-error-text {
        @include font-dpr(12px);
        margin: px2rem(14px) 0 0 px2rem(39px);
        color: #F05253;
    }
}
</style>
