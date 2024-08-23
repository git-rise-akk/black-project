<template>
  <div class="layout-default">
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
