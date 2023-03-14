<template>\
	<div class="conent">

		<center>
			<div class="title">
				<div><img id="img" src="../../assets/picture/logo.jpg" alt=""></div>
				<div class="text" id="text">CET6备考系统</div>
			</div>
		</center>

		<div class="main">

			<div class="dowebok" id="dowebok">
				<div class="form-container sign-up-container">
					<form action="user/addUser">
						<h1>注册</h1>

						<span>请输入您的信息</span>
						<input type="email" id="E-mail" name="E-mail" placeholder="邮箱" v-model="form.userEmail">
						<input type="text" id="Username" name="Username" placeholder="用户名" v-model="form.userName">
						<input type="text" id="Password" name="Password" placeholder="密码" v-model="form.userPassword">
						<input type="password" id="Password2" name="password2" placeholder="确认密码"
							v-model="surePassword">
						<div style="flex-direction: row;display: flex;">
							<input style="width: 152px;" type="text" id="Captcha" name="Captcha" placeholder="验证码" v-model="code1">
							<!-- 	<button
								style="margin-left: 12px; width: 120px;height:39.55px ;margin-top: 9px;text-align: center;padding: 0 0;border-radius: 0 0;"
								>发送验证码</button> -->
							<input @click="sendMail()" :disabled="canGet"
								style="margin-left: 12px; width: 130px;background-color:#ff493d ;color: white;"
								type="button" id="send" name="send" v-model="btnText">
						</div>
						<div style="height: 100px;width: 300px;">{{tip}}</div>
						<input type="button" value="注册"  style="margin-left: 12px; width: 130px;background-color:#ff493d ;color: white;" @click="regist()"/>
					</form>
				</div>
				<div class="form-container sign-in-container">
					<form>
						<h1>登录</h1>

						<span>或使用您的帐号</span>
						<!-- <input type="text" placeholder="身份证号"> -->
						<input type="text" placeholder="账号" v-model="userNumber">
						<input type="password" placeholder="密码" v-model="userPassword">
						<el-checkbox style="display: flex;flex-direction: row;" label="24小时免登录" name="type"
							v-model="checkBox" />
						<a href="###">忘记密码？</a>
						<input type="button" class="primary" value="登录" @click="login()" />
					</form>
				</div>
				<div class="overlay-container">
					<div class="overlay">
						<div class="overlay-panel overlay-left">
							<h1>已有帐号？</h1>
							<p>请使用您的帐号进行登录</p>
							<button class="ghost" id="signIn" @click="disactive()">登录</button>
						</div>
						<div class="overlay-panel overlay-right">
							<h1>没有帐号？</h1>
							<p>立即注册加入我们，和我们一起开始旅程吧</p>
							<button class="ghost" id="signUp" @click="active()">注册</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>




</template>

<script>
	import axios from "axios";
	import VueCookies from 'vue-cookies';

	// import '../../assets/css/animate.css';
	import logo from '../../assets/picture/logo.jpg';
	import logo1 from '../../assets/picture/logo1.jpg';



	import router from '../../router'
	import {
		useRoute
	} from 'vue-router'


	export default {

		data() {
			return {
				tip:'',
				canGet: false,
				surePassword: '',
				checkBox: '',
				btnText: '发送验证码',
				userNumber: '',
				time: 0,
				timer: null,
				code: '',
				code1:'',
				userPassword: '',
				form: {
					userName: '',
					userPassword: '',
					userEmail: '',
				}
			}

		},
		methods: {
			timer1() { //验证码60s内不能继续点击的函数
				if (this.time > 0) {
					this.time--;
					this.btnText = this.time + "s后重新获取"
					this.timer = setTimeout(this.timer1, 1000)
				} else {
					this.time = 0;
					this.btnText = "获取验证码";
					this.canGet = false;
					clearTimeout(this.timer);
				}
			},

			login: function() {
				console.log(this.userNumber);
				console.log(this.userPassword);
				axios({
					method: "post",
					url: "http://localhost:8090/user/login",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: {
						userNumber: this.userNumber,
						userPassword: this.userPassword
					}
				}).then((res) => {
					console.log(res.data.data)
					if (this.checkBox == true) {
						if (res.data.data != null) {
							VueCookies.set("user", res.data.data, 86400)
							console.log(VueCookies.get("user"))
							// this.$router.push(path:'/index',query:{userId:res.data.data.userId})
							this.$router.push({
								path: '/index',
								query: {
									userId: res.data.data.userId,

								}
							})
						} else {
							confirm("登录失败，请检查是否输入正确")
						}
					} else {
						if (res.data.data != null) {
							VueCookies.set("user", res.data.data, 3600)
							console.log(VueCookies.get("user"))
							// this.$router.push(path:'/index',query:{userId:res.data.data.userId})
							this.$router.push({
								path: '/index',
								query: {
									userId: res.data.data.userId,

								}
							})
						} else {
							confirm("登录失败，请检查是否输入正确")
						}
					}


				});
			},
			sendMail() {
				if (this.form.userEmail != "") {
					var a = confirm("确认发送？");
					if (a) {
						axios({
							method: "post",
							url: "http://localhost:8090/user/sendMail",
							headers: {
								"Content-Type": "application/json"
							},
							withCredentials: true,
							data: {
								userEmail: this.form.userEmail,

							}
						}).then((res) => {
							// console.log(res.data)
							this.code = res.data.data
							this.canGet = true; //禁用按钮，防止多次触发
							this.time = 60; //60秒后能继续按按钮
							this.timer1();
						});

					}

				} else {
					console.log("邮件不能为空")
				}
			},
			regist() {
				console.log(12112)
				if (this.form.userEmail != "") {
					if (this.form.userName != "") {
						if (this.form.userPassword != "") {
							if (this.form.userPassword == this.surePassword) {
								console.log(this.code1)
								console.log(this.code)
								if (this.code1 == this.code) {
									axios({
										method: "post",
										url: "http://localhost:8090/user/regist",
										headers: {
											"Content-Type": "application/json"
										},
										withCredentials: true,
										data: {
											userEmail: this.form.userEmail,
											userName:this.form.userName,
											userPassword:this.form.userPassword

										}
									}).then((res) => {
										console.log(res.data.data)
										this.code = res.data.data
										console.log(this.code)
										this.$router.go(0)
										// this.canGet = true; //禁用按钮，防止多次触发
										// this.time = 60; //60秒后能继续按按钮
										// this.timer1();
									});
								} else {
									this.tip = "验证码错误"
								}
							} else {
								this.tip = "密码不一致"
							}
						} else {
							this.tip = "密码不能为空"
						}
					} else {
						this.tip = "用户名不能为空"
					}
				} else {
					this.tip = "邮件不能为空"
				}
			},

			active: function() {
				let signUp = document.getElementById('signUp');
				let signIn = document.getElementById('signIn');
				let dowebok = document.getElementById('dowebok');
				let text = document.getElementById('text');
				let img = document.getElementById('img');
				img.src = logo1;
				text.style.background = "#ff493d";
				dowebok.classList.add('right-panel-active');

				// console.log(123)

			},
			disactive: function() {
				let signUp = document.getElementById('signUp');
				let signIn = document.getElementById('signIn');
				let dowebok = document.getElementById('dowebok');
				let text = document.getElementById('text');
				let img = document.getElementById('img');
				img.src = logo;
				text.style.background = "#ff445b";
				dowebok.classList.remove('right-panel-active');
				console.log(456)

			}
		}
	}
</script>

<style scoped>
	@import '../../assets/css/login.css';

	.content {
		position: absolute;

		/* 		left: 0;
		right: 0;
		top: 0;
		bottom: 0; */

	}

	.title {
		width: 768px;
		height: 100px;
		text-align: center;
		box-shadow: 0 0 10px rgba(0, 0, 0, .25);
		display: flex;
	}

	.text {

		height: 100px;
		line-height: 100px;
		font-size: 40px;
		width: 100%;
		background-color: #ff445b;
		padding-right: 130px;
		color: #ffffff;
		box-shadow: 0 0 10px rgba(0, 0, 0, .25);
	}

	.main {
		margin: 0 0;
		padding: 0 0;
		/* height: 969px; */
		display: flex;
		justify-content: center;
		align-items: center;

	}

	img {
		height: 100px;
	}
</style>
