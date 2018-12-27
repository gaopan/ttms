<template>
  <main class="content-main njxy-transportation" role="main">
  	<ul v-html="content">
  		
  	</ul>
  </main>
</template>
<script src="./transportation.js"></script>
<style>
.njxy-transportation ul li{
	margin-bottom: 10px;
}
.njxy-transportation ul li.transportation-img img{
	width: 500px;
  border:2px solid #b27524;
}
.njxy-transportation ul li.transportation-title{
	background: #b27524;
	width: 30%;
	color: #fff;
	padding: 6px 12px;
}
</style>