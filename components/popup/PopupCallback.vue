<template>
	<div class="PopupCallback">
		<div class="PopupCallback_bg"></div>
		<div class="PopupCallback_form">
			<Transition name="show">
				<div
					v-show="![false, true].includes(result)"
					class="screen screen-fields"
				>
					<div class="title">Заказать обратный<br />звонок</div>
					<div class="description">
						Пожалуйста, заполните форму ниже и мы с вами свяжемся для
						уточнения деталей:
					</div>
					<div class="fields">
						<InputText
							id="name"
							type="text"
							v-model="user.name"
							placeholder="Введите свое имя"
						/>
						<InputMask
							id="phone"
							v-model="user.phone"
							mask="+7 (999) 999-99-99"
							placeholder="Введите свой номер*"
							:invalid="validationFields.phone"
						/>
						<InputText
							id="email"
							type="text"
							v-model="user.email"
							placeholder="Введите свой e-mail*"
							:invalid="validationFields.email"
						/>
						<InputText
							id="comment"
							type="text"
							v-model="user.comment"
							placeholder="Комментарий"
						/>
					</div>
					<StandardButton
						text="Отправить"
						:width="35.6"
						:height="8"
						@click="submit()"
					/>
					<div 
						class="policy"
					>
						Нажимая кнопку «Отправить» Вы соглашаетесь
						<a href="#" target="_blank">с политикой обработки персональных данных</a>
					</div>
				</div>
			</Transition>
			<Transition name="show">
				<div v-show="result === false" class="screen screen-error">
					<div>Произошла ошибка, пожалуйcта попробуйте позже.</div>
				</div>
			</Transition>
			<Transition name="show">
				<div v-show="result === true" class="screen screen-success">
					Заявка отправлена, мы свяжемся с Вами в ближайшее время.
				</div>
			</Transition>
			<Close @click="closingEvent()" />
		</div>
	</div>
</template>

<script>
import { mapStores } from 'pinia'
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
			validationFields: {
				phone: false,
				email: false,
			},
			secondAttempt: false,
		}
	},
	computed: {
		...mapStores(openPopup),
	},
	watch: {
		'user.phone'(value) {
			if(this.secondAttempt) {
				const regExPhone = new RegExp('\\+7\\s\\(\\d{3}\\)\\s\\d{3}-\\d{2}-\\d{2}');
				if(regExPhone.test(value)) {
					this.validationFields.phone = false;
				}
			}
		},
		'user.email'(value) {
			if(this.secondAttempt) {
				const regExEmail = new RegExp('/^[^\s@]+@[^\s@]+\.[^\s@]+$/');
				if(regExEmail.test(value)) {
					this.validationFields.email = false;
				}
			}
		},
	},
	methods: {
		closingEvent() {
			this.resetInput();
			this.$emit('closePopup')
		},
		available() {
			Object.keys(this.validationFields).forEach((item) => {
				const value = this.user[item]
				const regExPhone = new RegExp('\\+7\\s\\(\\d{3}\\)\\s\\d{3}-\\d{2}-\\d{2}');
				const regExEmail = new RegExp('/^[^\s@]+@[^\s@]+\.[^\s@]+$/');
			

				if (item === 'phone') {
					if (!regExPhone.test(value)) {
						this.validationFields.phone = true;
					} else {
						this.validationFields.phone = false;
					}
				}

				if (item === 'email') {
					if (!regExEmail.test(value)) {
						this.validationFields.email = true;
					} else {
						this.validationFields.email = false;
					}
				}
				
			})
			this.secondAttempt = true;
			return !(this.validationFields.phone && this.validationFields.email);
		},
		resetInput() {
			Object.keys(this.user).forEach((item) => {
				this.user[item] = '';
			})
			Object.keys(this.validationFields).forEach((item) => {
				this.validationFields[item] = false;
			})
		},
		async submit() {
			const text = `
				<strong>Имя</strong>: ${this.user.name ? this.user.name : 'нет'}<br />
				<strong>Телефон</strong>: ${this.user.phone}<br />
				<strong>Почта</strong>: ${this.user.email}<br />
				<strong>Комментарий</strong>: ${this.user.comment ? this.user.comment : 'нет'}
			`;
			if (this.available()) {
				const response = await $fetch('/api/feed', {
					method: 'POST',
					body: {
						title: 'Заявка с сайта',
						text: text,
					},
				})

				if (response.status) {
					this.result = true
				} else {
					this.result = false
				}

				setTimeout(() => {
					this.openPopupStore.popupCallback = false
					this.result = null
					this.resetInput();
				}, 2000)
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
	pointer-events: none;
	&_active {
		opacity: 1;
		pointer-events: auto;

		.PopupCallback_bg {
			background-color: rgba($color: #000000, $alpha: 0.2);
			backdrop-filter: blur(5px);
		}

		.PopupCallback_form {
			transform: translateY(0);
			opacity: 1;
			transition: transform 0.5s;
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
		transition: backdrop-filter 0.4s, background-color 0.4s;
	}
	&_form {
		position: relative;
		width: 52rem;
    	height: 83rem;
		background: $popup;
		z-index: 1;
		padding: 5.2rem;
		transform: translateY(calc(100% + 20rem));
		opacity: 0;
		transition: transform 0.5s, opacity 0.1s 0.6s;
		.screen {
			position: absolute;
			inset: 5.2rem;
			display: flex;
			flex-direction: column;
			&.screen-error,
			&.screen-success {
				text-align: center;
				justify-content: center;
				font-size: 2rem;
			}
			.p-inputtext {
				width: 100%;
				height: 7.3rem;
				background: $popup;
				padding-left: 4.1rem;
				border: 0.1rem solid #fff;
				font-size: 1.4rem;
				font-family: ArtegraSans;
				text-transform: uppercase;
				color: #fff;
				&:focus {
					outline: none;
				}
				&::placeholder {
					color: #fff;
					opacity: 0.3;
				}

				&:-webkit-autofill,
				&:-webkit-autofill:hover,
				&:-webkit-autofill:focus,
				&:-webkit-autofill:active {
					-webkit-box-shadow: 0 0 0 7.3rem $popup inset;
					-webkit-text-fill-color: #fff;
					border: 0.1rem solid #fff;
				}
				
				&:autofill {
					box-shadow: 0 0 0 7.3rem $popup inset;
					color:  #fff;
					border: 0.1rem solid #fff;
				}
			}
			.p-invalid {
				border: 0.1rem solid red;
				&:hover {
					border: 0.1rem solid red;
				}
			}
		}
		.title {
			font-size: 2.7rem;
			margin-bottom: 5.4rem;
			text-align: center;
		}
		.description {
			margin-bottom: 2.7rem;
			font-size: 1.4rem;
		}
		.fields {
			display: flex;
			flex-direction: column;
			gap: 1.4rem;
		}
		.StandardButton {
			margin: auto auto 0;
		}
		.policy {
			font-size: 1.3rem;
			text-align: center;
			margin-top: 2.4rem;
			a {
				text-decoration: underline;
				text-underline-offset: 0.2rem;
			}
		}
		.Close {
			top: 2rem;
			right: 2rem;
		}
	}
}
</style>
