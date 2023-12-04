<template>
	<Header></Header>
	<el-tooltip class="box-item" effect="dark" content="发布帖子" placement="top">
		<div @click="publish()"
			style="position: fixed;bottom: 1%;right: 1%;height: 50px;width: 50px;background-color: #00ffff;border-radius: 50%;font-size: 50px;text-align: center;line-height: 45px;color: white;">
			+</div>
	</el-tooltip>
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
		<div class="title">帖子</div>
	</center>

	<div style="height: 950px;">
		<div style="margin: 0 30em;margin-bottom: 10px;" v-for="(value,index) in post"
			@click="postText(value.postId)">
			<el-col :span="80">
			      <el-card shadow="hover" style="background-color: #fff2e9;"> 
						<div style="margin-left:40px;padding-top: 20px;font-size: 30px;">{{value.postTitle}}</div>
						
						<div style="display: flex;flex-direction: row-reverse;margin-right: 20px;">
							<div style="margin-right: 30px;height: 73px;line-height: 73px;">
								<router-link class="nav-item" to="/person" style="margin-top: 10px;">
									<el-avatar class="photo" :src="`${userImage[index]+'?'+now}`" />
								</router-link>
							</div>
							<div style="margin-right: 50px;height: 73px;line-height: 73px;">{{userName[index]}}</div>
							<div style="margin-right: 50px;height: 73px;line-height: 73px;">
								<p style="margin-left:40px;height: 73px;line-height: 73px;">{{value.postTime}}</p>
							</div>
						</div>
				   </el-card>
			    </el-col>
			

		</div>
	</div>


	<el-pagination background style="margin: 20px 500px;" @size-change="handleSizeChange"
		@current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
		layout=" prev, pager, next,jumper" :total="total">
	</el-pagination>



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
				post: [],
				userName: [],
				userImage: [],
				currentPage: 1,
				pageSize: 5,
				total: 20
			}
		},
		components: {
			Header
		},
		methods: {
			getAllPost() {
				this.post = []
				axios({
					method: "post",
					url: "http://localhost:8090/post/",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,

				}).then((res) => {
					this.total = res.data.data.length
				})
				axios({
					method: "post",
					url: "http://localhost:8090/post/getPage",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						currentPage: this.currentPage,
						pageSize: this.pageSize
					}
				}).then((res) => {
					for (let i = 0; i < res.data.data.length; i++) {
						this.post.push(res.data.data[i])
						axios({
							method: "post",
							url: "http://localhost:8090/user/getUser",
							headers: {
								"Content-Type": "application/json"
							},
							withCredentials: true,
							data: {
								userId: res.data.data[i].postUser
							}
						}).then((res1) => {
							// console.log(res1.data.data)
							this.userImage.push(res1.data.data.userImage)
							this.userName.push(res1.data.data.userName)
						})
					}
					// console.log(this.post)
					// console.log(this.userImage)
					// console.log(this.userName)


				});
			},
			handleSizeChange: function(size) {
				this.pagesize = size;
				this.getAllPost();
				console.log(this.pagesize) //每页下拉显示数据
			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				console.log(this.currentPage) //点击第几页
				this.getAllPost();

			},
			publish() {
				this.$router.push('/post_publish')
			},
			inAnnouncementText(announcementId) {
				// console.log(1)
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
						"Content-Type": "application/json"
					},
					withCredentials: true,

				}).then((res) => {
					for (let i = res.data.data.length - 1; i >= 0; i--) {
						this.announcement.push(res.data.data[i])

					}
					// console.log(this.announcement)



				});
			},
			postText(postId) {
				this.$router.push({
					path: '/post_text',
					query: {
						postId: postId
					}
				})
				// axios({
				// 	method: "post",
				// 	url: "http://localhost:8090/post/getPost",
				// 	headers: {
				// 		"Content-Type": "application/json"
				// 	},
				// 	withCredentials: true,
				// 	data:{
				// 		postId:postId
				// 	}
				// }).then((res) => {
				// 	console.log(res.data)



				// });
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
		},
		computed: {
			now() {
				return Date.now();
			}
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
