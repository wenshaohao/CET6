<template>
	<Header></Header>

	<div   style="margin: 10px 500px;margin-top: 80px;border-left: 1px solid black;border-right: 1px solid black;border-bottom: 1px solid black;">
		<div style="font-size: 30ox;margin:20px 10px;border-bottom: 2px solid black;padding: 10px 20px;" @click="back()">返回&nbsp;&nbsp;&nbsp;&nbsp;|</div>
		<center>
			
			<div style="margin: 0 auto;">
				<h2 style="margin-top: 0px;">{{announcement.announcementTitle}}</h2>
			</div>
		</center>
	
			<div id="announcement_text">
				<!-- {{announcement.announcementText}} -->
			</div>
	
		
	</div>


</template>

<script>
	import axios from 'axios'
	import Header from '../../components/header.vue'
	export default {
		data() {
			return {
				announcement: '',
			}
		},
		components: {
			Header
		},
		methods: {
			back(){
				this.$router.go(-1)
			},
			getAnnouncement() {
				console.log(this.$route.query.announcementId)
				axios({
					method: "post",
					url: "http://localhost:8090/announcement/getAnnouncement",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						announcementId: this.$route.query.announcementId
					}
				}).then((res) => {
					this.announcement = res.data.data
					console.log(this.announcement)
					document.getElementById("announcement_text").innerHTML=this.announcement.announcementText


				});
			},
		},
		mounted() {

			this.getAnnouncement()
			document.getElementById("report").className = "page-scroll active"
		},

	}
</script>

<style>
</style>
