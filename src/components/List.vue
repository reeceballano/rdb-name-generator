<template>
	<div 
		v-show="!isLoading" 
		:class="{ 'is-active animate__fadeOutRight': isActive }" 
		class="card animate__animated"  
		:title="index+1" 
		:id="firstname+lastname+index"
	>

		<div class="card-content"  @click.prevent="copyclipboard(`${index}-person-${firstname}`, index), removeList(firstname+lastname+index)">

			<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
						<img :src="thumbnail" alt="Placeholder image">
					</figure>
				</div>
				<div class="media-content">
					<p class="subtitle is-5 person-name">{{ firstname }} {{ lastname }}
						<span v-show="gender == 'male'" class="icon has-text-info">
							<i class="fas fa-mars"></i>
						</span>

						<span v-show="gender == 'female'" class="icon has-text-danger">
							<i class="fas fa-venus"></i>
						</span>
					</p>
					
					<p class="subtitle is-5 person-username">
						{{ street }} {{ streetnumber }} <br />
						{{ city }}, {{ state }} <br />
						{{ country }}
					</p>
					
					<p :id="`${index}-person-${firstname}`" class="subtitle is-5 person-email">{{ generateEmail(firstname+lastname) }}</p>
					
				</div>
			</div>

		</div>
		
	</div>
</template>

<script>
	import { ref } from 'vue';
	import crud from '@/helpers/crud';


	export default {
		props: {
			isLoading: {
				type: Boolean,
				default: false,
			},

			index: {
				type: Number,
			},

			firstname: {
				type: String,
			},

			lastname: {
				type: String,
			},

			gender: {
				type: String,
			},

			street: {
				type: String,
			},

			streetnumber: {
				type: Number,
			},

			state: {
				type: String,
			},

			city: {
				type: String,
			},

			country: {
				type: String,
			},

			thumbnail: {
				type: String,
			},

			input: {
				type: String,
			}
		},

		setup(props, { emit }) {


			let isActive = ref(false);

			let { generateEmail } = crud();

			function removeList(id) {
				setTimeout( () => {
					document.getElementById(id).style.display = "none";
				}, 1000);
			}

			function copyclipboard(id) {
				isActive.value = true;

				emit('copyclipboard', id);
			}

			return {
				isActive,
				copyclipboard,
				generateEmail,
				removeList
			}
		}
	}
</script>

<style>

	.is-active {
		background: green !important;
	}

	.card {
		margin-bottom: 13px;
		position: relative;
		-webkit-transition: all ease-in-out 03s;
		-moz-transition: all ease-in-out 03s;
		transition: all ease-in-out 03s;
	}

	.media {
		display: flex !important;
		align-items: center !important;
	}

	.card:before {
		content: attr(title);
		position: absolute;
		right: 37px;
		top: -1px;
		font-size: 6rem;
		font-family: 'Black Ops One', cursive;
		font-weight: 500;
		color: #d6d4dd3d;
		transform: rotate(0deg);
	}

	.card:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		background: #7957d5 !important;
		width: 127px;
		height: 5px;
	}

	.subtitle.is-5,
	.person-name {
		margin-bottom: 6px !important;
	}

	.person-email {
		display: none;
	}

	.person-username {
		font-weight: 400;
		font-size: 13px !important;
	}

	.card:hover input[type=text],
	.card:hover {
		cursor: pointer;
		background: #7957d5 !important;
	}		
</style>