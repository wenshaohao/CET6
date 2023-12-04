<template class="main">
	<Header></Header>
	<center>
		<div class="title">阅读理解</div>
	</center>
	<div class="content">
		<div class="left" id="reading_left">
			<!-- {{reading.readingText}} -->
		</div>
		<div class="right">
			<div class="question" id="reading_question">

				<!-- {{reading.readingQuestion}} -->


			</div>
			<div class="answer">
				<div id="answer" v-for="(value,index) in answer">
					{{index+1}}.<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in"
						v-model="answer[index]" />
					<!-- 			2,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in" />
					3,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in" />
					4,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in" />
					5,<input style="border-top:0;border-left:0;border-right:0;" type="text" class="in" /> -->
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

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
const centerDialogVisible = ref(false)



</script>


<script>
	import Header from '../../../components/header.vue'
	import '../../../assets/js/jquery.min.js'
	import axios from 'axios'
	import VueCookies from 'vue-cookies';
	export default {
		name: "Special_exercises",
		data() {
			return {
				answer: ['', '', '', '', ''],
				ids: [],
				reading: {
					readingId: '',
					readingText: '',
					readingAnswer: '',
					readingParse: '',
					readingQuestion: '',
				}
			}

		},
		components: {
			Header
		},
		methods: {
			//随机出题
			getIds() {
				axios({
					method: "post",
					url: "http://localhost:8090/reading/getAllReadingId",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
				}).then((res) => {
					console.log(res.data.data)
					//遍历数据库题目id
					for (let i = 0; i < res.data.data.length; i++) {
						this.ids.push(res.data.data[i].readingId)
					}
					//根据数据库题目总数随机挑选一个id
					this.reading.readingId = this.ids[Math.floor((Math.random() * this.ids.length))].toString()
					//获取id题目信息
					this.getReading(this.reading.readingId)
				});
			},
			getReading(readingId) {
				axios({
					method: "post",
					url: "http://localhost:8090/reading/getReading",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						readingId: readingId
					}
				}).then((res) => {
					this.reading.readingText = res.data.data.readingText
					this.reading.readingQuestion = res.data.data.readingQuestion
					this.reading.readingAnswer = res.data.data.readingAnswer
					document.getElementById("reading_left").innerHTML = this.reading.readingText
					document.getElementById("reading_question").innerHTML = this.reading.readingQuestion
				});
			},
			back() {
				this.$router.go(-1);
			},
			next: function() {
					console.log(this.answer)
					this.$router.push({
						path: '/special_exercises/reading_answer',
						query: {
							readingId: this.reading.readingId,
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
		/* background-color: rgb(191, 203, 217); */
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
		/* margin-right: 100px; */
		right: 2.5%;
		height: 100px;
		margin-top: 0px;
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
		margin-top: 40px;
		text-align: center;
		background-color: #e7e7e7;
	}
</style>
