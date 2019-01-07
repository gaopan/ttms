<template>
  <main class="content-main njxy-facilities" role="main">
    <div class="row" v-show="currentLang == 'zh_hk'">
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
          <p>課室/儲物櫃</p>
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
    <div class="row" v-show="currentLang == 'en'">
      <div class="col-md-6">
        <div class="facilities-item">
          <p>Independent Entrance</p>
          <img :src="imgUrl('gate2.jpg')" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-item">
          <p>First-aid comer</p>
          <img :src="imgUrl('rescure-station.png')" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-item">
          <p>Classroom/Lockers</p>
          <img :src="imgUrl('classroom.png')" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-item">
          <p>Campus Playgroung</p>
          <img :src="imgUrl('playground.png')" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-item">
          <p>Basketball Feild</p>
          <img :src="imgUrl('playground1.png')" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-itemo">
          <p><span class="glyphicon glyphicon-stop"></span>There is a swimming pool three minutes' walk from the school.</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="facilities-item">
          <p>There is a museum of Lei Cheng Uk Han Tomb near the school.</p>
          <img :src="imgUrl('tomb.png')" alt="">
        </div>
      </div>
    </div>
  </main>
</template>
<script src="./facilities.js"></script>
<style src='./facilities.css'></style>