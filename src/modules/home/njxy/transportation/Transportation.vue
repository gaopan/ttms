<template>
  <main class="content-main njxy-transportation" role="main">
    <div class="row">
      <div class="col-md-6">
        <div class="transportation-item">
          <p><span class="glyphicon glyphicon-stop"></span>學校對面有停車場。</p>
          <p><span class="glyphicon glyphicon-stop"></span>步行三分鐘到達蘇屋巴士總站。</p>
          <p><span class="glyphicon glyphicon-stop"></span>七分鐘到達長沙灣港鐵站。</p>
    			<img :src="imgUrl('MTR-station.png')" alt="">
        </div>
      </div>
    </div>
  </main>
</template>
<script src="./transportation.js"></script>
<style>
.njxy-transportation .transportation-item{
  width: 80%;
  margin: 0 auto 30px;
}
.njxy-transportation .transportation-item p{
  padding: 20px 0 10px;
  font-size: 18px;
}
.njxy-transportation .transportation-item p span.glyphicon-stop{
  margin-right: 10px;
}
.njxy-transportation img{
  display: block;
  width: 100%;
  box-shadow: 0 0 1px #000;
}
</style>