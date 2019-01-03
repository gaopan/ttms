<template>
  <main class="content-main njxy-structure" role="main">
  	<div>
      <ul class="structure-introduce" v-show="currentLang == 'zh_hk'">
        <li><span class="glyphicon glyphicon-stop"></span>自建五層標準校舍，具園林景色，環境優美；</li>
        <li><span class="glyphicon glyphicon-stop"></span>臨近九龍“蘇屋”巴士總站，距離長沙灣港鐵站約10數分鐘，交通方便；</li>
        <li><span class="glyphicon glyphicon-stop"></span>第一層設有3,000呎禮堂及會議室；</li>
        <li><span class="glyphicon glyphicon-stop"></span>第二層至第四層每層設有一間多功能房；</li>
        <li><span class="glyphicon glyphicon-stop"></span>第二層至第五層為課室，共12間課室；</li>
        <li><span class="glyphicon glyphicon-stop"></span>第五層設有平台花園；</li>
        <li><span class="glyphicon glyphicon-stop"></span>每層均分別有男女洗手間，設有浴室。</li>
      </ul>

      <ul class="structure-introduce" v-show="currentLang == 'en'">
        <li><span class="glyphicon glyphicon-stop"></span>A self-built five-floor standard school building with garden view and beautiful environment.</li>
        <li><span class="glyphicon glyphicon-stop"></span>The location is very convenient which is close to "So Uk Bus Terminus"</li>
        <li><span class="glyphicon glyphicon-stop"></span>The 1st floor has a 3,000-foot auditorium and meeting room</li>
        <li><span class="glyphicon glyphicon-stop"></span>There is one multi-functional room on each floor, from 2nd to 4th</li>
        <li><span class="glyphicon glyphicon-stop"></span>The 2nd floor to 5th floor is classrooms with a total of 12 classrooms</li>
        <li><span class="glyphicon glyphicon-stop"></span>There is a platform garden on the 5th floor</li>
        <li><span class="glyphicon glyphicon-stop"></span>There are toilets and shower rooms in each floor</li>
      </ul>

      <div class="structure-school">
        <img :src="imgUrl('cz_bg.png')" alt="">
      </div>
  	</div>
  </main>
</template>
<script src="./structure.js"></script>
<style>
.njxy-structure{
  margin-bottom: 30px;
}
.njxy-structure ul.structure-introduce{
  background: #b27524;
  width: 80%;
  margin-left:20%;
  padding:20px 20px 100px;
}
.njxy-structure ul.structure-introduce li{
  margin-bottom: 15px;
  color: #fff;
  /*line-height: 2;*/
  font-size: 18px;
  line-height: 24px;
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
@media (max-width: 768px) {
  .njxy-structure ul.structure-introduce{
    width: 100%;
    margin-left: 0;
  }
  .njxy-structure .structure-school img{
    width: 100%;
  }
  .njxy-structure ul.structure-introduce li{
    font-size: 16px;
    line-height: 20px;
  }  
}
@media (max-width: 480px) {
  .njxy-structure ul.structure-introduce li{
    font-size: 14px;
    line-height: 18px;
  }
}
</style>