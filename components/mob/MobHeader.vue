<template>
    <header :class="['MobHeader', { start: $route.fullPath === '/' && firstDownloadStore.active }]">
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
      ...mapStores(firstDownload, stateMenu),
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
    top: 0;
    width: 100vw;
    padding: 2.5rem 2rem;
    box-sizing: border-box;
    z-index: 10;
    background: linear-gradient(0deg, rgba(30, 30, 30, 0) 0%, rgba(30, 30, 30, 0.6) 60%);
    backdrop-filter: blur(1px);

    &.start {
      animation: anim-header 1s 2s both;
    }

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .tablet & {
        height: 8.7rem;
      }
      .menu {
        position: relative;
        width: 4.5rem;
        height: 4.5rem;
        .tablet & {
          width: 8.7rem;
          height: 8.7rem;
        }
        &::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 4.5rem;
          height: 4.5rem;
          clip-path: polygon(100% 0, 100% 78%, 78% 100%, 0 100%, 0 0);
          transition: clip-path .8s, width .8s, height .8s, top .8s, right .8s;
          background: $btn;
          .tablet & {
            width: 8.7rem;
            height: 8.7rem;
          }
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

            .tablet & {
                width: 100vw;
              width: 100dvw;
              height: 100vh;
              height: 100dvh;
            }
          }
        }
      }

      .logo {
        height: 2.4rem;
        .tablet & {
          height: 4.5rem;
        }
        svg {
          height: 100%;
          width: auto;
        }
      }
    } 
    .tablet & {
      padding: 4.8rem 3.8rem;
      .menu.menu_open {
        &::after {
          right: -3.8rem;
        }
      }
    }

    @keyframes anim-header {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }
  }
  </style>
  
  