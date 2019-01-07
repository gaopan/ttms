<template>
  <main class="content-main njxy-transportation" role="main">
    <div class="transportation-item" v-show="currentLang == 'zh_hk'">
      <p><span class="glyphicon glyphicon-stop"></span>學校對面有停車場。</p>
      <p><span class="glyphicon glyphicon-stop"></span>步行三分鐘到達蘇屋巴士總站。</p>
      <p><span class="glyphicon glyphicon-stop"></span>七分鐘到達長沙灣港鐵站。</p>
			<img :src="imgUrl('MTR-station.png')" alt="">
    </div>
    <div class="transportation-item" v-show="currentLang == 'en'">
      <p><span class="glyphicon glyphicon-stop"></span>There is a parking lot opposite the school.</p>
      <p><span class="glyphicon glyphicon-stop"></span>Three minutes' walk to the So Uk Bus Terminal.</p>
      <p><span class="glyphicon glyphicon-stop"></span>Seven minutes' walk to Cheung Sha Wan MTR station.</p>
      <img :src="imgUrl('MTR-station.png')" alt="">
    </div>
  </main>
</template>
<script src="./transportation.js"></script>
<style src='./transportation.css'></style>