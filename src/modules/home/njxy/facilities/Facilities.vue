<template>
  <main class="content-main njxy-facilities" role="main">
  	<ul v-html="content">
  		
  	</ul>
  </main>
</template>
<script src="./facilities.js"></script>
<style>
.njxy-facilities ul li{
	margin-bottom: 10px;
}
.njxy-facilities ul li.facilities-img img{
	width: 500px;
  border:2px solid #b27524;
}
.njxy-facilities ul li.facilities-title{
	background: #b27524;
	width: 30%;
	color: #fff;
	padding: 6px 12px;
}
</style>