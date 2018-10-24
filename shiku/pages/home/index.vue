<template>
<view>彻底</view>
</template>

<script>
const {
    shery
} = global;
const {
    SheryPage
} = shery;
SheryPage(getApp().globalData.store, {
    data: {
        nickName: '当前页面'
    }
});
</script>

<style lang="scss">
.container {
    height: 100%;
    background-color: #e7e7e7
}
</style>
