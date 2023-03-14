<template>
	<Header></Header>
	<center>
		<div class="title">生词本</div>
		<div id="tip" style="font-size: 70px;" hidden>生词本为空</div>
		<el-button class="b" hidden id="b0" type="primary" :icon="Search" @click="back()">返回</el-button>
	</center>
	<el-card class="box-card" id="card">
		<template #header>
			<div class="card-header">
				<span style="font-size: 30px;">{{form.wordText}}</span>
				<div>[{{form.wordStandard}}]</div>
				<!-- <el-button class="button" text>Operation button</el-button> -->
			</div>
		</template>
		<div class="text" style="padding:40px 0 0px 0">
			单词释义：<input style="border-top:0;border-left:0;border-right:0;margin: 10px 20px;" type="text" class="in"
				v-model="answer" />
			<input id="answer" style="border-top:0;border-left:0;border-right:0;margin: 10px 20px;border-bottom: 0;"
				hidden readonly type="text" class="in" v-model="form.wordStandard" />
			<!-- 		<div style="margin: 10px 20px;">释义：{{form.wordTranslation}}</div>
			<div style="margin: 10px 20px;">例句：{{form.wordExample}}</div> -->

		</div>
		<div class="holder">
			<el-button id="putVocabulary" class="b" type="primary" :icon="Search" hidden @click="outVocabulary()">移出生词本
			</el-button>
			<el-button class="b" type="primary" :icon="Search" @click="back()">返回</el-button>
			<!-- <el-button class="b" type="primary" :icon="Search" @click="putVocabulary()">加入生词本</el-button> -->
			<el-button id="button" class="b" type="primary" :icon="Search" @click="next()">{{button}}</el-button>
		</div>
	</el-card>
</template>

<script>
	import Header from '../../../components/header.vue'
	import axios from 'axios'
	import VueCookies from 'vue-cookies';
	export default {
		data() {
			return {
				ids: [],
				button: '完成',
				answer: '',
				form: {
					wordId: '',
					wordText: '',
					wordExample: '',
					wordTranslation: '',
					wordStandard: ''
				}
			}
		},
		components: {
			Header
		},
		methods: {
			back() {
				this.$router.go(-1);
			},

			next() {
				if (this.button == '完成') {
					this.button = '下一题'
					document.getElementById("answer").hidden = false
					document.getElementById("putVocabulary").hidden = false
					// if(this.answer==this.form.wordTranslation)
				} else {
					this.$router.go(0);
				}

			},
			outVocabulary() {
				axios({
					method: "post",
					url: "http://localhost:8090/vocabulary/deleteVocabulary",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						vocabularyId: this.form.wordId,
						userId: VueCookies.get('user').userId
					}
				}).then((res) => {
					console.log(res.data)
					alert(res.data.message)
this.$router.go(0);

				});
			},
			getWord(wordId) {
				axios({
					method: "post",
					url: "http://localhost:8090/word/getWord",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						wordId: wordId
					}
				}).then((res) => {
					this.form.wordText = res.data.data.wordText
					this.form.wordExample = res.data.data.wordExample
					this.form.wordStandard = res.data.data.wordStandard
					this.form.wordTranslation = res.data.data.wordTranslation
					// this.reading.readingQuestion = res.data.data.readingQuestion
					// this.reading.readingAnswer=res.data.data.readingAnswer


				});
			},
			getIds() {
				axios({
					method: "post",
					url: "http://localhost:8090/vocabulary/getWordIdsByuserId",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						vocabulary_userId: VueCookies.get("user").userId
					}
				}).then((res) => {
					console.log(res.data.data)
					if (res.data.data.length != 0) {
						for (let i = 0; i < res.data.data.length; i++) {
							this.ids.push(res.data.data[i])
						}
						this.form.wordId = this.ids[Math.floor((Math.random() * this.ids.length))].toString()
						console.log(this.form.wordId)
						this.getWord(this.form.wordId)
					} else {
						document.getElementById("card").hidden = true
						document.getElementById("tip").hidden = false
						document.getElementById("b0").hidden = false
					}


				});
			},
		},
		mounted() {
			this.getIds(),
				document.getElementById("word").className = "page-scroll active";
		}
	}
</script>

<style scoped>
	.holder {
		margin-left: 300px;
	}

	.b {
		height: 50px;
		width: 100px;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 20px;
		height: 100px;
	}

	.item {
		margin-bottom: 18px;
	}

	.box-card {
		width: 680px;
		height: 300px;
		margin: 0 auto;
		margin-top: 100px;

	}

	.title {

		margin: 0 auto;
		padding-top: 70px;
		font-size: 30px;
		left: 0;
		right: 0;

	}
</style>
