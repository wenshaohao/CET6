<template>
	<Header></Header>

	<el-form :model="form" label-width="120px" style="margin-top: 80px;padding: 0 500px;">
		<center>
			<div class="select">
				<el-avatar @mouseout="updateImage1" @mouseover="updateImage" id="photo" class="photo"
					v-bind:src="`${form.userImage+'?'+now}`" style="height: 300px;width: 300px;margin-bottom: 20px;" />
				<el-avatar @mouseout="updateImage1" @mouseover="updateImage" id="photo1" class="photo"
					v-bind:src="`${form.userImage}`" style="height: 300px;width: 300px;margin-bottom: 20px;" />
				<input type="file" id="filed" hidden="" @change="filePreview">
				<p @click="selectImg()">
				<div id="updateImage" class="updateImage" style="">点击修改</div>
				</p>
			</div>




		</center>
		<el-form-item label="用户名:">
			<el-input v-model="form.userName" />
		</el-form-item>
		<el-form-item label="邮箱:">
			<el-input v-model="userEmain1" style="width: 300px;" />
			<el-select v-model="userEmain2" style="margin-left: 50px;">
				<el-option label="@qq.com" value="@qq.com" />
				<el-option label="@163.com" value="@163.com" />
			</el-select>
		</el-form-item>

		<el-form-item label="电话:">
			<el-input v-model="form.userPhone" />
		</el-form-item>
		<el-form-item label="密码">
			<el-input type="password" v-model="form.userPassword" />
		</el-form-item>
		<el-form-item label="确认密码">
			<el-input type="password" v-model="surePassword" />
			<div style="height: 20px;width: 500px;margin-top: 10px;color: red;">{{tip}}</div>
		</el-form-item>

		<el-form-item>

			<el-button type="primary" style="width: 200px;height: 50px;" @click="centerDialogVisible = true">Create</el-button>
			<el-button style="width: 200px;height: 50px;" @click="back()">Cancel</el-button>

		</el-form-item>

	</el-form>
	
	
	
	
	<el-dialog
	  v-model="centerDialogVisible"
	  title="修改"
	  width="30%"
	  align-center
	>
	  <span>确认修改？</span>
	  <template #footer>
	    <span class="dialog-footer">
	      <el-button @click="centerDialogVisible = false">取消</el-button>
	      <el-button type="primary" @click="onsubmit()">
	        确定
	      </el-button>
	    </span>
	  </template>
	</el-dialog>
	
	
	
</template>



<script>
	import Header from '../../components/header.vue'
	import VueCookies from 'vue-cookies'
	import { ElMessage } from 'element-plus'
	import axios from 'axios'
	export default {
		inject: ['reload'],
		data() {
			return {
				centerDialogVisible:false,
				file: '',
				tip: '',
				userEmain1: '',
				userEmain2: '@qq.com',
				surePassword: '',
				form: {
					userId: '',
					userName: '',
					userNumber: '',
					userPassword: '',
					userEmail: '',
					userPhone: '',
					userImage: '',
				},

			}
		},

		components: {
			Header

		},
		methods: {
			back() {
				this.$router.push("/person");
			},
			selectImg: function() {
				document.getElementById('filed').click()
			},
			filePreview(e) {
				let _this = this
				var files = e.target.files[0]
				if (!e || !window.FileReader) return // 判断是否支持FileReader
				let reader = new FileReader()
				reader.readAsDataURL(files) // 文件转换
				reader.onloadend = function() {
					_this.form.userImage = this.result
					_this.textHide = false;
				}
				this.file = event.target.files[0];
				document.getElementById("photo").style.display = "none";
				document.getElementById("photo1").style.display = "block";
				console.log(this.file)
				// console.log(this.file.userImage)
			},
			updateImage() {
				document.getElementById("updateImage").style.display = "block";
			},
			updateImage1() {
				document.getElementById("updateImage").style.display = "none";
			},
			onsubmit() {
				if (this.form.userName != "") {
					if (this.userEmain1 != "") {
						if (this.form.userPhone != "") {
							if (this.form.userPassword != "") {
								if (this.surePassword != "") {
									if (this.form.userPassword == this.surePassword) {
										
										
											this.form.userId = VueCookies.get("user").userId
											this.form.userNumber = VueCookies.get("user").userNumber
											this.form.userEmail = this.userEmain1 + this.userEmain2
											this.form.userImage = "http://localhost:8090/image/" + this.form.userNumber +
												".jpg"
											// console.log(this.form.userImage)
											// console.log(this.form)
											axios({
												method: "post",
												url: "http://localhost:8090/user/update",
												headers: {
													"Content-Type": "application/json"
												},
												withCredentials: true,
												data: this.form
											}).then((res) => {
												// console.log(res)
											});
											let formData = new FormData();
											formData.append('file', this.file);
											formData.append('number', this.form.userNumber);
											// console.log(formData)
											axios({
												method: "post",
												url: "http://localhost:8090/user/upload",
												headers: {
													"Content-Type": "multipart/form-data"
												},
												withCredentials: true,
												data: formData
											}).then((res) => {
												// console.log(res);
												// console.log(this.form)
												VueCookies.set("user", this.form, 3600)
												ElMessage({
												    message: res.data.message,
												    type: 'success',
												  })
												// console.log(VueCookies.get("user"))
												
											
												this.$router.go(-1)
											});
										
								
									} else {
										this.tip = "密码不相同"
										this.centerDialogVisible = false
									}
								} else {
									this.tip = "确认密码不能为空"
									this.centerDialogVisible = false
								}
							} else {
								this.tip = "密码不能为空"
								this.centerDialogVisible = false
							}
						} else {
							this.tip = "电话不能为空"
							this.centerDialogVisible = false
						}
					} else {
						this.tip = "邮箱不能为空"
						this.centerDialogVisible = false
					}
				} else {
					this.tip = "用户名不能为空"
					this.centerDialogVisible = false
				}
			}
		},

		mounted() {
document.getElementById("photo1").style.display = "none";



		},
		created() {
			
			this.form.userName = VueCookies.get("user").userName
			this.form.userNumber = VueCookies.get("user").userNumber
			this.form.userPhone = VueCookies.get("user").userPhone
			this.form.userImage = VueCookies.get("user").userImage
			this.userEmain1 = VueCookies.get("user").userEmail.split('@')[0]
			// console.log(VueCookies.get("user").userEmail.split('@'))
		},
		computed:{
		     now(){
		         return Date.now();
		     }
		  }
	}
</script>

<style>
	.updateImage {
		position: absolute;
		top: 7.4%;
		left: 43%;
		height: 300px;
		width: 300px;

		background-color: rgba(157, 153, 155, 0.5);
		line-height: 300px;
		font-size: 30px;
		border-radius: 50%;
		display: none;
		color: #FFF;
	}
</style>
