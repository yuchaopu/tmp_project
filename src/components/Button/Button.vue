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
                this.$el.className += this.activeClass;
            }
            this.$el.ontouchend = () => {
                this.$el.className = this.$el.className.split(this.activeClass)[0];
            }
        },
        buttonClick(e) {
            this.$emit('click', e);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
