import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('text-separate', {
    mounted(el, binding) {
      const opt = {
        byLetters: true,
        ...binding.value,
      };

      let itemsArray;

      el.style.overflow = 'hidden';

      if (opt.byLetters) {
        /* по буквам */
        itemsArray = el.innerText.split('');
      } else if (!opt.byLetters) {
        /* по строкам */
        itemsArray = el.innerHTML.replace(/<br\s\/>|<br>/gi, '<br/>').split('<br/>');
      }

      el.innerHTML = '';
      const spansArray = [];

      itemsArray?.forEach((item) => {
        const spanWrapper = document.createElement('span');
        const span = document.createElement('span');
        spanWrapper.appendChild(span);

        span.innerText = item;

        Object.assign(spanWrapper.style, { display: opt.byLetters ? 'inline-block' : 'block', overflow: 'hidden' });
        Object.assign(span.style, { display: 'inline-block' });

        spansArray.push(span);
        el.appendChild(spanWrapper);
      });

      // Возвращаем массив span элементов, если это необходимо
      return spansArray;
    },
  });
});