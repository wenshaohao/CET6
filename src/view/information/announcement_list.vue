<template>
	<Header></Header>
	  <el-timeline style="margin: 0 500px;margin-top:0px;margin-left: 450px;">
		  <div style="margin: 0 auto;margin-top: 80px;font-size: 30px;">公告:</div>
	    <el-timeline-item :timestamp="value.announcementTime" placement="top" style="margin: 0 0;padding: 0 0;" v-for="(value,index) in announcement" @click="inAnnouncementText(value.announcementId)">
			
	      <el-card>
			 {{value.announcementTitle}}
	      </el-card>
		  
	    </el-timeline-item>
	  </el-timeline>
</template>

<script>
	import axios from 'axios'
	import Header from '../../components/header.vue'
	
	export default{
		data() {
			return{
				announcement:[],
			}
		},
		components:{
			Header
		},
		methods:{
			inAnnouncementText(announcementId){
				console.log(1)
				this.$router.push({path:'/announcement_text',query:{announcementId:announcementId}})
			},
			getAnnouncement(){
				axios({
					method: "post",
					url: "http://localhost:8090/announcement/",
					headers: {
						"Content-Type": "multipart/form-data"
					},
					withCredentials: true,
				
				}).then((res) => {
					
					for(let i=res.data.data.length-1;i>=0;i--){
						this.announcement.push(res.data.data[i])
					}
					console.log(this.announcement)
					

				});
			}
		},
		created() {
			// document.getElementById("information").className = "page-scroll active";
		},
		mounted() {
			this.getAnnouncement()
			document.getElementById("report").className="page-scroll active"
		}
	}
</script>

<style scoped>
</style>