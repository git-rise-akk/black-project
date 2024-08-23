<template>
  <div
    ref="StandardButton"
    class="StandardButton"
    :style="{ width: `${width}rem`, height: `${height}rem` }"
  >
    <svg
      width="100%"
      height="100%"
      :viewBox="`0 0 ${width * fz} ${height * fz}`"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        :d="buttonPath"
        fill="#2D3331"
        stroke="white"
        stroke-width="3"
        :stroke-dasharray="`${countsLengthContour}px`"
        :stroke-dashoffset="`${countsLengthContour}px`"
      />
    </svg>
    <div class="StandardButton_content">
      <div class="StandardButton__text">{{ text }}</div>
      <nuxt-icon
        class="arrow-btn"
        name="arrow-btn"
        filled
      />
    </div>
  </div>
</template>

<script>
import { useWindowStore } from '@/stores/windowStore.js';

export default {
  props: {
    width: {
      type: Number,
      default: 48,
    },
    height: {
      type: Number,
      default: 11,
    },
    text: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      windowStore: null,
    };
  },
  computed: {
    fz() {
      return this.windowStore?.fontSize ?? 10;
    },
    countsLengthContour() {
      const ANGLE = 4 * this.fz; // длина угла
      const width = this.width * this.fz;
      const height = this.height * this.fz;

      const angleLineLength = Math.sqrt(2 * ANGLE ** 2);
      return (width + height) * 2 + angleLineLength;
    },
    buttonPath() {
      const ANGLE = 4 * this.fz;
      return `
        M 0 0
        h ${this.width * this.fz}
        v ${this.height * this.fz - ANGLE}
        l ${-ANGLE} ${ANGLE}
        h ${-this.width * this.fz + ANGLE}
        z
      `;

    },
  },
  mounted() {
    this.windowStore = useWindowStore();
  },
  methods: {},
};
</script>

<style lang="scss">
.StandardButton {
  position: relative;
  font-weight: 400;
  font-size: 2.3rem;
  gap: 1.1rem;
  cursor: pointer;

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

  .arrow-btn {
    height: 1.8rem;
    width: 1.7rem;

    svg {
      position: absolute;
      height: 100%;
    }
  }

  &:hover svg {
    path {
      stroke-dashoffset: 0;
      transition: stroke-dashoffset 1.1s;
    }
  }
}
</style>

