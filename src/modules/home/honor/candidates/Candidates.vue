<template>
  <main class="content-main honor-candidates" role="main">
  	<ul v-html="content">
		
  	</ul>
  </main>
</template>
<script src="./candidates.js"></script>
<style>
.honor-candidates ul li{
	margin-bottom: 20px;
	padding: 6px 12px;
}
.honor-candidates ul li.candidates-title{
	background: #b27524;
	color: #fff;
	font-size: 18px;
}
</style>