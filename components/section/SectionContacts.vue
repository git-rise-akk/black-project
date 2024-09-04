<template>
    <section class="SectionContacts section">
        <div class="contacts">
            <div class="contacts__left">
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
export default {
    data() {
        return {};
    },
};
</script>
  
<style lang="scss">
.SectionContacts {
    padding: 30.1rem 10rem 30.4rem !important;

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
</style>
  
  