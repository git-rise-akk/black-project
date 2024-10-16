<template>
    <div :class="['MobMenu', {'MobMenu_open': stateMenuStore.state}]">
        <nuxt-icon
            class="logo"
            name="logo"
            filled
        />
        <nav class="MobMenu__list">
            <NuxtLink
                class="menu__item"
                to="/about?section=company"
                @click="stateMenuStore.state = false"
            >О компании
            </NuxtLink>
            <NuxtLink
                class="menu__item"
                to="/about?section=services"
                @click="stateMenuStore.state = false"
            >Услуги
            </NuxtLink>
            <NuxtLink
                class="menu__item"
                to="/about?section=portfolio"
                @click="stateMenuStore.state = false"
            >Портфолио
            </NuxtLink>
        </nav>
        <div class="MobMenu__contacts">
            <a
                class="phone"
                href="tel:+79990009900"
            >
                +7 999 000 99 00
            </a>
            <ul class="social-network">
                <li>
                    <a class="link" href="https://www.instagram.com/" target="_blank">
                        <nuxt-icon class="social social-instagram" name="instagram" filled />
                    </a>
                </li>
                <li>
                    <a class="link" href="https://tiktok.com/" target="_blank">
                        <nuxt-icon class="social social-tik-tok" name="tik-tok" filled />
                    </a>
                </li>
                <li>
                    <a class="link" href="https://vk.com/" target="_blank">
                        <nuxt-icon class="social social-vk" name="vk" filled />
                    </a>
                </li>
            </ul>
            <a
                class="email"
                href="mailto:blackproject@gmail.com"
            >
                blackproject@gmail.com
            </a>
      </div>
    </div>
</template>
  
<script>
import { mapStores } from 'pinia';
  
export default {
    data() {
      return {};
    },
    computed: {
      ...mapStores(firstDownload, stateMenu),
    },
    mounted() {
    },
};
</script>
  
<style lang="scss">
.MobMenu {
    padding: 4.1rem 2rem 4.9em;
    box-sizing: border-box;
    top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: calc(100vh - 7rem);
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    user-select: none;
    transition: visibility .7s, opacity .7s;
    .logo {
        height: 5.1rem;
        opacity: 0;
        transform: translateY(-50%);
        transition: transform .4s, opacity .4s;
        svg {
            width: 100%;
            height: 100%;
        }
    }
    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6.3rem;
        margin-top: 9.8rem;

        font-size: 2rem;

        .menu__item {
            transition: transform .5s;
            &:nth-child(odd) {
                transform: translateX(-100vw);
            }
            &:nth-child(even) {
                transform: translateX(100vw);
            }
        }
    }
    &__contacts {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        transform: translateY(70%);
        transition: transform .4s, opacity .4s;
        .phone {
            font-size: 3rem;
        }
        .social-network {
            margin: 3.2rem 0;
            display: flex;
            gap: 2.5rem;
            li {
                height: 3.2rem;
                width: 3.2rem;
                display: flex;
                align-items: center;
                justify-self: center;
                svg {
                    height: 100%;
                    width: auto;
                }
            }
        }
        .email {
            font-size: 1.4rem
        }
    }
    &_open {
        opacity: 1;
        visibility: visible;
        user-select: auto;
        transition: visibility .1s, opacity .1s;

        .logo {
            opacity: 1;
            transform: translateY(0);
            transition: transform .5s .4s, opacity .5s .4s;
        }

        .menu__item {
            transition: transform .5s .4s;
            &:nth-child(odd),
            &:nth-child(even) {
                transform: translateX(0);
            }
        }

        .MobMenu__contacts {
            opacity: 1;
            transform: translateY(0);
            transition: transform .5s .4s, opacity .5s .4s;
        }
    }
}
</style>
  