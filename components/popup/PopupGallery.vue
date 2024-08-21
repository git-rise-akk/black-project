<template>
  <ClientOnly>
    <Teleport to="body">
        <Transition
            appear
            name="popup-fade"
        >
        <div v-if="active" class="PopupGallery">
          <div class="PopupGallery__controls">
            <transition name="show">
              <div
                v-show="currentPhoto !== 0"
                class="control-element control-element__left"
                @click="changesCurrentPhoto(-1)"
              >
                <nuxt-icon class="arrow-left" name="arrow-left" filled />
              </div>
            </transition>
            <transition name="show">
              <div
                v-show="currentPhoto !== content.photos.length - 1"
                class="control-element control-element__right"
                @click="changesCurrentPhoto(1)"
              >
                <nuxt-icon class="arrow-right" name="arrow-right" filled />
              </div>
            </transition>
          </div>
          <div class="PopupGallery__photos">
            <template v-for="(photo, key) in content.photos" :key="`photo${key}`">
              <transition :name="getDynamicTransitionName">
                <div v-show="currentPhoto === key" class="photo-wrapper">
                  <nuxt-img :src="photo" class="photo" loading="lazy" />
                </div>
              </transition>
            </template>
          </div>
          <transition name="show">
            <div class="PopupGallery__text" v-show="currentPhoto === 0">
              <div class="title">{{ content.title }}</div>
              <div class="text" v-html="content.text"></div>
            </div>
          </transition>
          <div class="PopupGallery__counter-photos">
            <div class="current-photo" :style="{ width: widthNumber }">
              <transition :name="getTransitionNameNumber">
                <div :key="currentPhoto" class="number">{{ currentPhoto + 1 }}</div>
              </transition>
            </div>
            <div class="separator">/</div>
            <div class="total-photos" :style="{ width: widthNumber }">{{ content.photos.length }}</div>
          </div>
          <Close :blur="true" @click="closingEvent()"/>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
  
<script>
    export default {
        props: {
          content: {
              type: Object,
              default: () => ({}),
          },
          active: {
              type: Boolean,
              default: false,
          },
        },
        data() {
            return {
              currentPhoto: 0,
              direction: 1,
            };
        },
        computed: {
          getDynamicTransitionName()  {
            return this.direction === 1 ? 'photo-left' : 'photo-right';
          },
          widthNumber() {
            const numberCharacters = String(this.content.photos.length).length;
            if ( numberCharacters < 2) {
              return '6rem';
            } else if (numberCharacters >= 2 && numberCharacters < 3) {
              return '11rem';
            } else {
              return '16rem';
            }
          },
          getTransitionNameNumber() {
            return this.direction === 1 ? 'number-next' : 'number-back';
          },
        },
        methods: {
          closingEvent() {
            this.$emit('closePopup');
          },
          changesCurrentPhoto(number) {
            this.direction = number;
            if (this.currentPhoto === 0 && number === -1) {
              this.currentPhoto = 0;
            } else if (this.currentPhoto === this.content.photos.length - 1 && number === 1) {
              this.currentPhoto = this.content.photos.length - 1;
            } else {
              this.currentPhoto = this.currentPhoto + number;
            }
          }
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
    user-select: none;
    .nuxt-icon svg {
      width: initial;
      height: initial;
      margin-bottom: 0;
      vertical-align: initial;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(102,102,102,0) 42%);
    }
    &__controls {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
      .control-element {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 15.2rem;
        height: 15.2rem;
        border-radius: 50%;
        cursor: pointer;
        pointer-events: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #000;
          filter: blur(6rem);
        }
        .arrow-left,
        .arrow-right {
          transition: transform .3s;
          z-index: 1;
        }
        &__left {
          left: 0;
          &:hover .arrow-left {
            transform: translateX(-20%)
          }
        }
        &__right {
          right: 0;
          &:hover .arrow-right {
            transform: translateX(20%)
          }
        }
      }
    }
    &__photos {
      position: relative;
      height: 100%;
      .photo-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .photo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    &__text {
      position: absolute;
      left: 5.5rem;
      bottom: 3rem;
      z-index: 1;
      .title {
        font-size: 4rem;
      }
      .text {
        font-size: 1.8rem;
        margin-top: 1rem;
        text-transform: none;
      }
    }
    &__counter-photos {
      position: absolute;
      bottom: 3rem;
      right: 7rem;
      height: 9rem;
      display: flex;
      align-items: center;
      font-size: 9.6rem;
      z-index: 1;
      .number-next-enter-active,
      .number-next-leave-active,
      .number-back-enter-active,
      .number-back-leave-active {
        transition: transform .5s;
      }
      .number-next-enter-from,
      .number-back-leave-to {
        transform: translateY(100%);
      }
      .number-next-leave-to,
      .number-back-enter-from {
        transform: translateY(-100%);
      }
      .current-photo {
        position: relative;
        width: 5rem;
        height: 100%;
        overflow: hidden;
        .number {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .total-photos {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .photo-left-enter-active,
    .photo-left-leave-active,
    .photo-right-enter-active,
    .photo-right-leave-active {
      transition: transform 1.2s;
    }
    .photo-left-enter-from {
      transform: translateX(100%);
    }
    .photo-left-leave-to,
    .photo-right-enter-from {
      transform: translateX(0);
    }
    .photo-right-leave-to {
      transform: translateX(100%);
    }
  }
</style>
  