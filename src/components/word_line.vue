<template>
	<section id="work" class="work-area pt-125 pb-130" style="margin-top: 50px;padding-bottom: 320px;padding-top: 0;">
		<div class="container">
			<div class=row >
				<div class="col-xl-7 col-lg-8 col-md-10 mx-auto" style="width: 1500px;">
					<div class="section-title text-center mb-55">
						<h2 class="mb-20 wow fadeInDown" data-wow-delay=.2s style="font-size: 35px;font-weight: normal;">
							<div style="float: left;margin-left: 20px;">单词练习</div>
							<router-link  style="float: right;font-size: 25px;padding-right: 35px;text-decoration: none;" to="/word"><div>更多题型>></div></router-link>
							
						</h2>
					</div>
				</div>
			</div>
			
			<div class="row" style="float: left;width: 1300px;padding-left: 10px;margin-top: 20px;">
	
	<router-link class="col-lg-4 col-md-6 col-sm-6" style="margin-right: 20px;width: 300px;"
		to="/word/word_text">
		<div class="single-work text-center mt-30" style="height: 300px;width: 300px;">
			<div class="work-image">
				<img src="../assets/picture/work/w-5.jpg" alt="work"
					style="height: 300px; object-fit: contain;">
			</div>
			<div class="work-overlay">
				<div class="work-content">
					<h3 class="work-title">单词背诵</h3>
					<!-- 	<ul>
						<li><a class="image-popup" href="../assets/picture/work/w-4.jpg"><i
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
				<img src="../assets/picture/work/w-5.jpg" alt="work"
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
				<img src="../assets/picture/work/w-5.jpg" alt="work"
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
	// import '../assets/css/style.css';
	// import '../assets/css/bootstrap.min.css';
	// import '../assets/css/LineIcons.css';
	// import '../assets/css/magnific-popup.css';
	// import '../assets/css/default.css';
	// import '../assets/css/style.css';
	import '../assets/js/bootstrap.bundle-5.0.0.alpha-1-min.js';
	import '../assets/css/main.css';
</script>

<style scoped src='../assets/css/style.css'></style>