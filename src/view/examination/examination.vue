<template>
	<Header></Header>
	<div v-for="(value,index) in yearsPart" style="padding-top: 80px;">
		<center>
			<div style="font-size: 40px;margin-bottom: 20px;">{{value}}</div>
			<div style="margin:0 auto;font-size: 40px;" >
				<div  style="display: flex;flex-direction: row;margin: 0 500px;" >
					<router-link :to="{path:'/examination_text',query: {id:examination.examinationId}}" class="a"
						
						 v-for="examination in list" >
						<img v-if="examination.examinationYear==value" style="box-shadow: 5px 5px 5px #989898;height: 395px;width: 280px;margin: 0px auto;margin-right: 20px;border: 0.1px solid #b1b1b1;" :src="examination.examinationCover" alt="">
					</router-link>
				
				</div>
			</div>
		</center>

	</div>

	<!-- 	<div>
		<center>
			<div style="margin:30px auto;font-size: 40px;margin-top: 500px;">2021(下半年)</div>
		</center>
		<div style="position: absolute;left:50%;transform: translate(-50%, -0%);display: flex;flex-direction: row;">
			<router-link :to="{path:'/examination_text',query: {id:examination.examinationId}}" class="a1"
				style="box-shadow: 5px 5px 5px #989898;height: 395px;width: 280px;margin: 0 auto;margin-right: 20px;border: 0.1px solid #b1b1b1;"
				v-for="examination in list">
				<img :src="examination.examinationCover" alt="">
			</router-link>
		</div>
	</div> -->

</template>

<script>
	import Header from '../../components/header.vue'
	import axios from 'axios'


	export default {

		data() {
			return {
				list: '',
				years: [],
				// year: '',
				yearsPart: [],
			}
		},
		components: {
			Header
		},
		methods: {
			getList() {
				axios({
					method: "get",
					url: "http://localhost:8090/examination/",
					headers: {
						"Content-Type": "multipart/form-data"
					},
					withCredentials: true,

				}).then((res) => {
					this.list = res.data.data
					console.log(this.list)
					for (let x = 0; x < this.list.length; x++) {
						// console.log(this.list[x].examinationYear.split("-")[0]+this.list[x].examinationYear.split("-")[1])
						this.list[x].examinationYear = this.list[x].examinationYear.split("-")[0] + this.list[x]
							.examinationYear.split("-")[1]
					}

					console.log(this.list)
				});

			},
			getExaminationYears() {
				axios({
					method: "post",
					url: "http://localhost:8090/examination/getExaminationYears",
					headers: {
						"Content-Type": "multipart/form-data"
					},
					withCredentials: true,

				}).then((res) => {
					// this.years = Object.values(res.data.data)
					// console.log(Object.values(res.data.data))
					for (let i = 0; i < res.data.data.length; i++) {
						this.years.push(res.data.data[i].split("-")[0])
						this.yearsPart.push(res.data.data[i].split("-")[0] + res.data.data[i].split("-")[1])
						// console.log(this.years)
					}
					this.yearsPart = new Set(this.yearsPart)

					// console.log(this.yearsPart)

				});
			},
		},
		mounted() {
			this.getList()
			this.getExaminationYears()
			document.getElementById("examination").className = "page-scroll active";
		},
	}
</script>

<style scoped>
/* 	.a1:hover {
		transform: scale(1.1);
		transition: .5s;
	}

	.a1 {
		transform: scale(1);
		transition: .5s;
	} */

	.a:hover {
		transform: scale(1.1);
		transition: .5s;
	}

	.a {
		transform: scale(1);
		transition: .5s;
	}
</style>
