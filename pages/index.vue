<template>
  <div class="page page_home">
    <div class="scroll">
      <section class="section section_n0">
      <nuxt-icon name="big-logo" filled />
      <video class="video" src="/pages/home/major.mp4" poster="/pages/home/major.jpg" playsinline loop muted autoplay></video>
      <div class="info">
        Мы — светотехническая компания,<br />
        которая настроена на решение любой<br />
        вашей задачи и запроса
      </div>
      <div class="scroll-down">
        <nuxt-icon class="arrow" name="arrow-down" filled />
      </div>
    </section>
    <section class="section section_n1">
      <div class="title">
        Мы —<br />
        светотехническая<br />
        компания
      </div>
      <div class="info">
        Предлагаем комплексные<br />
        решения для жилых<br />
        и коммерческих объектов,<br />
        обеспечивая высокое<br />
        качество на каждом<br />
        этапе работы
      </div>
      <div class="images_container">
      </div>
    </section>
    </div>
  </div>
</template>

<style lang="scss">
  @keyframes animation-up-down {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
  .page.page_home {
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
    .section {
      position: relative;
      padding: 0 10rem;
      &_n0 {
        padding-top: 19rem;
        height: 100vh;
        width: 100vw;
        .nuxt-icon {
          position: relative;
          width: 100%;
          z-index: 1;
          svg {
            width: 100% !important;
          }
        }
        .video {
          position: absolute;
          left: 0;
          top: 0;
          height: 100vh;
          width: 100vw;
          object-fit: cover;
        }
        .info {
          position: relative;
          font-size: 3rem;
          font-weight: 300;
          margin-top: 4.6rem;
          text-transform: uppercase;
        }
        .scroll-down {
          position: absolute;
          bottom: 1.3rem;
          left: 50%;
          transform: translateX(-50%);
          width: 15.2rem;
          height: 15.2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #000;
            filter: blur(7rem);
          }

          .arrow {
            height: 4.8rem;
            width: 4rem;
            animation: animation-up-down 1.5s linear infinite alternate;
          }
        }
      }
      &_n1 {
        .title {
          margin-top: 22.6rem;
          line-height: 11rem;
        }
        .info {
          font-size: 4rem;
          font-weight: 300;
          text-transform: uppercase;
          margin-top: 3.9rem;
        }
      }
    }
  }
</style>

