<template>
    <div ref="page" class="page page_about page_up" @wheel="wheelEvent">
      <div class="scroll">
        <section class="section section_start">
          <div class="section__left">
            <div class="title">
            Мы —<br />
            светотехническая<br />
            компания
          </div>
          <div class="info">
            Предлагаем комплексные<br />
            решения для жилых<br />
            и коммерческих объектов,<br />
            обеспечивая высокое<br />
            качество на каждом<br />
            этапе работы
          </div>
          <StandardButton text="посмотреть решения" width="52" />
          </div>
          <div class="section__right">
            <img class="img img_n0" src="/pages/home/section_1/00.jpg" />
            <img class="img img_n1" src="/pages/home/section_1/01.jpg" />
            <img class="img img_n2" src="/pages/home/section_1/02.jpg" />
            <img class="img img_n3" src="/pages/home/section_1/03.jpg" />
            <div class="description">
              Опыт в области<br />
              проектирования,<br />
              монтажа<br />
              и автоматизации<br />
              более 10 лет
            </div>
          </div>
        </section>
        <section class="section section_company">
          <h2 class="title title_page">О компании</h2>
          <ul class="about">
            <li class="about__item about__item_n0">
              <div class="text-content">
                <div class="title">
                  Компания Black Project<br />
                  уникальна своим<br />
                  инженерным подходом<br />
                  к решению задач
                </div>
                <p class="text">
                  в эру маркетинга мы заинтересованы в том, чтобы<br />
                  выбранное вами оборудование или решение проработало<br />
                  как можно дольше и принесло как можно больше<br />
                  положительных эмоций
                </p>
              </div>
              <div class="images">
                <img class="img img_n0" src="/pages/home/section_2/00.jpg" />
                <img class="img img_n1" src="/pages/home/section_2/01.jpg" />
              </div>
            </li>
            <li class="about__item about__item_n1">
              <div class="text-content">
                <div class="title">
                  Мы стремимся дать нашим<br />
                  клиентам максимально<br />
                  возможное качество на рынке
                </div>
                <p class="text">
                  решаем любые, даже самые смелые и сложные задачи,<br />
                  когда остальные считают это невозможным
                </p>
              </div>
              <div class="images">
                <img class="img img_n0" src="/pages/home/section_2/02.jpg" />
                <img class="img img_n1" src="/pages/home/section_2/03.jpg" />
                <img class="img img_n2" src="/pages/home/section_2/04.jpg" />
              </div>
            </li>
            <li class="about__item about__item_n2">
              <div class="text-content">
                <div class="title">
                  Предоставляем качественную<br />
                  продукцию и решения
                </div>
                <p class="text">
                  чтобы дальнейшая эксплуатация приносила<br />
                  вам только отдых и хорошее настроение
                </p>
              </div>
              <div class="images">
                <img class="img img_n0" src="/pages/home/section_2/05.jpg" />
                <img class="img img_n1" src="/pages/home/section_2/06.jpg" />
                <img class="img img_n2" src="/pages/home/section_2/07.jpg" />
              </div>
            </li>
            <li class="about__item about__item_n3">
              <div class="text-content">
                <div class="title">
                  Мы — команда инженеров,<br />
                  которая настроена на решение<br />
                  любой вашей задачи и проблемы
                </div>
                <p class="text">
                  в отличии от других компаний, мы знаем как устроен каждый<br />
                  светильник начиная от выращивания светодиодного кристалла<br />
                  до расчёта необходимого теплоотвода и сборки светильника,<br />
                  за счётэтих знаний и опыта вы получаете лучший продукт на рынке
                </p>
              </div>
              <div class="images">
                <img class="img img_n0" src="/pages/home/section_2/08.jpg" />
                <img class="img img_n1" src="/pages/home/section_2/09.jpg" />
              </div>
            </li>
          </ul>
        </section>
        <section class="section section_services">
          <h2 class="title title_page">Услуги</h2>
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
                <div class="more" @click="opensPopupService(0)" >подробнее</div>
                <StandardButton text="обсудить проект" width="42.5" height="12"/>
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
                <div class="more" @click="opensPopupService(1)">подробнее</div>
                <StandardButton text="обсудить поставку" width="42.5" height="12"/>
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
                <div class="more" @click="opensPopupService(2)">подробнее</div>
                <StandardButton text="обсудить монтаж" width="42.5" height="12"/>
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
                <div class="more" @click="opensPopupService(3)">подробнее</div>
                <StandardButton text="обсудить пнр" width="42.5" height="12"/>
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
                <div class="more" @click="opensPopupService(4)">подробнее</div>
                <StandardButton text="обсудить ремонт" width="42.5" height="12"/>
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
                <div class="more" @click="opensPopupService(5)">подробнее</div>
                <StandardButton text="обсудить задачу" width="42.5" height="12"/>
            </li>
          </ul>
        </section>
        <section class="section section_portfolio">
          <h2 class="title title_page">Портфолио</h2>
          <ul class="projects">
            <li class="project project_n0" @click="opensPopupGallery(1)">
              <img class="project__cover" src="/pages/about/portfolio/room-lighting/cover.jpg" />
              <div class="project__name">
                <div class="title">room lighting</div>
                <div class="subtitle">освещение комнаты</div>
              </div>
            </li>
            <li class="project project_n1" @click="opensPopupGallery(2)">
              <img class="project__cover" src="/pages/about/portfolio/bright-horizons-office/cover.jpg" />
              <div class="project__name">
                <div class="title">Bright Horizons Office</div>
                <div class="subtitle">освещение офиса</div>
              </div>
            </li>
            <li class="project project_n2" @click="opensPopupGallery(3)">
              <img class="project__cover" src="/pages/about/portfolio/architectural-lighting/cover.jpg" />
              <div class="project__name">
                <div class="title">architectural lighting<br />of the house</div>
                <div class="subtitle">освещение дома</div>
              </div>
            </li>
          </ul>
        </section>
        <section class="section section_contacts">
          <div class="contacts">
            <div class="contacts__left">
              <div class="feature">
                Опыт в области<br />
                проектирования,<br />
                монтажа<br />
                и автоматизации<br />
                более 10 лет
              </div>
              <div class="feature">
                обеспечиваем<br />
                высокое качество<br />
                на каждом этапе<br />
                работы
              </div>
            </div>
            <div class="contacts__right">
              Нужна консультация<br />
              или хотите обсудить<br />
              ваш проект?
              <div class="contacts__info">
                <a class="number" href="tel:+79990009900">+7 999 000 99 00</a>
                <a class="email" href="mailto:blackproject@gmail.com">blackproject@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <transition appear name="popup-fade">
          <PopupGallery
            @closePopup="closesPopupGallery()"
            :content="portfolioContent[typeInfoGallery]"
            v-if="openPopup"
          />
        </transition>
        <PopupService
          :id="idPopupService"
          :class="{'PopupService_active': openPopupService }"  
          @closePopup="closesPopupService()" 
        />
      </div>
    </div>
  </template>
  
  <script>
  import Lenis from "lenis";
  import gsap from 'gsap';
  import { mapStores } from 'pinia'
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  export default {
    data() {
      return {
        openPopup: false,
        openPopupService: false,
        idPopupService: 0,
        posScroll: 0,
        nextPage: true,
        lenis: null,
        portfolioContent: {
          1: {
            photos: [ '/pages/about/portfolio/room-lighting/00.jpg',
                      '/pages/about/portfolio/room-lighting/01.jpg',
                      '/pages/about/portfolio/room-lighting/02.jpg'
                    ],
            title: 'room lighting',
            text: 'Настроим вашу систему освещения по вашему<br />Техническому Заданию. Запустим проект любой<br />сложности.-Настройка ситемы на протоколе<br />- KNX; -Настройка ситемы на протоколе - DALI;<br />-Настройка ситемы на протоколе - DMX512;<br />-Настройка ситемы на протоколе - SPI'
          },
          2: {
            photos: [ '/pages/about/portfolio/bright-horizons-office/00.jpg',
                      '/pages/about/portfolio/bright-horizons-office/01.jpg',
                      '/pages/about/portfolio/bright-horizons-office/02.jpg'
                    ],
            title: 'bright horizons office',
            text: 'Настроим вашу систему освещения по вашему<br />Техническому Заданию. Запустим проект любой<br />сложности.-Настройка ситемы на протоколе<br />- KNX; -Настройка ситемы на протоколе - DALI;<br />-Настройка ситемы на протоколе - DMX512;<br />-Настройка ситемы на протоколе - SPI'
          },
          3: {
            photos: [ '/pages/about/portfolio/architectural-lighting/00.jpg',
                      '/pages/about/portfolio/architectural-lighting/01.jpg',
                      '/pages/about/portfolio/architectural-lighting/02.jpg'
                    ],
            title: 'architectural lighting',
            text: 'Настроим вашу систему освещения по вашему<br />Техническому Заданию. Запустим проект любой<br />сложности.-Настройка ситемы на протоколе<br />- KNX; -Настройка ситемы на протоколе - DALI;<br />-Настройка ситемы на протоколе - DMX512;<br />-Настройка ситемы на протоколе - SPI'
          },
        },
        typeInfoGallery: '',
      };
    },
    computed: {
      ...mapStores(headerState, firstDownload)
    },
    watch: {
      '$route.query': {
        handler(query) {
          this.switchesSections(query.section, false);
        },
      },
    },
    mounted() {
      const getParametr = this.$route.query.section;
      this.firstDownloadStore.active = false;
      this.lenis = new Lenis({
        wrapper: this.$refs.page,
        content: this.$refs.page.querySelector('.scroll')
      })

      this.switchesSections(getParametr, true);

      gsap.registerPlugin(ScrollTrigger);
  
      gsap.ticker.add((time) => {
        this.lenis.raf(time * 1000);
      });
  
      gsap.ticker.lagSmoothing(0);
  
      this.lenis.on('scroll', (e) => {
        ScrollTrigger.update
        
        if(e.targetScroll === 0) {
          setTimeout(() => {
            this.lenis.stop();
            this.nextPage = true;
          }, 500)
        }
  
        if (e.direction === 1) {
          this.headerStore.state = false;
        } else {
          this.headerStore.state = true;
        }
      })
  
      const imgs = gsap.utils.toArray('.section_start .img');
      imgs.forEach((img, index) => {
        gsap.to(img, {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          delay: this.returnsDelayTime(index),
          scrollTrigger: {
            trigger: img,
            start: 'center bottom',
            scroller: '.page_about',
            end: 'center top',
            markers: true,
          }
        });
      });
    },
    methods: {
      opensPopupService(id) {
        this.openPopupService = true;
        this.idPopupService = id;
        this.lenis.stop();
      },
      closesPopupService() {
        this.openPopupService = false;
        this.lenis.start();
      },
      opensPopupGallery(type) {
        this.openPopup = true;
        this.typeInfoGallery = type;
        this.lenis.stop();
      },
      closesPopupGallery() {
        this.openPopup = false;
        this.lenis.start();
      },
      returnsDelayTime(index) {
        let time = 0;
        if (index === 2) {
          time = 0.2;
        } else if (index === 3) {
          time = 0.4
        }
        return time;
      },
      wheelEvent(e) {
        if (this.nextPage && e.deltaY <= this.posScroll) {
          this.$router.push('/');
        } else {
          this.nextPage = false;
        }
        setTimeout(() => {
          this.posScroll = e.deltaY;
        }, 600);
      },
      switchesSections(parametr, animation) {
        if ( parametr === 'services') {
          this.lenis.scrollTo('.section_services', {immediate: animation, lock: true,});
        } else if(parametr === 'portfolio') {
          this.lenis.scrollTo('.section_portfolio', {immediate: animation, lock: true,});
        } else if (parametr === 'company') {
          this.lenis.scrollTo('.section_company', {immediate: animation, lock: true,});
        }
      }
    },
    beforeUnmount() {
      window.removeEventListener('wheel', this.$refs.page)
    }
  }
  </script>
  
  <style lang="scss">
    .popup-fade-enter-active,
    .popup-fade-leave-active {
      transition: opacity 1s, transform .7s;
    }
    .popup-fade-enter-from,
    .popup-fade-leave-to {
      transform: scale(.9);
      opacity: 0;
    }
    .page.page_about {
      position: absolute;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      .section {
        position: relative;
        padding: 0 10rem;
        .title_page {
          text-align: center;
          padding-top: 27.7rem;
        }
        &_start {
          display: flex;
          .section__left {
            position: relative;
            flex: 1;
            z-index: 2;
            .title {
              padding-top: 22.6rem;
              line-height: 11rem;
              z-index: 1;
            }
            .info {
              font-size: 4rem;
              font-weight: 300;
              margin-top: 3.9rem;
              line-height: 4.6rem;
            }
            .StandardButton {
              margin-top: 11.1rem;
            }
          }
          .section__right {
            position: relative;
            .img {
              position: absolute;
              object-fit: cover;
              transform: scale(0);
              opacity: 0;
              &_n0 {
                top: 10rem;
                right: 0;
                widows:  65.9rem;
                height: 28rem;
              }
              &_n1 {
                top: 32.8rem;
                right: 5.8rem;
                widows:  34.3rem;
                height: 29.2rem;
                z-index: 1;
              }
              &_n2 {
                top: 56.3rem;
                right: 0;
                widows:  29.4rem;
                height: 35.4rem;
              }
              &_n3 {
                top: 52.7rem;
                right: 28.2rem;
                widows:  65.4rem;
                height: 50rem;
                z-index: 2;
              }
            }
            .description {
              position: absolute;
              right: 0;
              bottom: 0;
              text-align: right;
              font-size: 1.8rem;
              line-height: 2.4rem;
            }
          }
        }
        &_company {
          .about {
            padding-top: 8.5rem;
            .about__item {
              display: flex;
              justify-content: space-between;
              margin-bottom: 12rem;
              width: 100%;
              .title {
                font-size: 4rem;
                line-height: 4.6rem;
              }
              .text {
                font-size: 2.2rem;
                line-height: 2.6rem;
                margin-top: 3.9rem;
                text-transform: lowercase;
                font-weight: 300;
              }
              .images {
                height: 100%;
                position: relative;
                object-fit: contain;
                .img {
                  position: absolute;
                }
              }
              &:last-child {
                margin-bottom: 0;
              }
              &_n0 {
                height: 35.1rem;
                .images {
                  width: 77.2rem;
                  .img {
                    &_n0 {
                      top: 0;
                      left: 0;
                      height: 28.5rem;
                      width: 34.5rem;
                    }
                    &_n1 {
                      bottom: 0;
                      right: 0;
                      height: 28.5rem;
                      width: 55rem;
                    }
                  }
                }
              }
              &_n1 {
                height: 35.1rem;
                flex-direction: row-reverse;
                .title,
                .text {
                  text-align: right;
                }
                .images {
                  width: 67.8rem;
                  .img {
                    &_n0 {
                      top: 0;
                      left: 0;
                      height: 32.2rem;
                      width: 32rem;
                    }
                    &_n1 {
                      top: 1.8rem;
                      left: 19.8rem;
                      height: 28.5rem;
                      width: 30.3rem;
                    }
                    &_n2 {
                      bottom: 0;
                      right: 0;
                      height: 23.6rem;
                      width: 23.8rem;
                    }
                  }
                }
              }
              &_n2 {
                height: 38.8rem;
                .images {
                  width: 73.8rem;
                  .img {
                    &_n0 {
                      top: 7.1rem;
                      right: 0;
                      height: 28.5rem;
                      width: 28.7rem;
                    }
                    &_n1 {
                      top: 0;
                      right: 22.1rem;
                      height: 28.5rem;
                      width: 34.5rem;
                    }
                    &_n2 {
                      bottom: 0;
                      left: 0;
                      height: 28.5rem;
                      width: 34.5rem;
                    }
                  }
                }
              }
              &_n3 {
                height: 36.6rem;
                flex-direction: row-reverse;
                .title,
                .text {
                  text-align: right;
                }
                .images {
                  width: 68.1rem;
                  .img {
                    &_n0 {
                      top: 0;
                      left: 0;
                      height: 28.5rem;
                      width: 45.4rem;
                    }
                    &_n1 {
                      bottom: 0;
                      right: 0;
                      height: 28.5rem;
                      width: 45.4rem;
                    }
                  }
                }
              }
            }
          }
        }
        &_services {
          .services {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 21rem;
            grid-row-gap: 9.7rem;
            margin-top: 10.7rem;
            .service {
              display: flex;
              flex-direction: column;
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
                font-size: 1.8rem;
                line-height: 2.2rem;
                font-weight: 300;
                text-transform: lowercase;
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
        &_portfolio {
          .projects {
            margin-top: 9.7rem;
            .project {
              position: relative;
              height: 60rem;
              width: calc(100% + 20rem);
              margin-left: -10rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              overflow: hidden;
              &::after {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,1) 100%);
                opacity: .5;
              }
              &_n1 {
                &::after {
                  opacity: .6;
                }
              }
              &_n1 {
                &::after {
                  opacity: .7;
                }
              }
              &__cover {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(1);
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 1.5s;
              }
              &__name {
                position: relative;
                text-align: center;
                z-index: 1;
                .title {
                  font-size: 7rem;
                  line-height: 6.1rem;
                  white-space: nowrap;
                  margin-bottom: 3.8rem;
                }
                .subtitle {
                  font-size: 2.6rem;
                  font-weight: 300;
                  text-transform: lowercase;
                }
              }
              &:hover {
                .project__cover {
                  transform: translate(-50%, -50%) scale(1.1);
                }
              }
            }
          }
        }
        &_contacts {
          padding: 30.1rem 10rem 30.4rem;
          .contacts {
            display: flex;
            justify-content: space-between;
            padding-bottom: 21.7rem;
            &__left {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              font-size: 1.4rem;
              font-weight: 300;
              line-height: 1.8rem;
            }
            &__right {
              position: relative;
              font-size: 9.5rem;
              font-weight: 300;
              line-height: 9.5rem;
              .contacts__info {
                position: absolute;
                top: calc(100% + 10.4rem);
                left: 0;
                line-height: initial;
                .number {
                  display: block;
                  font-size: 7.9rem;
                  font-weight: 300;
                }
                .email {
                  display: block;
                  font-size: 2.5rem;
                  font-weight: 300;
                }
              }
            }
          }
        }
      }
    }
  </style>
  
  