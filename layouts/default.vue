<template>
  <div v-if="true" :class="['layout-default', deviceStore.device]">
    <slot />
    <Header v-if="deviceStore.device === 'desktop'" />
    <MobHeader v-else />
    <MobMenu v-if="deviceStore.device !== 'desktop'"/>
    <PopupService
      :id="openPopupStore.popupService[0]"
      :class="{'PopupService_active': openPopupStore.popupService[1] }"
      @closePopup="closesPopupService()"
    />
    <PopupCallback 
      :class="{'PopupCallback_active': openPopupStore.popupCallback }"
      @closePopup="closesPopupCallback ()"
    />
  </div>
  <!-- <div v-else class="layout-mobile">
    <div class="info">
      <div class="glowing-circle"></div>
      <div class="text">мобильная версия<br />скоро засветится</div>
    </div>
  </div> -->
</template>

<script setup>
import { useWindowStore } from '@/stores/windowStore.js';
import { useDeviceStore } from '@/stores/deviceStore.js';
import { openPopup } from '@/stores/openPopup.js';

const windowStore = useWindowStore();
const deviceStore = useDeviceStore();
const openPopupStore = openPopup();

function resizeHandler() {
  windowStore.updateWindowSize(innerWidth, innerHeight);
  deviceStore.returnsDevice(innerWidth)
  console.log(deviceStore.device);
  
}

const closesPopupCallback = () => {
  openPopupStore.popupCallback = false;
};

const closesPopupService = () => {
  openPopupStore.popupService = [];
};

onMounted(() => {
  resizeHandler();
  window.addEventListener('resize', resizeHandler);
});

</script>

<style lang="scss">
.layout-mobile {
  position: absolute;
  height: 100vh;
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .glowing-circle {
      position: relative;
      width: 20rem;
      height: 20rem;
      margin-bottom: 5rem;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 15rem;
        height: 15rem;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 2rem #fff, 0 0 4rem #fff, 0 0 6rem #fff;
        animation: glow 3s infinite alternate;
      }
    }
    .text {
      text-align: center;
    }
  }
}
.layout-default {
  .nuxt-icon {
    position: relative;
    display: block;

    svg {
      margin-bottom: 0;
      vertical-align: initial;
    }
  }
}

@keyframes glow {
  0% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 2rem #fff, 0 0 4rem #fff, 0 0 6rem #fff;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.3);
    box-shadow: 0 0 3rem #fff, 0 0 6rem #fff, 0 0 9rem #fff;
  }
}
</style>
