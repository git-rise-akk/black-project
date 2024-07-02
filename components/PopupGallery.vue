<template>
    <div class="PopupGallery">
      <div class="controls">
        <div class="control-element control-element__left"></div>
        <div class="control-element control-element__right"></div>
      </div>
      <div class="photos">
        <template v-for="(photo, key) in photos" :key="`photo${key}`">
          <transition :name="getDynamicTransitionName">
            <div v-show="currentPhoto === key" class="photo-wrapper">
              <nuxt-img :src="photo" class="photo" loading="lazy" />
            </div>
          </transition>
        </template>
      </div>
      <!-- <div class="counter-photos">
        <div class="current-photo" :style="{ width: widthNumber }">
          <transition :name="getTransitionNameNumber">
            <div :key="currentPhoto" class="number">{{ currentPhoto + 1 }}</div>
          </transition>
        </div>
        <div class="separator">/</div>
        <div class="total-photos" :style="{ width: widthNumber }">{{ photos.length }}</div>
      </div> -->
      <Close @click="closingEvent()"/>
    </div>
  </template>
  
<script>
    export default {
        data() {
            return {
                photos: ['/pages/home/section_3/room-lighting/00.jpg', '/pages/home/section_3/room-lighting/01.jpg'],
                currentPhoto: 0,
                direction: 1,
            };
        },
        computed: {
            getDynamicTransitionName()  {
                return this.direction === 1 ? 'photo-left' : 'photo-right';
            },
        },
        methods: {
          closingEvent() {
            this.$emit('closePopup');
          },
        },
    }    
</script>
  
<style lang="scss">
  .PopupGallery{
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    .photos {
      width: 100%;
      height: 100%;
    }
  }
</style>
  