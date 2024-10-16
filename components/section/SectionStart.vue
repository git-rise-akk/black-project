<template>
      <section class="SectionStart section section_start">
        <div class="section__left">
          <TextSeparate
            class="title"
            text="
              Мы —<br />
              светотехническая<br />
              компания
            "
          /> 
          <TextSeparate
            class="info"
            text="
              Предлагаем комплексные<br />
              решения для жилых<br />
              и коммерческих объектов,<br />
              обеспечивая высокое<br />
              качество на каждом<br />
              этапе работы
            "
          />
          <StandardButton
            text="посмотреть решения"
            :width="buttonSize[0]"
            :height="buttonSize[1]"
            @click="$emit('viewSolutions')"
          />
        </div>
        <div class="section__right">
          <div class="img_wrapper img_wrapper_n0">
            <img
                class="img"
                src="/assets/webpages/about/start/00.jpg"
            />
          </div>
          <div class="img_wrapper img_wrapper_n1">
            <img
                class="img"
                src="/assets/webpages/about/start/01.jpg"
            />
          </div>
          <div class="img_wrapper img_wrapper_n2">
            <img
                class="img"
                src="/assets/webpages/about/start/02.jpg"
            />
          </div>
          <div class="img_wrapper img_wrapper_n3">
            <img
                class="img"
                src="/assets/webpages/about/start/03.jpg"
            />
          </div>
          <TextSeparate
            v-if="useDeviceStore().device === 'desktop'"
            class="description"
            text="
              Опыт в области<br />
              проектирования,<br />
              монтажа<br />
              и автоматизации<br />
              более 10 лет
            "
          />
        </div>
      </section>
</template>

<script>
import { mapStores } from 'pinia';

export default {
  ...mapStores(useDeviceStore),
  mounted() {
    const imgs = gsap.utils.toArray('.SectionStart .img');
   

    this.$nextTick(() => {
      const imgsWrapper = gsap.utils.toArray('.SectionStart .img_wrapper');
      imgsWrapper.forEach((img, index) => {
        gsap.to(img, {
          y: 0, 
          // duration: 1000,
          // delay: this.returnsDelayTime(index),
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

  },
  computed: {
    buttonSize() {
      let size = [52, 11];
      if(useDeviceStore().device === 'tablet') {
        size = [76.8, 14.8]
      } else if (useDeviceStore().device === 'mobile') {
        size = [33.5, 7.7]
      }
      return size;
    }
  },
  methods: {
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
  }
}
</script>

<style lang="scss">
.SectionStart {
  display: flex;
  position: relative;

  .section__left {
    position: relative;
    flex: 1;
    z-index: 2;

    .title {
      position: relative;
      padding-top: 22.6rem;
      line-height: 11rem;
      z-index: 1;
      .tablet & {
        padding-top: 22.3rem;
        line-height: 3rem;
      }
      .mobile & {
        padding-top: 11.4rem;
        line-height: 3rem;
      }
    }

    .info {
      font-size: 4rem;
      font-weight: 300;
      margin-top: 3.9rem;
      line-height: 4.6rem;
      .tablet & {
        font-size: 2.7rem;
        line-height: 3.3rem;
        margin-top: 4.8rem;
      }
      .mobile & {
        font-size: 1.4rem;
        line-height: 1.5rem;
        margin-top: 2.5rem;
      }
    }

    .StandardButton {
      margin-top: 11.1rem;
      opacity: 0;
      transform: translateY(100%);
      .tablet & {
        font-size: 2.7rem;
        line-height: 3.3rem;
        margin-top: 38.2rem;
      }
      .mobile & {
        font-size: 1.4rem;
        line-height: 1.5rem;
        margin-top: 19.9rem;
      }
    }
  }

  .section__right {
    position: relative;

    .tablet & {
      position: absolute;
      top: 0;
      right: 3.8rem;
      bottom: 92.2rem;
      left: 3.8rem;
    }

    .mobile & {
      position: absolute;
      top: 0;
      right: 2rem;
      bottom: 12rem;
      left: 2rem;
    }

    .img_wrapper {
      position: absolute;
      transform: translateY(30%);
      will-change: transform;
      display: flex;
      align-items: center;
      justify-content: center;

      &_n0 {
        top: 10rem;
        right: 0;
        width: 65.9rem;
        height: 28rem;
        .tablet & {
          top: initial;
          bottom: 61.7rem;
          right: -4.3rem;
          width: 30.3rem;
          height: 12.9rem;
        }
        .mobile & { 
          top: initial;
          bottom: 31.9rem;
          right: -2.3rem;
          width: 15.8rem;
          height: 7rem;
        }
      }

      &_n1 {
        top: 32.8rem;
        right: 5.8rem;
        width: 34.3rem;
        height: 29.2rem;
        z-index: 1;
        .tablet & {
          top: initial;
          bottom: 31.2rem;
          right: -6.5rem;
          width: 19.8rem;
          height: 31.5rem;
        }
        .mobile & {
          top: initial;
          bottom: 16.3rem;
          right: -3.4rem;
          width: 10.3rem;
          height: 16.3rem;
        }
      }

      &_n2 {
        top: 56.3rem;
        right: 0;
        width: 29.4rem;
        height: 35.4rem;
        .tablet & {
          top: initial;
          bottom: 3.6rem;
          right: -1.7;
          width: 25rem;
          height: 30.1rem;
          z-index: 1;
        }
        .mobile & {
          top: initial;
          bottom: 1.9rem;
          right: -0.9rem;
          width: 13rem;
          height: 15.7rem;
          z-index: 1;
        }
      }

      &_n3 {
        top: 52.7rem;
        right: 28.2rem;
        width: 65.4rem;
        height: 50rem;
        z-index: 2;
        .tablet & {
          top: initial;
          bottom: 0;
          right: initial;
          left: 0;
          width: 45rem;
          height: 24.9rem;
        }
        .mobile & {
          top: initial;
          bottom: 0;
          right: initial;
          left: 0;
          width: 23.4rem;
          height: 13rem;
        }
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
</style>