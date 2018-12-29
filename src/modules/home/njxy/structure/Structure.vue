<template>
  <main class="content-main njxy-structure" role="main">
  	<div>
      <ul class="structure-introduce">
        <li><span class="glyphicon glyphicon-stop"></span>自建五層標準校舍，具園林景色，環境優美；</li>
        <li><span class="glyphicon glyphicon-stop"></span>臨近九龍“蘇屋”巴士總站，距離長沙灣港鐵站約10數分鐘，交通方便；</li>
        <li><span class="glyphicon glyphicon-stop"></span>第一層設有3,000呎禮堂及會議室；</li>
        <li><span class="glyphicon glyphicon-stop"></span>第二層至第四層每層設有一間多功能房；</li>
        <li><span class="glyphicon glyphicon-stop"></span>第二層至第五層為課室，共12間課室；</li>
        <li><span class="glyphicon glyphicon-stop"></span>第五層設有平台花園；</li>
        <li><span class="glyphicon glyphicon-stop"></span>每層均分別有男女洗手間，設有浴室。</li>
      </ul>
      <div class="structure-school">
        <img :src="imgUrl('cz_bg.png')" alt="">
      </div>
  	</div>
  </main>
</template>
<script src="./structure.js"></script>
<style>
.njxy-structure ul.structure-introduce{
  background: #b27524;
  width: 80%;
  margin-left:20%;
  padding:20px 20px 100px;
}
.njxy-structure ul.structure-introduce li{
  margin-bottom: 10px;
  color: #fff;
  line-height: 2;
  font-size: 18px;
}
.njxy-structure ul.structure-introduce li span.glyphicon-stop{
  margin-right: 10px;
}
.njxy-structure .structure-school{
  margin-top: -100px;
}
.njxy-structure .structure-school img{
  display: block;
  width: 90%;
  border: 10px solid #b27524;
}
</style>