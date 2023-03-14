<template>
	<Header></Header>
	<div @click="publish()"
		style="position: fixed;bottom: 1%;right: 1%;height: 50px;width: 50px;background-color: #00ffff;border-radius: 50%;font-size: 50px;text-align: center;line-height: 45px;color: white;">
		+</div>
	<el-timeline style="margin: 0 500px;margin-top:0px;margin-left: 450px;">
		<div style="margin: 0 auto;margin-top: 80px;font-size: 30px;">公告:</div>
		<el-timeline-item :timestamp="value.announcementTime" placement="top" style="margin: 0 0;padding: 0 0;"
			v-for="(value,index) in announcement" v-show="index<3" @click="inAnnouncementText(value.announcementId)">
			<el-card>
				{{value.announcementTitle}}
			</el-card>
		</el-timeline-item>
		<router-link to="/announcement_list" style="display: flex;flex-direction: row-reverse;margin-top: 10px;">历史公告>>
		</router-link>
	</el-timeline>
	<el-divider border-style="dashed" />
	<center>
		<div class="title">考生帖子</div>
	</center>
	
	<div style="margin: 0 500px;border: 1px solid black;margin-bottom: 10px;" v-for="(value,index) in post">
		<div style="margin-left:40px;padding-top: 20px;font-size: 30px;">{{value.postTitle}}</div>

		<div style="display: flex;flex-direction: row-reverse;margin-right: 20px;">
			<div style="margin-right: 30px;height: 73px;line-height: 73px;">
				<router-link class="nav-item" to="/person" style="margin-top: 10px;">
					<el-avatar class="photo" :src="userImage[index]" />
				</router-link>
			</div>
			<div style="margin-right: 50px;height: 73px;line-height: 73px;">{{userName[index]}}</div>
			<div style="margin-right: 50px;height: 73px;line-height: 73px;">
				<p style="margin-left:40px;height: 73px;line-height: 73px;">{{value.postTime}}</p>
			</div>
		</div>

	</div>
	
</template>

<script>
	import axios from 'axios'
	import Header from '../../components/header.vue'
	import VueCookies from 'vue-cookies';
	export default {
		data() {
			return {
				img: '',
				announcement: [],
				post:[],
				userName:[],
				userImage:[]
			}
		},
		components: {
			Header
		},
		methods: {
			getAllPost(){
				axios({
					method: "post",
					url: "http://localhost:8090/post/",
					headers: {
						"Content-Type": "multipart/form-data"
					},
					withCredentials: true,
				
				}).then((res) => {
					for (let i = res.data.data.length - 1; i >= 0; i--) {
						this.post.push(res.data.data[i])
						axios({
							method: "post",
							url: "http://localhost:8090/user/getUser",
							headers: {
								"Content-Type": "application/json"
							},
							withCredentials: true,
							data:{userId:res.data.data[i].postUser}
						}).then((res1) => {
							// console.log(res1.data.data)
							this.userImage.push(res1.data.data.userImage)
							this.userName.push(res1.data.data.userName)
						})
					}
					console.log(this.post)
					console.log(this.userImage)
					console.log(this.userName)
				
				
				});
			},
			publish(){
				this.$router.push('/post_publish')
			},
			inAnnouncementText(announcementId) {
				console.log(1)
				this.$router.push({
					path: '/announcement_text',
					query: {
						announcementId: announcementId
					}
				})
			},
			getAnnouncement() {
				axios({
					method: "post",
					url: "http://localhost:8090/announcement/",
					headers: {
						"Content-Type": "multipart/form-data"
					},
					withCredentials: true,

				}).then((res) => {
					for (let i = res.data.data.length - 1; i >= 0; i--) {
						this.announcement.push(res.data.data[i])
						
					}
					// console.log(this.announcement)
					


				});
			}
		},
		created() {
			// document.getElementById("information").className = "page-scroll active";
		},
		mounted() {
			this.getAllPost()
			this.getAnnouncement()
			this.img = VueCookies.get("user").userImage
			document.getElementById("report").className = "page-scroll active"
		}
	}
</script>

<style scoped>
	.title {

		margin: 0 auto;
		padding-bottom: 20px;
		font-size: 30px;
		left: 0;
		right: 0;

	}
</style>
