<template>
<view class="shery-swiper">
    <swiper autoplay previous-margin="{{50}}" circular bindchange="handleChange" next-margin="{{70}}">
        <block wx:for="{{vs}}" wx:for-index="idx">
            <swiper-item class="{{idx<current || (idx===vs.length-1 && current===0)?'shery-swiper__item--l':''}}">
                <view class="shery-swiper__item  {{idx===current?'active':''}}">
                    <view class="img">
                        <image src="{{item.img}}" />
                    </view>
                    <view class="title">
                        {{item.title}}
                    </view>
                    <view class="dot"></view>
                    <view class="desc">
                        {{item.desc}}
                    </view>
                </view>
            </swiper-item>
        </block>
    </swiper>
</view>
</template>

<script>
const {
    shery
} = global;
const {
    SheryComponent
} = shery;
/**
 * 轮播业务组件
 */
SheryComponent({
    props: {
        list: {
            type: Array,
            value: []
        }
    },
    data: {
        vs: [
            '//pic12.secooimg.com/comment/18/10/44f30b2101ca443e83397197f1671f73.jpg',
            '//pic12.secooimg.com/comment/18/10/e3a0e174d8274042a1942bc0415829e9.jpg',
            '//pic12.secooimg.com/comment/18/10/1b1ea29248cd418cb36bb704be5994f4.jpg',
            '//pic12.secooimg.com/comment/18/10/9bbdba32ba1a4c07ad1c9c753f4e974b.jpg',
            '//pic12.secooimg.com/comment/18/10/db9540c29c574556836a3c06e0c737d1.jpg',
            '//pic12.secooimg.com/comment/18/10/44f30b2101ca443e83397197f1671f73.jpg',
            '//pic12.secooimg.com/comment/18/10/e3a0e174d8274042a1942bc0415829e9.jpg',
            '//pic12.secooimg.com/comment/18/10/1b1ea29248cd418cb36bb704be5994f4.jpg',
            '//pic12.secooimg.com/comment/18/10/9bbdba32ba1a4c07ad1c9c753f4e974b.jpg',
            '//pic12.secooimg.com/comment/18/10/db9540c29c574556836a3c06e0c737d1.jpg'
        ].map(it => ({
            img: it,
            title: 'GUCCI单肩包',
            desc: '定金500元抵5000元'
        })),
        current: 0
    },
    methods: {
        handleChange(e) {
            //   console.log(current);
            this.store.data.current = e.detail.current;
            this.store.update();
        }
    }
});
</script>

<style lang="scss">
.shery-swiper {
    height: 700rpx;
    background-image: url('https://pic12.secooimg.com/comment/18/10/28658e4fb1684c7a9565953b8fb8d2d1.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    swiper {
        height: 100%;
    }
    swiper-item {
        height: 100%;
        display: flex;
        align-items: center;
        // justify-content: center;
    }
    image {
        width: 100%;
        height: 100%;
    }
    &__item {
        height: 100%;
        padding: 10px;
        //  display: flex;
        //  align-items: center;
        // background-color: #fff;
        transition: all .2s;
        -webkit-transform: translateZ(0);
        width: 480rpx;
        height: 428rpx;
        // height: 320rpx;
        
        &--l {
            justify-content: flex-end;
            // margin-right: 30rpx;
        }
        .img {
            height: 320rpx;
            width: 100%;
            background-color: #fff;
            image {
                height: 100%;
            }
        }
        .title {
            background-color: #fff;
            text-align: center;
            font-size: 36rpx;
            // height: 80rpx;
            line-height: 80rpx;
        }
        .desc {
            background-color: #fff;
            text-align: center;
            font-size: 28rpx;
            padding-bottom: 20rpx;
        }
        &.active {
            width: 480rpx;
            height: 612rpx;
            .img {
                height: 460rpx;
                width: 100%;
                background-color: #fff;
                image {
                    height: 100%;
                }
            }
            .title {
                font-size: 44rpx;
                // height: 100rpx;
                // line-height: 100rpx;
                line-height: 1;
                padding: 24rpx 40rpx;
            }
            .desc {
                background-color: #fff;
                font-size: 32rpx;
                padding-bottom: 30rpx;
            }
        }
    }
}
</style>