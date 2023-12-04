<template>
	<div>
		<!-- 	<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
	        <![endif]-->

		<!-- ========================= preloader start ========================= -->
		<Header></Header>
		<!-- ========================= header end ========================= -->

		<!-- ========================= hero-section start ========================= -->
		<section id="home" class="hero-section" style="height: 400px;padding-top: 50px;">
			<div
				style="height: 50px;text-align: center;font-size: 50px;line-height: 50px;color: white;padding-top: 50px;">
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


		<div class="backgroupColor" style="height: 550px;">
			<Examination></Examination>
		</div>

		<!-- <div style="height: 100px;width: 100%;background-color: aqua;position: absolute;bottom: -160%;"></div> -->







		<!-- ========================= scroll-top ========================= -->
		<el-tooltip class="box-item" effect="dark" content="回到顶部" placement="top">
			<a href="#" class="scroll-top" style="background-color: white;">
				<svg t="1680624138469" class="icon" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="11809" width="50" height="50">
					<path
						d="M0 499.5072c0 275.8656 223.6416 499.5072 499.5072 499.5072s499.5072-223.6416 499.5072-499.5072S775.3728 0 499.5072 0 0 223.6416 0 499.5072z"
						fill="#3296FA" p-id="11810"></path>
					<path
						d="M688.5376 310.8608H335.4624c-15.616 0-28.2624-14.4128-28.2624-32.1792v-16.1024C307.2 244.8128 319.8464 230.4 335.4624 230.4h353.0752c15.616 0 28.2624 14.4128 28.2624 32.1792v16.1024c0 17.7664-12.6464 32.1792-28.2624 32.1792zM323.8656 523.264s154.5472-141.056 156.1088-142.7968a45.184 45.184 0 0 1 27.8016-14.976c1.408-0.2048 2.816-0.2304 4.224-0.2048 1.408 0 2.7904 0 4.1984 0.2048a45.1072 45.1072 0 0 1 27.8016 14.976c1.5616 1.7152 156.1088 142.7968 156.1088 142.7968 16.6912 18.5088 15.2576 37.5552-1.408 56.064-16.6656 18.5088-38.9888 1.7408-55.6544-16.7424l-95.744-86.3488v285.1328c0 17.792-12.6464 32.2048-28.2624 32.2048h-14.1056c-15.616 0-28.2624-14.4128-28.2624-32.2048V476.2624l-95.744 86.3232c-16.64 18.5088-38.9888 35.3024-55.6544 16.768-16.64-18.5088-18.0736-37.5552-1.408-56.064z"
						fill="#FFFFFF" p-id="11811"></path>
				</svg>
			</a>
		</el-tooltip>
	</div>

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
				var endDate = new Date("2023-04-23 14:30:00");
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
