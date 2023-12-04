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
					<div>
						<Toolbar style="border: 1px solid black;" :editor="editorRef"
							:defaultConfig="toolbarConfig" :mode="mode" />
						<Editor style="height: 500px; overflow-y: hidden;border: 1px solid black;" v-model="post.postText"
							:defaultConfig="editorConfig" :mode="mode" @onCreated="handleCreated" />


						<!-- 	<MdEditor v-model="post.postText"
						 toolbarsExclude="['link', 'mermaid', 'katex', 'github']"
						 
						     @onUploadImg="onUploadImg"
						     @onSave="codeSave"
						 :sanitize="sanitize" /> -->
					</div>
				</div>

			</el-form-item>



			<el-form-item style="width: 100%;">

				<!-- <input hidden type="submit" value="保存" > -->
				<el-button style="height: 50px;width: 100px;" type="primary" @click="publish()">发布</el-button>
				<el-button style="height: 50px;width: 100px;" @click="onCancel">取消</el-button>
			</el-form-item>

		</el-form>
		
		<el-dialog
		   v-model="centerDialogVisible"
		   title="发布"
		   width="30%"
		   align-center
		 >
		   <span>确认发布帖子？</span>
		   <template #footer>
		     <span class="dialog-footer">
		       <el-button @click="centerDialogVisible = false">取消</el-button>
		       <el-button type="primary" @click="onSubmit()">
		         确认
		       </el-button>
		     </span>
		   </template>
		 </el-dialog>
	</div>
</template>


<script>
	import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { ElMessage } from 'element-plus'
	import {
		onBeforeUnmount,
		ref,
		shallowRef,
		onMounted
	} from 'vue'
	import {
		Editor,
		Toolbar
	} from '@wangeditor/editor-for-vue'




	import axios from 'axios'
	import Header from '../../../components/header.vue'
	import VueCookies from 'vue-cookies';





	export default {

		setup() {
			// 编辑器实例，必须用 shallowRef
			const editorRef = shallowRef()

			// 内容 HTML
			const valueHtml = ref('<p>hello</p>')

			// 模拟 ajax 异步获取内容
			onMounted(() => {
				setTimeout(() => {
					valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
				}, 1500)
			})

			const toolbarConfig = {}
			const editorConfig = {
				placeholder: '请输入内容...'
			}

			// 组件销毁时，也及时销毁编辑器
			onBeforeUnmount(() => {
				const editor = editorRef.value
				if (editor == null) return
				editor.destroy()
			})

			const handleCreated = (editor) => {
				editorRef.value = editor // 记录 editor 实例，重要！
			}

			return {
				editorRef,
				valueHtml,
				mode: 'default', // 或 'simple'
				toolbarConfig,
				editorConfig,
				handleCreated
			};
		},

		data() {
			return {
centerDialogVisible:false,
				post: {
					postId: '',
					postTitle: '',
					postText: '',
					postUser: '',
					

				}
			}
		},
		components: {
			Editor,
			Toolbar,
			Header
		},

		methods: {
			onSubmit() {

				this.post.postUser = VueCookies.get("user").userId
				console.log(this.post)
				axios({
					method: "post",
					url: "http://localhost:8090/post/add",

					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: this.post
				}).then((res) => {
					ElMessage({
						message: '发布成功',
						    type: 'success',
					})
					// console.log(this.post)



				});
				this.$router.go(-1);
			},

			onCancel() {

				this.$router.go(-1);
			},
			publish(){
				console.log(1)
				this.centerDialogVisible=true
			}
		},
		created() {

		},
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
