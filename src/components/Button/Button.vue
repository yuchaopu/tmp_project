<template>
    <div
        class="b-btn"
        @click="buttonClick($event)">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        hover: {
            type: String,
            default: () => ''
        },
        active: {
            type: String,
            default: () => ''
        },
        disabled: {
            type: Boolean,
            default: false
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
            this.$el.ontouchstart = () => {
                if (!this.disabled) {
                    this.$el.className += this.activeClass;
                }
            }
            this.$el.ontouchend = () => {
                if (!this.disabled) {
                    this.$el.className = this.$el.className.split(this.activeClass)[0];
                }
            }
        },
        buttonClick(e) {
            this.$emit('click', e);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/base';
@import '../../style/commom';
.b-btn {
    @include rounded-corners-2;
}
</style>
