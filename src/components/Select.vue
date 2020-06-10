<template>
	<div class="select">
		<select
			v-model="selectedOption"
			@input="event => { $emit('select', event.target.value) }"
			>
			<option v-for="(option, name) in options" :value="option" :key="name">{{ option }}</option>
		</select>
	</div>	
</template>

<script>
	import { onMounted, watch, ref } from 'vue';

	export default {
		props: {
			value: null,
			options: {
				type: Object,
				required: true
			}
		},	

		setup(props, { emit }) {

			let selectedOption = ref(null);

			onMounted( () => {
				selectedOption.value = props.value;

			})

			const newvalue = watch(props.value, (newVal) =>
				selectedOption.value = newVal
			);

			function select() {
				emit('select', newvalue);
			}

			return {
				select,
				selectedOption,
				newvalue
			}
		}
	}
</script>