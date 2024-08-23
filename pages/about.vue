<template>
  <Lenis
      ref="page"
      class="page page_about page_up"
      @corner="cornerHandler"
  >
    <div class="scroll">
      <SectionStart2 
        @viewSolutions="viewSolutions"
      />

      <SectionCompany />

      <SectionServices 
        @popupServices="opensPopupService"
        @callback="opensPopupCallback"
      />

      <SectionPortfolio
        @openGallery="opensPopupGallery"
      />

      <SectionContacts />

      <Footer />
      <PopupGallery
          @closePopup="closesPopupGallery()"
          :content="portfolioContent[typeInfoGallery]"
          :active="openPopup"
      />
    </div>
  </Lenis>
</template>

<script>

import { mapStores } from 'pinia';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  data() {
    return {
      openPopup: false,
      openPopupService: false,
      posScroll: 0,
      nextPage: true,
      lenis: null,
      scroller: '.page_about',
      portfolioContent: {
        1: {
          photos: ['/assets/pages/about/portfolio/room-lighting/00.jpg',
            '/assets/pages/about/portfolio/room-lighting/01.jpg',
            '/assets/pages/about/portfolio/room-lighting/02.jpg',
          ],
          title: 'room lighting',
          text: 'Настроим вашу систему освещения по вашему<br />Техническому Заданию. Запустим проект любой<br />сложности.-Настройка ситемы на протоколе<br />- KNX; -Настройка ситемы на протоколе - DALI;<br />-Настройка ситемы на протоколе - DMX512;<br />-Настройка ситемы на протоколе - SPI',
        },
        2: {
          photos: ['/assets/pages/about/portfolio/bright-horizons-office/00.jpg',
            '/assets/pages/about/portfolio/bright-horizons-office/01.jpg',
            '/assets/pages/about/portfolio/bright-horizons-office/02.jpg',
          ],
          title: 'bright horizons office',
          text: 'Настроим вашу систему освещения по вашему<br />Техническому Заданию. Запустим проект любой<br />сложности.-Настройка ситемы на протоколе<br />- KNX; -Настройка ситемы на протоколе - DALI;<br />-Настройка ситемы на протоколе - DMX512;<br />-Настройка ситемы на протоколе - SPI',
        },
        3: {
          photos: ['/assets/pages/about/portfolio/architectural-lighting/00.jpg',
            '/assets/pages/about/portfolio/architectural-lighting/01.jpg',
            '/assets/pages/about/portfolio/architectural-lighting/02.jpg',
          ],
          title: 'architectural lighting',
          text: 'Настроим вашу систему освещения по вашему<br />Техническому Заданию. Запустим проект любой<br />сложности.-Настройка ситемы на протоколе<br />- KNX; -Настройка ситемы на протоколе - DALI;<br />-Настройка ситемы на протоколе - DMX512;<br />-Настройка ситемы на протоколе - SPI',
        },
      },
      typeInfoGallery: '',
    };
  },
  computed: {
    ...mapStores(firstDownload, openPopup),
  },
  mounted() {
    this.animateTextByLetters();
    this.animateCardsPrtfolio();
    this.animateCardsServices();

    this.firstDownloadStore.active = false;

    const imgs = gsap.utils.toArray('.section_start .img');
    const imgsCompany = gsap.utils.toArray('.section_company .img');
    const imgsWrapper = gsap.utils.toArray('.section_start .img_wrapper');
    const imgsCompanyWrapper = gsap.utils.toArray('.section_company .img_wrapper');

    // start

    imgs.forEach((img, index) => {
      gsap.to(img, {
        scale: 1,
        duration: 1.2,
        delay: this.returnsDelayTime(index),
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: img,
          start: 'center bottom',
          scroller: '.page_about',
          end: 'center top',
          // markers: true,
        },
      });
    });

    imgsWrapper.forEach((img, index) => {
      gsap.to(img, {
        y: 0,
        duration: 1.2,
        delay: this.returnsDelayTime(index),
        scrollTrigger: {
          trigger: img,
          start: 'center bottom',
          scroller: '.page_about',
          end: 'center top',
          scrub: true,
        },
      });
    });

    gsap.to('.section_start .StandardButton', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.section_start .StandardButton',
        start: 'top bottom',
        scroller: '.page_about',
        end: 'top top',
      },
    });

    // company

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

    imgsCompanyWrapper.forEach((img, index) => {
      gsap.to(img, {
        y: 0,
        duration: 1.2,
        delay: index % 2 !== 0 ? 0.4 : 0,
        scrollTrigger: {
          trigger: img,
          start: 'center bottom',
          scroller: '.page_about',
          end: 'center top',
          scrub: true,
        },
      });
    });
  },
  methods: {
    cornerHandler(direction) {
      if (direction < 0) {
        this.$router.push('/');
      }
    },
    async animateTextByLetters() {
      await this.$nextTick();

      // const textAnimLetters = document.querySelectorAll('.text-anim-line');
      const textAnimLetters = document.querySelectorAll('.text-anim-letters, .text-anim-line');


      textAnimLetters?.forEach((el) => {
        const spansArray = useTextSeparate(el, { byLetters: el.classList.contains('text-anim-letters') });
        // const spansArray = gsap.utils.toArray(el.querySelectorAll('span'));        

        gsap.from(spansArray, {
          yPercent: 110,
          stagger: 0.1,
          duration: .4,
          scrollTrigger: {
            scroller: this.scroller,
            trigger: el,
            /** once - вкл, toggle - выкл */
            once: true,
            // toggleActions: 'play play reverse reverse',
            start: () => 'top 85%',
            end: () => ' top 40%',
            // markers: true,
          },
        });

      });
    },
    animateCardsPrtfolio() {
      const projects = gsap.utils.toArray('.section_portfolio .project');

      projects.forEach((project, index) => {
      gsap.to(project, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: project,
          scroller: '.page_about',
          start: 'top 90%',
          end: 'bottom top',
          onEnter: () => {
            const name = project.querySelector('.project__name');
            gsap.to(name, { x: 1,  duration: 1.2 });
          },
        },
      });
    });
    },
    animateCardsServices() {
      const services = gsap.utils.toArray('.section_services .service');
      services.forEach((service, index) => {
      gsap.to(service, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: service,
          start: 'top bottom',
          scroller: '.page_about',
          end: 'bottom top',
        },
      });
    });
    },
    opensPopupService(id) {
      this.openPopupStore.popupService = [];
      this.openPopupStore.popupService.push(id);
      this.openPopupStore.popupService.push(true);
    },
    opensPopupGallery(type) {
      this.openPopup = true;
      this.typeInfoGallery = type; 
    },
    closesPopupGallery() {
      this.openPopup = false;
    },
    opensPopupCallback() {
      this.openPopupStore.popupCallback = true;
    },
    returnsDelayTime(index) {
      let time = 0;
      if (index === 1) {
        time = 0.6;
      } else if (index === 2) {
        time = 0.3;
      } else if (index === 3) {
        time = 0.9;
      }
      return time;
    },
    viewSolutions() {
      this.$router.push('/about?section=services')
    }
  },
  beforeUnmount() {},
};
</script>

<style lang="scss">
.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 1s, transform .7s;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  transform: scale(.9);
  opacity: 0;
}

.text-anim-line {
  span {
    display: block;
  }
}

.page.page_about {
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .section {
    position: relative;
    padding: 0 10rem;

    .title_page {
      text-align: center;
      padding-top: 27.7rem;
    }

    &_start {
      display: flex;

      .section__left {
        position: relative;
        flex: 1;
        z-index: 2;

        .title {
          padding-top: 22.6rem;
          line-height: 11rem;
          z-index: 1;

          // > span {
          //   height: 0.8em;
            // @include textCrop;
          // }
        }

        .info {
          font-size: 4rem;
          font-weight: 300;
          margin-top: 3.9rem;
          line-height: 4.6rem;
        }

        .StandardButton {
          margin-top: 11.1rem;
          opacity: 0;
          transform: translateY(100%);
        }
      }

      .section__right {
        position: relative;

        .img_wrapper {
          position: absolute;
          transform: translateY(20%);
          display: flex;
          align-items: center;
          justify-content: center;

          &_n0 {
            top: 10rem;
            right: 0;
            width: 65.9rem;
            height: 28rem;
          }

          &_n1 {
            top: 32.8rem;
            right: 5.8rem;
            width: 34.3rem;
            height: 29.2rem;
            z-index: 1;
          }

          &_n2 {
            top: 56.3rem;
            right: 0;
            width: 29.4rem;
            height: 35.4rem;
          }

          &_n3 {
            top: 52.7rem;
            right: 28.2rem;
            width: 65.4rem;
            height: 50rem;
            z-index: 2;
          }

          .img {
            object-fit: cover;
            transform: scale(0);
            width: 100%;
            height: 100%;
          }
        }

        .description {
          position: absolute;
          right: 0;
          bottom: 0;
          text-align: right;
          font-size: 1.8rem;
          line-height: 2.4rem;
        }
      }
    }

    &_company {
      .about {
        padding-top: 8.5rem;

        .about__item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12rem;
          width: 100%;

          .title {
            font-size: 4rem;
            line-height: 4.6rem;
          }

          .text {
            font-size: 2.2rem;
            line-height: 2.6rem;
            margin-top: 3.9rem;
            text-transform: lowercase;
            font-weight: 300;
          }

          .images {
            height: 100%;
            position: relative;
            object-fit: contain;

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

              .img_wrapper {
                &_n0 {
                  top: 0;
                  left: 0;
                  height: 28.5rem;
                  width: 34.5rem;
                }

                &_n1 {
                  bottom: 0;
                  right: 0;
                  height: 28.5rem;
                  width: 55rem;
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

              .img_wrapper {
                &_n0 {
                  top: 0;
                  left: 0;
                  height: 32.2rem;
                  width: 32rem;
                }

                &_n1 {
                  top: 1.8rem;
                  left: 19.8rem;
                  height: 28.5rem;
                  width: 30.3rem;
                }

                &_n2 {
                  bottom: 0;
                  right: 0;
                  height: 23.6rem;
                  width: 23.8rem;
                }
              }
            }
          }

          &_n2 {
            height: 38.8rem;

            .images {
              width: 73.8rem;

              .img_wrapper {
                &_n0 {
                  top: 7.1rem;
                  right: 0;
                  height: 28.5rem;
                  width: 28.7rem;
                }

                &_n1 {
                  top: 0;
                  right: 22.1rem;
                  height: 28.5rem;
                  width: 34.5rem;
                }

                &_n2 {
                  bottom: 0;
                  left: 0;
                  height: 28.5rem;
                  width: 34.5rem;
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

              .img_wrapper {
                &_n0 {
                  top: 0;
                  left: 0;
                  height: 28.5rem;
                  width: 45.4rem;
                }

                &_n1 {
                  bottom: 0;
                  right: 0;
                  height: 28.5rem;
                  width: 45.4rem;
                }
              }
            }
          }
        }
      }
    }

    &_services {
      .services {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 21rem;
        grid-row-gap: 9.7rem;
        margin-top: 10.7rem;

        .service {
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(40%);

          .number {
            font-size: 15rem;
            font-weight: 400;
            line-height: 12rem;
          }

          .title {
            font-size: 2.5rem;
            line-height: 3.1rem;
            margin: 7.7rem 0 4.4rem;
          }

          .text {
            font-size: 1.8rem;
            line-height: 2.2rem;
            font-weight: 300;
            text-transform: lowercase;
          }

          .more {
            position: relative;
            margin: 5.5rem 0 6.6rem;
            font-size: 2.4rem;
            width: fit-content;
            cursor: pointer;

            &:after {
              content: '';
              position: absolute;
              left: 0;
              bottom: 0rem;
              width: 100%;
              height: 0.1rem;
              background: #fff;
              transition: width .3s;
            }

            &:hover {
              &:after {
                width: 0;
              }
            }
          }

          .StandardButton {
            margin-top: auto;
          }
        }
      }
    }

    &_portfolio {
      .projects {
        margin-top: 9.7rem;

        .project {
          position: relative;
          height: 60rem;
          width: calc(100% + 20rem);
          margin-left: -10rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          opacity: 0.1;
          transform: translateX(20%);

          &::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 1) 100%);
            opacity: .5;
          }

          &_n1 {
            transform: translateX(-20%);
            &::after {
              opacity: .6;
            }
            .project__name {
              transform: translateX(80%);
            }
          }

          &_n2 {
            &::after {
              opacity: .7;
            }
          }

          &__cover {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(1);
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.5s;
          }

          &__name {
            position: relative;
            text-align: center;
            z-index: 1;
            transform: translateX(-80%);

            .title {
              font-size: 7rem;
              line-height: 6.1rem;
              white-space: nowrap;
              margin-bottom: 3.8rem;
            }

            .subtitle {
              font-size: 2.6rem;
              font-weight: 300;
              text-transform: lowercase;
            }
          }

          &:hover {
            .project__cover {
              transform: translate(-50%, -50%) scale(1.1);
            }
          }
        }
      }
    }
  }
}
</style>

