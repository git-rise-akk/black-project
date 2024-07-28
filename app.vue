<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>

onMounted(() => {
  // const wStore = import('#build/stores/windowStore.js');
});

</script>
<style lang="scss">
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
</style>
