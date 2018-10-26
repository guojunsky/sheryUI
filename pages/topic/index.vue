<template>
    <view class="home-box">
        <view class="home-box__header">
            <image src="http://pic12.secooimg.com/comment/18/10/74582396550942dc8d2743578df4ff67.jpg" />
        </view>
        <swiper
            indicator-dots="{{indicatorDots}}"
            autoplay="{{autoplay}}"
            interval="{{interval}}"
            duration="{{duration}}"
            circular="{{circular}}"
            previous-margin="100px"
            next-margin="100px"
        >
            <block wx:for="{{imgUrls}}">
                <swiper-item>
                    <image src="{{item}}" class="slide-image"/>
                </swiper-item>
            </block>
        </swiper>
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
            nickName: 'shery 优雅',
            imgUrls: [
                'http://pic12.secooimg.com/comment/18/10/98551076cc07423ab9fa52d21b06105f.jpg',
                'http://pic12.secooimg.com/comment/18/10/ac919a296e464fe48ffca39f0ec84623.jpg',
                'http://pic12.secooimg.com/comment/18/10/f80306edb28041d380b42f37cacb89d6.jpg'
            ],
            circular: true,
            indicatorDots: false,
            autoplay: false,
            interval: 5000,
            duration: 1000
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
        // height: 100%;
        margin: 0;
    }
    
    .home-box {
        background-color: #fad19d;
        &__header {
            height: 300rpx;
            image {
                width: 100%;
                height: 100%;
            }
        }
        swiper {
            height: 800rpx;
            image {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
