<template>
	<Header></Header>
	<center>
		<div class="title">单词背诵</div>
	</center>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span style="font-size: 30px;">{{form.wordText}}</span>
				<div style="">[{{form.wordStandard}}]</div>
				<el-tooltip class="box-item" effect="dark" content="播放" placement="top">
					<svg @click="play" style="height: 30px;width: 30px;margin: 0 0;padding: 0 0;" t="1679553961791"
						class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
						p-id="2802" width="200" height="200">
						<path
							d="M664.032653 724.636735c-5.22449 0-9.926531-2.089796-14.106122-5.746939-7.836735-7.836735-7.836735-20.37551 0-28.212245 98.742857-98.742857 98.742857-259.134694 0-357.877551-7.836735-7.836735-7.836735-20.37551 0-28.212245 7.836735-7.836735 20.37551-7.836735 28.212245 0 114.416327 114.416327 114.416327 299.885714 0 414.302041-4.179592 4.179592-9.404082 5.746939-14.106123 5.746939z"
							fill="#F2CB51" p-id="2803"></path>
						<path
							d="M680.75102 881.371429c-7.314286 0-14.106122-3.657143-17.240816-10.44898-5.22449-9.404082-1.567347-21.942857 7.836735-27.167347 122.253061-65.828571 198.008163-193.306122 198.008163-331.755102s-75.755102-265.926531-198.008163-331.755102c-9.404082-5.22449-13.061224-17.240816-7.836735-27.167347 5.22449-9.404082 17.240816-13.061224 27.167347-7.836735C825.469388 218.383673 909.061224 358.922449 909.061224 512c0 153.077551-83.591837 293.616327-218.906122 366.759184-2.612245 1.567347-6.269388 2.612245-9.404082 2.612245z"
							fill="#F2CB51" p-id="2804"></path>
						<path
							d="M473.861224 897.044898c-19.330612 0-37.616327-7.836735-51.2-22.465306l-127.477551-141.061225c-2.089796-2.089796-4.702041-3.134694-7.314285-3.134694H194.35102c-43.885714 0-79.412245-35.526531-79.412244-79.412244V372.506122c0-43.885714 35.526531-79.412245 79.412244-79.412244h104.489796c3.134694 0 5.746939-1.044898 7.836735-3.657143L422.138776 151.510204c17.763265-21.420408 46.497959-29.779592 73.142857-20.897959 26.122449 8.359184 43.885714 30.302041 45.97551 57.469388V834.35102c-2.089796 27.167347-19.330612 49.632653-44.930612 58.514286-7.314286 2.612245-15.15102 4.179592-22.465307 4.179592z"
							fill="#16C4AF" p-id="2805"></path>
					</svg>
				</el-tooltip>

				<audio controls id="play" ref="audio" class="aud" v-if="aLoading" hidden>
					<source id="audio" :src="`${form.wordAudio+'?'+now}`" v-if="aLoading" />
				</audio>
				<!-- <el-button class="button" text>Operation button</el-button> -->
			</div>
		</template>
		<div class="text" style="padding:40px 0 0px 0">
			单词释义：<input style="border-top:0;border-left:0;border-right:0;margin: 10px 20px;" type="text" class="in"
				v-model="answer" />
			<input id="answer" style="border-top:0;border-left:0;border-right:0;margin: 10px 20px;border-bottom: 0;"
				hidden readonly type="text" class="in" v-model="form.wordTranslation" />
			<!-- 		<div style="margin: 10px 20px;">释义：{{form.wordTranslation}}</div>
			<div style="margin: 10px 20px;">例句：{{form.wordExample}}</div> -->

		</div>
		<div class="holder">
			<el-button id="putVocabulary" class="b" type="primary" :icon="Search" hidden @click="centerDialogVisible = true">加入生词本
			</el-button>
			<el-button class="b" type="primary" :icon="Search" @click="back()">返回</el-button>
			<!-- <el-button class="b" type="primary" :icon="Search" @click="putVocabulary()">加入生词本</el-button> -->
			<el-button id="button" class="b" type="primary" :icon="Search" @click="next()">{{button}}</el-button>
		</div>
	</el-card>
	
	<el-dialog
	  v-model="centerDialogVisible"
	  title="Warning"
	  width="30%"
	  align-center
	>
	  <span>确认加入生词本？</span>
	  <template #footer>
	    <span class="dialog-footer">
	      <el-button @click="centerDialogVisible = false">取消</el-button>
	      <el-button type="primary" @click="putVocabulary()">
	        确定
	      </el-button>
	    </span>
	  </template>
	</el-dialog>
	
</template>


	


<script>
	import Header from '../../components/header.vue'
	import axios from 'axios'
	import VueCookies from 'vue-cookies';
	import { ElMessage } from 'element-plus'
	export default {
		data() {
			return {
				centerDialogVisible:false,
				ids: [],
				aLoading: false,
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
			play() {
				document.getElementById("play").play();
			},
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
					this.getIds();
					this.button = '完成'
					document.getElementById("answer").hidden = true
					document.getElementById("putVocabulary").hidden = true
				}

			},
			putVocabulary() {
				axios({
					method: "post",
					url: "http://localhost:8090/vocabulary/addVocabulary",
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
					ElMessage({
					    message: res.data.message,
					    type: 'success',
					  })


				});
				this.centerDialogVisible=false
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
					this.form.wordAudio = res.data.data.wordAudio
					this.aLoading = true


				});
			},
		getIds() {
			this.aLoading = false
			//请求全部单词id
			axios({
				method: "post",
				url: "http://localhost:8090/word/getAllWordId",
				headers: {
					"Content-Type": "application/json"
				},
				withCredentials: true,
			}).then((res) => {
				//返回id
				console.log(res.data.data)
				for (let i = 0; i < res.data.data.length; i++) {
					this.ids.push(res.data.data[i].wordId)
				}
				//随机获取一个单词id
				this.form.wordId = this.ids[Math.floor((Math.random() * this.ids.length))].toString()
				//查询单词
				this.getWord(this.form.wordId)
		
			});
		},
		},
		created() {
			this.getIds()
		},
		mounted() {

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
