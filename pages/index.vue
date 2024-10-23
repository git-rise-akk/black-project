<template>
  <EventManager
	  :class="['page page_home page_down', {'page_first-download': firstDownloadStore.active }]"
		@wheel="({ direction }) => wheelEvent(direction)"
    @vertical-swipe="wheelEvent"
	>
    <video
      ref="video"
      class="video"
      :src="`${src}.mp4`"
      :poster="`${src}.jpg`"
      playsinline
      loop
      muted
      autoplay
    ></video>
    <ClientOnly>
      <Logo v-if="checkScreen()"/>
      <MobLogo v-else />
      <div class="info">
        Мы — светотехническая компания,<br />
        которая настроена на решение любой<br />
        вашей задачи и запроса
      </div>
      <StandardButton
        v-if="checkScreen()"
        :width="42.5"
        :height="12"
        text="заказать проект"
        @click="opensPopupCallback()"
      />
      <MobStandardButton
        v-else
        text="заказать проект"
        @click="opensPopupCallback()"
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
    </ClientOnly>
  </EventManager>
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
    ...mapStores(firstDownload, openPopup, useDeviceStore),
    src() {
      return '/assets/webpages/home/major'
    }
  },
  mounted() {
    setTimeout(() => {
      this.firstDownloadStore.active = false;
    }, 6000);
  },
  methods: {
    checkScreen() {
      return innerWidth > 1280;
    },
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
    wheelEvent(direction) {
      if (direction >= 1) {
        this.$router.push('/about');
      }
    },
    opensPopupCallback() {
      this.openPopupStore.popupCallback = true;
    },
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


  .tablet & {
    padding: 21.9rem 3.8rem 0;
  }
  .mobile & {
    padding: 11.4rem 2rem 0;
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
    line-height: 3.6rem;
    .tablet & {
      font-size: 2.7rem;
      line-height: 3.3rem;
      br {
        display: none;
      }
    }
    .mobile & {
      font-size: 1.4rem;
      line-height: 1.7rem;
      br {
        display: none;
      }
    }
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

    .tablet & {
      height: 11.3rem;
      width: 11.3rem;
    }

    .mobile & {
      height: 5.9rem;
      width: 5.9rem;
    }

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

      .tablet & {
        height: 4.5rem;
        width: initial;
      }
      .mobile & {
        height: 2.3rem;
        width: initial;
      }

      svg {
        height: 100%;
        width: auto;
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

    .tablet & {
      width: 4.5rem;
      height: 4.5rem;
    }
    .mobile & {
      width: 2.3rem;
      height: 2.3rem;
      right: 2rem;
      bottom: 3rem;
    }

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

      .tablet & {
        top: 4.2rem;
        left: 0.5rem;
        width: 6rem;
        height: 0.4rem;
      }

      .mobile & {
        top: 2.2rem;
        width: 3rem;
        height: 2px;
      }
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

  .StandardButton,
  .MobStandardButton {
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

    .StandardButton,
    .MobStandardButton {
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

