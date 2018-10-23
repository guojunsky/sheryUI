<template>
<view class="shery-loading custom-class" style="width: {{ size }}; height: {{ size }}">
    <view class="shery-loading__spinner shery-loading__spinner--{{ type }}" style="color: {{ color }};">
        <view wx:if="{{ type === 'spinner' }}" wx:for="item in 12" wx:key="{{ index }}" class="shery-loading__dot" />
    </view>
</view>
</template>

<script>
const {
    shery
} = global;
const {
    SheryComponent
} = shery;

SheryComponent({
    props: {
        size: {
            type: String,
            value: '30px'
        },
        type: {
            type: String,
            value: 'circular'
        },
        color: {
            type: String,
            value: '#c9c9c9'
        }
    }
})
</script>

<style lang="scss">
@import '../../style/var.scss';

.shery-loading {
    z-index: 0;
    font-size: 0;
    line-height: 0;
    position: relative;
    display: inline-block;
    vertical-align: middle;

    &__spinner {
        z-index: -1;
        width: 100%;
        height: 100%;
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        animation: shery-rotate 0.8s linear infinite;

        &--spinner {
            animation-timing-function: steps(12);
        }

        &--circular {
            border: 1px solid;
            border-radius: 100%;
            border-color: currentColor;
            border-top-color: transparent;
        }
    }

    &__dot {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;

        &::before {
            width: 2px;
            height: 25%;
            content: ' ';
            display: block;
            margin: 0 auto;
            border-radius: 40%;
            background-color: currentColor;
        }
    }
}

@for $i from 1 to 12 {
    .shery-loading__dot:nth-of-type(#{$i}) {
        opacity: calc(1 - (0.75 / 12) * (#{$i} - 1));
        transform: rotate(calc(#{$i} * 30deg));
    }
}

@keyframes shery-rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
