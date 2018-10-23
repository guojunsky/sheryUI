<template>
<view class="{{ cellClass }}" style="{{ customStyle }}" bind:tap="onClick">
    <shery-icon wx:if="{{ icon }}" name="{{ icon }}" custom-class="shery-cell__left-icon" />
    <slot wx:else name="icon" />
    <view style="{{ titleStyle }}" class="shery-cell__title title-class">
        <block wx:if="{{ title }}">
            {{ title }}
            <view wx:if="{{ label }}" class="shery-cell__label label-class">{{ label }}</view>
        </block>
        <slot wx:else name="title" />
    </view>

    <view class="shery-cell__value value-class">
        <view wx:if="{{ value }}">{{ value }}</view>
        <slot wx:else />
    </view>
    <shery-icon wx:if="{{ isLink }}" name="arrow" custom-class="shery-cell__right-icon" />
    <slot wx:else name="right-icon" />
    <slot name="extra" />
</view>
</template>

<script>
const {
    shery
} = global;
const SheryComponent = shery.SheryComponent;

SheryComponent({
    classes: [
        'title-class',
        'label-class',
        'value-class'
    ],
    props: {
        title: null,
        value: null,
        url: String,
        icon: String,
        label: String,
        center: Boolean,
        isLink: Boolean,
        required: Boolean,
        clickable: Boolean,
        titleWidth: String,
        customStyle: String,
        linkType: {
            type: String,
            value: 'navigateTo'
        },
        border: {
            type: Boolean,
            value: true
        }
    },

    data: {
        cellClass() {
            const {
                data
            } = this;
            return this.classNames('custom-class', 'shery-cell', {
                'shery-hairline': data.border,
                'shery-cell--center': data.center,
                'shery-cell--required': data.required,
                'shery-cell--clickable': data.isLink || data.clickable
            });
        },

        titleStyle() {
            const {
                titleWidth
            } = this.data;
            return titleWidth ? `max-width: ${titleWidth};min-width: ${titleWidth}` : '';
        }
    },

    methods: {
        onClick() {
            const {
                url
            } = this.data;
            if (url) {
                wx[this.data.linkType]({
                    url
                });
            }
            this.$emit('click');
        }
    },
    pure: true
});
</script>

<style lang="scss">
@import '../../style/var.scss';
@import '../../style/hairline.scss';

.shery-cell {
    width: 100%;
    display: flex;
    padding: 10px 15px;
    box-sizing: border-box;
    line-height: 24px;
    position: relative;
    background-color: $white;
    color: $text-color;
    font-size: 14px;

    &::after {
        left: 15px;
        right: 0;
        transform: scaleY(0.5);
        border-bottom-width: 1px;
    }

    &-group {
        background-color: $white;
    }

    &__label {
        font-size: 12px;
        line-height: 1.2;
        color: $gray-darker;
    }

    &__title,
    &__value {
        flex: 1;

        &:empty {
            display: none;
        }
    }

    &__value {
        overflow: hidden;
        text-align: right;
        vertical-align: middle;
    }

    &__left-icon {
        font-size: 16px;
        line-height: 24px;
        margin-right: 5px;
        vertical-align: middle;
    }

    &__right-icon {
        color: $gray-dark;
        font-size: 12px;
        line-height: 24px;
        margin-left: 5px;
    }

    &--clickable {
        &:active {
            background-color: $active-color;
        }
    }

    &--required {
        overflow: visible;

        &::before {
            content: '*';
            position: absolute;
            left: 7px;
            font-size: 14px;
            color: $red;
        }
    }

    &--center {
        align-items: center;
    }
}
</style>
