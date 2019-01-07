<template>
  <main class="content-main contact-photo" role="main">
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
<style src='./photo.css'></style>