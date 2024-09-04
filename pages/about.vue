<template>
  <Lenis
    ref="page"
    class="page page_about page_up"
    @corner="cornerHandler"
  >
    <div class="scroll">
      <SectionStart 
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
          photos: ['/assets/webpages/about/portfolio/room-lighting/00.jpg',
            '/assets/webpages/about/portfolio/room-lighting/01.jpg',
            '/assets/webpages/about/portfolio/room-lighting/02.jpg',
          ],
          title: 'room lighting',
          text: 'Настроим вашу систему освещения по вашему<br />Техническому Заданию. Запустим проект любой<br />сложности.-Настройка ситемы на протоколе<br />- KNX; -Настройка ситемы на протоколе - DALI;<br />-Настройка ситемы на протоколе - DMX512;<br />-Настройка ситемы на протоколе - SPI',
        },
        2: {
          photos: ['/assets/webpages/about/portfolio/bright-horizons-office/00.jpg',
            '/assets/webpages/about/portfolio/bright-horizons-office/01.jpg',
            '/assets/webpages/about/portfolio/bright-horizons-office/02.jpg',
          ],
          title: 'bright horizons office',
          text: 'Настроим вашу систему освещения по вашему<br />Техническому Заданию. Запустим проект любой<br />сложности.-Настройка ситемы на протоколе<br />- KNX; -Настройка ситемы на протоколе - DALI;<br />-Настройка ситемы на протоколе - DMX512;<br />-Настройка ситемы на протоколе - SPI',
        },
        3: {
          photos: ['/assets/webpages/about/portfolio/architectural-lighting/00.jpg',
            '/assets/webpages/about/portfolio/architectural-lighting/01.jpg',
            '/assets/webpages/about/portfolio/architectural-lighting/02.jpg',
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

    const imgs = gsap.utils.toArray('.SectionStart .img');
    const imgsCompany = gsap.utils.toArray('.SectionCompany .img');
    const imgsWrapper = gsap.utils.toArray('.SectionStart .img_wrapper');
    const imgsCompanyWrapper = gsap.utils.toArray('.SectionCompany .img_wrapper');

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

    gsap.to('.SectionStart .StandardButton', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.SectionStart .StandardButton',
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
  _methods: {
    cornerHandler(direction) {
      if (direction < 0) {
        this.$router.push('/');
      }
    },
    async animateTextByLetters() {
      await this.$nextTick();

      const textAnimLetters1 = document.querySelectorAll('.text-anim-letters, .text-anim-line');

      textAnimLetters1?.forEach((el) => {
        const spansArray1 = Array.from(el.querySelectorAll('span'));

        gsap.from(spansArray1, {
          yPercent: 110,
          stagger: 0.07,
          duration: 0.5,
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
      const projects = gsap.utils.toArray('.SectionPortfolio .project');

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
              gsap.to(name, { x: 1, duration: 1.2 });
            },
          },
        });
      });
    },
    animateCardsServices() {
      const services = gsap.utils.toArray('.SectionServices .service');
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
      this.$router.push('/about?section=portfolio');
    }
  },
  get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods = value;
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
  }
}
</style>
