<template>
    <footer>
        <nuxt-icon class="logo" name="logo" filled />
        <ul class="social-network">
            <li>
                <a class="link" href="https://www.instagram.com/black_project.light" target="_blank">
                    <nuxt-icon class="social social-instagram" name="instagram" filled />
                </a>
            </li>
            <li>
                <a class="link" href="https://vk.com/club227779548" target="_blank">
                    <nuxt-icon class="social social-vk" name="vk" filled />
                </a>
            </li>
            <li>
                <a class="link" href="https://www.youtube.com/@BlackProject-light" target="_blank">
                    <nuxt-icon class="social social-youtube" name="youtube" filled />
                </a>
            </li>
            <li>
                <a class="link" href="https://t.me/Bprojectlight " target="_blank">
                    <nuxt-icon class="social social-telegram" name="telegram" filled />
                </a>
            </li>
        </ul>
        <div class="cpr">© <span>{{ new Date().getFullYear() }}</span></div>
    </footer>
  </template>
  
  <style lang="scss">
    footer {
      height: 4.7rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10rem 5.4rem;
      box-sizing: initial;
      .tablet & {
        flex-direction: column;
        padding: 0 10rem 9.6rem;
        height: initial;
      }

      .mobile & {
        flex-direction: column;
        padding: 0 2rem 7.9rem;
        height: initial;
       }

      .logo {
        height: 100%;
        .tablet & {
            height: 4.6rem;
        }

        .mobile & {
            height: 2.4rem;
        }

        svg {
            height: 100%;
            width: auto;
        }
      }
      .social-network {
        display: flex;
        gap: 2.3rem;
        .tablet & {
            margin: 7.9rem 0 8.6rem;
        }

        .mobile & {
            margin: 4.1rem 0 4.5rem;
        }


        .link {
            display: block;
            height: 3.2rem;
            .social {
                height: 100%;
                svg {
                    height: 100%;
                    width: auto;
                }
            }
        }
      }
      .cpr {
        font-size: 1.8rem;
        font-weight: 500;

        .mobile & {
             font-size: 1.3rem;
        }
      }
    }
  </style>
  
  