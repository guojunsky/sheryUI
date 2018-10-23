<template>
<view class="custom-class shery-row" style="{{ style }}">
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
        name: 'col',
        type: 'descendant',
        linked(target) {
            console.log(target);
            if (this.data.gutter) {
                target.setGutter(this.data.gutter);
            }
        }
    },
    props: {
        gutter: Number
    },
    mounted() {
        if (this.data.gutter) {
            this.setGutter();
        }
    },

    methods: {
        setGutter() {
            const {
                gutter
            } = this.data;
            const margin = `-${Number(gutter) / 2}px`;
            const style = gutter ?
                `margin-right: ${margin}; margin-left: ${margin};` :
                '';

            this.setData({
                style
            });
            this.getRelationNodes('../col/col').forEach(col => {
                col.setGutter(this.data.gutter);
            });
        }
    }
})
</script>

<style lang="scss">
.shery-row {
    &::after {
        content: "";
        display: table;
        clear: both;
    }
}
</style>
