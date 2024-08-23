<template>
      <section id="portfolio" class="section section_portfolio">
        <h2 class="title title_page text-anim-letters">Портфолио</h2>
        <ul class="projects">
          <li
              class="project project_n0"
              @click="$emit('openGallery', 1)"
          >
            <img
                class="project__cover"
                src="/assets/pages/about/portfolio/room-lighting/cover.jpg"
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
                src="/assets/pages/about/portfolio/bright-horizons-office/cover.jpg"
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
                src="/assets/pages/about/portfolio/architectural-lighting/cover.jpg"
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
