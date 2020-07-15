z<template>
	<div>
		<ValidationObserver v-slot="{ invalid,handleSubmit }">
			<form @submit.prevent="handleSubmit(_onSubmit)">
				<div class="en__field--text">
					<ValidationProvider rules="required|email" v-slot="{ classes, errors }">
						<label for class="en__field__label">電郵地址 Email Address</label>
						<input
							:class="['form-input', classes]"
							name="Email"
							v-model="Email"
							type="text"
							placeholder="電郵地址 Email Address"
						/>
						<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
						<span class="email-suggestion" v-if="emailSuggestion" @click="replaceEmailWithSuggestion">您想輸入的是 <strong>{{emailSuggestion}}</strong> 嗎？</span>
					</ValidationProvider>
				</div>

				<div class="en__field--text">
					<div class="flex">
						<div class="en__field--lastName">
							<ValidationProvider rules="required" v-slot="{ classes, errors }">
								<label class="en__field__label">姓氏 Last Name</label>
								<input
									:class="['form-input', classes]"
									name="LastName"
									v-model="LastName"
									type="text"
									placeholder="姓氏 Last Name"
								/>
								<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
							</ValidationProvider>
						</div>

						<div class="en__field--firstName flex-1 ">
							<ValidationProvider rules="required" v-slot="{ classes, errors }">
								<label class="en__field__label">名字 First Name</label>
								<input
									:class="['form-input', classes]"
									name="FirstName"
									v-model="FirstName"
									type="text"
									placeholder="名字 First Name"
								/>
								<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
							</ValidationProvider>
						</div>
					</div>
				</div>

				<div class="en__field--text">
					<label class="en__field__label">手提號碼 Phone Number</label>
					<div class="flex">



						<div class="en__field--MobileCountryCode">
							<ValidationProvider rules="required" name="ccode" vid="ccode" v-slot="{ classes, errors }">
								<select name="MobileCountryCode" v-model="MobileCountryCode" :class="['form-input', classes]">
									<option value="852">+852</option>
									<option value="853">+853</option>
									<option value="886">+886</option>
									<option value="86">+86</option>
								</select>
								<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
							</ValidationProvider>
						</div>

						<div class="en__field--MobilePhone flex-1">
							<ValidationProvider rules="required|phone-number:@ccode" v-slot="{ classes, errors }">
								<input
									name="MobilePhone"
									v-model="MobilePhone"
									:class="['form-input', classes]"
									type="text"
									placeholder="手提號碼 Mobile Number"
								/>
								<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
							</ValidationProvider>
						</div>
					</div>
				</div>

				<div class="en__field--text">
					<ValidationProvider rules="required" v-slot="{ classes, errors }">
						<label class="en__field__label">出生年份</label>
						<div class="relative">
							<select name="Birthdate" v-model="Birthdate" :class="['form-input', classes]">
								<option value="" disabled="">出生年份</option>
								<option
									v-for="year in years"
									v-bind:value="year+'-01-01'"
									v-bind:key="year">
									{{ year }}
								</option>
							</select>
						</div>
						<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
					</ValidationProvider>
				</div>


				<div class="en__submit">
					<button class="">立即聯署</button>
				</div>

				<div class="en__field--text en__field--email-ok-hongkong">
					<ValidationProvider rules="required" v-slot="{ classes, errors }">
						<div class="en__field__item flex">
							<input type="checkbox" id="opt-in"  class="en__field__input en__field__input--checkbox" v-model="OptIn">
							<label for="opt-in" class="en__field__label en__field__label--item">聯署加入「守護大嶼」，集結更多公眾及重視環境生態的輿論力量，堅守香港海洋最後一道防線！我同意綠色和平持續為我更新環境專案的最新資訊，並按照其個人資料政策與我保持聯絡。</label>
						</div>
					</ValidationProvider>
				</div>

			</form>
		</ValidationObserver>
	</div>

</template>

<script>
	import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
	import { required, email } from 'vee-validate/dist/rules';
	import Mailcheck from "mailcheck";

	// definitions
	let phoneRules = {
		"852": {
			"country":"+852",
			"code":"+852",
			"pattern":"^[2,3,5,6,8,9]{1}[0-9]{7}$",
			"help":"Mobile number should be 8 digits and start with 2, 3, 5, 6, 8 or 9",
			"maxlength":8

		},
		"853": {
			"country":"+853",
			"code":"+853",
			"pattern":"^[6]{1}[0-9]{7}$",
			"maxlength":8

		},
		"886": {
			"country":"+886",
			"code":"+886",
			"pattern":"^0?[9]{1}[0-9]{8}$",
			"maxlength":9

		},
		"86": {
			"country":"+86",
			"code":"+86",
			"pattern":"^[1]{1}[0-9]{10}$",
			"maxlength":11

		}
	}

	extend('email', {
		...email,
		message: '請填上有效電郵地址'
	});

	extend('required', {
		...required,
		message: '請填入以上資料'
	});

	extend('phone-number', {
		params: ['target'],
		validate(value, { target }) {
			if (target in phoneRules) {
				console.log('use', phoneRules[target].pattern)
				return (new RegExp(phoneRules[target].pattern)).test(value)
			}

			return true;
		},
		message: '請填上有效手提號碼'
	});

	// for email correctness
	let domains = [
		"me.com",
		"outlook.com",
		"netvigator.com",
		"cloud.com",
		"live.hk",
		"msn.com",
		"gmail.com",
		"hotmail.com",
		"ymail.com",
		"yahoo.com",
		"yahoo.com.tw",
		"yahoo.com.hk"
	];
	let topLevelDomains = ["com", "net", "org"];

	//
	const selectableYears = []
	const nowYear = new Date().getFullYear()
	for (var i=nowYear; i>nowYear-100; i--) {
		selectableYears.push(i)
	}

	export default {
		components: {
			ValidationProvider,
			ValidationObserver
		},
		data: () => ({
			Birthdate: "",
			Email: "",
			FirstName: "",
			LastName: "",
			MobilePhone: "",
			OptIn: true,
			MobileCountryCode: "852",
			years: selectableYears,
			emailSuggestion: null
		}),
		watch: {
			Email: function (v) {
				Mailcheck.run({
					email: v,
					domains: domains, // optional
					topLevelDomains: topLevelDomains, // optional
					suggested: (suggestion) => {
						this.emailSuggestion = suggestion.full
					},
					empty: () => {
						this.emailSuggestion = null
					}
				});

			},
		},
		methods: {
			replaceEmailWithSuggestion () {
				this.Email = this.emailSuggestion
			},
			_onSubmit ()  {
				this.$emit('onSubmit', this.$data);
			}
		}
	}
</script>

<style lang="scss">
	.flex {display: flex;}
	.flex-1 {flex: 1 1 0%;}

	.email-suggestion {
		font-size: 10px;
		color: #F9AA62;
		display: block;
		cursor: pointer;
	}

</style>