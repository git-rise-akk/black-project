<template>
      <section id="services" class="SectionServices section">
        <TextSeparate
          tag="h2"
          class="title title_page"
          by-letters
          text="Услуги"
        /> 
        <ul class="services">
          <li
            v-for="(service, key) in data[useDeviceStore().device === 'desktop' ? 'desktop' : 'mobile']?.services"
            :key="`service_${key}`"
            class="service"
          >
            <div class="number" v-html="`.0${ +key + 1}`"></div>
            <div class="title" v-html="service.title"></div>
            <p class="text" v-html="service.text"></p>
            <div
              class="more"
              @click="$emit('popupServices', key)"
            >подробнее
            </div>
            <StandardButton
              v-if="useDeviceStore().device === 'desktop'"
              text="обсудить проект"
              :width="42.5"
              :height="12"
              @click="$emit('callback')"
            />
            <MobStandardButton
              v-else
              text="обсудить проект"
              @click="$emit('callback')"
            />
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
    this.animateCardsServices();
  },
  computed: {
    ...mapStores(useDeviceStore),
  },
  methods: {
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
  }
}
</script>

<style lang="scss">
.SectionServices {
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: min(5vw, 21rem);
    grid-row-gap: 9.7rem;
    margin-top: 10.7rem;

    .tablet & {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 9.2rem;
      margin-top: 6.9rem;
    }

    .mobile & {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 4.8rem;
      margin-top: 3.6rem;
    }

    .service {
      display: flex;
      flex-direction: column;
      opacity: 0;
      transform: translateY(40%);

      .number {
        font-size: 15rem;
        font-weight: 400;
        line-height: 12rem;

        .tablet & {
          font-size: 13.5rem;
          line-height: 13.4rem;
        }

        .mobile & {
          font-size: 7rem;
          line-height: 7rem;
        }
      }

      .title {
        font-size: 2.5rem;
        line-height: 3.1rem;
        margin: 7.7rem 0 4.4rem;

        .tablet & {
          font-size: 3.1rem;
          line-height: 3.7rem;
          margin: 4.8rem 0 2.9rem;
        }

        .mobile & {
          font-size: 1.6rem;
          line-height: 1.9rem;
          margin: 2.5rem 0 1.5rem;
        }
      }

      .text {
        font-size: 1.4rem;
        line-height: 2.2rem;
        font-weight: 300;

        .tablet & {
          font-size: 2.3rem;
          line-height: 2.9rem;
        }

        .mobile & {
          font-size: 1.2rem;
          line-height: 1.5rem;
        }
      }

      .more {
        position: relative;
        margin: 5.5rem 0 6.6rem;
        font-size: 2.4rem;
        width: fit-content;
        cursor: pointer;

        .tablet & {
          margin: 3.8rem 0 6.7rem;
          font-size: 2.4rem;
        }

        .mobile & {
          margin: 2rem 0 3.5rem;
          font-size: 1.4rem;
        }

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
</style>