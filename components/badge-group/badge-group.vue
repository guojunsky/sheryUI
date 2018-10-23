<template>
 <view class="shery-badge-group shery-hairline--top-bottom custom-class">
  <slot />
</view>
</template>

<script>
  const { shery } = global;
  const { SheryComponent} = shery;
  SheryComponent({
    relation: {
    name: 'badge',
    type: 'descendant',
    linked(target) {
      this.badges.push(target);
      this.setActive();
    },
    unlinked(target) {
      this.badges = this.badges.filter(item => item !== target);
      this.setActive();
    }
  },
  props: {
    active: {
      type: Number,
      value: 0
    }
  },
  beforeCreate() {
    this.badges = [];
    this.currentActive = -1;
  },

  methods: {
    setActive(badge) {
      let { active } = this.data;
      const { badges } = this;

      if (badge) {
        active = badges.indexOf(badge);
      }

      if (active === this.currentActive) {
        return;
      }

      if (this.currentActive !== -1 && badges[this.currentActive]) {
        this.$emit('change', active);
        badges[this.currentActive].setActive(false);
      }

      if (badges[active]) {
        badges[active].setActive(true);
        this.currentActive = active;
      }
    }
  }
  })
</script>

<style lang="scss">
@import '../../style/var.scss';
@import '../../style/hairline.scss';
.shery-badge-group {
  width: 85px;
}
</style>
