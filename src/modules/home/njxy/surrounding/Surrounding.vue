<template>
  <main class="content-main njxy-surrounding" role="main">
  	<ul>
  		<li class="surrounding-title">校内運動場</li>
  		<li class="surrounding-img">
  			<img :src="imgUrl('playground.png')" alt="">
  		</li>
  		<li class="surrounding-title">籃球場</li>
  		<li class="surrounding-img">
  			<img :src="imgUrl('playground1.png')" alt="">
  		</li>
  		<li class="surrounding-title">學校附近步行三分鐘有游泳池</li>
  		<li class="surrounding-title">學校附近有漢代遺跡李鄭屋博物館</li>
  		<li class="surrounding-img">
  			<img :src="imgUrl('tomb.png')" alt="">
  		</li>
  	</ul>
  </main>
</template>
<script src="./surrounding.js"></script>
<style>
.njxy-surrounding ul li{
	margin-bottom: 10px;
}
.njxy-surrounding ul li.surrounding-img img{
	width: 500px;
  border:2px solid #b27524;
}
.njxy-surrounding ul li.surrounding-title{
	background: #b27524;
	width: 30%;
	color: #fff;
	padding: 6px 12px;
}
</style>