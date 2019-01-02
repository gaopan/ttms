<template>
  <main class="content-main njxy-facilities" role="main">
    <div class="row">
      <div class="col-md-6">
        <div class="facilities-item">
          <p>學校入口</p>
          <img :src="imgUrl('gate2.jpg')" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-item">
          <p>一樓緊急救助</p>
          <img :src="imgUrl('rescure-station.png')" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-item">
          <p>課室/儲物欐</p>
          <img :src="imgUrl('classroom.png')" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-item">
          <p>校内運動場</p>
          <img :src="imgUrl('playground.png')" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-item">
          <p>籃球場</p>
          <img :src="imgUrl('playground1.png')" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-itemo">
          <p><span class="glyphicon glyphicon-stop"></span>學校附近步行三分鐘有游泳池</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-item">
          <p>學校附近有漢代遺跡李鄭屋博物館</p>
          <img :src="imgUrl('tomb.png')" alt="">
        </div>
      </div>
    </div>
  </main>
</template>
<script src="./facilities.js"></script>
<style>
.njxy-facilities .facilities-item{
  position: relative;
  width: 80%;
  margin: 0 auto 30px;
  box-shadow: 0 0 10px #000;
}
.njxy-facilities .facilities-itemo{
  width: 80%;
  margin: 0 auto 30px; 
}
.njxy-facilities .facilities-itemo p{
  color: #b27524;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  padding-left: 15px;
  line-height: 3;
}
.njxy-facilities .facilities-item p{
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,.5);
  padding-left: 15px;
  line-height: 2;
  margin-bottom: 0;
}
.njxy-facilities .facilities-itemo p span.glyphicon-stop{
  margin-right: 10px;
}
.njxy-facilities img{
  display: block;
  width: 100%;
}

</style>