<template>
	<div class="preloader d-none">
		<div class="loader">
			<div class="ytp-spinner">
				<div class="ytp-spinner-container">
					<div class="ytp-spinner-rotator">
						<div class="ytp-spinner-left">
							<div class="ytp-spinner-circle"></div>
						</div>
						<div class="ytp-spinner-right">
							<div class="ytp-spinner-circle"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- preloader end -->

	<!-- ========================= header start ========================= -->
	<header class="header navbar-area" style="height: 60px;padding-bottom: 50px;">

		<div class="container">
			<div class="row" style="height: 50px;">
				<div class="col-lg-12" style="height: 50px;">
					<nav class="navbar navbar-expand-lg" style="height: 50px;">
						<a class="navbar-brand" href="" style="height: 50px;">
							<img src="../assets/picture/logo3.jpg" style="height: 50px;width: 70px;" alt="Logo">
						</a>


						<div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
							<ul id="nav" class="navbar-nav ml-auto">
								<router-link class="nav-item" to="/index">
									<a class="page-scroll" href="#" style="text-decoration: none; height: 50px;"
										id="index" @click="junp(1)">主页</a>
								</router-link>
								<router-link class="nav-item" to="/information">
									<a class="page-scroll" style="text-decoration: none;height: 50px;"
										id="report" @click="junp(6)">论坛</a>
								</router-link>
								<router-link class="nav-item" to="/special_exercises">
									<a class="page-scroll" style="text-decoration: none;height: 50px;"
										id="specialExercises" @click="junp(2)">专项练习</a>
								</router-link>

								<router-link class="nav-item" to="/word">
									<a class="page-scroll" href="#service" style="text-decoration: none;height: 50px;"
										id="word" @click="junp(3)">单词练习</a>
								</router-link>
								<router-link class="nav-item" to="/examination">
									<a class="page-scroll" href="#roadmap" style="text-decoration: none;height: 50px;"
										id="examination" @click="junp(4)">历年真题</a>
								</router-link>
								<router-link class="nav-item" to="/essay">
									<a class="page-scroll" href="#team" style="text-decoration: none;height: 50px;"
										id="reading" @click="junp(5)">精选读本</a>
								</router-link>
						
								<!-- 					<router-link class="nav-item" to="/person">
									<a class="page-scroll"  style="text-decoration: none;height: 50px;" id="person" @click="junp(6)">个人中心</a>
								</router-link> -->

								<el-popover :width="150"
									popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
									<template #reference>
										<router-link class="nav-item" to="/person" style="margin-top: 10px;">
											<el-avatar class="photo" :src="`${img+'?'+now}`" />
										</router-link>
									</template>
									<template #default>
										<div class="demo-rich-conent"
											style="display: flex; gap: 16px; flex-direction: column">
											<center>
												<el-avatar class="photo" :src="`${img+'?'+now}`"
													style="height: 100px;width: 100px;" />
												<div style="font-size: 30px;margin-bottom: 20px;">{{username}}</div>
												<div class="change" style="letter-spacing:5px;font-size: 20px;"
													@click="change()">修改信息</div>
												<div class="outLogin" style="letter-spacing:5px;font-size: 20px;"
													@click="centerDialogVisible = true">退出登录</div>
											</center>



										</div>
									</template>
								</el-popover>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	<el-dialog
	   v-model="centerDialogVisible"
	   title="删除"
	   width="30%"
	   align-center
	 >
	   <span>确认退出登录？</span>
	   <template #footer>
	     <span class="dialog-footer">
	       <el-button @click="centerDialogVisible = false">取消</el-button>
	       <el-button type="primary" @click="outLogin()">
	         确认
	       </el-button>
	     </span>
	   </template>
	 </el-dialog>
	</header>
</template>


<script  setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
const centerDialogVisible = ref(false)


const 	outLogin=function() {
					VueCookies.remove("user")
					console.log(VueCookies.get("user"))
					router.push("/")
				}

			
</script>

<script>
	import {
		UserFilled
	} from '@element-plus/icons-vue'
	import VueCookies from 'vue-cookies';
	import '../assets/js/bootstrap.bundle-5.0.0.alpha-1-min.js';
	import '../assets/css/main.css';
	// import router from '../router/index.js';

	export default {
		data() {
			return {
				img: ',',
				username: '',
			}
		},
		methods: {
		
			change() {
				this.$router.push("/person_update")
			},
			junp: function(num) {
				console.log(num)
				var a = new Array();
				var obj = document.getElementsByClassName("page-scroll");
				for (var i = 0; i < obj.length; i++) {
					// console.log(obj[i].className);
					obj[i].className = "page-scroll"
				}

			}
		},
		mounted() {
			this.img = VueCookies.get("user").userImage
			this.username = VueCookies.get("user").userName
		},
		computed:{
		     now(){
		         return Date.now();
		     }
		  }
	}
</script>



<style scoped>
	.nav-item {
		text-decoration: none;
	}

	.demo-type {
		display: flex;
	}

	.demo-type>div {
		flex: 1;
		text-align: center;
	}

	.demo-type>div:not(:last-child) {
		border-right: 1px solid var(--el-border-color);
	}

	.change:hover {
		color: royalblue;
	}

	.outLogin:hover {
		color: royalblue;
	}
</style>
