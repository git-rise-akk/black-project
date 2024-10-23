<template>
  <div
    ref="MobStandardButton"
    class="MobStandardButton button-anim"
  >
    <div class="MobStandardButton_content">
      <div class="MobStandardButton__text">{{ text }}</div>
      <nuxt-icon
        class="arrow-btn"
        name="arrow-btn"
        filled
      />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.MobStandardButton {
  position: relative;
  font-weight: 400;
  font-size: 1.6rem;
  gap: 1.1rem;
  opacity: 1;
  transition: opacity .3s;
  width: 100%;
  height: 7.7rem;
  background: $btn;
  clip-path: polygon(100% 1%, 100% 74%, 94% 100%, 0 100%, 0 0);

  .tablet & {
    font-size: 3.1rem;
    height: 14.8rem;
  }

  &.disabled {
    opacity: 0.7;
    cursor: no-drop;
  }

  &_content {
    position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 1.1rem;

    .MobStandardButton__text {
      white-space: nowrap;
    }
  }

  .arrow-btn {
    height: 1.8rem;
    width: 1.7rem;

    svg {
      position: absolute;
      height: 100%;
    }
  }
}
</style>
