<template v-for="examination in examination">
	<Header></Header>

	<div class="content" v-loading="loading">
		<div class="left">
			<div id="mypdf" style="width: 100%;height: 1080px;"></div>
			<!-- <object data="http://localhost:8090/pdf/123.pdf" type="application/pdf" width="100%" height="100%"/> -->
			<!-- <embed src="http://localhost:8090/pdf/123.pdf" type="application/pdf" width="100%" height="100%"> -->
			<!-- 			<iframe src="http://localhost:8090/pdf/123.pdf" width="100%" height="100%"> -->



			<!-- </iframe> -->




		</div>
		<div class="right">
			<div class="question">
				<div id="mypdf1" style="width: 100%;height: 1080px;"></div>


			</div>
			<div class="answer">
				<div class="listen">
					<audio controls ref="audio" class="aud" v-if="aLoading">

						<source id="audio" :src="examinationAudio" v-if="aLoading" />

					</audio>
				</div>
				<div class="holder">
					<el-button class="b" type="primary" style="height: 50px;width: 100px;" @click="bakc()" :icon="Search">返回</el-button>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Header from '../../components/header.vue'
	// import aplayer from 'vue-aplayer'
	import axios from 'axios'
	import PDFObject from 'pdfobject'
	export default {

		data() {
			return {
				examination: '',
				examinationAudio:'',
				loading:true,
				aLoading:false,
			}
		},
		components: {
			Header
		},
		methods: {
			// getExamination() {
			// 	console.log(this.$route.query.id)
			// 	axios({
			// 		method: "post",
			// 		url: "http://localhost:8090/examination/getExamination",
			// 		// headers: {
			// 		// 	"Content-Type": "multipart/form-data",
			// 		// },
			// 		data: {
			// 			examinationId: this.$route.query.id
			// 		},
			// 		withCredentials: true,

			// 	}).then((res) => {
			// 		this.examination = res.data.data
					
			// 		let url = this.examination.examinationText;
			// 		let url1 = this.examination.examinationParse;
			// 		this.examinationAudio=res.data.data.examinationAudio
			// 		console.log(this.examination)
			// 		PDFObject.embed(url, "#mypdf");
			// 		PDFObject.embed(url1, "#mypdf1");
			// 		document.getElementById("audio").src=this.examination.examinationAudio
			// 		this.aLoading=true
			// 	});

			// },
			bakc(){
				this.$router.go(-1);
			}

		},
		beforeCreate() {
	
		},
		created() {
			// this.getExamination()
			axios({
				method: "post",
				url: "http://localhost:8090/examination/getExamination",
				// headers: {
				// 	"Content-Type": "multipart/form-data",
				// },
				data: {
					examinationId: this.$route.query.id
				},
				withCredentials: true,
			
			}).then((res) => {
				this.examination = res.data.data
				
				let url = this.examination.examinationText;
				let url1 = this.examination.examinationParse;
				this.examinationAudio=res.data.data.examinationAudio
				console.log(this.examination)
				PDFObject.embed(url, "#mypdf");
				PDFObject.embed(url1, "#mypdf1");
			this.aLoading=true
			});
			this.loading=false
			
		},
		mounted() {
			// this.getExamination()


			document.getElementById("examination").className = "page-scroll active";
		},
	}
</script>
// <script setup>
	// 	//导入PDFObject
	// 	// import PDFObject from 'pdfobject'
	// 	import {
	// 		ref,
	// 		onMounted
	// 	} from 'vue'

	// 	onMounted(() => {
	// 		// let url1 = "http://localhost:8090/pdf/2021-下半年-卷三-parse.pdf";
	// 		// let url = "http://localhost:8090/pdf/2021-下半年-卷三.pdf";
	// 		let url=this.examination.examinationText
	// 		let url1=this.examination.examinationParse
	// 		PDFObject.embed(url, "#mypdf");
	// 		PDFObject.embed(url1, "#mypdf1");
	// 	})
	// 
</script>

<style scoped>
	/* 根据你的需要设置PDFObject样式，比如高度等 */
	.pdfobject-container {
		height: 680px;
		border: 1rem solid rgba(0, 0, 0, .1);
	}

	.holder {
		margin: 0 auto;
		justify-content: center;
		margin-top: 25px;
	}

	h1 {
		font: 400 16px 'Open Sans';
		text-transform: uppercase;
		color: #999;
		text-shadow: 1px 1px 1px #fff;
		margin-bottom: 30px;
	}


	.listen {
		margin-top: 20px;

	}

	.aud {
		width: 700px;
	}






	.title {

		margin: 0 auto;
		padding-top: 70px;
		font-size: 30px;
		left: 0;
		right: 0;

	}

	.content {
		position: absolute;
		margin-top: 80px;
		display: flex;
		flex-direction: row;
		height: 90%;
		width: 100%;
	}

	.left {



		margin-left: 2%;
		height: 100%;
		width: 46%;

		overflow-x: hidden;
		overflow-wrap: anywhere;
		margin-right: 2%;


	}

	.right {

		margin-right: 2%;
		margin-left: 2%;
		height: 100%;
		width: 46%;
		/* background-color: #00ffff; */
		overflow-x: hidden;
		overflow-wrap: anywhere;

	}

	.question {
		padding-bottom: 100px;
	}

	.answer {
		display: flex;
		flex-direction: row;
		position: absolute;
		height: 100px;
		margin-top: 0px;
		bottom: 0%;
		width: 46%;
		background-color: white;
		border-width: 2px 0 0 0;
		border-style: solid;
		border-color: black;
	}

	.next {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		height: 100px;
		width: 20%;
		justify-content: center;
	}





	.in {
		width: 80px;
		margin-top: 40px;
		text-align: center;
	}
</style>
