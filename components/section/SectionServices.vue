<template>
      <section id="services" class="section section_services">
        <h2 class="title title_page text-anim-letters">Услуги</h2>
        <ul class="services">
          <li class="service">
            <div class="number">.01</div>
            <div class="title">
              Проектирование<br />
              систем<br />
              освещения<br />
              и управления
            </div>
            <p class="text">
              наши специалисты разработают
              уникальный проект, соответствующие
              вашим требованиям и современным
              стандартам
            </p>
            <div
                class="more"
                @click="$emit('popupServices', 0)"
            >подробнее
            </div>
            <StandardButton
              text="обсудить проект"
              :width="42.5"
              :height="12"
              @click="$emit('callback')"
            />
          </li>
          <li class="service">
            <div class="number">.02</div>
            <div class="title">
              Поставка и продажа<br />
              светильников,<br />
              комплектующих,<br />
              устройств управления<br />
              освещением (Алиса, Siri)
            </div>
            <p class="text">
              производство светильников и систем
              освещения из комплектующих высокого
              уровня надежности и качества,
              контроль качества на каждом этапе.
            </p>
            <div
              class="more"
              @click="$emit('popupServices', 1)"
            >подробнее
            </div>
            <StandardButton
              text="обсудить поставку"
              :width="42.5"
              :height="12"
              @click="$emit('callback')"
            />
          </li>
          <li class="service">
            <div class="number">.03</div>
            <div class="title">
              Монтаж и подключение<br />
              светильников, систем<br />
              освещения и управления,<br />
              сборка слаботочных щитов
            </div>
            <p class="text">
              установим и подключим любое,
              даже самое специфичное оборудование
            </p>
            <div
              class="more"
              @click="$emit('popupServices', 2)"
            >подробнее
            </div>
            <StandardButton
              text="обсудить монтаж"
              :width="42.5"
              :height="12"
              @click="$emit('callback')"
            />
          </li>
          <li class="service">
            <div class="number">.04</div>
            <div class="title">
              Пуско-наладочные<br />
              работы – настройка<br />
              систем управления<br />
              светом по вашему ТЗ
            </div>
            <p class="text">
              настройка систем освещения на основе
              протокола управления DALI - данный
              протокол позволит исполнить любые
              ваши задумки
            </p>
            <div
              class="more"
             @click="$emit('popupServices', 3)"
            >подробнее
            </div>
            <StandardButton
              text="обсудить пнр"
              :width="42.5"
              :height="12"
              @click="$emit('callback')"
            />
          </li>
          <li class="service">
            <div class="number">.05</div>
            <div class="title">
              Сервисное<br />
              обслуживание и ремонт<br />
              оборудования
            </div>
            <p class="text">
              бывает, что ваш любимый светильник
              или система управления сломалась
              или потребовалась дополнительна
              настройка, мы всегда с радостью
              придем вам на помощь
            </p>
            <div
              class="more"
              @click="$emit('popupServices', 4)"
            >подробнее
            </div>
            <StandardButton
              text="обсудить ремонт"
              :width="42.5"
              :height="12"
              @click="$emit('callback')"
            />
          </li>
          <li class="service">
            <div class="number">.06</div>
            <div class="title">
              нужны дополнительные<br />
              услуги?
            </div>
            <p class="text">
              — светодизайн;
              — светотехнический расчет;
              — консультация по выбору освещения
              и технико-экономическое обоснование
            </p>
            <div
              class="more"
              @click="$emit('popupServices', 5)"
            >подробнее
            </div>
            <StandardButton
              text="обсудить задачу"
              :width="42.5"
              :height="12"
              @click="$emit('callback')"
            />
          </li>
        </ul>
      </section>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>