<template>
      <section id="company" class="SectionCompany section">
        <h2 class="title title_page text-anim-letters" v-text-separate="{ byLetters: true }">О компании</h2> 
        <ul class="about">
          <li class="about__item about__item_n0">
            <div class="text-content">
              <div class="title title_company text-anim-line" v-text-separate="{ byLetters: false }">
                Компания Black Project<br />
                уникальна своим<br />
                инженерным подходом<br />
                к решению задач
              </div>
              <p class="text text-anim-line" v-text-separate="{ byLetters: false }">
                в эру маркетинга мы заинтересованы в том, чтобы<br />
                выбранное вами оборудование или решение проработало<br />
                как можно дольше и принесло как можно больше<br />
                положительных эмоций
              </p>
            </div>
            <div class="images">
              <div class="img_wrapper img_wrapper_n0">
                <img
                    class="img"
                    src="/assets/webpages/about/company/00.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n1">
                <img
                    class="img"
                    src="/assets/webpages/about/company/01.jpg"
                />
              </div>
            </div>
          </li>
          <li class="about__item about__item_n1">
            <div class="text-content">
              <div class="title text-anim-line" v-text-separate="{ byLetters: false }">
                Мы стремимся дать нашим<br />
                клиентам максимально<br />
                возможное качество на рынке
              </div>
              <p class="text text-anim-line" v-text-separate="{ byLetters: false }">
                решаем любые, даже самые смелые и сложные задачи,<br />
                когда остальные считают это невозможным
              </p>
            </div>
            <div class="images">
              <div class="img_wrapper img_wrapper_n0">
                <img
                    class="img img_n0"
                    src="/assets/webpages/about/company/02.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n1">
                <img
                    class="img img_n1"
                    src="/assets/webpages/about/company/03.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n2">
                <img
                    class="img img_n2"
                    src="/assets/webpages/about/company/04.jpg"
                />
              </div>
            </div>
          </li>
          <li class="about__item about__item_n2">
            <div class="text-content">
              <div class="title text-anim-line" v-text-separate="{ byLetters: false }">
                Предоставляем качественную<br />
                продукцию и решения
              </div>
              <p class="text text-anim-line" v-text-separate="{ byLetters: false }">
                чтобы дальнейшая эксплуатация приносила<br />
                вам только отдых и хорошее настроение
              </p>
            </div>
            <div class="images">
              <div class="img_wrapper img_wrapper_n0">
                <img
                    class="img img_n0"
                    src="/assets/webpages/about/company/05.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n1">
                <img
                    class="img img_n1"
                    src="/assets/webpages/about/company/06.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n2">
                <img
                    class="img img_n2"
                    src="/assets/webpages/about/company/07.jpg"
                />
              </div>
            </div>
          </li>
          <li class="about__item about__item_n3">
            <div class="text-content">
              <div class="title text-anim-line" v-text-separate="{ byLetters: false }">
                Мы — команда инженеров,<br />
                которая настроена на решение<br />
                любой вашей задачи и проблемы
              </div>
              <p class="text text-anim-line" v-text-separate="{ byLetters: false }">
                в отличии от других компаний, мы знаем как устроен каждый<br />
                светильник начиная от выращивания светодиодного кристалла<br />
                до расчёта необходимого теплоотвода и сборки светильника,<br />
                за счётэтих знаний и опыта вы получаете лучший продукт на рынке
              </p>
            </div>
            <div class="images">
              <div class="img_wrapper img_wrapper_n0">
                <img
                    class="img img_n0"
                    src="/assets/webpages/about/company/08.jpg"
                />
              </div>
              <div class="img_wrapper img_wrapper_n1">
                <img
                    class="img img_n1"
                    src="/assets/webpages/about/company/09.jpg"
                />
              </div>
            </div>
          </li>
        </ul>
      </section>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
.SectionCompany {
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

        .img_wrapper {
          position: absolute;
          transform: translateY(50%);
          display: flex;
          align-items: center;
          justify-content: center;

          &_n1 {
            transform: translateY(30%);
          }

          .img {
            object-fit: cover;
            transform: scale(0);
            width: 100%;
            height: 100%;
          }
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      &_n0 {
        height: 35.1rem;

        .images {
          width: 77.2rem;

          .img_wrapper {
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

          .img_wrapper {
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

          .img_wrapper {
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

          .img_wrapper {
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
</style>