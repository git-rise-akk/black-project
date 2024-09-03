<template>
  <div class="PopupService">
    <div class="PopupService_bg"></div>
    <div class="PopupService_wrapper">
      <div class="PopupService__left">
        <div
            class="title"
            v-html="info[id].title"
        ></div>
        <div class="content">
          <div
              class="text"
              v-html="info[id].text"
          ></div>
          <div
              class="price"
              v-html="`от ${separateThousands(info[id].price)}`"
          ></div>
          <StandardButton
            :text="info[id].btn"
            :width="52"
            :height="12"
           @click="opensPopupCallback"
          />
        </div>
      </div>
      <div class="PopupService__right">
        <div class="part part_n0">
          <div class="image_wrapper">
            <img
              :src="`/popups/popup-service/${id}/${info[id].images[0]}.jpg`"
              class="image"
            />
          </div>
        </div>
        <div class="part part_n1">
          <div class="image_wrapper">
            <img
              :src="`/popups/popup-service/${id}/${info[id].images[1]}.jpg`"
              class="image"
            />
          </div>
        </div>
        <div class="part part_n2">
          <div class="image_wrapper">
            <img
              :src="`/popups/popup-service/${id}/${info[id].images[2]}.jpg`"
              class="image"
            />
          </div>
        </div>
      </div>
      <Close @click="closingEvent()" />
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      info: [
        {
          images: ['00', '01', '02'],
          title: 'Проектирование<br />систем освещения<br />и управления',
          text: 'Наши специалисты выслушают все ваши пожелания и технические особенности вашего объекта и учтут все нюансы для подготовки проекта. Качество кроется в деталях, а каждый проект уникален, наш инженерный опыт поможет подобрать именно то решение, которое позволит решить вашу задачу на высочайшем техническом уровне.<br /> -Электротехнический проект;<br /> -Светотехнический проект;<br /> -Проект щита управления умным домом;<br /> -Проект освещения ЖК или БЦ;<br /> -Проект управления на протоколах или экосистемах: KNX, DALI, DMX512, Crestron, SPI, Tuya.',
          price: '50000',
          btn: 'Обсудить проект',
        },
        {
          images: ['00', '01', '02'],
          title: 'Поставка и продажа<br />светильников, комплектующих,<br />устройств управления<br />освещением (Алиса, Siri)',
          text: 'Внимателно выслушаем все ваши пожелания к ТЗ на ваш светильник и воплатим их в жизнь для поставки вам в самые короткие сроки.<br /> -Конструирование и подбор светильника под любые требования;<br /> -Светильники защищенные от пыли и влаги от IP20 до IP68;<br /> -Правильно подобраный теплоотвод, для увеличенного срока службы;<br /> -Высокая цветопередача CRI>90 всегда будет давать вам насладиться настоящим цветом и обеспечит здоровье ваших глаз при использовнии;<br /> -Произведем и поставим выбранные вами светильники и системы в самые короткие сроки.',
          price: '50000',
          btn: 'Обсудить поставку',
        },
        {
          images: ['00', '01', '02'],
          title: 'Монтаж и подключение<br />светильников, систем<br />освещения и управления,<br />сборка слаботочных щитов',
          text: 'Установим и подключим любое, даже самое специфичное оборудование. Наш инженерный опыт и глубокие технические знания позваляют подключить и установить любую существующую на светотехническом рынке продукцию или систему управления.<br /> -Установим светильник с любым уровнем сложности подключения;<br /> -Смонтируем трековую или могнитную систему освещения;<br /> -Соберем щит управления и автоматики.',
          price: '50000',
          btn: 'Обсудить монтаж',
        },
        {
          images: ['00', '01', '02'],
          title: 'Пуско-наладочные работы –<br />настройка систем управления<br />светом по вашему ТЗ',
          text: 'Настроим вашу систему освещения по вашему Техническому Заданию. Запустим проект любой сложности. -Настройка ситемы на протоколе - KNX;<br /> -Настройка ситемы на протоколе - DALI;<br /> -Настройка ситемы на протоколе - DMX512;<br /> -Настройка ситемы на протоколе - SPI;<br /> -Настройка ситемы Crestron; -Настройка ситемы Tuya.',
          price: '50000',
          btn: 'Обсудить пнр',
        },
        {
          images: ['00', '01', '02'],
          title: 'Сервисное<br />обслуживание и ремонт<br />оборудования',
          text: 'Поможем с обслуживанием или ремонтом вашей системы освещения. Наш инженерный опыт позваляет бережно разобрать ваш светильник и снова вернуть его в рабочее состояние.<br /> -Ремонт светильников; -Ремонт системы освещения;<br /> -Перенастройка системы освещения.',
          price: '50000',
          btn: 'Обсудить ремонт',
        },
        {
          images: ['00', '01', '02'],
          title: 'Нужны дополнительные услуги?',
          text: 'Поможем реализовать любые ваши задумки.<br /> -Электротехнический проект;<br /> -Светотехнический проект;<br /> -Проект щита управления умным домом;<br /> -Проект освещения ЖК или БЦ;<br /> -Проект управления на протоколах или экосистемах: KNX, DALI, DMX512, Crestron, SPI, Tuya.',
          price: '50000',
          btn: 'Обсудить задачу',
        },
      ],
    };
  },
  computed: {
    ...mapStores(openPopup),
  },
  methods: {
    closingEvent() {
      this.$emit('closePopup');
    },
    separateThousands(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    opensPopupCallback() {
      this.openPopupStore.popupCallback = true;
    },
  },
}
</script>

<style lang="scss">
.PopupService {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  &_active {
    opacity: 1;
    pointer-events: auto;

    .PopupService_bg {
      background-color: rgba($color: #000000, $alpha: .2);
      backdrop-filter: blur(5px);
    }

    .PopupService_wrapper {
      transform: translateY(0);
      opacity: 1;
      transition: transform .5s;
    }
  }

  &_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0);
    backdrop-filter: blur(0px);
    transition: backdrop-filter .4s, background-color .4s;
  }

  &_wrapper {
    position: relative;
    height: calc(100vh - 1.6rem);
    width: 150rem;
    padding: 10rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background: $popup;
    transform: translateY(calc(100% + 1.6rem));
    opacity: 0;
    transition: transform .5s, opacity .1s .6s;
  }

  &__left {
    width: 54.4rem;
    height: 100%;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 2.5rem;
      margin-bottom: 5.4rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      height: 100%;

      .text {
        font-size: 1.4rem;
        line-height: 2.2rem;
        font-weight: 300;
      }

      .price {
        font-size: 4rem;
      }
    }
  }

  &__right {
    position: relative;
    width: 73.6rem;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1.7fr 1fr;
    grid-column-gap: 0.6rem;
    grid-row-gap: 0.6rem;

    .part {
      position: relative;

      .image_wrapper {
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: hidden;

        .image {
          object-fit: cover;
          height: 100%;
          width: 100%;
          transition: transform .7s;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        }
      }


      &_n0 {
        grid-area: 1 / 1 / 3 / 2;

        .image_wrapper {
          top: 10.1rem;
          height: 65%;
        }
      }

      &_n2 {
        .image_wrapper {
          width: 81%;
        }
      }
    }
  }
}
</style>
