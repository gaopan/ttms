<template>
  <main class="content-main rxsq-requirements" role="main">
    <img class="requirements-bg" :src="imgUrl('anthony-delanoix-17747-unsplash.jpg')" alt="">
  	<ul class="requirements-content">
  		<li><span class="glyphicon glyphicon-stop"></span>12歲或以上<span class="requirements-tip">（合資格入讀B年級至13年級學生）</span></li>
  		<li><span class="glyphicon glyphicon-stop"></span>香港永久性居民</li>
  		<li><span class="glyphicon glyphicon-stop"></span>或為合法居港並可在港接受教育人士<span class="requirements-tip">（如持有香港身份證居民）</span></li>
  		<li><span class="glyphicon glyphicon-stop"></span>或持有其他國籍的人士、在港工作的外籍人士子女等</li>
  	</ul>
  </main>
</template>
<script src="./requirements.js"></script>
<style>
.rxsq-requirements {
  position: relative;
}
.rxsq-requirements .requirements-bg{
  display: block;
  width: 80%;
  margin: 0 auto 30px;
}
.rxsq-requirements ul.requirements-content{
	width: 80%;
	padding: 10px;
  margin: 0 auto 60px;
  position: absolute;
  left: 10%;
  top: 100px;
  background: rgba(255,255,255,.7);
}
.rxsq-requirements ul.requirements-content li{
	     font-size:20px; 
    line-height: 3;
    padding-left: 10px;
    color: #b27524;
    font-weight: bold;
}
.rxsq-requirements ul.requirements-content li .requirements-tip{
	font-size: 14px;
}
.rxsq-requirements ul.requirements-content span.glyphicon-stop{
  margin-right: 10px;
}
</style>