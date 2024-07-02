<template>
    <footer>
        <nuxt-icon class="logo" name="logo" filled />
        <ul class="social-network">
            <li>
                <a class="link" href="#">
                    <nuxt-icon class="social social-instagram" name="instagram" filled />
                </a>
            </li>
            <li>
                <a class="link" href="#">
                    <nuxt-icon class="social social-tik-tok" name="tik-tok" filled />
                </a>
            </li>
            <li>
                <a class="link" href="#">
                    <nuxt-icon class="social social-vk" name="vk" filled />
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
      .logo {
        height: 100%;
        svg {
            height: 100% !important;
        }
      }
      .social-network {
        display: flex;
        gap: 2.3rem;
        .link {
            display: block;
            height: 3.2rem;
            .social {
                height: 100%;
                svg {
                    height: 100%;
                }
            }
        }
      }
      .cpr {
        font-size: 1.8rem;
        font-weight: 500;
      }
    }
  </style>
  
  