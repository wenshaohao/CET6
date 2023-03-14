<template>
	<Header></Header>
	<section id=service class="service-section pt-150 pb-120" style="margin: 0;padding: 0;">
		<div class=container>
	
		
	
			<div class=row  style="margin-top: 80px;">
				<router-link class="col-xl-4 col-lg-4 col-md-6" to="/special_exercises/reading">
				<!-- <div class="col-xl-4 col-lg-4 col-md-6"> -->
					<div class="single-service wow fadeInUp" >
						<div class="service-icon mb-30"> <i class="lni lni-cog"></i> </div>
						<h4>阅读理解</h4>
						<p>Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .</p>
					</div>
				<!-- </div> -->
				</router-link>
				
				<router-link class="col-xl-4 col-lg-4 col-md-6" to="/special_exercises/matching">
				<!-- <div class="col-xl-4 col-lg-4 col-md-6"> -->
					<div class="single-service wow fadeInUp" >
						<div class="service-icon mb-30"> <i class="lni lni-cog"></i> </div>
						<h4>段落匹配</h4>
						<p>Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .</p>
					</div>
				<!-- </div> -->
				</router-link>
				
				<router-link class="col-xl-4 col-lg-4 col-md-6" to="/special_exercises/cloze">
				<!-- <div class="col-xl-4 col-lg-4 col-md-6"> -->
					<div class="single-service wow fadeInUp" >
						<div class="service-icon mb-30"> <i class="lni lni-cog"></i> </div>
						<h4>选词填空</h4>
						<p>Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .</p>
					</div>
				<!-- </div> -->
				</router-link>
				<router-link class="col-xl-4 col-lg-4 col-md-6" to="/special_exercises/translation">
				<!-- <div class="col-xl-4 col-lg-4 col-md-6"> -->
					<div class="single-service wow fadeInUp" >
						<div class="service-icon mb-30"> <i class="lni lni-cog"></i> </div>
						<h4>段落翻译</h4>
						<p>Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .</p>
					</div>
				<!-- </div> -->
				</router-link>
				
				<router-link class="col-xl-4 col-lg-4 col-md-6" to="/special_exercises/writing" >
				<!-- <div class="col-xl-4 col-lg-4 col-md-6"> -->
					<div class="single-service wow fadeInUp" >
						<div class="service-icon mb-30"> <i class="lni lni-cog"></i> </div>
						<h4>短文写作</h4>
						<p>Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .</p>
					</div>
				<!-- </div> -->
				</router-link>
				
			</div>
	
		</div>
	</section>
	
</template>

<script>
	import Header from '../../components/header.vue'
	
	
	export default{
		name:"Special_exercises",
		data() {
			
		},
		components:{
			Header
		},
		mounted() {
			
			document.getElementById("specialExercises").className="page-scroll active";
		}
	}
</script>

<style scoped>
	.col-xl-4{
		margin-top: 20px;
		text-decoration: none;
	}
</style>