<template>
      <section class="SectionStart section section_start">
        <div class="section__left">
          <div class="title text-anim-line" v-text-separate="{ byLetters: false }">
            Мы —<br />
            светотехническая<br />
            компания
          </div>
          <div class="info text-anim-line" v-text-separate="{ byLetters: false }">
            Предлагаем комплексные<br />
            решения для жилых<br />
            и коммерческих объектов,<br />
            обеспечивая высокое<br />
            качество на каждом<br />
            этапе работы
          </div>
          <StandardButton
            text="посмотреть решения"
            :width="52"
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
          <div class="description text-anim-line" v-text-separate="{ byLetters: false }">
            Опыт в области<br />
            проектирования,<br />
            монтажа<br />
            и автоматизации<br />
            более 10 лет
          </div>
        </div>
      </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.SectionStart {
  display: flex;

  .section__left {
    position: relative;
    flex: 1;
    z-index: 2;

    .title {
      padding-top: 22.6rem;
      line-height: 11rem;
      z-index: 1;
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
</style>