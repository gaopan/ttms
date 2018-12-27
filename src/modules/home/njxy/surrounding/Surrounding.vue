<template>
  <main class="content-main njxy-surrounding" role="main">
  	<ul v-html="content">
  		
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