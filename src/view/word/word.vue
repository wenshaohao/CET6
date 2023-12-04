<template>
	<div >
		<Header></Header>
		
		<section id="work" class="work-area pt-125 pb-130" style="width: 100%;">
			<div class="container" style="margin: 0px; padding: 0px;width:100%;max-width:100%;">
		
				<div class="row" style="width: 100%; padding-left: 10px; margin: 0px auto; text-align: center;display:block">
		
					<!-- <div class="col-lg-4 col-md-6 col-sm-6" style="margin-right: 20px;width: 300px;"> -->
					<router-link class="col-lg-4 col-md-6 col-sm-6" style="margin-right: 20px;width:500px ;"
						to="/word/word_text">
						<div class="single-work text-center mt-30" style="height: 400px;width: 400px;border: 2px solid #e3deff;">
							<div class="work-image" style="height: 400px;width: 400px;">
								<img src="../../assets/picture/work/w-5.jpg" alt="work"
									style="height: 400px;width: 400px;">
							</div>
							<div class="work-overlay">
								<div class="work-content" style="font-size: 40px;">
									<h3 class="work-title" style="font-size: 40px;">单词背诵</h3>
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
		
					<router-link class="col-lg-4 col-md-6 col-sm-6" style="margin-right: 20px;width:500px ;"
						to="/word/word_etoc">
					<div class="single-work text-center mt-30" style="height: 400px;width: 400px;border: 2px solid #e3deff;">
						<div class="work-image" style="height: 400px;width: 400px;">
							<img src="../../assets/picture/work/w-5.jpg" alt="work"
								style="height: 400px;width: 400px;">
							</div>
							<div class="work-overlay">
								<div class="work-content" style="font-size: 40px;">
									<div class="work-title" style="font-size: 40px;">英译中</div>
									<ul style="margin: 20px 0;padding: 20px 0;color: white">
										<li>chinese</li>
										<li>=></li>
										<li>中文</li>
									</ul>
								</div>
							</div>
						</div>
					</router-link>
		
				
		
					<router-link class="col-lg-4 col-md-6 col-sm-6" style="margin-right: 20px;width:500px ;"
						to="/word/word_ctoe">
					<div class="single-work text-center mt-30" style="height: 400px;width: 400px;border: 2px solid #e3deff;">
						<div class="work-image" style="height: 400px;width: 400px;">
							<img src="../../assets/picture/work/w-5.jpg" alt="work"
								style="height: 400px;width: 400px;">
							</div>
							<div class="work-overlay">
								<div class="work-content" style="font-size: 40px;">
									<h3 class="work-title" style="font-size: 40px;">中译英</h3>
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
		
	</div>
	
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

<!-- <style scoped src='../../assets/css/style.css'>
	
</style> -->
