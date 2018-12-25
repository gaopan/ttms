<template>
  <main class="content-main njkc-structure" role="main">
  	<div class="structure-title">
  		<li>八年級至十一年級英國舍考：</li>
  		<li class="structure-tip">IGCSE與O Level是世界公認的成熟體系，是基於選科的初中教育體系。</li>
  		<li>十二至十三年級英圉高考：</li>
  		<li class="structure-tip">英國高中課程，簡稱A level，歷史悠久，認受性廣泛，被幾乎所有英語授課的大學作為招生的入學標準。</li>
  	</div>
  	<ul class="structure-nav">
  		<li v-for="structureNav in structureNavs" key="index">
  			<router-link :to="structureNav.path">
  				{{structureNav.title}}
  			</router-link>
  		</li>
  	</ul>
	  <router-view/>
  </main>
</template>
<script src="./structure.js"></script>
<style>
.njkc-structure .structure-title{
  /*border: 2px solid #dcb454;*/
  /*padding: 10px 10px 0px;*/
}
.njkc-structure .structure-title li{
  margin-bottom: 10px;
}
.njkc-structure .structure-title li.structure-tip{
  padding: 6px 12px;
  background: #dcb454;
  margin-bottom: 10px;
}
.njkc-structure .structure-nav{
  zoom:1;
  line-height: 32px;
  background: #b27524;
  margin-bottom: 0;
}
.njkc-structure .structure-nav:after{
  content:'';
  height: 0;
  clear: both;
  display: block;
  visibility:hidden;
}
.njkc-structure .structure-nav li{
  float: left;
  margin-left: 10px;
}
.njkc-structure .structure-nav li a{
  color: #fff; 
  text-decoration: none;
}
.njkc-structure .structure-nav li a:hover{
  text-decoration: underline;
}
.njkc-structure .structure-nav li .router-link-active{
  text-decoration: underline;
}
</style>