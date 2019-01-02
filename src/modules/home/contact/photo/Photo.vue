<template>
  <main class="content-main contact-photo" role="main">
	<div class="row photo-content">
		<div class="col-md-6 photo-item" v-for="n in 9">
			<img :src="imgUrl(`${n}.png`)" alt="">
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
	margin: 0 auto;
}
.contact-photo .photo-item{
	margin-bottom: 20px;
}
.contact-photo .photo-item img{
	display: block;
	margin: 0 auto;
	border-radius: 10px;
}
@media (max-width: 992px) {
	.contact-photo .photo-item img{
		width: 80%;
	}
}
@media (max-width: 768px) {
	.contact-photo .photo-item img{
		width: 80%;
	}
}
@media (max-width: 480px) {
	.contact-photo .photo-item img{
		width: 100%;
	}
}
</style>