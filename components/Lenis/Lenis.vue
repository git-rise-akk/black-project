<template>
  <div
    class="Lenis"
    ref="Lenis"
    @wheel="checkCorner"
  >
    <div
      class="Lenis__content"
      ref="content"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  props: {
    cornerEventDelay: {
      type: Number,
      default: 900,
    },
  },
  data() {
    return {
      instance: null,

      /* corner */
      corneredTime: 0,
      lastWheelDirection: 1,
      cornerEventEmitted: false,
      /* end corner */

      // blockScrol: flase,
    };
  },
  emits: [
    'scroll',
    'corner',
  ],
  computed: {
    ...mapStores(headerState),
  },
  watch: {
    '$route.query.section': {
      handler(value) {
        this.switchesSections(value);
      },
    },
  },
  mounted() {
    this.create();
    const getParameter = this.$route.query.section;
    this.switchesSections(getParameter, true);
  },
  methods: {
    create() {
      this.instance = new Lenis({
        wrapper: this.$el,
        content: this.$refs.content,
      });

      this.instance.on('scroll', (e) => {
        ScrollTrigger.update();

        /*вынести наружу*/
        // this.headerStore.state = e.direction !== 1;
      });
      this.handleGsap();
    },
    handleGsap() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.ticker.add((time) => {
        this.instance.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    },
    checkCorner({ deltaY }) {
      const currentWheelDirection = Math.sign(deltaY);

      const cornerTermZero = this.instance?.progress < 0.02 && currentWheelDirection === -1;
      const cornerTermOne = this.instance?.progress > 0.98 && currentWheelDirection === 1;

      if (!this.corneredTime && (cornerTermZero || cornerTermOne)) {
        this.corneredTime = Date.now();
      }

      if (this.lastWheelDirection !== currentWheelDirection) {
        this.corneredTime = null;
      }

      this.lastWheelDirection = currentWheelDirection;

      if (!(this.corneredTime && Date.now() - this.corneredTime > this.cornerEventDelay)) {
        return;
      }
      if (!this.cornerEventEmitted && (cornerTermZero || cornerTermOne)) {
        this.corneredTime = null;
        this.$emit('corner', cornerTermOne ? 1 : -1);

        this.cornerEventEmitted = true;

        setTimeout(() => (this.cornerEventEmitted = false), this.cornerEventDelay * 2);
      }
    },
    switchesSections(parameter, animation = false) {
      
      const target = document.getElementById(`${parameter}`);
      if (!target || !this.instance) {
        return
      }

      this.instance.scrollTo(target, {
        immediate: Boolean(animation),
        offset: 100,
      });
    },
  },

};
</script>

<style lang="scss">
.Lenis {
}
</style>
