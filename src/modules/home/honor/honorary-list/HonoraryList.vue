<template>
  <main class="content-main honor-honorary-list" role="main">
  	<ul class="honorary-list-nav">
  		<li v-for='year in years' @click="turn_year(year)">
  			<a :class="{'honorary-list-active':year == isYear}">{{year}}</a>
  		</li>
  	</ul>
  	<div v-html="content" class="honorary-list-content"></div>
  </main>
</template>
<script src="./honorary-list.js"></script>
<style>
.honor-honorary-list ul.honorary-list-nav{
	zoom:1;
	line-height: 32px;
	background: #b27524;
	margin-bottom: 0;
}
.honor-honorary-list ul.honorary-list-nav:after{
	display: block;
	content: '';
	height: 0;
	clear: both;
	visibility: hidden;
}
.honor-honorary-list ul.honorary-list-nav li{
	float: left;
	margin-left: 10px;
}
.honor-honorary-list ul.honorary-list-nav li a{
	color: #fff;
	text-decoration: none;
}
.honor-honorary-list ul.honorary-list-nav li a.honorary-list-active{
	text-decoration: underline;
}
.honor-honorary-list ul.honorary-list-nav li a:hover{
	text-decoration: underline;
}
.honor-honorary-list .honorary-list-content table{

}
.honor-honorary-list .honorary-list-content table{
  width: 80%;
  margin: 10px auto;
}
.honor-honorary-list .honorary-list-content table th{
  background: #262162;
  border:1px solid #b27524;
  border-bottom: 2px solid #b27524;
  color: #fff;
  text-align: center;
  line-height: 32px;
}
.honor-honorary-list .honorary-list-content table td{
  border: 1px solid #b27524;
  text-align: center;
  padding: 6px 12px;
}
</style>