<template>
    <div class="StandardButton"  :style="{ width: `${width}rem`, height: `${height}rem` }">
      <div class="StandardButton__text">{{ text }}</div>
      <nuxt-icon class="arrow-btn" name="arrow-btn" filled />
    </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '48',
    },
    height: {
      type: String,
      default: '11',
    },
    text: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  }
}
</script>
  
<style lang="scss">
    .StandardButton {
      position: relative;
      background: $btn;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.1rem;
      font-weight: 400;
      font-size: 2.3rem;
      overflow: hidden;
      clip-path: polygon(100% 0, 100% 64%, 92% 100%, 0 100%, 0 0);
      transition: box-shadow .6s;
      cursor: pointer;
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
  
  