<template class="page">
	<Header></Header>
	<!-- <div style="height: 100px;"></div> -->
	<!-- <a class="target-fix" name="a-<?php $a->id(); ?>"></a> -->
	<div class="wrapper" style="margin-top: 50px;padding-top: 0;">
		<div class="sidebar" style="margin-top: 0;padding-top: 0;">
			<div class="sidebar-header">
				<img :src="`${img+'?'+now}`" alt="Image">
			</div>
			<div class="sidebar-content">
				<nav class="navbar navbar-expand-md bg-dark navbar-dark">
					<a href="#" class="navbar-brand">Navigation</a>
					<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarCollapse">
						<ul class="nav navbar-nav">
							<li class="nav-item">

							</li>
							<!-- <li class="nav-item">
								<a class="nav-link" href="#about">个人信息<i class="fa fa-address-card"></i></a>
							</li> -->
							<li class="nav-item">
								<a class="nav-link" href="#experience">错题本<i class="fa fa-star"></i></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#service">生词本<i class="fa fa-tasks"></i></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#portfolio">喜爱读本<i class="fa fa-file-archive"></i></a>
								
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#myPost">我的帖子<i class="fa fa-file-archive"></i></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#review">关于<i class="fa fa-envelope"></i></a>
							</li>
						</ul>
					</div>
				</nav>
			</div>

		</div>


		<div class="content" style="">




			<!-- About Start -->

			<!-- <div class="about" id="about" style=" position: relative;padding-top: 110px;margin-top: -110px;"> -->
				<!-- <div style="height: 50px;"></div> -->
			<!-- 	<div class="content-inner">
					<div class="content-header">
						<h2>个人信息</h2>
					</div>
					<div class="row align-items-center">
						<div class="col-md-6 col-lg-5">
							<img :src="`${img+'?'+now}`" alt="Image">
						</div>
						<div class="col-md-6 col-lg-7">
							<p>
								蒙奇·D·路飞，日本漫画《航海王》及其衍生作品中的男主角。绰号“草帽”路飞，是草帽一伙船长，草帽大船团大船长，四皇、极恶的世代之一。橡胶果实（人人果实·幻兽种·尼卡形态）能力者，悬赏金30亿贝里。梦想是找到传说中的大秘宝（ONE
								PIECE），成为海贼王。
							</p>
							<a class="btn" href="#">更多</a>
						</div>
					</div>

				</div>
			</div> -->
			<!-- About End -->



			<!-- Experience Start -->
			<div class="experience" id="experience" style=" position: relative;padding-top: 70px;margin-top: 0px;">
				<div class="content-inner">
					<div class="content-header">
						<h2>错题本</h2>
					</div>
					<div class="row align-items-center">
						<router-link to="/person/cloze" class="col-md-6" style="text-decoration: none;">
							<div class="exp-col"
								style="text-decoration: none;border: solid;border-width: 1px;padding: 10px 10px;">

								<h3>完形填空</h3>
								<h4>分数比例：5%</h4>
								<h5>分值：35.5</h5>
								<p>词性、带入原文、通过冠词判断（技巧）</p>
							</div>
						</router-link>
						<router-link to="/person/reading" class="col-md-6" style="text-decoration: none;">
							<div class="exp-col"
								style="text-decoration: none;border: solid;border-width: 1px;padding: 10px 10px;">

								<h3>阅读理解</h3>
								<h4>分数比例：20%</h4>
								<h5>分值：142</h5>
								<p>词汇重中之重、细心阅读原文（技巧）</p>
							</div>
						</router-link>
						<router-link to="/person/matching" class="col-md-6"
							style="text-decoration: none;margin-top: 20px;">
							<div class="exp-col"
								style="text-decoration: none;border: solid;border-width: 1px;padding: 10px 10px;">

								<h3>段落匹配</h3>
								<h4>分数比例：10%</h4>
								<h5>分值：71</h5>
								<p>先5句，关键词，再定位，后5句（技巧）</p>
							</div>
						</router-link>

					</div>
				</div>
			</div>
			<!-- Experience Start -->

			<!-- Service Start -->
			<div class="service" id="service" style=" position: relative;padding-top: 70px;margin-top: 0px;">
				<div class="content-inner">
					<div class="content-header">
						<h2>生词本</h2>
					</div>
					<div class="row align-items-center">
						<router-link to="/person/word_text" class="col-md-6"
							style="text-decoration: none;border: solid;border-width: 1px;">
							<div class="srv-col">
								<i class="fa fa-desktop"></i>
								<h3>单词背诵</h3>
								<p>温故而知新，让单词熟练于心</p>
							</div>
						</router-link>
						<router-link to="/person/word_etoc" class="col-md-6"
							style="text-decoration: none;border: solid;border-width: 1px;">
							<div class="srv-col">
								<i class="fa fa-laptop"></i>
								<h3>英译中</h3>
								<p>见词知意，英文阅读无障碍</p>
							</div>
						</router-link>
						<router-link to="/person/word_ctoe" class="col-md-6"
							style="text-decoration: none;border: solid;border-width: 1px;">
							<div class="srv-col">
								<i class="fa fa-search"></i>
								<h3>中译英</h3>
								<p>颇具挑战的练习，但效果显著</p>
							</div>
						</router-link>

					</div>
				</div>
			</div>
			<!-- Service Start -->

			<!-- Portfolio Start -->
			<div class="portfolio" id="portfolio" style=" position: relative;padding-top: 70px;margin-top: 0px;">
				<div class="content-inner">
					<div class="content-header">
						<h2>喜爱读本</h2>
					</div>
					<div class="row">
						<div class="col-lg-12">

						</div>
					</div>
					<div class="row portfolio-container">
						<!-- <div class="col-lg-4 col-md-6 portfolio-item web-des" v-for="essay in list"> -->
						<router-link class="col-lg-4 col-md-6 portfolio-item web-des"
							:to="{path:'/person/essay',query: {id:essay.essayId}}" v-for="essay in list">
							<div class="portfolio-wrap">
								<figure>
									<img :src="essay.essayImage" class="img-fluid" alt="">
									<a href="../../assets/640.jfif" data-lightbox="portfolio" data-title="Project Name"
										class="link-preview" title="Preview"><i class="fa fa-eye"></i></a>
									<a href="#" class="link-details" title="More Details"><i class="fa fa-link"></i></a>
									<a class="portfolio-title" href="#">{{essay.essayTitle}}
										<span>{{essay.essayAuthor}}</span></a>
								</figure>
							</div>
						</router-link>
						<center>
							<el-pagination background style="margin-top: 20px;" @size-change="handleSizeChange"
								@current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
								layout=" prev, pager, next,jumper" :total="total">
							</el-pagination>
						</center>
					</div>
				</div>
			</div>
			<!-- Portfolio Start -->



			<div class="portfolio" id="myPost" style=" position: relative;padding-top: 70px;margin-top: 0px;">
				<div class="content-inner">
					<div class="content-header">
						<h2>我的帖子</h2>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<div style="border: 1px solid black;margin-bottom: 5px;" class="personPost"
								v-for="(value,index) in post" @click="postText(value.postId)" v-show="index<3">
								<div style="font-size: 20px;">{{value.postTitle}}</div>

								<div style="display: flex;flex-direction: row-reverse;margin-right: 20px;">
									<div style="margin-right: 30px;height: 73px;line-height: 73px;">
										<router-link class="nav-item" to="/person" style="margin-top: 10px;">
											<el-avatar class="photo" :src="`${userImage[index]+'?'+now}`" />
										</router-link>
									</div>
									<div style="margin-right: 50px;height: 73px;line-height: 73px;">{{userName[index]}}
									</div>
									<div style="margin-right: 50px;height: 73px;line-height: 73px;">
										<p style="margin-left:40px;height: 73px;line-height: 73px;">{{value.postTime}}
										</p>
									</div>
								</div>

							</div>
							<router-link to="/person_post"
								style="display: flex;flex-direction: row-reverse;margin-top: 10px;text-decoration: none;">
								更多>>
							</router-link>
						</div>
					</div>

				</div>
			</div>



			<!-- Review Start -->
			<div class="review" id="review" style=" position: relative;padding-top: 60px;margin-top: 0px;">
				<div class="content-inner">
					<div class="content-header">
						<h2>关于</h2>
					</div>
					<div class="row align-items-center review-slider">
						<div class="col-md-12">
							<div class="review-slider-item">
								<div class="review-text">
									<p>
										本系统的开发是针对那些已经通过了 CET6，并且还在备考 CET6 的考生，着重
										从 CET6 练习方面入手，分步骤、题型去逐个击破难点、考点，让考生事半功倍，再
										考试前难熟练的掌握 CET6 的各个题型的答题技巧以及英语能力。
									</p>
								</div>
								<div class="review-img">
									<img :src="`${img+'?'+now}`" alt="Image">
									<div class="review-name">
										<h3>温少豪 1940706276</h3>
										<p>学生</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>


		</div>
	</div>

	<!-- Back to Top -->
	<a href="#" class="back-to-top"><i class="fa fa-angle-double-up"></i></a>
</template>


s



<script>
	import {
		ref,
		toRefs,
		reactive
	} from 'vue'
	// import '../../assets/css/style-p.css'
	// import '../../assets/js/main-p.js'
	import VueCookies from 'vue-cookies';
	import Header from '../../components/header.vue'
	import axios from 'axios'

	import {
		watch
	} from 'vue'


	export default {

		data() {
			return {
				list: [],
				img: '',
				ids: '',
				img: '',
				announcement: [],
				post: [],
				userName: [],
				userImage: [],
				currentPage: 1,
				pageSize: 3,
				total: 20
			}
		},

		components: {
			Header

		},
		methods: {
			getAllPost() {
				axios({
					method: "post",
					url: "http://localhost:8090/post/getPersonPost",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						userId: VueCookies.get("user").userId
					}
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
							data: {
								userId: res.data.data[i].postUser
							}
						}).then((res1) => {
							// console.log(res1.data.data)
							this.userImage.push(res1.data.data.userImage)
							this.userName.push(res1.data.data.userName)
						})
					}



				});
			},
			postText(postId) {
				this.$router.push({
					path: '/post_text',
					query: {
						postId: postId
					}
				})
			},
			getEssayList() {
				axios({
					method: "post",
					url: "http://localhost:8090/myEssay/",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						userId: VueCookies.get("user").userId
					}
				}).then((res) => {
					this.ids = res.data.data
					this.total=res.data.data.length
					console.log(this.ids)
					for (let i = 0; i < this.ids.length; i++) {
						axios({
							method: "get",
							url: "http://localhost:8090/essay/getEssay/" + this.ids[i],
							headers: {
								"Content-Type": "multipart/form-data"
							},
							withCredentials: true,

						}).then((res) => {
							console.log(res.data.data)
							this.list.push(res.data.data)

							// this.form.author=res.data.data[1].essayAuthor
							// console.log(this.form.author);
							// this.form.title=res.data.data[1].essayTitle
							// this.form.id=res.data.data[1].essayId
							// this.form.image=res.data.data[1].essayImage
							// this.form.text=res.data.data[1].essayText
						});
					}




					// this.form.author=res.data.data[1].essayAuthor
					// console.log(this.form.author);
					// this.form.title=res.data.data[1].essayTitle
					// this.form.id=res.data.data[1].essayId
					// this.form.image=res.data.data[1].essayImage
					// this.form.text=res.data.data[1].essayText
				});

			},
			handleSizeChange: function(size) {
			  this.pagesize = size;
			   this.getEssayList();          
			   console.log(this.pagesize) //每页下拉显示数据
			},
			handleCurrentChange: function(currentPage) {
			  this.currentPage = currentPage;
			   console.log(this.currentPage) //点击第几页
			   this.getEssayList();
			
			},
		},
		// created() {
		// 	this.getEssayList()
		// 	console.log(VueCookies.get('user').userImage)
		// 	this.img=VueCookies.get('user').userImage
		// },
		mounted() {
			this.getAllPost()
			this.getEssayList()
			console.log(VueCookies.get('user').userImage)
			this.img = VueCookies.get('user').userImage
			// document.getElementById("person").className="page-scroll active";
		},

		computed: {
			now() {
				return Date.now();
			}
		}

	}
</script>

<style scoped src='../../assets/css/style-p.css'>
	div.content ::after {
		height: 0;
	}

	div {
		text-decoration: none;
	}
</style>
