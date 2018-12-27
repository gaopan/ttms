<template>
  <main class="content-main njkc-articulation" role="main" v-html="content">
  </main>
</template>
<script src="./articulation.js"></script>
<style>
.njkc-articulation table{
	width: 60%;
	margin: 0 auto;
}
.njkc-articulation table td{
	text-align: center;
	border: 4px solid #fff;
	border-top: 0px;
	border-bottom: 0px;
	padding: 10px;
	background: #dcb454;
}
.njkc-articulation table td.borderleft2{
	border-left: 30px solid #fff;
}
.njkc-articulation table td.articulation-final{
	background: #b27524;
	font-size: 18px;
	color: #fff;
}
.njkc-articulation table tr.bordernone td{
	border: none;
	background: #fff;
}
.njkc-articulation table tr.bordernone i{
	font-size: 40px;
	color: #edecfb;
}
.njkc-articulation table tr.bordernone td.tal{
	text-align: left
}
.njkc-articulation table tr.bordernone td.tar{
	text-align: right
}
</style>