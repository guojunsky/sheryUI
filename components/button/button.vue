<template>
<button
  class="custom-class shery-button {{ classes }}"
  id="{{ id }}"
  disabled="{{ disabled }}"
  hover-class="button-hover"
  open-type="{{ openType }}"
  app-parameter="{{ appParameter }}"
  hover-stop-propagation="{{ hoverStopPropagation }}"
  hover-start-time="{{ hoverStartTime }}"
  hover-stay-time="{{ hoverStayTime }}"
  lang="{{ lang }}"
  session-from="{{ sessionFrom }}"
  send-message-title="{{ sendMessageTitle }}"
  send-message-path="{{ sendMessagePath }}"
  send-message-img="{{ sendMessageImg }}"
  show-message-card="{{ showMessageCard }}"
  bind:tap="onClick"
  bindcontact="bindContact"
  bindgetuserinfo="bindGetUserInfo"
  bindgetphonenumber="bindGetPhoneNumber"
  binderror="bindError"
  bindopensetting="bindOpenSetting"
>
  <shery-loading
    wx:if="{{ loading }}"
    size="20px"
    custom-class="loading-class"
    color="{{ type === 'default' ? '#c9c9c9' : '#fff' }}"
  />
  <slot wx:else></slot>
</button>
</template>

<script>
const {
    shery
} = global;
const {
    SheryComponent,
    mixins
} = shery;
const { button, openType } = mixins;
SheryComponent({
    mixins: [button, openType],
    props: {
        plain: Boolean,
        block: Boolean,
        square: Boolean,
        loading: Boolean,
        disabled: Boolean,
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        }
    },

    data: {
        classes() {
            const {
                type,
                size,
                plain,
                disabled,
                loading,
                square,
                block
            } = this.data;
            return this.classNames(`shery-button--${type}`, `shery-button--${size}`, {
                'shery-button--block': block,
                'shery-button--plain': plain,
                'shery-button--square': square,
                'shery-button--loading': loading,
                'shery-button--disabled': disabled,
                'shery-button--unclickable': disabled || loading
            });
        }
    },

    methods: {
        onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.$emit('click');
            }
        }
    }
})
</script>

<style lang="scss">
@import '../../style/var.scss';

.shery-button {
    position: relative;
    padding: 0;
    display: inline-block;
    height: 44px;
    line-height: 42px;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 16px;
    text-align: center;
    vertical-align: middle;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;

    &::after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        opacity: 0;
        width: 100%;
        height: 100%;
        border: inherit;
        border-color: $black;
        background-color: $black;
        border-radius: inherit;
        /* inherit parent's border radius */
        transform: translate(-50%, -50%);
    }

    &:active::after {
        opacity: .3;
    }

    &--unclickable::after {
        display: none;
    }

    &--default {
        color: $button-default-color;
        background-color: $button-default-background-color;
        border: 1px solid $button-default-border-color;
    }

    &--primary {
        color: $button-primary-color;
        background-color: $button-primary-background-color;
        border: 1px solid $button-primary-border-color;
    }

    &--danger {
        color: $button-danger-color;
        background-color: $button-danger-background-color;
        border: 1px solid $button-danger-border-color;
    }

    &--warning {
        color: $button-warning-color;
        background-color: $button-warning-background-color;
        border: 1px solid $button-warning-border-color;
    }

    &--plain {
        background-color: $white;

        &.shery-button--primary {
            color: $button-primary-background-color;
        }

        &.shery-button--danger {
            color: $button-danger-background-color;
        }

        &.shery-button--warning {
            color: $button-warning-background-color;
        }
    }

    &--large {
        width: 100%;
        height: 50px;
        line-height: 48px;
    }

    &--normal {
        padding: 0 15px;
        font-size: 14px;
    }

    &--small {
        height: 30px;
        padding: 0 8px;
        min-width: 60px;
        font-size: 12px;
        line-height: 28px;
    }

    /* mini图标默认宽度50px，文字不能超过4个 */
    &--mini {
        display: inline-block;
        width: 50px;
        height: 22px;
        line-height: 20px;
        font-size: 10px;

        &+.shery-button--mini {
            margin-left: 5px;
        }
    }

    &--block {
        width: 100%;
        display: block;
    }

    &--square {
        border-radius: 0;
    }

    &--disabled {
        color: $button-disabled-color;
        background-color: $button-disabled-background-color;
        border: 1px solid $button-disabled-border-color;
    }
}
</style>
