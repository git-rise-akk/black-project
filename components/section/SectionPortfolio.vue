<template>
      <section id="portfolio" class="SectionPortfolio section">
        <h2 class="title title_page text-anim-letters" v-text-separate="{ byLetters: true }">Портфолио</h2>
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
export default {
    
}
</script>

<style lang="scss">
.SectionPortfolio {
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
</style>
