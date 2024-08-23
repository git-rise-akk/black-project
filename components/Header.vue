<template>
  <header :class="[{ visible: headerStore.state }, { start: $route.fullPath === '/' && firstDownloadStore.active }]">
    <div class="header_wrapper">
      <NuxtLink to="/" class="logo_link">
        <nuxt-icon
          class="logo"
          name="logo"
          filled
        />
      </NuxtLink>
      <nav class="menu">
        <NuxtLink
            class="menu__item"
            to="/about?section=company"
        >О компании
        </NuxtLink>
        <NuxtLink
            class="menu__item"
            to="/about?section=services"
        >Услуги
        </NuxtLink>
        <NuxtLink
            class="menu__item"
            to="/about?section=portfolio"
        >Портфолио
        </NuxtLink>
      </nav>
      <div class="contacts">
        <a
            class="number"
            href="tel:+79990009900"
        >+7 999 000 99 00</a>
        <div class="messengers">
          <a
              class="messenger messenger_telegram"
              href="https://t.me/Sergey_svet77"
              target="_blank"
          >telegram</a>
          <a
              class="messenger messenger_whatsapp"
              href="https://wa.me/79969225087"
              target="_blank"
          >whatsapp</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapStores } from 'pinia';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapStores(headerState, firstDownload),
  },
  mounted() {
  },
};
</script>

<style lang="scss">
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  transform: translateY(-100%);
  // transition: transform .4s;
  transition: transform 1s;
  padding: 5.4rem 0;
  background: linear-gradient(0deg, rgba(30, 30, 30, 0) 0%, rgba(30, 30, 30, 0.6) 60%);
  backdrop-filter: blur(1px);

  &.start {
    animation: anim-header 1s 2s both;
  }

  .header_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.7rem;
    width: calc(100% - 20rem);
    .logo_link {
      height: 100%;

      .logo {
        height: 100%;

        svg {
          height: 100%;
          width: auto;
        }
      }
    }
  }

  &.visible {
    transform: translateY(0);
  }

  .menu {
    display: flex;
    gap: 10.7rem;

    &__item {
      position: relative;
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: uppercase;
      cursor: pointer;
      width: fit-content;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.1rem;
        width: 0;
        height: 0.1rem;
        background: #fff;
        transition: width .3s;
      }

      &:hover {
        &:after {
          width: 100%;
        }
      }
    }
  }

  .contacts {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    .number {
      font-size: 2rem;
      text-transform: uppercase;
    }

    .messengers {
      text-transform: uppercase;

      .messenger {
        position: relative;
        padding-right: 1rem;

        &::after {
          content: '';
          position: absolute;
          right: 0.5rem;
          width: 0.1rem;
          height: 100%;
          background: #fff;
        }

        &:last-child {
          padding-right: 0;

          &::after {
            content: none;
          }
        }
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

