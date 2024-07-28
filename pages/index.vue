<template>
  <div
      ref="page"
      :class="['page page_home page_down', {'page_first-download': firstDownloadStore.active }]"
      @wheel="wheelEvent"
  >
    <Logo />
    <video
        ref="video"
        class="video"
        src="/pages/home/major.mp4"
        poster="/pages/home/major.jpg"
        playsinline
        loop
        muted
        autoplay
    ></video>
    <div class="info">
      Мы — светотехническая компания,<br />
      которая настроена на решение любой<br />
      вашей задачи и запроса
    </div>
    <!--<Btn text="заказать проект" />-->
    <StandardButton
        :width="42.5"
        :height="12"
    />
    <div
        class="scroll-down"
        @click="scrollDown"
    >
      <nuxt-icon
          class="arrow"
          name="arrow-down"
          filled
      />
    </div>
    <div
        class="sound_wrapper"
        :class="{active: sound}"
        @click="switchesSound()"
    >
      <nuxt-icon
          class="sound"
          name="sound"
          filled
      />
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';

export default {
  data() {
    return {
      sound: false,
    };
  },
  computed: {
    ...mapStores(firstDownload),
  },
  mounted() {
    setTimeout(() => {
      this.firstDownloadStore.active = false;
    }, 6000);
  },
  methods: {
    switchesSound() {
      this.sound = !this.sound;
      if (this.sound) {
        this.$refs.video.muted = false;
      } else {
        this.$refs.video.muted = true;
      }
    },
    scrollDown() {
      this.$router.push('/about');
    },
    opensPopupService(id) {
      this.openPopupService = true;
      this.idPopupService = id;
    },
    wheelEvent(e) {
      if (e.deltaY >= 1) {
        this.$router.push('/about');
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener('wheel', this.$refs.page);
  },
};
</script>

<style lang="scss">
.page.page_home {
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 19rem 10rem 0;

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
    line-height: 3.6rem;
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
      z-index: 1;

      svg {
        height: 100%;
      }
    }
  }

  .sound_wrapper {
    position: absolute;
    right: 10rem;
    bottom: 6.5rem;
    width: 3rem;
    height: 2.8rem;
    cursor: pointer;

    .line {
      position: absolute;
      top: 2.6rem;
      left: 0;
      width: 4rem;
      height: 2px;
      background: #fff;
      transform: rotate(-55deg);
      transition: width 0.3s ease;
      transform-origin: left;
    }

    .sound {
      width: 100%;
      height: 100%;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &.active {
      .line {
        width: 0;
      }
    }
  }

  .Btn {
    margin-top: 4.6rem;
  }

  &.page_first-download {
    .video {
      transform: scale(1.1);
      will-change: transform;
      animation: anim-scale 2.2s forwards;
    }

    .sound_wrapper {
      opacity: 0;
      animation: show-elem .3s 2s forwards;
    }

    .scroll-down {
      opacity: 0;
      animation: show-elem .3s 2s forwards;
    }

    .Btn {
      opacity: 0;
      transform: translateY(15rem);
      animation: text-show 1s 2s forwards;
    }

    .info {
      transform: translateY(15rem);
      opacity: 0;
      animation: text-show 1s 2s forwards;
    }
  }
}
</style>

