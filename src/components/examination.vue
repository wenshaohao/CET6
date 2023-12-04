<template>
	<!-- 	<div>
		
		<div style="display: flex;flex-direction: row;">
			<div class="a" style="box-shadow: 5px 5px 5px #989898;height: 395px;width: 280px;margin: 0 auto;margin-right: 20px;border: 0.1px solid #b1b1b1;">
					<img src="https://zhenti-res.youshaohua.com/images/read/cet6/2021-12/01/thumbnail_moz.jpg" alt="">
			</div>
			<div class="a" style="box-shadow:5px 5px 5px #989898;height: 395px;width: 280px;background-color: aqua;margin: 0 auto;margin-right: 20px;">
			
			</div>
			<div class="a" style="box-shadow:5px 5px 5px #989898;height: 395px;width: 280px;background-color: aqua;margin: 0 auto;">
			
			</div>
		</div>
		</div> -->

	<section id="work" class="work-area pt-125 pb-130" style="margin-top: 50px;padding: 0;margin-bottom: 500px;">
		<div class="container">
			<div class=row>
				<div class="col-xl-7 col-lg-8 col-md-10 mx-auto" style="width: 1500px;">
					<div class="section-title text-center mb-55">
						<h2 class="mb-20 wow fadeInDown" data-wow-delay=.2s
							style="font-size: 35px;font-weight: normal;">
							<div style="float: left;margin-left: 20px;">历年真题</div>
							<router-link style="float: right;font-size: 25px;padding-right: 35px;text-decoration: none;"
								to="/examination">
								<div>更多题型>></div>
							</router-link>
	
						</h2>
					</div>
				</div>
			</div>
	
			<div class="row" style="float: left;width: ;padding-left: 10px;margin-top: 20px;">
				<div style="display: flex;flex-direction: row;">
					<router-link :to="{path:'/examination_text',query: {id:examination.examinationId}}" class="a"
						style="box-shadow: 5px 5px 5px #989898;height: 395px;width: 280px;margin: 0 auto;margin-right: 20px;border: 0.1px solid #b1b1b1;"
						v-for="(examination,index) in list" v-show="index<4" >
						<img  :src="`${examination.examinationCover+'?'+now}`"
							alt="">
					</router-link>
	
				</div>
	
			</div>
	
		</div>
	</section>




</template>

<script>
	import axios from 'axios'


	export default {

		data() {
			return {
				list: ''
			}
		},
		components: {

		},
		methods: {
			getList() {
				axios({
					method: "get",
					url: "http://localhost:8090/examination/",
					headers: {
						"Content-Type": "multipart/form-data"
					},
					withCredentials: true,

				}).then((res) => {
					this.list = res.data.data
					console.log(this.list[0].examinationCover)
					// this.form.author=res.data.data[1].essayAuthor
					// console.log(this.form.author);
					// this.form.title=res.data.data[1].essayTitle
					// this.form.id=res.data.data[1].essayId
					// this.form.image=res.data.data[1].essayImage
					// this.form.text=res.data.data[1].essayText
				});

			},
		},
		mounted() {
			this.getList()
			
		},
	}
</script>

<style scoped>
	.a:hover {
		transform: scale(1.1);
		transition: .5s;
	}

	.a {
		transform: scale(1);
		transition: .5s;
	}
</style>
