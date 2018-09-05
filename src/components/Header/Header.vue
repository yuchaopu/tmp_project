<template>
    <div id="header">
        <icon-svg class="icon-logo" icon-class="logo" />

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../style/base';
#header{
    height: px2rem(50px);
    background-color: $base-color;
    .icon-logo{
        width: px2rem(90px);
        height: px2rem(18px);
        margin: px2rem(16px) 0 0 px2rem(15px);
    }
}
</style>
