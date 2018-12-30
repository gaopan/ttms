<template>
  <main class="content-main njxy-transportation" role="main">
    <div class="row">
      <div class="col-md-6">
        <p><span class="glyphicon glyphicon-stop"></span>學校對面有停車場。</p>
        <p><span class="glyphicon glyphicon-stop"></span>步行三分鐘到達蘇屋巴士總站。</p>
        <p><span class="glyphicon glyphicon-stop"></span>七分鐘到達長沙灣港鐵站。</p>
  			<img :src="imgUrl('MTR-station.png')" alt="">
      </div>
    </div>
  </main>
</template>
<script src="./transportation.js"></script>
<style>
.njxy-transportation {}
.njxy-transportation p{
  /*line-height: 3;*/
  padding: 20px 0 10px;
  color: #b27524;
  font-size: 18px;
  font-weight: bold;
  width: 70%;
  /*border-bottom: 4px solid #b27524;*/
}
.njxy-transportation p span.glyphicon-stop{
  margin-right: 10px;
}
.njxy-transportation img{
  display: block;
  width: 80%;
  box-shadow: 0 0 1px #000;
}
</style>