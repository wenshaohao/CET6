<template>

	<Header></Header>

	<section id=team class="team-section pt-120 pb-120" style="margin: 0;padding: 0;margin-top: 80px; ">
		<div class=container>



			<div class=row style="margin-top: 20px;">
				
					<router-link class="col-xl-3 col-lg-3 col-md-6" :to="{path:'/essay_text',query: {id:essay.essayId}}"  v-for="essay in list" :key="index">
						<div class="single-team text-center mb-120 wow fadeInUp" data-wow-delay=.2s>
							<div class="team-img mb-20"> <img :src="essay.essayImage" alt="">
								<div class=team-social-links>
									<p style="color: white;">{{essay.essayId}}</p>
								</div>
								<div class=team-info>
									<h5>《{{essay.essayTitle}}》</h5>
									<span>{{essay.essayAuthor}}</span>
								</div>
							</div>
						</div>
					</router-link>
				

				<!-- <div class="col-xl-3 col-lg-3 col-md-6" > -->

				<!-- </div> -->

				<!-- 				<router-link class="col-xl-3 col-lg-3 col-md-6" to="/essay_text">
					<div class="single-team text-center mb-120 wow fadeInUp" data-wow-delay=.2s>
						<div class="team-img mb-20"> <img src="../../assets/640.jfif" alt="">
							<div class=team-social-links>
								<p style="color: white;">“The Last Night of the World” is a tender, simple story. The first line alone is universally intriguing: “What would you do if you knew this was the last night of the world?”</p>
							</div>
							<div class=team-info>
								<h5>《世界的最后一晚》</h5>
								<span>Ray Bradbury</span>
							</div>
						</div>
					</div>
					</router-link>
				
				<router-link class="col-xl-3 col-lg-3 col-md-6" to="/essay_text">
					<div class="single-team text-center mb-120 wow fadeInUp" data-wow-delay=.2s>
						<div class="team-img mb-20"> <img src="../../assets/640.jfif" alt="">
							<div class=team-social-links>
								<p style="color: white;">“The Last Night of the World” is a tender, simple story. The first line alone is universally intriguing: “What would you do if you knew this was the last night of the world?”</p>
							</div>
							<div class=team-info>
								<h5>《世界的最后一晚》</h5>
								<span>Ray Bradbury</span>
							</div>
						</div>
					</div>
					</router-link>
				
				<router-link class="col-xl-3 col-lg-3 col-md-6" to="/essay_text">
					<div class="single-team text-center mb-120 wow fadeInUp" data-wow-delay=.2s>
						<div class="team-img mb-20"> <img src="../../assets/640.jfif" alt="">
							<div class=team-social-links>
								<p style="color: white;">“The Last Night of the World” is a tender, simple story. The first line alone is universally intriguing: “What would you do if you knew this was the last night of the world?”</p>
							</div>
							<div class=team-info>
								<h5>《世界的最后一晚》</h5>
								<span>Ray Bradbury</span>
							</div>
						</div>
					</div>
					</router-link> -->



			</div>

		</div>
	</section>

</template>

<script>
	import Header from '../../components/header.vue'
	import axios from 'axios'
	import '../../assets/js/bootstrap.bundle-5.0.0.alpha-1-min.js';
	import '../../assets/css/main.css';
	import '../../assets/css/style.css';
	import {
		List
	} from 'vant';

	export default {

		data() {
			return{
				list:'',
			}
			// form: {
			//   id:'',
			//   text:'',
			//   title: '',
			//   author: '',
			//   image: ''
			
			// }

		},
		components: {
			Header
		},
		methods: {
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
					
					// this.form.author=res.data.data[1].essayAuthor
					// console.log(this.form.author);
					// this.form.title=res.data.data[1].essayTitle
					// this.form.id=res.data.data[1].essayId
					// this.form.image=res.data.data[1].essayImage
					// this.form.text=res.data.data[1].essayText
				});

			},
		},
		created() {
			this.getList()
		},
		mounted() {
			this.getList()
			document.getElementById("reading").className = "page-scroll active";
		}
	}
</script>

<style scoped>
	img {
		height: 200px;
		width: 250px;
	}
</style>
