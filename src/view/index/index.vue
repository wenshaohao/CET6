<template>

	<!-- 	<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
	        <![endif]-->

	<!-- ========================= preloader start ========================= -->
	<Header></Header>
	<!-- ========================= header end ========================= -->

	<!-- ========================= hero-section start ========================= -->
	<section id="home" class="hero-section" style="height: 400px;padding-top: 50px;">
		<div style="height: 50px;text-align: center;font-size: 50px;line-height: 50px;color: white;padding-top: 50px;">
			距离下一次考试还有</div>
		<div class="container" style="height: 300px; line-height: 300px;">

			<div class="row align-items-center">

				<div class="col-xl-7 col-lg-7">

					<div class="hero-content-wrapper"
						style="line-height: 300px;font-size: 100px;width: 1312px;text-align: center;color: white;">
						{{d}}天{{h}}小时{{m}}分{{s}}秒
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- ========================= hero-section end ========================= -->






	<!-- ========================= about-section start ========================= -->
	<section id="about" class="about-section pt-150 pb-20">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-xl-6 col-lg-6">
					<div class="about-img mb-30">
						<img src="../../assets/picture/about-img.svg" alt="image" class=" wow fadeInLeft"
							data-wow-delay=".4s">
					</div>
				</div>
				<div class="col-xl-6 col-lg-6">
					<div class="about-content mb-30">
						<div class="section-title mb-40">
							<h2 class="wow fadeInUp" data-wow-delay=".2s">关于CET</h2>
						</div>
						<p class="mb  " data-wow-delay=".4s">
							全国大学英语四、六级考试（CET）是由教育部主办，教育部教育考试院（原教育部考试中心）主持和实施的大规模标准化考试，是全国性的教学考试，其目的是促进我国大学英语教学工作，对大学生的英语能力进行客观、准确的测量，为提高我国大学英语课程的教学质量提供服务。CET始于1987年，已走过了三十多年的历程，对我国大学英语教学的发展和改革产生了积极的影响。
						</p>
						<p class="mb  " data-wow-delay=".6s">
							CET笔试的考试时间为每年6月和12月；CET口试的考试时间为每年5月和11月，报考口试的考生必须先报考当次相应级别的笔试。</p>
						<p class="mb  ">
							CET同时设有非英语考试科目，包括：日语四级(CJT4)、日语六级(CJT6)、俄语四级(CRT4)、俄语六级(CRT6)、德语四级(CGT4)、德语六级(CGT6)和法语四级(CFT4)，以上考试科目每年6月开考一次，均为笔试考核，无口试考核。
						</p>
						<a href="https://passport.neea.edu.cn/CETLogin?ReturnUrl=https://cet-bm.neea.edu.cn/Home/VerifyPassport/?LoginType=0&Safe=1"
							class="theme-btn theme-btn-2 wow fadeInRight" data-wow-delay=".8s">我要报名</a>
					</div>
				</div>
			</div>
		</div>
	</section>


	<SprcialExercises></SprcialExercises>



	<Essay></Essay>



	<WordLine></WordLine>


	<Examination></Examination>
	<!-- <div style="height: 100px;width: 100%;background-color: aqua;position: absolute;bottom: -160%;"></div> -->







	<!-- ========================= scroll-top ========================= -->
	<a href="#" class="scroll-top">
		<i class="lni lni-chevron-up"></i>
	</a>
</template>




<script>
	import axios from 'axios'
	import '../../assets/js/bootstrap.bundle-5.0.0.alpha-1-min.js';
	import '../../assets/css/main.css';
	import Header from '../../components/header.vue'
	import WordLine from '../../components/word_line.vue'
	import Essay from '../../components/essay.vue'
	import SprcialExercises from '../../components/special_exercises.vue'
	import Examination from '../../components/examination.vue'


	export default {
		name: "Index",
		data() {
			return {



				d: 0,
				h: 0,
				m: 0,
				s: 0 //倒计时

			}

		},
		components: {
			Header,
			WordLine,
			Essay,
			SprcialExercises,
			Examination
		},
		  computed: {

		  },

		methods: {


			getTotalCount: function() {
				axios.get('/tweets/totalCount').then(res => {
					//console.log(res.data[0].totalCount)
					this.count = res.data[0].totalCount;
				})
			},
			mouseEnter() {
			      clearInterval(this.timer);
			    },
			    //鼠标离开
			    mouseLeave() {
			      this.scrollMove();
			    },

			countTime: function() {
				//获取当前时间                                   

				var date = new Date();
				var now = date.getTime();
				//设置截止时间
				var endDate = new Date("2023-03-12 14:30:00");
				var end = endDate.getTime();
				//时间差
				var leftTime = end - now;
				//定义变量 d,h,m,s保存倒计时的时间
				if (leftTime >= 0) {
					this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
					this.h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
					this.m = Math.floor(leftTime / 1000 / 60 % 60);
					this.s = Math.floor(leftTime / 1000 % 60);
				}
				// console.log(this.s);
				//递归每秒调用countTime方法，显示动态时间效果
				setTimeout(this.countTime, 1000);
			},
			
			
			
			

		},


		mounted() {
 

			this.countTime(); //调用定时器
			document.getElementById("index").className = "page-scroll active";
			
		}
	}
</script>


<style>
	.notice-box {
	  width: 500px;
	  height: 30px;
	  margin: 0 auto;
	  overflow: hidden;
	  position: relative;
	  text-align: center;
	  border: 1px solid red;
	}
	.notice-item {
	  width: 100%;
	  height: 30px;
	  line-height: 30px;
	  box-sizing: border-box;
	  position: absolute;
	  top: 0;
	}
	.notice-slide-enter-active,
	.notice-slide-leave-active {
	  transition: all 0.8s linear;
	}
	.notice-slide-enter {
	  top: 30px;
	}
	.notice-slide-leave-to {
	  top: -30px;
	}
	

	
	.header {
		position: fixed;
		width: 100&;
		top: 0;
		z-index: 999;
		background-color: #2c4edb;
	}

	p {
		text-indent: 2em;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.wrap {
		padding: 20px;
		height: 30px;
		line-height: 30px;
		display: flex;
		background-color: pink;
		align-items: center;
	}

	.wrap .tip {
		font-weight: 700;
		font-size: 16px;
	}

	.wrap .content {
		flex: 1;
		height: 100%;
		border: 1px solid #888;
		font-size: 14px;
		overflow: hidden;
	}

	.wrap .content .text {
		padding-left: 100%;
		padding-right: 100%;
		white-space: nowrap;
	}
</style>
