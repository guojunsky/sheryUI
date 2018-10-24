<template>
<view class="home-box">
  <view class="home-box__header">
    <image src="http://pic12.secooimg.com/comment/18/10/e98a45cca4de4c489b6619d4f1d225eb.GIF" />
  </view>
</view>
</template>

<script>
import store from '../../store';
const {
    util,
    shery
} = global;
const {
    SheryPage
} = shery;

SheryPage(store, {
    data: {
        nickName: 'shery 优雅'
    },
    onLoad() {
        console.log('观察当前对象', this, shery)
    },
    handle() {
        wx.navigateTo({
            url: '/shiku/pages/home/index'
        });
    },
    onPullDownRefresh() {
        setTimeout(() => {
            wx.stopPullDownRefresh();
        }, 1000);
    }
});
</script>

<style lang="scss">
page {
    height: 100%;   
}
.home-box {
    height: 100%;
    background-color: #fad19d;
    &__header{
       height: 487rpx;
       image{
         width: 100%;
         height: 100%;
       }
    }
}

.header {
    background-color: #1890ff;
    display: flex;
    width: 100%;
    height: 180rpx;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 700;
    font-size: 32rpx;
}
</style>
