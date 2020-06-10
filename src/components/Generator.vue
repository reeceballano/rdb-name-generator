<template>
	<div class="container">
		<div class="columns">
			<div class="column has-text-centered">
				<div class="fixed animate__delay-2s animate__animated animate__fadeInDown">
					
					<h2 class="title is-2">Name <span class="gen">Generator</span></h2>

					<div class="select">
						<select v-model="selectGender">
							<option selected>Select Gender</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="rand">Random</option>
						</select>
					</div>

					<div class="select">
						<select v-model="selectNumber">
							<option value="0" selected>How many?</option>
							<option v-for="(num, i) in 100" :key="i" :value="i+1">{{ i+1 }}</option>
						</select>
					</div>

					<div class="buttons is-centered">
						<button :class="{'is-loading': isLoading }" class="button is-primary is-rounded is-large" @click="generate()">Generate</button>
					</div>

					<div v-show="copied" class="notification is-success">
						<button class="delete"></button>
						<p>Copied!</p>
					</div>

					<div v-show="hasError" class="notification is-danger">
						<button class="delete"></button>
						<p>How many emails you want to generate?</p>
					</div>

				</div>
			</div>
			<div class="column is-6 list-wrapper">

				<div v-show="isLoading" class="loader-wrapper">
					<div class="fancy-spinner">
						<div class="ring"></div>
						<div class="ring"></div>
						<div class="dot"></div>
					</div>
				</div>
                <transition-group name="fade" mode="out-in">	
					<app-list
						v-for="(person, i) in names.results"
						:key="person.name.first"
						:index="i"
                        :person="person"
						:isLoading="isLoading"
						@copyclipboard="copyClipboard(`${i}-person-${person.name.first}`)"
						
					>
					</app-list>
                </transition-group>	
			</div>
		</div>
	</div>
</template>

<script>
	import crud from '@/helpers/crud';
	import { ref } from 'vue';
	import List from '@/components/List';

	export default {
		name: 'Generator',

		components: {
			'app-list': List,
		},

		setup() {

			let selectGender = ref('rand');

			let hasError = ref(false);

			let selectNumber = ref(0);

			let animated = ref(true);

			let copied = ref(false);

			const { names, readApi, isLoading, isAnimated } = crud();

			function generate() {
				let api = `https://randomuser.me/api/?nat=us&results=${Number(selectNumber.value)}&gender=${selectGender.value}`;
				
				if(selectNumber.value != 0) {
					hasError.value = false;
					return readApi(api);
				}

				hasError.value = true;
			}

			function copyClipboard(id) {
				console.log('id: ', id);

				let text = document.getElementById(id).innerText;
				let elem = document.createElement("textarea");
				
				document.body.appendChild(elem);
				elem.value = text;
				elem.select();
				document.execCommand("copy");
				document.body.removeChild(elem);

				// SUCCESS MODAL
				copied.value = true;
				
				setTimeout( () => {
					copied.value = false;
				}, 1000);

			}

			return {
				names,
				generate,
				selectGender,
				selectNumber,
				animated,
				isLoading,
				copyClipboard,
				copied,
				isAnimated,
				hasError,
			}
		}
	}
</script>

<style>

	.fade-enter {
		opacity:0;
	}

	.fade-enter-active{
		animation: fadein 0.5s;
	}

	.fade-leave {
		opacity:1;
	}

	.fade-leave-active {
		animation: fadein 0.3s reverse;
	}

	.list-enter-active,
	.list-leave-active,
	.list-move {
		transition: 0.2s cubic-bezier(0.10, 0.12, 0.34, 0.55);
		transition-property: opacity, transform;
	}

	.list-enter {
		opacity: 0;
		transform: translateX(50px) scaleY(0.5);
	}

	.list-enter-to {
		opacity: 1;
		transform: translateX(0) scaleY(1);
	}

	.list-leave-active {
		position: absolute;
	}

	.list-leave-to {
		opacity: 0;
		transform: scaleY(0);
		transform-origin: center top;
	}    

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }

	h1, h2, h3, h4, h5, h6 {
		/*font-family: 'Julius Sans One', sans-serif;	*/
		font-family: 'Black Ops One', cursive;
	}

	.list-wrapper {
		overflow: hidden;
	}
	
	.fancy-spinner {
		display: -webkit-box;
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		width: 5rem;
		height: 5rem;
	}
	.fancy-spinner div {
		position: absolute;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
	}
	.fancy-spinner div.ring {
		border-width: 0.5rem;
		border-style: solid;
		border-color: transparent;
		-webkit-animation: 2s fancy infinite alternate;
		animation: 2s fancy infinite alternate;
	}
	.fancy-spinner div.ring:nth-child(1) {
		border-left-color: #979fd0;
		border-right-color: #979fd0;
	}
	.fancy-spinner div.ring:nth-child(2) {
		border-top-color: #979fd0;
		border-bottom-color: #979fd0;
		-webkit-animation-delay: 1s;
		animation-delay: 1s;
	}
	.fancy-spinner div.dot {
		width: 1rem;
		height: 1rem;
		background: #979fd0;
	}
	@-webkit-keyframes fancy {
		to {
			-webkit-transform: rotate(360deg) scale(0.5);
			transform: rotate(360deg) scale(0.5);
		}
	}

	@keyframes fancy {
		to {
			-webkit-transform: rotate(360deg) scale(0.5);
			transform: rotate(360deg) scale(0.5);
		}
	}

	.gen {
		font-weight: bold;
		color: #7957d5;
	}

	.button {
		font-weight: 100;
		font-size: 16px !important;
		padding: 27px 50px !important;
		text-transform: uppercase;
		font-family: 'Black Ops One', cursive;
	}

	input[type=text] {
		border: none;
		width: 100%;
		font-size: 14px;
		display: none;
	}

	.select {
		margin-right: 20px;
	}

	option,
	select {
		font-family: 'Black Ops One', cursive !important;
	}

	.buttons {
		margin-top: 30px;
	}

	.fixed {
		margin-top: 10%;
		position: fixed;
		padding: 50px;
		background: white;
		box-shadow: 2px 2px 5px rgba(0,0,0,0.2)
	}

	.loader-wrapper {
		z-index: 99;
		padding-top: 20%;
		right: 30%;
		position: absolute;
	}

	.loader-wrapper img {
		border-radius: 50%;
	}

	@media screen and (max-width: 980px) {
		#app {
			padding-top: 0 !important;
		}

		.fixed {
			position: relative;
			margin-top: 0;
			margin-bottom: 10%;
			/*padding-top: 0;*/
		}

		.select {
			margin-bottom: 10px;
		}
	}
</style>