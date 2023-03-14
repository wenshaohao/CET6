<template>
	<Header></Header>

	<section id="work" class="work-area pt-125 pb-130" style="margin-top: 0px;padding-top: 50px;">
		<div class="container">

			<div class="row" style="float: left;width: 1300px;padding-left: 10px;margin-top: 20px;">

				<!-- <div class="col-lg-4 col-md-6 col-sm-6" style="margin-right: 20px;width: 300px;"> -->
				<router-link class="col-lg-4 col-md-6 col-sm-6" style="margin-right: 20px;width: 300px;"
					to="/word/word_text">
					<div class="single-work text-center mt-30" style="height: 300px;width: 300px;">
						<div class="work-image">
							<img src="../../assets/picture/work/w-4.jpg" alt="work"
								style="height: 300px; object-fit: contain;">
						</div>
						<div class="work-overlay">
							<div class="work-content">
								<h3 class="work-title">单词背诵</h3>
								<!-- 	<ul>
									<li><a class="image-popup" href="../../assets/picture/work/w-4.jpg"><i
												class="lni-plus"></i></a></li>
									<li><a href="#"><i class="lni-link"></i></a></li>
								</ul> -->
							</div>
						</div>
					</div>
				</router-link>
				<!-- 	</div> -->

				<router-link class="col-lg-4 col-md-6 col-sm-6" style="margin-right: 20px;width: 300px;"
					to="/word/word_etoc">
					<div class="single-work text-center mt-30" style="height: 300px;width: 300px;">
						<div class="work-image">
							<img src="../../assets/picture/work/w-5.jpg" alt="work"
								style="height: 300px; object-fit: contain;">
						</div>
						<div class="work-overlay">
							<div class="work-content">
								<h3 class="work-title">英译中</h3>
								<ul style="margin: 20px 0;padding: 20px 0;color: white">
									<li>chinese</li>
									<li>=></li>
									<li>中文</li>
								</ul>
							</div>
						</div>
					</div>
				</router-link>

			

				<router-link class="col-lg-4 col-md-6 col-sm-6" style="margin-right: 20px;width: 300px;"
					to="/word/word_ctoe">
					<div class="single-work text-center mt-30" style="height: 300px;width: 300px;">
						<div class="work-image">
							<img src="../../assets/picture/work/w-5.jpg" alt="work"
								style="height: 300px; object-fit: contain;">
						</div>
						<div class="work-overlay">
							<div class="work-content">
								<h3 class="work-title">中译英</h3>
							<ul style="margin: 20px 0;padding: 20px 0;color: white">
								<li>中文</li>
								<li>=></li>
								<li>chinese</li>
							</ul>
							</div>
						</div>
					</div>
				</router-link>

				
	
			</div>

		</div>
	</section>

</template>

<script>
	import Header from '../../components/header.vue'

	import '../../assets/js/bootstrap.bundle-5.0.0.alpha-1-min.js';
	import '../../assets/css/main.css';
	import '../../assets/css/style.css';

	export default {

		data() {

		},
		components: {
			Header
		},
		mounted() {

			document.getElementById("word").className = "page-scroll active";
		},
	}
</script>

<style scoped src='../../assets/css/style.css'></style>
