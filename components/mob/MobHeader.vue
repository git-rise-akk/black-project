<template>
    <header :class="['MobHeader', { visible: headerStore.state }, { start: $route.fullPath === '/' && firstDownloadStore.active }]">
      <div class="MobHeader__wrapper">
        <NuxtLink to="/" class="logo_link">
          <nuxt-icon
            class="logo"
            name="logo"
            filled
          />
        </NuxtLink>
        <div :class="['menu', {'menu_open': stateMenuStore.state}]"></div>
        <MobMenuBtn />
      </div>
    </header>
  </template>
  
  <script>
  import { mapStores } from 'pinia';
  
  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapStores(headerState, firstDownload, stateMenu),
    },
    mounted() {
    },
    methods: {
      openMenu() {
        this.stateMenuStore.state = true;
      },
    },
  };
  </script>
  
  <style lang="scss">
  .MobHeader {
    position: absolute;
    top: 2.5rem;
    height: 4.5rem;
    width: 100vw;
    padding: 0 2rem;
    box-sizing: border-box;
    z-index: 10;
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .menu {
        position: relative;
        width: 4.5rem;
        height: 4.5rem;
        &::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 4.5rem;
          height: 4.5rem;
          clip-path: polygon(100% 0, 100% 78%, 78% 100%, 0 100%, 0 0);
          transition: clip-path .8s, width .8s, height .8s, top .8s, right .8s;
          background: $main;
        }
        &_open {
          &::after {
            top: -2.5rem;
            right: -2rem;
            width: 100vw;
            width: 100dvw;
            height: 100vh;
            height: 100dvh;
            clip-path: polygon(100% 0, 100% 100%, 100% 100%, 0 100%, 0 0);
          }
        }
      }

      .logo {
        height: 2.4rem;
        svg {
          height: 100%;
          width: auto;
        }
      }
    }
  }
  </style>
  
  