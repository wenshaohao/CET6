<template class="main">
	<Header></Header>
	<center>
		<div class="title">答案解析</div>
	</center>
	<div class="content">
		<div class="left" id="cloze_answer_left">
			<!-- {{$router.query.cloze.clozeText}} -->
			<!-- {{cloze.clozeText}} -->
		</div>
		<div class="right">
			<div class="question" id="cloze_answer_question">
			<!-- 	{{cloze.clozeQuestion}}<br>
				{{cloze.clozeParse}} -->
			</div>
			<div class="answer">
				<div>

					<div>
						正确答案：
						1,<input style="border:0" type="text" class="in" readonly v-model="answer1[0]" />
						2,<input style="border:0" type="text" class="in" readonly v-model="answer1[1]" />
						3,<input style="border:0" type="text" class="in" readonly v-model="answer1[2]" />
						4,<input style="border:0" type="text" class="in" readonly v-model="answer1[3]" />
						5,<input style="border:0" type="text" class="in" readonly v-model="answer1[4]" />

					</div>
					<div style="margin-left: 85px;">
						6.<input style="border:0" type="text" class="in" readonly v-model="answer1[5]" />
						7.<input style="border:0" type="text" class="in" readonly v-model="answer1[6]" />
						8.<input style="border:0" type="text" class="in" readonly v-model="answer1[7]" />
						9.<input style="border:0" type="text" class="in" readonly v-model="answer1[8]" />
						10.<input style="border:0" type="text" class="in" readonly v-model="answer1[9]" />
					</div>

					<div>
						你的答案：
						1,<input style="border:0;" type="text" id="answer0" class="in" readonly v-model="answer[0]" />
						2,<input style="border:0;" type="text" id="answer1" class="in" readonly v-model="answer[1]" />
						3,<input style="border:0;" type="text" id="answer2" class="in" readonly v-model="answer[2]" />
						4,<input style="border:0;" type="text" id="answer3" class="in" readonly v-model="answer[3]" />
						5,<input style="border:0;" type="text" id="answer4" class="in" readonly v-model="answer[4]" />
					</div>
					<div style="margin-left: 85px;">
						
						6,<input style="border:0;" type="text" id="answer0" class="in" readonly v-model="answer[5]" />
						7,<input style="border:0;" type="text" id="answer1" class="in" readonly v-model="answer[6]" />
						8,<input style="border:0;" type="text" id="answer2" class="in" readonly v-model="answer[7]" />
						9,<input style="border:0;" type="text" id="answer3" class="in" readonly v-model="answer[8]" />
						10,<input style="border:0;" type="text" id="answer4" class="in" readonly v-model="answer[9]" />
					</div>
				</div>
				<div class="holder">
					<!-- <button class="back">加入错题本</button> -->
					<div class="accuracyRate">正确率：{{accuracyRate}}%</div>
					<el-button class="b" type="primary" :icon="Search" @click="next">下一题</el-button>
					<el-button class="b" style="margin: 0;margin-top: 25px;" type="primary" :icon="Search" @click="out()">退出答题</el-button>
				</div>


			</div>

		</div>
	</div>
</template>

<script>
	import Header from '../../../components/header.vue'
	import '../../../assets/js/jquery.min.js'
	import axios from 'axios'
	import VueCookies from 'vue-cookies';

	export default {

		data() {
			return {
				accuracyRate: '',
				answer: ['', '', '', '', ''],
				answer1: ['', '', '', '', ''],
				ids: [],
				cloze: {
					clozeId: '',
					clozeText: '',
					clozeAnswer: '',
					clozeParse: '',
					clozeQuestion: '',
				}
			}
		},
		components: {
			Header
		},
		methods: {
			load() {
				console.log(this.$route.query.answer.length)
				for (let i = 0; i < this.$route.query.answer.length; i++) {
					this.answer[i] = this.$route.query.answer[i]
				}
				this.cloze.clozeId = this.$route.query.clozeId
				// console.log(this.cloze.clozeId)

				axios({
					method: "post",
					url: "http://localhost:8090/cloze/getCloze",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						clozeId: this.cloze.clozeId
					}
				}).then((res) => {
					this.cloze.clozeText = res.data.data.clozeText
					this.cloze.clozeQuestion = res.data.data.clozeQuestion
					this.cloze.clozeAnswer = res.data.data.clozeAnswer
					this.cloze.clozeParse = res.data.data.clozeParse
					document.getElementById("cloze_answer_left").innerHTML=this.cloze.clozeText
					document.getElementById("cloze_answer_question").innerHTML=this.cloze.clozeQuestion+"<br>"+this.cloze.clozeParse
					// console.log(this.cloze)
					for (let a = 0; a < res.data.data.clozeAnswer.split("-").length; a++) {
						this.answer1[a] = res.data.data.clozeAnswer.split("-")[a]
						// console.log(this.answer1[a])

					}
					var a = 10;
					for (let i = 0; i < this.answer1.length; i++) {
						if (this.answer1[i] != this.answer[i]) {
							console.log(this.answer1[i])
							// console.log(this.answer[i])
							a--;
							// console.log(a)

						}
					}
					this.accuracyRate = (a / this.answer1.length) * 100
					if(this.accuracyRate<=50){
						axios({
							method: "post",
							url: "http://localhost:8090/wrongQuestion/addWrongQuestion",
							headers: {
								"Content-Type": "application/json"
							},
							withCredentials: true,
							data: {
								wrongQuestionId:this.cloze.clozeId,
								userId:VueCookies.get('user').userId,
								type:2
							}
						}).then((res) => {
							console.log(res.data)
							alert(res.data.message)
							
						
						});
					}else{
						axios({
							method: "post",
							url: "http://localhost:8090/wrongQuestion/deleteWrongQuestion",
							headers: {
								"Content-Type": "application/json"
							},
							withCredentials: true,
							data: {
								wrongQuestionId:this.cloze.clozeId,
								userId:VueCookies.get('user').userId,
								type:2
							}
						}).then((res) => {
							console.log(res.data)
							alert(res.data.message)
							
						
						});
					}
					// this.accuracyRate=
				});


			},


			next() {

				this.$router.go(-1);
			},
			out(){
				this.$router.go(-2)
			}
		},
		created() {
			this.load()
		},
		mounted() {
			// this.load()
			document.getElementById("specialExercises").className = "page-scroll active";

		}
	}
</script>

<style scoped>
	@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700);

	/* .main{
		display: flex;
		flex-direction: row-reverse;
		overflow-y: hidden;
		background-color: aqua;
		
	} */



	.accuracyRate {
		margin: 10px 0;
	}


	.holder {
		box-sizing: border-box;
		margin: 0 auto;
		text-align: center;
		height: 100px;
		width: 20%;
		justify-content: center;
	}

	h1 {
		font: 400 16px 'Open Sans';
		text-transform: uppercase;
		color: #999;
		text-shadow: 1px 1px 1px #fff;
		margin-bottom: 30px;
	}



	.b {
		height: 50px;
		width: 150px;
		/* margin-top: 25px; */
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
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		height: 85%;
		width: 100%;
	}

	.left {
		border-style: groove;
		border-width: 10px;
		padding: 0 50px;
		margin-left: 2%;
		height: 100%;
		width: 46%;
		background-color: antiquewhite;
		overflow-x: hidden;
		overflow-wrap: anywhere;
		margin-right: 2%;


	}

	.right {
		border-style: groove;
		border-width: 10px;
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
		height: 200px;
		margin-top: 0px;
		bottom: 1%;
		width: 45%;
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
		margin-top: 20px;
		text-align: center;
	}
</style>
