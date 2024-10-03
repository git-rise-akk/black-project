<template>
    <div
      class="MobMenuBtn"
      :class="{ 'MobMenuBtn--close': stateMenuStore.state }"
      @click="toggleMenu"
    >
      <div class="lines">
        <div class="line line--top"></div>
        <div class="line line--bottom"></div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapStores } from 'pinia';
  
  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapStores(stateMenu),
    },
    mounted() {
    },
    methods: {
      toggleMenu() {
        this.stateMenuStore.state = !this.stateMenuStore.state
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .MobMenuBtn {
    position: absolute;
    top: 2.5rem;
    right: 2rem;
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    .tablet & {
      top: 4.8rem;
      right: 3.8rem;
      width: 8.7rem;
      height: 8.7rem;
    }
    .lines {
      position: relative;
      height: 1rem;
      width: 2.3rem;
      .line {
        position: absolute;
        top: 0;
        width: 2.3rem;
        height: 2px;
        background: #fff;
        transition: transform 0.3s ease-in, top 0.5s ease-out 0.3s;
        .tablet & {
          height: 3px;
          width: 4.3rem;
        }
        &.line--bottom {
          top: initial;
          bottom: 0;
          transition: transform 0.3s ease-in, bottom 0.3s ease-out 0.3s;
        }
      }
      .tablet & {
        height: 2rem;
        width: 4.3rem;
      }
    }
    &.MobMenuBtn--close {
      .lines {
        .line--top {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          transition: top 0.3s ease-out , transform 0.3s ease-in 0.3s;
        }
        .line--bottom {
          bottom: 50%;
          transform: translateY(25%) rotate(-45deg);
          transition: bottom 0.3s ease-out , transform 0.3s ease-in 0.3s;
        }
      }
    }
  }
  </style>
  