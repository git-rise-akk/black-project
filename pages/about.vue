<template>
  <Lenis
    ref="page"
    class="page page_about page_up"
    :corner-event-delay="useDeviceStore().device === 'desktop' ? 900 : 40"
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
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  provide() {
    return {
      scroller: this.scroller,
    }
  },  
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
          text: 'Настроим вашу систему освещения<br /> по вашему техническому заданию.<br /> Запустим проект любой сложности.<br /> -Настройка ситемы на протоколе - KNX;<br /> -Настройка ситемы на протоколе - DALI;<br /> -Настройка ситемы на протоколе - DMX512;<br /> -Настройка ситемы на протоколе - SPI',
        },
        2: {
          photos: ['/assets/webpages/about/portfolio/bright-horizons-office/00.jpg',
            '/assets/webpages/about/portfolio/bright-horizons-office/01.jpg',
            '/assets/webpages/about/portfolio/bright-horizons-office/02.jpg',
          ],
          title: 'bright horizons office',
          text: 'Настроим вашу систему освещения<br /> по вашему техническому заданию.<br /> Запустим проект любой сложности.<br /> -Настройка ситемы на протоколе - KNX;<br /> -Настройка ситемы на протоколе - DALI;<br /> -Настройка ситемы на протоколе - DMX512;<br /> -Настройка ситемы на протоколе - SPI',
        },
        3: {
          photos: ['/assets/webpages/about/portfolio/architectural-lighting/00.jpg',
            '/assets/webpages/about/portfolio/architectural-lighting/01.jpg',
            '/assets/webpages/about/portfolio/architectural-lighting/02.jpg',
          ],
          title: 'architectural lighting',
          text: 'Настроим вашу систему освещения<br /> по вашему техническому заданию.<br /> Запустим проект любой сложности.<br /> -Настройка ситемы на протоколе - KNX;<br /> -Настройка ситемы на протоколе - DALI;<br /> -Настройка ситемы на протоколе - DMX512;<br /> -Настройка ситемы на протоколе - SPI',
        },
      },
      typeInfoGallery: '',
    };
  },
  computed: {
    ...mapStores(firstDownload, openPopup, useDeviceStore),
  },
  mounted() { 
    this.firstDownloadStore.active = false;  
  },
  _methods: {
    cornerHandler(direction) {
      if (direction < 0) {
        this.$router.push('/');
      }
    },
    opensPopupService(id) {
      this.openPopupStore.popupService = [];
      this.openPopupStore.popupService.push(+id);
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
    viewSolutions() {
      this.$router.push('/about?section=portfolio');
    },
    returnsDevice(device) {
      let result = '';
      if (device === 'desktop') {
        device = 'desktop';
      } else {
        device = 'mobile';
      }

      return result
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

    .tablet & {
      padding: 0 3.8rem;
    }

    .mobile & {
      padding: 0 2rem;
    }

    .title_page {
      text-align: center;
      padding-top: 27.7rem;

      .tablet & {
        padding-top: 22.3rem;
      }

      .mobile & {
        padding-top: 13.3rem;
      }
    }
  }
}
</style>
