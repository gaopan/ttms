<template>
  <main class="content-main rxsq-requirements" role="main">
    <img class="requirements-bg" :src="imgUrl('anthony-delanoix-17747-unsplash.jpg')" alt="">
  	<ul class="requirements-content" v-show="currentLang == 'zh_hk'">
  		<li><span class="glyphicon glyphicon-stop"></span>12歲或以上<span class="requirements-tip">（合資格入讀B年級至13年級學生）</span></li>
  		<li><span class="glyphicon glyphicon-stop"></span>香港永久性居民</li>
  		<li><span class="glyphicon glyphicon-stop"></span>或為合法居港並可在港接受教育人士<span class="requirements-tip">（如持有香港身份證居民）</span></li>
  		<li><span class="glyphicon glyphicon-stop"></span>或持有其他國籍的人士、在港工作的外籍人士子女等</li>
  	</ul>
    <ul class="requirements-content" v-show="currentLang == 'en'">
      <li><span class="glyphicon glyphicon-stop"></span>12 years old or above</li>
      <li><span class="glyphicon glyphicon-stop"></span>Hong Kong permanent residents;</li>
      <li><span class="glyphicon glyphicon-stop"></span>or have the right of residence and permission of receiving education in Hong Kong;</li>
      <li><span class="glyphicon glyphicon-stop"></span>or others countries’ residents.</li>
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
/*   position: absolute;
left: 10%;
top: 100px; */
  /*background: rgba(255,255,255,.7);*/
}
.rxsq-requirements ul.requirements-content li{
	     font-size:20px; 
    /*line-height: 45px;*/
    line-height: 20px;
    /*padding-left: 10px;*/
    /*color: #b27524;*/
    font-weight: bold;
    margin-bottom: 16px;
}
.rxsq-requirements ul.requirements-content li .requirements-tip{
	font-size: 14px;
}
.rxsq-requirements ul.requirements-content span.glyphicon-stop{
  margin-right: 10px;
}
@media (max-width: 1200px) {
  .rxsq-requirements ul.requirements-content li{
    font-size:18px; 
  }
}
@media (max-width: 1024px) {
  .rxsq-requirements .requirements-bg{
    width: 100%;
  }
  .rxsq-requirements ul.requirements-content li{
    /*line-height: 28px;*/
    font-size: 18px;
    /*line-height: 30px*/
  }
}
@media (max-width: 768px) {
  .rxsq-requirements ul.requirements-content li{
   font-size: 16px;
    line-height: 18px;
  }
}
@media (max-width: 540px) {
  .rxsq-requirements .requirements-bg{
    width: 100%;
  }
  .rxsq-requirements ul.requirements-content{
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
  }
  .rxsq-requirements ul.requirements-content li{
    /*line-height: 28px;*/
    font-size: 16px;
    /*line-height: 30px;*/
  }
  .rxsq-requirements ul.requirements-content li .requirements-tip{
    font-size: 14px;
  }
}
@media (max-width: 480px) {
  .rxsq-requirements .requirements-bg{
    width: 100%;
  }
  .rxsq-requirements ul.requirements-content{
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
  }
  .rxsq-requirements ul.requirements-content li{
    /*line-height: 28px;*/
        font-size: 14px;
    margin-bottom: 10px;
    line-height: 18px;
  }
  .rxsq-requirements ul.requirements-content li .requirements-tip{
    font-size: 12px;
  }
}
</style>