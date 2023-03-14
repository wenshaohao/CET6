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
		<div class="text">
			<div style="margin: 10px 20px;">释义：{{form.wordTranslation}}</div>
			<div style="margin: 10px 20px;">例句：{{form.wordExample}}</div>

		</div>
		<div class="holder">
			<el-button class="b" type="primary" :icon="Search" @click="back()">返回</el-button>
			<el-button class="b" type="primary" :icon="Search" @click="outVocabulary()">移出生词本</el-button>
			<el-button class="b" type="primary" :icon="Search" @click="next()">下一个</el-button>
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
				this.$router.go(0);
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
			this.getIds();

		}
	}
</script>

<style scoped>
	.holder {
		margin-left: 250px;
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
		height: 300px;
	}

	.item {
		margin-bottom: 18px;
	}

	.box-card {
		width: 680px;
		height: 500px;
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
