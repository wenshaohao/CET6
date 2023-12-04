<template v-for="essay in essay">

	<Header></Header>

	<div class="title" style="text-align: center;">{{essay.essayTitle}}</div>
	<div class="author" style="text-align: center;">{{essay.essayAuthor}}</div>
	<div class="content">
		<div class="text" id="text">
			<!-- <pre>{{essay.essayText}}</pre> -->

		</div>
	</div>
	<div style="position: relative;text-align: center;height: 100%;margin-top: 43.5%">
		<!-- <el-button class="" type="primary" :icon="Search" style="position: ;">上一篇</el-button> -->
		<el-button class="" type="primary" :icon="Search" style="position: ;" @click="centerDialogVisible = true">收藏</el-button>
		<el-button class="" type="primary" :icon="Search" style="" @click="back()">返回</el-button>
		<!-- <el-button class="" type="primary" :icon="Search" style="">下一篇</el-button> -->
		
	</div>



	<el-dialog
	  v-model="centerDialogVisible"
	  title="Warning"
	  width="30%"
	  align-center
	>
	  <span>确认收藏？</span>
	  <template #footer>
	    <span class="dialog-footer">
	      <el-button @click="centerDialogVisible = false">取消</el-button>
	      <el-button type="primary" @click="putMyEssay()">
	        确定
	      </el-button>
	    </span>
	  </template>
	</el-dialog>


</template>

<script>
	import Header from '../../components/header.vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import VueCookies from 'vue-cookies';

	export default {

		data() {
			return {
				centerDialogVisible:false,
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
					document.getElementById("text").innerHTML=this.essay.essayText
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
			putMyEssay(){
				axios({
					method: "post",
					url: "http://localhost:8090/myEssay/addMyEssay",
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
					ElMessage({
					    message: res.data.message,
					    type: 'success',
					  })
				
				});
				this.centerDialogVisible=false
			}
		},
		
		mounted() {
			this.getEssay()
			document.getElementById("reading").className = "page-scroll active";
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


		background-color: #d0ffe8;
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
