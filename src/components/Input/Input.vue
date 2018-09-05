<template>
    <div
        class="b-input"
        :class="{'verify-error': !verifyPass}">
        <icon-svg
            v-if="icon"
            class="b-input-icon"
            :icon-class="icon"/>
        <input
            class="b-input-ipt"
            :class="{'with-icon': icon}"
            :placeholder="placeholder"
            @input="onInput($event)"
            :type="type">
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
            verifyPass: true
        }
    },
    methods: {
        onInput(e) {
            this.$emit('input', e.target.value);

            let result = this.verify(e.target.value);

            if (typeof result === 'boolean') {
                this.verifyPass = result;
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
    border: 1px solid #E1E2E6;
    @include rounded-corners-2;
    transition: .2s;
    transition-property: border;
    &.verify-error {
        border-color: #F05253;
    }

    &-icon {
        position: absolute;
        height: px2rem(16px);
        width: px2rem(16px);
        margin: px2rem(13px);
    }

    &-ipt {
        width: 100%;
        height: px2rem(42px);
        border: none;
        &:focus {
            outline: none;
        }
        &.with-icon {
            padding: 0 px2rem(10px) 0 px2rem(42px);
        }
    }
}
</style>
