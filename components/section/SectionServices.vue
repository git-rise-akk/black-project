<template>
      <section id="services" class="SectionServices section">
        <h2 class="title title_page text-anim-letters" v-text-separate="{ byLetters: true }">Услуги</h2>
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

<style lang="scss">
.SectionServices {
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 21rem;
    grid-row-gap: 9.7rem;
    margin-top: 10.7rem;

    .service {
      display: flex;
      flex-direction: column;
      opacity: 0;
      transform: translateY(40%);

      .number {
        font-size: 15rem;
        font-weight: 400;
        line-height: 12rem;
      }

      .title {
        font-size: 2.5rem;
        line-height: 3.1rem;
        margin: 7.7rem 0 4.4rem;
      }

      .text {
        font-size: 1.4rem;
        line-height: 2.2rem;
        font-weight: 300;
      }

      .more {
        position: relative;
        margin: 5.5rem 0 6.6rem;
        font-size: 2.4rem;
        width: fit-content;
        cursor: pointer;

        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0rem;
          width: 100%;
          height: 0.1rem;
          background: #fff;
          transition: width .3s;
        }

        &:hover {
          &:after {
            width: 0;
          }
        }
      }

      .StandardButton {
        margin-top: auto;
      }
    }
  }
}
</style>