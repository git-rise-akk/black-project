<template>
    <section class="SectionContacts section">
        <div class="contacts">
            <div v-if="useDeviceStore().device === 'desktop'" class="contacts__left">
                <div 
                    class="feature text-anim-line" 
                    v-text-separate="{ byLetters: false }"
                >
                    Опыт в области<br />
                    проектирования,<br />
                    монтажа<br />
                    и автоматизации<br />
                    более 10 лет
                </div>
                <div
                    class="feature text-anim-line"
                    v-text-separate="{ byLetters: false }"
                >
                    обеспечиваем<br />
                    высокое качество<br />
                    на каждом этапе<br />
                    работы
                </div>
            </div>
            <div class="contacts__right">
                <div
                    class="text-anim-line"
                    v-text-separate="{ byLetters: false }"
                >
                    Нужна консультация<br />
                    или хотите обсудить<br />
                    ваш проект?
                </div>
                <div class="contacts__info">
                <a
                    class="number text-anim-line"
                    href="tel:+79990009900"
                    v-text-separate="{ byLetters: false }"
                >+7 999 000 99 00</a>
                <a
                    class="email text-anim-line"
                    href="mailto:blackproject@gmail.com"
                    v-text-separate="{ byLetters: false }"
                >blackproject@gmail.com</a>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
import { mapStores } from 'pinia';

export default {
    data() {
        return {};
    },
    computed: {
        ...mapStores(useDeviceStore),
    },
};
</script>
  
<style lang="scss">
.SectionContacts {
    padding: 26.7rem 3.8rem 30.4rem !important;

    .tablet & {
        padding: 12.1rem 10rem 26.2rem !important;
    }

    .mobile & {
        padding: 13.9rem 2rem 15.7rem !important;
    }

    .contacts {
        display: flex;
        justify-content: space-between;
        padding-bottom: 21.7rem;

        .tablet &,
        .mobile & {
           display: block;
           padding-bottom: 0;
        }

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

            .tablet & {
                font-size: 4.4rem;
                line-height: 4.4rem;
            }

            .mobile & {
                font-size: 2.3rem;
                line-height: 2.3rem;
            }

            .contacts__info {
                position: absolute;
                top: calc(100% + 10.4rem);
                left: 0;
                line-height: initial;

                .tablet & {
                    position: relative;
                    top: initial;
                    left: initial;
                    margin-top: 8.4rem;
                }

                .mobile & {
                    position: relative;
                    top: initial;
                    left: initial;
                    margin-top: 4.4rem;
                }

                .number {
                    display: block;
                    font-size: 7.9rem;
                    font-weight: 300;
                    white-space: nowrap;

                    .tablet & {
                        font-size: 6.3rem;
                        line-height: 6.3rem;
                    }

                    .mobile & {
                        font-size: 3.3rem;
                        line-height: 3.3rem;
                    }
                }

                .email {
                    display: block;
                    font-size: 2.5rem;
                    font-weight: 300;

                    .tablet & {
                        font-size: 2.3rem;
                        line-height: 2.3rem;
                        margin-top: 1.9rem;
                    }

                    .mobile & {
                        font-size: 1.2rem;
                        line-height: 1.2rem;
                        margin-top: 1rem;
                    }
                }
            }
        }
    }
}
</style>
  
  