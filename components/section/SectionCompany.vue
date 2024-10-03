<template>
      <section id="company" class="SectionCompany section">
        <h2 class="title title_page text-anim-letters" v-text-separate="{ byLetters: true }"></h2> 
        <TextSeparate
          tag="h2"
          class="title title_page"
          by-letters
          text="О компании "
        /> 
        <ul class="about">
          <li class="about__item about__item_n0">
            <div class="text-content">
              <div
                class="title title_company text-anim-line"
                v-html="data[useDeviceStore().device]?.company?.title_0"
                v-text-separate="{ byLetters: false }"
              ></div>
              <p 
                v-html="data[useDeviceStore().device]?.company?.text_0"
                class="text text-anim-line"
                v-text-separate="{ byLetters: false }"
              >
              </p>
            </div>
            <div class="images">
              <div class="img_wrapper img_wrapper_n0">
                <img
                  class="img"
                  src="/assets/webpages/about/company/00.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n1">
                <img
                  class="img"
                  src="/assets/webpages/about/company/01.jpg"
                />
              </div>
            </div>
          </li>
          <li class="about__item about__item_n1">
            <div class="text-content">
              <div
                v-html="data[useDeviceStore().device]?.company?.title_1"
                class="title text-anim-line"
                v-text-separate="{ byLetters: false }"
              ></div>
              <p
                v-html="data[useDeviceStore().device]?.company?.text_1"
                class="text text-anim-line"
                v-text-separate="{ byLetters: false }"
              ></p>
            </div>
            <div class="images">
              <div class="img_wrapper img_wrapper_n0">
                <img
                  class="img img_n0"
                  src="/assets/webpages/about/company/02.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n1">
                <img
                  class="img img_n1"
                  src="/assets/webpages/about/company/03.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n2">
                <img
                  class="img img_n2"
                  src="/assets/webpages/about/company/04.jpg"
                />
              </div>
            </div>
          </li>
          <li class="about__item about__item_n2">
            <div class="text-content">
              <div
                v-html="data[useDeviceStore().device]?.company?.title_2"
                class="title text-anim-line"
                v-text-separate="{ byLetters: false }"
              ></div>
              <p
                v-html="data[useDeviceStore().device]?.company?.text_2"
                class="text text-anim-line"
                v-text-separate="{ byLetters: false }"
              ></p>
            </div>
            <div class="images">
              <div class="img_wrapper img_wrapper_n0">
                <img
                    class="img img_n0"
                    src="/assets/webpages/about/company/05.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n1">
                <img
                    class="img img_n1"
                    src="/assets/webpages/about/company/06.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n2">
                <img
                    class="img img_n2"
                    src="/assets/webpages/about/company/07.jpg"
                />
              </div>
            </div>
          </li>
          <li class="about__item about__item_n3">
            <div class="text-content">
              <div
                v-html="data[useDeviceStore().device]?.company?.title_3"
                class="title text-anim-line"
                v-text-separate="{ byLetters: false }"
              ></div>
              <p
                v-html="data[useDeviceStore().device]?.company?.text_3" 
                class="text text-anim-line"
                v-text-separate="{ byLetters: false }"
              ></p>
            </div>
            <div class="images">
              <div class="img_wrapper img_wrapper_n0">
                <img
                  class="img img_n0"
                  src="/assets/webpages/about/company/08.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n1">
                <img
                  class="img img_n1"
                  src="/assets/webpages/about/company/09.jpg"
                />
              </div>
            </div>
          </li>
        </ul>
      </section>  
</template>
<script>
import { mapStores } from 'pinia';
import data from '@/assets/data/data.json';

export default {
  data() {
    return {
      data: data,
    };
  },
  mounted() {
    const imgsCompany = gsap.utils.toArray('.SectionCompany .img');

    imgsCompany.forEach((img, index) => {
      gsap.to(img, {
        scale: 1,
        duration: 1.2,
        delay: index % 2 !== 0 ? 0.4 : 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: img,
          start: 'center bottom',
          scroller: '.page_about',
          end: 'center top',
        },
      });
    });

    this.$nextTick(() => {
      const imgsCompanyWrapper = gsap.utils.toArray('.SectionCompany .img_wrapper');
      imgsCompanyWrapper.forEach((img, index) => {
        gsap.to(img, {
          y: 0,
          duration: 1.2,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: img,
            start: 'center bottom',
            scroller: '.page_about',
            end: 'center top',
            scrub: true,
          },
        });
      });
    })
  },
  computed: {
    ...mapStores(useDeviceStore),
  },
}
</script>

<style lang="scss">
.SectionCompany {
  .about {
    padding-top: 8.5rem;

    .about__item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12rem;
      width: 100%;

      .tablet & {
        flex-direction: column;
        margin-bottom: 9.7rem;
        height: initial;
      }

      .mobile & {
        flex-direction: column;
        margin-bottom: 7rem;
        height: initial;
      }

      .title {
        font-size: 4rem;
        line-height: 4.6rem;
        .tablet & {
          font-size: 3.1rem;
          line-height: 3.7rem;
          white-space: nowrap;
        }
        .mobile & {
          font-size: 1.6rem;
          line-height: 1.9rem;
          white-space: nowrap;
        }
      }

      .text {
        font-size: 2.2rem;
        line-height: 2.6rem;
        margin-top: 3.9rem;
        text-transform: lowercase;
        font-weight: 300;
        .tablet & {
          font-size: 2.3rem;
          line-height: 2.9rem;
          margin-top: 2.9rem;
        }
        .mobile & {
          font-size: 1.2rem;
          line-height: 1.5rem;
          margin-top: 1.5rem;
        }
      }

      .images {
        height: 100%;
        position: relative;
        object-fit: contain;

        .tablet & {
          margin-top: 3.8rem;
          width: 100%;
        }

        .mobile & {
          margin-top: 2rem;
          width: 100%;
        }

        .img_wrapper {
          position: absolute;
          transform: translateY(50%);
          display: flex;
          align-items: center;
          justify-content: center;

          &_n1 {
            transform: translateY(30%);
          }

          .img {
            object-fit: cover;
            transform: scale(0);
            width: 100%;
            height: 100%;
          }
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      &_n0 {
        height: 35.1rem;

        .images {
          width: 77.2rem;

          .tablet & {
           height: 26.2rem;
          }

          .mobile & {
            height: 13.7rem;
          }

          .img_wrapper {
            &_n0 {
              top: 0;
              left: 0;
              height: 28.5rem;
              width: 34.5rem;

              .tablet & {
                top: initial;
                bottom: 0;
                height: 28.5rem;
                width: 34.5rem;
              }
              .mobile & {
                top: initial;
                bottom: 0;
                height: 12.4rem;
                width: 14.5rem;
              }
            }

            &_n1 {
              bottom: 0;
              right: 0;
              height: 28.5rem;
              width: 55rem;

              .tablet & {
                top: 0;
                bottom: initial;
                height: 28.5rem;
                width: 34.5rem;
              }
              .mobile & {
                top: 0;
                bottom: initial;
                height: 12.4rem;
                width: 23.9rem;
              }
            }
            
          }
        }
      }

      &_n1 {
        height: 35.1rem;
        flex-direction: row-reverse;

        .title,
        .text {
          text-align: right;
        }

        .images {
          width: 67.8rem;

          .tablet & {
           height: 33.3rem;
          }

          .mobile & {
            height: 17.4rem;
          }

          .img_wrapper {
            &_n0 {
              top: 0;
              left: 0;
              height: 32.2rem;
              width: 32rem;

              .tablet & {
                height: 30.3rem;
                width: 30.5rem;
              }
              .mobile & {
                height: 15.8rem;
                width: 15.9rem;
              }
            }

            &_n1 {
              top: 1.8rem;
              left: 19.8rem;
              height: 28.5rem;
              width: 30.3rem;

              .tablet & {
                top: 1.7rem;
                left: 51%;
                height: 27rem;
                width: 28.7rem;
              }
              .mobile & {
                top: 0.9rem;
                left: 26vw;
                height: 14.1rem;
                width: 15rem;
              }
            }

            &_n2 {
              bottom: 0;
              right: 0;
              height: 23.6rem;
              width: 23.8rem;

              .tablet & {
                top: initial;
                bottom: 0;
                height: 22.4rem;
                width: 22.6rem;
              }
              .mobile & {
                top: initial;
                bottom: 0;
                height: 11.7rem;
                width: 11.8rem;
              }
            }
          }
        }
      }

      &_n2 {
        height: 38.8rem;

        .images {
          width: 73.8rem;

          .tablet & {
           height: 24.8rem;
          }

          .mobile & {
            height: 14.7rem;
          }

          .img_wrapper {
            &_n0 {
              top: 7.1rem;
              right: 0;
              height: 28.5rem;
              width: 28.7rem;

              .tablet & {
                top: initial;
                bottom: 0;
                height: 24.8rem;
                width: 25rem;
                z-index: 2;
              }

              .mobile & {
                top: initial;
                bottom: 0;
                height: 12.9rem;
                width: 13rem;
                z-index: 2;
              }
            }

            &_n1 {
              top: 0;
              right: 22.1rem;
              height: 28.5rem;
              width: 34.5rem;

              .tablet & {
                height: 24.8rem;
                width: 30.1rem;
                right: 27vw;
                z-index: 1;
              }

              .mobile & {
                height: 12.9rem;
                width: 15.7rem;
                right: 27vw;
                z-index: 1;
              }
            }

            &_n2 {
              bottom: 0;
              left: 0;
              height: 28.5rem;
              width: 34.5rem;

              .tablet & {
                height: 24.8rem;
                width: 30.1rem;
              }

              .mobile & {
                height: 15.7rem;
                width: 12.9rem;
              }
            }
          }
        }
      }

      &_n3 {
        height: 36.6rem;
        flex-direction: row-reverse;

        .title,
        .text {
          text-align: right;
        }

        .images {
          width: 68.1rem;

          .tablet & {
           height: 30.3rem;
          }

          .mobile & {
            height: 15.8rem;
          }

          .img_wrapper {
            &_n0 {
              top: 0;
              left: 0;
              height: 28.5rem;
              width: 45.4rem;

              .tablet & {
                height: 26.9rem;
                width: 42.9rem;
              }

              .mobile & {
                height: 14rem;
                width: 22.3rem;
              }
            }

            &_n1 {
              bottom: 0;
              right: 0;
              height: 28.5rem;
              width: 45.4rem;

              .tablet & {
                height: 26.9rem;
                width: 42.9rem;
              }

              .mobile & {
                height: 14rem;
                width: 22.3rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>