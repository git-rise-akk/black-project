<template>
      <section id="portfolio" class="SectionPortfolio section">
        <TextSeparate
          tag="h2"
          class="title title_page"
          by-letters
          text="Портфолио"
        /> 
        <ul class="projects">
          <li
            class="project project_n0"
            @click="$emit('openGallery', 1)"
          >
            <img
              class="project__cover"
              src="/assets/webpages/about/portfolio/room-lighting/cover.jpg"
            />
            <div class="project__name">
              <div class="title">room lighting</div>
              <div class="subtitle">освещение комнаты</div>
            </div>
          </li>
          <li
            class="project project_n1"
            @click="$emit('openGallery', 2)"
          >
            <img
              class="project__cover"
              src="/assets/webpages/about/portfolio/bright-horizons-office/cover.jpg"
            />
            <div class="project__name">
              <div class="title">Bright Horizons Office</div>
              <div class="subtitle">освещение офиса</div>
            </div>
          </li>
          <li
              class="project project_n2"
              @click="$emit('openGallery', 3)"
          >
            <img
              class="project__cover"
              src="/assets/webpages/about/portfolio/architectural-lighting/cover.jpg"
            />
            <div class="project__name">
              <div class="title">architectural lighting<br />of the house</div>
              <div class="subtitle">освещение дома</div>
            </div>
          </li>
        </ul>
      </section>
</template>

<script>
import { mapStores } from 'pinia';

export default {
  computed: {
    ...mapStores(useDeviceStore),
  },
  mounted() { 
    this.animateCardsPortfolio();
  },
  methods: {
    animateCardsPortfolio() {
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

      // на десктопе не показывается последняя карточка
      if (useDeviceStore().device !== 'desktop') {
        const covers = gsap.utils.toArray('.SectionPortfolio .project__cover');
        
        covers.forEach((cover, index) => {
          gsap.to(cover, {
            y: '-50%',
            duration: .2,
            scrollTrigger: {
              trigger: cover,
              start: 'center 75%',
              scroller: '.page_about',
              end: 'center 25%',
              scrub: true,
            },
          });
        });
      }
    },
  }
}
</script>

<style lang="scss">
.SectionPortfolio {
  .projects {
    margin-top: 9.7rem;

    .tablet & {
      margin-top: 7.5rem;
    }

    .mobile & {
      margin-top: 3.9rem;
    }

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
      -webkit-tap-highlight-color: transparent;

      .tablet & {
        height: initial;
        aspect-ratio: 1 / 1;
        width: calc(100% + 7.6rem);
        margin-left: -3.8rem;
      }

      .mobile & {
        height: initial;
        aspect-ratio: 1 / 1;
        width: calc(100% + 4rem);
        margin-left: -2rem;
      }
      

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

        .tablet & {
          transform: translate(-50%, -45%) scale(1);
          width: 125%;
          height: 125%;
          transition: initial;
        }
        .mobile & {
          transform: translate(-50%, -45%) scale(1);
          width: 125%;
          height: 125%;
          transition: initial;
        }
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

          .tablet & {
            font-size: 3.1rem;
            line-height: 2.7rem;
            margin-bottom: 1.5rem;
          }
          .mobile & {
            font-size: 1.6rem;
            line-height: 1.4rem;
            margin-bottom: 0.8rem;
          }
        }

        .subtitle {
          font-size: 2.6rem;
          font-weight: 300;
          text-transform: lowercase;

          .tablet & {
            font-size: 2rem;
            line-height: 1.3rem;
          }
          .mobile & {
            font-size: 1rem;
            line-height: 0.7rem;
          }
        }
      }

      &:not(.tablet &):not(.mobile &):hover {
        .project__cover {
          transform: translate(-50%, -50%) scale(1.1);
        }
      }
    }
  }
}
</style>
