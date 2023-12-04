<template>
	<Header></Header>
	<center>
		<div class="title">短文写作</div>
	</center>
		<div style="width: 60%;margin: 0 auto;">
			<p id="writing_text"></p>
		</div>
	
	<div id="view" style="width: 60%;margin: 0 auto;" hidden>
		范文：
		<p id="view1"> </p>
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

<script >

	import { ref } from 'vue'
	import Header from '../../../components/header.vue'
	import axios from 'axios'
	const textarea = ref('')
	export default{
		name:"Writing",
		data() {
			return{
				ids:[],
				writing:{
					writingId:'',
					writingText:'',
					writingTitle:'',
					writingAnswer:'',
				},

			}
		},
		components:{
			Header
		},
		methods:{
			getid(){
				axios({
					method: "post",
					url: "http://localhost:8090/writing/getAllWritingId",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					
				}).then((res) => {
					console.log(res.data.data)
					for(let i=0 ;i<res.data.data.length;i++){
						this.ids.push(res.data.data[i].writingId)
					}
					this.writing.writingId=this.ids[Math.floor((Math.random()*this.ids.length))].toString()
					console.log(this.writing.writingId)
					this.getwriting(this.writing.writingId)
					
				});
				
			},
			view(){
				document.getElementById("view").removeAttribute("hidden")
			},
			getwriting(writingId){
				console.log(writingId)
				axios({
					method: "post",
					url: "http://localhost:8090/writing/getWriting",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data:{
						writingId:writingId
					}
				}).then((res) => {
					this.writing.writingText=res.data.data.writingText
					this.writing.writingAnswer=res.data.data.writingAnswer
	document.getElementById("writing_text").innerHTML=this.writing.writingText
					document.getElementById("view1").innerHTML=this.writing.writingAnswer
	
				});
			},
			back(){
				this.$router.go(-1);
			},
			next(){
				this.getid();
			}
		},
		created() {
			
			// this.getwriting(this.writing.writingId)
		},
		mounted() {
			this.getid();
			document.getElementById("specialExercises").className="page-scroll active";
		},

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