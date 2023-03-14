<template>
	
	<section id=service class="service-section pt-150 pb-120" style="margin: 0;padding: 0;">
		<div class=container>
	
			<div class=row >
				<div class="col-xl-7 col-lg-8 col-md-10 mx-auto" style="width: 1500px;">
					<div class="section-title text-center mb-55">
						<h2 class="mb-20 wow fadeInDown" data-wow-delay=.2s style="font-size: 35px;">
							<div style="float: left;margin-left: 20px;">专项练习</div>
							<router-link style="float: right;font-size: 25px;padding-right: 35px;text-decoration: none;" to="/special_exercises">
								<div>更多题型>></div>
							</router-link>
						</h2>
					</div>
				</div>
			</div>
	
			<div class=row  style="margin-top: 20px;">
				<router-link class="col-xl-4 col-lg-4 col-md-6" to="/special_exercises/reading">
					<div class="single-service wow fadeInUp" style=""> 
						<div class="service-icon mb-30"> <i class="lni lni-cog"></i> </div>
						<h4>阅读理解</h4>
						<p>Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .</p>
					</div>
				</router-link>
				<router-link class="col-xl-4 col-lg-4 col-md-6" to="/special_exercises/matching">
					<div class="single-service wow fadeInUp" >
						<div class="service-icon mb-30"> <i class="lni lni-bolt-alt"></i> </div>
						<h4>段落匹配</h4>
						<p>Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .</p>
					</div>
				</router-link>
				<router-link class="col-xl-4 col-lg-4 col-md-6" to="/special_exercises/cloze">
					<div class="single-service wow fadeInUp">
						<div class="service-icon mb-30"> <i class="lni lni-coin"></i> </div>
						<h4>短文翻译</h4>
						<p>Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .</p>
					</div>
				</router-link>
			</div>
	
		</div>
	</section>
	
</template>

<script>
	
	import '../assets/js/bootstrap.bundle-5.0.0.alpha-1-min.js';
	import '../assets/css/main.css';
</script>

<style>
	 .col-xl-4 :hover{
		margin-top: -10px;
		border-style: solid;
    transition-duration: 100ms;

	}
	.col-xl-4{
		margin-top: 20px;
		text-decoration: none;
	}
</style>