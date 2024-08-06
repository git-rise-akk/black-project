<template>
  <div class="layout-default">
    <slot></slot>
    <Header />
  </div>
</template>

<script setup>
import { useWindowStore } from '@/stores/windowStore.js';

const windowStore = useWindowStore();

function resizeHandler() {
  windowStore.updateWindowSize(innerWidth, innerHeight);
}

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
      width: initial;
      height: initial;
      margin-bottom: 0;
      vertical-align: initial;
    }
  }
}
</style>
