<template>



	<div id="app" class="app">

		<router-view>
		</router-view>


	</div>
</template>


<script>
	import Header from './components/header.vue'




	export default {
		name: 'App',
		provide() {
			return {
				
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
		
		},

		components: {
			Header,

		},
		

	}
</script>

<style>
	.app {
		overflow-y: hidden;
	}

	::-webkit-scrollbar {
		/*隐藏滚轮*/
		display: none;
	}
</style>
