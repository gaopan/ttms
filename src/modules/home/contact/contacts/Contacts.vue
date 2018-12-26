<template>
  <main class="content-main contact-contacts" role="main">
  	<ul v-html='content'>
		
  	</ul>
  </main>
</template>
<script src="./contacts.js"></script>
<style>
.contact-contacts ul{
	width: 60%;
	margin: 100px auto;
	background: #b27524;
	box-shadow: 0 0 10px #000;
	color: #fff;
	padding: 20px;
}
.contact-contacts ul li{
	margin-bottom: 20px;
	text-align: center;
}
.contact-contacts ul li.contacts-title{
	margin-bottom: 40px;
	font-size: 24px;
	border-bottom: 2px solid #deb95f;
	padding-bottom: 10px;
}
</style>