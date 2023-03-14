<template>
	<Header></Header>
	<center>
		<div class="title">发布帖子</div>
	</center>
	<div class="app-container" style="margin-top: 0px;">
		<el-form ref="form" :model="form" label-width="120px">
			<el-form-item label="标题">
				<el-input v-model="post.postTitle" />
			</el-form-item>
			<el-form-item label="内容">
				<div style="width: 100%;">
					<QuillEditor  ref="myQuillEditor" style="height: 500px;width: 100%;" >123</QuillEditor>
				</div>

			</el-form-item>



			<el-form-item style="width: 100%;">

				<!-- <input hidden type="submit" value="保存" > -->
				<el-button style="height: 50px;width: 100px;" type="primary" @click="onSubmit()">发布</el-button>
				<el-button style="height: 50px;width: 100px;" @click="onCancel">取消</el-button>
			</el-form-item>

		</el-form>
	</div>
</template>


<script setup>
	import {
		ref
	} from 'vue'
	const textarea = ref('')
</script>

<script>
	import axios from 'axios'
	import Header from '../../../components/header.vue'
	import VueCookies from 'vue-cookies';

	import {
		QuillEditor
	} from '@vueup/vue-quill'
	import '@vueup/vue-quill/dist/vue-quill.snow.css';

	export default {
		data() {
			return {
myQuillEditor:'',
				post: {
					postId: '',
					postTitle: '',
					postText: '',
					postUser: '',

				}
			}
		},
		components: {
			QuillEditor,
			Header
		},
		created() {

		},
		methods: {
			onSubmit() {
				this.post.postUser=VueCookies.get("user").userId
				axios({
					method: "post",
					url: "http://localhost:8090/post/add",
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: this.post
				}).then((res) => {
					
					console.log(this.post)
					


				});
				this.$router.go(-1);
			},

			onCancel() {

				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.line {
		text-align: center;
	}

	.inputfile {
		opacity: 0;
	}

	.app-container {
		margin: 0 400px;
	}

	.title {

		margin: 0 auto;
		padding-top: 70px;
		font-size: 30px;
		left: 0;
		right: 0;

	}
</style>
