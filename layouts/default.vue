<template>
  <div class="layout-default">
    <slot></slot>
    <Header />
  </div>
</template>

<script setup>
import { useWindowStore } from '@/stores/windowStore.js';

const windowStore = useWindowStore();

// console.log(windowStore);

function resizeHandler() {
  console.log('resize', innerHeight, innerWidth);
  windowStore.updateWindowSize(innerWidth, innerHeight);
}

onMounted(() => {
  resizeHandler();
  // console.log(windowStore.fontSize);
  window.addEventListener('resize', resizeHandler);
});

</script>

<style lang="scss">
.layout-default {
}
</style>
