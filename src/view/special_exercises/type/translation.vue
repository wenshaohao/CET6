<template>
	<Header></Header>
	<center>
		<div class="title">段落翻译</div>
	</center>
	<div style="width: 60%;margin: 0 auto;"><br>
			<p  id="translation_text"></p>
		</div>
	
	<div id="view" style="width: 60%;margin: 0 auto;" hidden ><br>
		范文：
		<p id="view3"> </p>
	</div>
	<center>
	<el-input
	 style="width: 60%;"
	    v-model="textarea"
	    :rows="20"
	    type="textarea"
	    placeholder="Please input"
	  />
	  
	  </center>
	  <div style="margin: 0 auto; width: 60%;text-align: right;margin-top: 10px;">
	<el-button class="b" type="primary" :icon="Search" @click="back()">返回</el-button>
	<el-button class="b" type="primary" :icon="Search" @click="view()">查看范文</el-button>
	<el-button class="b" type="primary" :icon="Search" @click="next()">下一题</el-button>
	  </div>
</template>

<script>
	
	import Header from '../../../components/header.vue'
	import axios from 'axios'
	
	export default{
		name:"Translation",
		data() {
			return{
				ids:[],
				translation:{
					translationId:'',
					translationText:'',
					translationTitle:'',
					translationAnswer:'',
				},
			
			}
		},
		components:{
			Header
		},
		methods:{
			//随机获取题目 id
			getid(){
				axios({
					method: "post",
					url: "http://localhost:8090/translation/getAllTranslationId",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					
				}).then((res) => {
					console.log(res.data.data)
					for(let i=0 ;i<res.data.data.length;i++){
						this.ids.push(res.data.data[i].translationId)
					}
				this.translation.translationId=this.ids[Math.floor((Math.random()*this.ids.length))].toString()
				console.log(this.translation.translationId)
				this.gettranslation(this.translation.translationId)
					
				});
				
			},
			//查看范文按钮
			view(){
				document.getElementById("view").removeAttribute("hidden")
			},
			//根据id获取翻译题目
			gettranslation(translationId){
				console.log(translationId)
				axios({
					method: "post",
					url: "http://localhost:8090/translation/getTranslation",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data:{
						translationId:translationId
					}
				}).then((res) => {
					this.translation.translationText=res.data.data.translationText
					this.translation.translationAnswer=res.data.data.translationAnswer
					document.getElementById("translation_text").innerHTML=this.translation.translationText
					document.getElementById("view3").innerHTML=this.translation.translationAnswer
				});
			},
			back(){
				this.$router.go(-1);
			},
			next(){
				this.$router.go(0);
			}
		},
		mounted() {
			this.getid();
			document.getElementById("specialExercises").className="page-scroll active";
		}
	}
</script>

<style scoped>
	.title {
	
		margin: 0 auto;
		padding-top: 70px;
		font-size: 30px;
		left: 0;
		right: 0;
	
	}
	.b{
		height: 50px;
		width: 150px;
	}
	
</style>