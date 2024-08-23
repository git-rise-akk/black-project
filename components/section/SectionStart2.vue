<template>
      <section class="section section_start">
        <div class="section__left">
          <div class="title text-anim-line">
            Мы —<br />
            светотехническая<br />
            компания
          </div>
          <div class="info text-anim-line">
            Предлагаем комплексные<br />
            решения для жилых<br />
            и коммерческих объектов,<br />
            обеспечивая высокое<br />
            качество на каждом<br />
            этапе работы
          </div>
          <StandardButton
            text="посмотреть решения"
            :width="52"
            @click="$emit('viewSolutions')"
          />
        </div>
        <div class="section__right">
          <div class="img_wrapper img_wrapper_n0">
            <img
                class="img"
                src="/assets/pages/home/section_1/00.jpg"
            />
          </div>
          <div class="img_wrapper img_wrapper_n1">
            <img
                class="img"
                src="/assets/pages/home/section_1/01.jpg"
            />
          </div>
          <div class="img_wrapper img_wrapper_n2">
            <img
                class="img"
                src="/assets/pages/home/section_1/02.jpg"
            />
          </div>
          <div class="img_wrapper img_wrapper_n3">
            <img
                class="img"
                src="/assets/pages/home/section_1/03.jpg"
            />
          </div>
          <div class="description text-anim-line">
            Опыт в области<br />
            проектирования,<br />
            монтажа<br />
            и автоматизации<br />
            более 10 лет
          </div>
        </div>
      </section>
</template>
<script>
export default {
    
}
</script>