<template>
  <main class="content-main contact-photo" role="main">
	<!-- <div class="row photo-content">
		<div class="col-md-6 photo-item" v-for="n in 9">
			<img :src="imgUrl(`${n}.png`)" alt="">
		</div>
	</div> -->
	<div class="photo-content">
		<div class="photo-big">
			<img :src="imgUrl('1.png')" alt="">
		</div>
		<div class="photo-small">
			<img :src="imgUrl('2.png')" alt="">
			<img :src="imgUrl('3.png')" alt="">
		</div>
		<div class="photo-small">
			<img :src="imgUrl('5.png')" alt="">
			<img :src="imgUrl('6.png')" alt="">
		</div>
		<div class="photo-big">
			<img :src="imgUrl('4.png')" alt="">
		</div>
		<div class="photo-big">
			<img :src="imgUrl('7.png')" alt="">
		</div>
		<div class="photo-small">
			<img :src="imgUrl('8.png')" alt="">
			<img :src="imgUrl('9.png')" alt="">
		</div>
	</div>
	
  </main>
</template>
<script src="./photo.js"></script>
<style>
.contact-photo{
	padding:20px;
}
.contact-photo .photo-content{
	/*width: 1000px;*/
	width: 100%;
	margin: 0 auto;
}
.contact-photo .photo-content:after{
	height: 0;
	display: block;
	visibility: hidden;
	content: '';
	clear: both;
}
.photo-content img{
	margin-bottom: 10px;
	border-radius: 20px;
}
.photo-content .photo-big,.photo-content .photo-small{
	float: left;
	/*margin: 0 4px;*/
	padding: 0 4px;
}
.photo-content .photo-big{
	width: 60%;
}
.photo-content .photo-small{
	width: 40%;
}
.photo-content .photo-big img{
	width: 100%;
	height: auto;
}
.photo-content .photo-small img{
	width: 100%;
	height: 175px;
}
.photo-content .photo-small img+img{
	margin-bottom: 10px;
}
/*.contact-photo .photo-item{
	margin-bottom: 20px;
}
.contact-photo .photo-item img{
	display: block;
	margin: 0 auto;
	border-radius: 10px;
}*/
@media (min-width: 1500px) {
	.photo-content .photo-small img{
		width: 100%;
		height: 246px;
	}
}
@media (max-width: 1500px) {
	.photo-content .photo-small img{
		width: 100%;
		height:175px;
	}
}

@media (max-width: 1200px) {
	.photo-content .photo-small img{
		height: 132px;
	}
}
@media (max-width: 996px) {
	.photo-content .photo-small img{
		/*height: 140px;*/
		height: 131px;
	}
}
@media (max-width: 992px) {
	.photo-content .photo-small img{
		/*height: 140px;*/
		height: 134px;
	}
}
@media (max-width: 990px) {
	.photo-content .photo-small img{
		/*height: 140px;*/
		height: 140px;
	}
}
@media (max-width: 772px) {
	.photo-content .photo-big{
		width: 60%;
	}
	.photo-content .photo-big img{
		width: 100%;
	}
	.photo-content .photo-small{
		width: 40%;
	}
	.photo-content .photo-small img{
		height: 142px;
	}
}
@media (max-width: 768px) {
	.photo-content .photo-small img{
		height: 144px;
	}
}
@media (max-width: 738px) {
	.photo-content .photo-small img{
		height: 140px;
	}
}
@media (max-width: 724px) {
	.photo-content .photo-small img{
		height: 135px;
	}
}
@media (max-width: 700px) {
	.photo-content .photo-big{
		width: 100%;
	}
	.photo-content .photo-big img{
		width: 100%;
	}
	.photo-content .photo-small{
		width: 100%;
	}
	.photo-content .photo-small img{
		width: 100%;
		height: auto
	}
}
</style>