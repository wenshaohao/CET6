<template v-for="essay in essay">

	<Header></Header>

	<div class="title" style="text-align: center;">{{essay.essayTitle}}</div>
	<div class="author" style="text-align: center;">{{essay.essayAuthor}}</div>
	<div class="content">
		<div class="text" id="person_text">
			<!-- <pre>{{essay.essayText}}</pre> -->

		</div>
	</div>
	<div style="position: relative;text-align: center;height: 100%;margin-top: 41.5%">
		<!-- <el-button class="" type="primary" :icon="Search" style="position: ;">上一篇</el-button> -->
		<el-button class="" type="primary" :icon="Search" style="position: ;" @click="outMyEssay()">移出收藏</el-button>
		<el-button class="" type="primary" :icon="Search" style="" @click="back()">返回</el-button>
		<!-- <el-button class="" type="primary" :icon="Search" style="">下一篇</el-button> -->
		
	</div>

</template>

<script>
	import Header from '../../components/header.vue'
import axios from 'axios'
import VueCookies from 'vue-cookies';

	export default {

		data() {
			return {
				essay:''
			}
		},
		components: {
			Header
		},
		methods:{
			getEssay(){
				console.log(this.$route.query.id)
				axios({
					method: "get",
					url: "http://localhost:8090/essay/getEssay/"+this.$route.query.id,
					headers: {
						"Content-Type": "multipart/form-data"
					},
					withCredentials: true,
				
				}).then((res) => {
					this.essay = res.data.data
					console.log((this.essay))
					document.getElementById("person_text").innerHTML=this.essay.essayText
					// this.form.author=res.data.data[1].essayAuthor
					// console.log(this.form.author);
					// this.form.title=res.data.data[1].essayTitle
					// this.form.id=res.data.data[1].essayId
					// this.form.image=res.data.data[1].essayImage
					// this.form.text=res.data.data[1].essayText
				});
			},
			back(){
				this.$router.go(-1);
			},
			outMyEssay(){
				axios({
					method: "post",
					url: "http://localhost:8090/myEssay/deleteMyEssay",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						essayId:this.essay.essayId,
						userId:VueCookies.get('user').userId
					}
				}).then((res) => {
					console.log(res.data)
					alert(res.data.message)
				
				});
			}
		},
		
		mounted() {
			this.getEssay()
			// document.getElementById("reading").className = "page-scroll active";
		}
	}
</script>

<style scoped>
	.content {
		position: absolute;
		margin-top: 10px;
		left: 27%;
		height: 81%;
		width: 100%;
	}

	.text {
		border-style: groove;
		border-width: 2px;


		height: 100%;
		width: 46%;


		background-color: antiquewhite;
		overflow-x: hidden;
		overflow-wrap: anywhere;
		padding: 0 30px;


	}

	.title {

		margin: 0 auto;
		padding-top: 70px;
		font-size: 30px;
		left: 0;
		right: 0;

	}
</style>
