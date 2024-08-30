<template>
  <div v-if="!$device.isMobileOrTablet" class="layout-default">
    <slot />
    <Header />
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
  <div v-else class="layout-mobile">
    <div class="info">
      <img src="/mob.gif" class="light-bulb" alt="">
      <div class="text">мобильная версия<br />скоро засветиться</div>
    </div>
  </div>
</template>

<script setup>
import { useWindowStore } from '@/stores/windowStore.js';
import { openPopup } from '@/stores/openPopup.js';

const windowStore = useWindowStore();
const openPopupStore = openPopup();


function resizeHandler() {
  windowStore.updateWindowSize(innerWidth, innerHeight);
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
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .light-bulb {
      width: 30rem;
      height: auto
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
</style>
