<template>
    <div class="PopupCallback">
        <div class="PopupCallback_bg"></div>
        <div class="PopupCallback_form">
            <Transition>
                <div v-show="result === 'error'" class="screen screen-error">Произошла ошибка, пожалуйcта попробуйте позже.</div>
            </Transition>
            <Transition>
                <div v-show="result === 'success'" class="screen screen-success">Заявка отправлена, мы свяжемся с Вами в ближайшее время.</div>
            </Transition>
            <Transition>
                <div v-show="!(['error', 'success'].includes(result))" class="screen screen-fields">
                    <div class="title">Заказать обратный<br />звонок</div>
                    <div class="description">Пожалуйста, заполните форму ниже и мы<br />с вами свяжемся для уточнения деталей:</div>
                    <div class="fields">
                        <FormTextInput
                            v-model="user.name"
                            :component-data="nameComponent"
                            @form-validate="validateForm"
                        />
                        <FormTextInput
                            v-model="user.phone"
                            :component-data="phoneComponent"
                            @form-validate="validateForm"
                        />
                        <FormTextInput
                            v-model="user.email"
                            :component-data="emailComponent"
                            @form-validate="validateForm"
                        />
                        <FormTextInput
                            v-model="user.comment"
                            :component-data="commentComponent"
                            @form-validate="validateForm"
                        />
                    </div>
                    <StandardButton
                        text="отправить"
                        :width="35.6"
                        :height="7.5"
                        @click="submit()"
                    />
                    <div class="policy">
                        Нажимая кнопку «Отправить» Вы соглашаетесь<br /><a href="#" target="_blank">с политикой обработки персональных данных</a>
                    </div>
                </div>
            </Transition>
            <Close @click="closingEvent()" />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            blur: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                parentModel: '',
                result: null,
                user: {
                    name: '',
                    phone: '',
                    email: '',
                    comment: '',
                },
                isFormValid: true,
                nameComponent: {
                    type: 'text',
                    placeholder: 'Введите свое имя',
                    errorMessage: false,
                    pattern: '',
                    mask: null,
                    minLength: 2,
                    maxLength: 30
                },
                phoneComponent: {
                    type: 'text',
                    placeholder: 'Введите свой номер*',
                    errorMessage: null,
                    pattern: '/\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/',
                    mask: '+7 (###) ###-##-##',
                    minLength: 18,
                    maxLength: 18
                },
                emailComponent: {
                    type: 'email',
                    placeholder: 'Введите свой e-mail',
                    errorMessage: null,
                    pattern: '/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/',
                    mask: null,
                    minLength: 2,
                    maxLength: 50
                },
                commentComponent: {
                    type: 'text',
                    placeholder: 'Комментарий',
                    errorMessage: null,
                    pattern: '',
                    mask: null,
                    minLength: 0,
                    maxLength: 1000
                },
            };
        },
        methods: {
            closingEvent() {
                this.$emit('closePopup');
            },
            validateForm(isValid) {
                this.isFormValid = isValid;
                // console.log('this.isFormValid', this.isFormValid);
            },
            submit() {
                if (!this.isFormValid) {
                    alert('неправильно заполнена');
                } else {
                    alert('отправлено');
                }
            },
        },
    }    
</script>

<style lang="scss">
.PopupCallback {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &_bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        // background-color: rgba($color: #000000, $alpha: 0);
        // backdrop-filter: blur(0px);
        background-color: rgba($color: #000000, $alpha: .2);
        backdrop-filter: blur(5px);
        transition: backdrop-filter .4s, background-color .4s;
    }
    &_form {
        position: relative;
        width: 48rem;
        height: 77.8rem;
        background: $popup;
        z-index: 1;
        padding: 6.2rem;
        .screen {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .title {
            font-size: 2.1rem;
            margin-bottom: 2.4rem;
            text-align: center;
        }
        .description {
            margin-bottom: 2.7rem;
            font-size: 1.4rem;
            text-transform: initial;
        }
        .fields {
            display: flex;
            flex-direction: column;
            gap: 1.1rem;
        }
        .StandardButton {
            margin-top: auto;
        }
        .policy {
            font-size: 1rem;
            text-transform: initial;
            text-align: center;
            margin-top: 2.4rem;
            a {
                text-decoration: underline;
                text-underline-offset: .2rem;
            }
        }
    }
}
</style>