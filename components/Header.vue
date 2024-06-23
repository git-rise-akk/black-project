<template>
  <header>
      <nuxt-icon class="logo" name="logo" filled />
      <nav class="menu">
          <div class="menu__item">О компании</div>
          <div class="menu__item">Услуги</div>
          <div class="menu__item">Портфолио</div>
      </nav>
      <div class="contacts">
        <a class="number" href="tel:+79990009900">+7 999 000 99 00</a>
        <div class="messengers">
            <a class="messenger messenger_telegram" href="https://t.me/Sergey_svet77" target="_blank">telegram</a>
            <a class="messenger messenger_whatsapp" href="https://wa.me/79969225087" target="_blank">whatsapp</a>
        </div>
      </div>
  </header>
</template>

<style lang="scss">
  header {
    position: absolute;
    top: 5.4rem;
    left: 10rem;
    right: 10rem;
    height: 4.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        height: 100%;
        svg {
           height: 100% !important;
        }
    }
    .menu {
        display: flex;
        gap: 10.7rem;

        &__item {
            font-size: 1.5rem;
            font-weight: 500;
            text-transform: uppercase;
            cursor: pointer;
            transition: color .3s;
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
  }
</style>

