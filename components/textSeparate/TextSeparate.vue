<template>
    <Component
      :is="tag" 
      class="TextSeparate"
      :class="byLetters ? 'text-anim-letters' : 'text-anim-line'"
    >
    </Component>
  </template> 
  
  <script>
  
  export default {
    props: {
      tag: {
        type: String,
        default: 'div',
      },
      text: {
        type: String,
        default: '',
      },
      byLetters: {
        type: Boolean,
        default: false,
      }
    },
    inject: ['scroller'],
    data() {
      return {
        itemsArray: [],
        spansArray: [],
        spanWrapper: null,
      };
    },
    created() {
      this.separate();
    },
    mounted() {
      this.injectText();
    },
    methods: {
      separate() {
        if (this.byLetters) {
          /* по буквам */
          this.itemsArray = this.text.split('');
        } else if (!this.byLetters) {
          /* по строкам */
          this.itemsArray = this.text.replace(/<br\s\/>|<br>/gi, '<br/>').split('<br/>');
          this.itemsArray = this.itemsArray.map(item => item.replace(/\r\n/g, ''));
        }
      },
      injectText() {
        this.itemsArray?.forEach((item) => {
          const spanWrapper = document.createElement('span');
          const span = document.createElement('span');
          spanWrapper.appendChild(span);
          
          span.innerText = item;
          
          Object.assign(spanWrapper.style, { display: this.byLetters ? 'inline-block' : 'block', overflow: 'hidden' });
          Object.assign(span.style, { display: 'inline-block' });

          this.spansArray.push(span);
          this.$el.appendChild(spanWrapper);
          
        });
        this.animate();
      },
      async  animate(el) {
        await this.$nextTick();

        gsap.from(this.spansArray, {
          yPercent: 110,
          stagger: 0.07,
          duration: 0.5,
          scrollTrigger: {
            scroller: this.scroller,
            trigger: toRaw(this.$el),
            /** once - вкл, toggle - выкл */
            once: true,
            // toggleActions: 'play play reverse reverse',
            start: () => 'top 85%',
            end: () => ' top 40%',
            // markers: true,
          },
        });
    
      }

    },
  };
  </script>
  
  <style lang="scss">
  .TextSeparate {
    overflow: hidden;
  }
  </style>
  
  