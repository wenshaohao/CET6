<template>
	
	<section id=team class="team-section pt-120 pb-120" style="margin-top: 50px;padding:0; ">
		<div class=container>
	
			<div class=row>
				<div class="col-xl-7 col-lg-8 col-md-10 mx-auto" style="width: 1500px;">
					<div class="section-title text-center mb-55">
						<h2 class="mb-20 wow fadeInDown" data-wow-delay=.2s style="font-size: 35px;">
							<div style="float: left;margin-left: 20px;">精选读本</div>
							<router-link style="float: right;font-size: 25px;padding-right: 35px;text-decoration: none;" to="/essay">
							<div >更多题型>></div>
							</router-link>
						</h2>
					</div>
				</div>
			</div>
	
			<div class=row  style="margin-top: 20px;">
	
				<router-link class="col-xl-3 col-lg-3 col-md-6" :to="{path:'/essay_text',query: {id:essay.essayId}}" v-for="(essay,index) in list" v-show="index<4">
					<div class="single-team text-center mb-120 wow fadeInUp" data-wow-delay=.2s>
						<div class="team-img mb-20"> <img :src="essay.essayImage" alt="">
							<div class=team-social-links>
								<p style="color: white;">“The Last Night of the World” is a tender, simple story. The first line alone is universally intriguing: “What would you do if you knew this was the last night of the world?”</p>
							</div>
							<div class=team-info>
								<h5>《{{essay.essayTitle}}》</h5>
								<span>{{essay.essayAuthor}}</span>
							</div>
						</div>
					</div>
					</router-link>
	

	
			</div>
	
		</div>
	</section>
	
</template>

<script>
	
	import '../assets/js/bootstrap.bundle-5.0.0.alpha-1-min.js';
	import '../assets/css/main.css';
	import axios from 'axios'
	
	export default{
		data() {
			return{
				list:'',
			}
		},
		methods:{
			getList() {
				axios({
					method: "get",
					url: "http://localhost:8090/essay/",
					headers: {
						"Content-Type": "multipart/form-data"
					},
					withCredentials: true,
			
				}).then((res) => {
					this.list = res.data.data
					// console.log(this.list)
					// this.form.author=res.data.data[1].essayAuthor
					// // console.log(this.form.author);
					// this.form.title=res.data.data[1].essayTitle
					// this.form.id=res.data.data[1].essayId
					// this.form.image=res.data.data[1].essayImage
					// this.form.text=res.data.data[1].essayText
				});
			
			},
		},
		created() {
			// this.getList()
		},
		mounted() {
			this.getList()
			
		}
	}
	
</script>

<style scoped>
img{
		height: 200px;
		width: 250px;
	}
</style>