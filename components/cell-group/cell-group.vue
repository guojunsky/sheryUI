<template>
<view class="custom-class shery-cell-group {{ border ? 'shery-hairline--top-bottom' : '' }}">
    <slot />
</view>
</template>
<script>
const {
    shery
} = global;
const SheryComponent = shery.SheryComponent;

SheryComponent({
    props: {
        border: {
            type: Boolean,
            value: true
        }
    }
})
</script>
<style lang="scss">
@import '../../style/var.scss';
@import '../../style/hairline.scss';
</style>
