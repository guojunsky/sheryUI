<template>
<view class="{{ classes }}" style="{{ style }}">
    <slot />
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
    relation: {
        name: 'row',
        type: 'ancestor'
    },
    pure: true,
    props: {
        span: Number,
        offset: Number
    },
    data: {
        style: '',
        classes() {
            const {
                span,
                offset
            } = this.data;
            return this.classNames('custom-class', 'shery-col', {
                [`shery-col--${span}`]: span,
                [`shery-col--offset-${offset}`]: offset
            });
        }
    },

    methods: {
        setGutter(gutter) {
            const padding = `${gutter / 2}px`;
            const style = gutter ? `padding-left: ${padding}; padding-right: ${padding};` : '';
            if (style !== this.data.style) {
                // this.setData({
                //     style
                // });
                setTimeout(() => {
                    this.store.data.style = style;
                    this.store.update();
                }, 200)

            }
        }
    }
})
</script>

<style lang="scss">
.shery-col {
    float: left;
    box-sizing: border-box;
}

@for $i from 1 to 24 {
    .shery-col--#{$i} {
        width: calc(#{$i} * 100% / 24);
    }

    .shery-col--offset-#{$i} {
        margin-left: calc(#{$i} * 100% / 24);
    }
}
</style>
