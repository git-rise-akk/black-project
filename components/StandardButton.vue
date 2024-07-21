<template>
  <div ref="StandardButton" class="StandardButton" :style="{ width: `${width}rem`, height: `${height}rem` }">
    <svg width="100%" height="100%" viewBox="0 0 520 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M520 0H0V110H492.284L520 82.2841V0Z" fill="#2D3331" stroke="white" stroke-width="3" :stroke-dasharray="`${countsLengthContour}px`" :stroke-dashoffset="`${countsLengthContour}px`" />
    </svg>
    <div class="StandardButton_content">
      <div class="StandardButton__text">{{ text }}</div>
      <nuxt-icon class="arrow-btn" name="arrow-btn" filled />
    </div>
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
computed: {
  countsLengthContour() {
    const corner = 40; // длина угла
    const width = +this.width * 10;
    const height = +this.height * 10;
    return (width + height + corner) * 2;
  },
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
    font-weight: 400;
    font-size: 2.3rem;
    gap: 1.1rem;
    svg {
      width: 100%;
      height: 100%;
      path {
        transition: stroke-dashoffset 1s;
      }
    }
    &_content {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      gap: 1.1rem;
      .StandardButton__text {
          white-space: nowrap;
      }
    }
    cursor: pointer;
    .arrow-btn {
      height: 1.8rem;
      width: 1.7rem;
      svg {
        position: absolute;
        height: 100%;
      }
    }
    &:hover svg{
      path {
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 1.1s;
      }
    }
  }
</style>

