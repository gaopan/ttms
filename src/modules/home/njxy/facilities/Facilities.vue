<template>
  <main class="content-main njxy-facilities" role="main">
    <div class="row">
      <div class="col-md-6">
        <p><span class="glyphicon glyphicon-stop"></span>學校入口</p>
        <img :src="imgUrl('gate2.jpg')" alt="">
      </div>
      <div class="col-md-6">
        <p><span class="glyphicon glyphicon-stop"></span>一樓緊急救助</p>
        <img :src="imgUrl('rescure-station.png')" alt="">
      </div>
      <div class="col-md-6">
        <p><span class="glyphicon glyphicon-stop"></span>課室/儲物欐</p>
        <img :src="imgUrl('classroom.png')" alt="">
      </div>
      <div class="col-md-6">
        <p><span class="glyphicon glyphicon-stop"></span>校内運動場</p>
        <img :src="imgUrl('playground.png')" alt="">
      </div>
      <div class="col-md-6">
        <p><span class="glyphicon glyphicon-stop"></span>籃球場</p>
        <img :src="imgUrl('playground1.png')" alt="">
      </div>
      <div class="col-md-6">
        <p><span class="glyphicon glyphicon-stop"></span>學校附近步行三分鐘有游泳池</p>
        <p><span class="glyphicon glyphicon-stop"></span>學校附近有漢代遺跡李鄭屋博物館</p>
        <img :src="imgUrl('tomb.png')" alt="">
      </div>
    </div>
  </main>
</template>
<script src="./facilities.js"></script>
<style>
.njxy-facilities p{
  /*line-height: 3;*/
  padding: 20px 0 10px;
  color: #b27524;
  font-size: 18px;
  font-weight: bold;
  width: 70%;
  /*border-bottom: 4px solid #b27524;*/
}
.njxy-facilities p span.glyphicon-stop{
  margin-right: 10px;
}
.njxy-facilities img{
  display: block;
  width: 80%;
  box-shadow: 0 0 1px #000;
}
</style>