<template class="main">
	<Header></Header>
	<center>
		<div class="title">错题本</div>
		<div id="tip" style="font-size: 70px;" hidden>错题本为空</div>
		<el-button class="b" hidden id="b0" type="primary" :icon="Search" @click="back()">返回</el-button>
	</center>
	<div class="content" id="card">
		<div class="left" id="person_cloze_left">
			<!-- {{cloze.clozeText}} -->
		</div>
		<div class="right">
			<div class="question" id="person_cloze_question">


				<!-- {{cloze.clozeQuestion}} -->


			</div>
			<div class="answer">
				<div>
					<div style="width: 500px;">

						1,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in"
							v-model="answer[0]" />
						2,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in"
							v-model="answer[1]" />
						3,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in"
							v-model="answer[2]" />
						4,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in"
							v-model="answer[3]" />
						5,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in"
							v-model="answer[4]" />
						6,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in"
							v-model="answer[5]" />
						7,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in"
							v-model="answer[6]" />
						8,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in"
							v-model="answer[7]" />
						9,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in"
							v-model="answer[8]" />
						10,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in"
							v-model="answer[9]" />
					</div>
				</div>
				<div class="holder">
					<el-button class="b" type="primary" :icon="Search" @click="back()">返回</el-button>
					<el-button class="b" type="primary" :icon="Search" @click="centerDialogVisible = true">完成</el-button>
				</div>


			</div>

		</div>
	</div>
	
	
	<el-dialog
	    v-model="centerDialogVisible"
	    title="Warning"
	    width="30%"
	    align-center
	  >
	    <span>确认提交？</span>
	    <template #footer>
	      <span class="dialog-footer">
	        <el-button @click="centerDialogVisible = false">取消</el-button>
	        <el-button type="primary" @click="next()">
	          确定
	        </el-button>
	      </span>
	    </template>
	  </el-dialog>
</template>

<script>
	import Header from '../../../components/header.vue'
	import '../../../assets/js/jquery.min.js'
	import axios from 'axios'
	import VueCookies from 'vue-cookies';
	export default {

		data() {
			return {
				centerDialogVisible:false,
				answer: ['', '', '', '', ''],
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

			getIds() {
				axios({
					method: "post",
					url: "http://localhost:8090/wrongQuestion/getWrongQuestionIdsByuserId",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						wrongQuestion_userId: VueCookies.get("user").userId,
						type:2
					}
				}).then((res) => {
					console.log(res.data.data)
					if (res.data.data.length != 0) {
						for (let i = 0; i < res.data.data.length; i++) {
							this.ids.push(res.data.data[i])
						}
						this.cloze.clozeId = this.ids[Math.floor((Math.random() * this.ids.length))].toString()
						console.log(this.cloze.clozeId)
						this.getCloze(this.cloze.clozeId)
					} else {
						document.getElementById("card").hidden = true
						document.getElementById("tip").hidden = false
						document.getElementById("b0").hidden = false
					}


				});
			},
			getCloze(clozeId) {
				axios({
					method: "post",
					url: "http://localhost:8090/cloze/getCloze",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						clozeId: clozeId
					}
				}).then((res) => {
					this.cloze.clozeText = res.data.data.clozeText
					this.cloze.clozeQuestion = res.data.data.clozeQuestion
					this.cloze.clozeAnswer = res.data.data.clozeAnswer
					document.getElementById("person_cloze_left").innerHTML=this.cloze.clozeText
					document.getElementById("person_cloze_question").innerHTML=this.cloze.clozeQuestion

				});
			},
			back() {
				this.$router.go(-1);
			},

			next: function() {
				this.$router.push({
					path: '/special_exercises/cloze_answer',
					query: {
						clozeId: this.cloze.clozeId,
						answer: this.answer
					}
				})
			}
		},
		mounted() {
			this.getIds()
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








	.holder {
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		margin: 0 auto;
		text-align: center;
		height: 100px;
		width: 30%;
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






	.b {


		height: 50px;
		width: 150px;

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
		
		border-style: solid;
		/* border-width: 10px; */
		padding: 20px 50px;
		margin-left: 2%;
		height: 100%;
		width: 46%;
		/* background-color: antiquewhite; */
		overflow-x: hidden;
		overflow-wrap: anywhere;
		margin-right: 2%;


	}

	.right {
		border-style: solid;
		/* border-width: 10px; */
		margin-right: 2%;
		margin-left: 2%;
		height: 100%;
		width: 46%;
		/* background-color: #00ffff; */
		overflow-x: hidden;
		overflow-wrap: anywhere;
		padding: 20px 50px;
		
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
		right: 2.5%;
		bottom: 0.5%;
		width: 45%;
		background-color: white;
		border-width: 2px 0 0 0;
		border-style: solid;
		border-color: black;
		background-color: #e7e7e7;
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
		background-color: #e7e7e7;
	}
</style>
