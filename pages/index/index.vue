<template>
    <view class="home-box">
        <view class="home-box__header">
            <image src="http://pic12.secooimg.com/comment/18/10/e98a45cca4de4c489b6619d4f1d225eb.GIF" />
        </view>
        <view class="home-box__toptic">
            <view class="home-box__titem"></view>
            <view class="home-box__titem"></view>
            <view class="home-box__titem"></view>
        </view>
        <view class="home-box__foor">
            <image src="http://pic12.secooimg.com/comment/18/10/09e4974b34814bcaaf0ba8564066bbc4.jpg"/>
        </view>
        <view class="home-box__ad">
            <image src="http://pic12.secooimg.com/comment/18/10/f353b01042a146768ff0a809845a96e7.jpg" />
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
        image {
                width: 100%;
                height: 100%
            }
        &__header {
            height: 487rpx;
        }
        &__toptic {
            height: 223rpx;
            background: #fad19d url('http://pic12.secooimg.com/comment/18/10/c27648c6948f407c8bd158193cddc5ae.jpg') no-repeat;
            background-size: contain;
            padding: 0 40rpx;
            display: flex;
        }
        &__titem {
            flex: 1;
            height: 167rpx;
            transition: all .3s;
            &:active {
                background-color: #f9f9f9;
                opacity: .75;
            }
        }
        &__ad {
           height: 243rpx;
        }
        &__foor{
           height: 170rpx;
        }
    }
</style>
