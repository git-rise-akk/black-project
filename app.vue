<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useWindowStore } from '@/stores/windowStore.js';
import { useDeviceStore } from '@/stores/deviceStore.js';

const windowStore = useWindowStore();
const deviceStore = useDeviceStore();

function resizeHandler() {
  windowStore.updateWindowSize(innerWidth, innerHeight);
  deviceStore.returnsDevice(innerWidth);
}

onMounted(() => {
  resizeHandler();
  window.addEventListener('resize', resizeHandler);
});
</script>
<style lang="scss">
</style>
