<template>
  <main class="content-main njkc-cooperation" role="main">
    <div class="row">
      <div class="col-md-6">
      	<P class="cooperation-title">香港地匾</P>
        <P class="cooperation-info">香港大學、香港科技大學、香港中文大學、香港城市大學、香港理工大學、香港浸會大學、香港嶺南大學、香港樹仁大學、香港演藝學院、香港公開大學</P>
      </div>
      <div class="col-md-6">
        <P class="cooperation-title">中國地區</P>
        <P class="cooperation-info">北京大學、清華大學、浙江大學、上海交通大學，復旦大學，中山大學，武漢大學、山東大學、北京電影學院、中央戲劇學院、北京體育大學</P>
      </div>
      <div class="col-md-6">
        <P class="cooperation-title">英國</P>
        <P class="cooperation-info">牛津大學、劍橋大學、帝國理工學院、倫敦大學學院、倫敦政治經濟學院、愛丁堡大學、曼徹斯特大學</P>
      </div>
      <div class="col-md-6">
        <P class="cooperation-title">美國</P>
        <P class="cooperation-info">加州理工學院、斯坦福大學、哈佛大學、哥倫比亞大學、波士頓大學、茱莉亞音樂學院、伯克利音樂學院、普瑞特藝術學院</P>
      </div>
      <div class="col-md-6">
        <P class="cooperation-title">加拿大</P>
        <P class="cooperation-info">多倫多大學、英屬哥倫比亞大學、麥基爾大學</P>
      </div>
      <div class="col-md-6">
        <P class="cooperation-title">澳洲</P>
        <P class="cooperation-info">澳洲國立大學、墨爾本大學、悉尼大學、昆士蘭大學、新南威爾士大學、蒙納士大學、西澳大學、阿德萊德大學</P>
      </div>
      <div class="col-md-6">
        <P class="cooperation-title">東南亞</P>
        <P class="cooperation-info">新加坡國立大學、南洋理工大學、東京大學、首爾大學</P>
      </div>
    </div>
    <div class="row cooperation-school">
      <div v-for="n in 45" class="cooperation-school-item">
        <img :src="imgUrl(`${n}.png`)" alt="">
      </div>
    </div>
    <!-- <div class="row cooperation-school ">
      <img :src="imgUrl('school_bg.png')" alt="">
    </div> -->
  </main>
</template>
<script src="./cooperation.js"></script>
<style>
.njkc-cooperation p.cooperation-title{
  width: 70%;
  color: #b27524;
  line-height: 3;
  /*border-bottom: 4px solid #b27524;*/
  font-weight: bold;
  font-size: 22px;
}
.njkc-cooperation p.cooperation-info{
  /*text-indent: 2em;*/
  margin-bottom: 40px;
  width: 80%;
}
.njkc-cooperation .cooperation-foot{
  color: red;
}
.njkc-cooperation .cooperation-school img{
  border-radius: 13px;
}
 .njkc-cooperation .cooperation-school{
  /*width: 800px;*/
  margin: 0 auto;
}
.njkc-cooperation .cooperation-school:after{
  display: block;
  content: '';
  height: 0;
  visibility: hidden;
  clear: both;
}
.njkc-cooperation .cooperation-school .cooperation-school-item{
  float: left;
  height: 99px;
  /*border: 2px solid #b27524;*/
  border-radius: 12px;
  margin-left: 8px;
  margin-bottom: 4px;
}
.njkc-cooperation .cooperation-school img{
  border-radius: 10px; 
  box-shadow: 0 0 1px #000;
} 
</style>