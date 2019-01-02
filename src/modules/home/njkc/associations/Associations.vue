<template>
  <main class="content-main njkc-associations" role="main">
  	<div class="row associations-content zh_hk" v-show="currentLang == 'zh_hk'">
  		<img :src="imgUrl('art.png')" alt="">
  		<div class="col-md-6">
  			<p class="associations-title">表演藝術社團</p>
  			<p class="associations-info">藝術社團旨在幫助學生發展創造力，通過藝術作品放鬆身心。這是一個發展藝術技能的好機會，同時讓學生有機會從學術學習中抽出時間，享受藝 術！歡迎所有想希望通過藝術表演體現自我的學生。</p>
  		</div>
  		<div class="col-md-6">
  			<p class="associations-title">醫學健康社圍</p>
  			<p class="associations-info">歡迎醫學方向和非醫學方向的學生參加談話和討論，内容關於影響當前醫學的各類問題（包括備受爭議的國民醫療服務體系、醫學倫理，從醫療、 經濟學和工程學等不同角度探索醫療保健。這是開發可遷移技能的絕佳機會，如人際交往、溝通技巧、團隊精神和大學面試準備。</p>
  		</div>
  		<div class="col-md-6">
  			<p class="associations-title">金融經濟社團</p>
  			<p class="associations-info">活動包括以下内容：討論時事、處理統計問題、辯論、博弈論問題、股票挑戰賽、牛津激勵活動、特邀嘉賓演講。</p>
  		</div>
  		<div class="col-md-6">
  			<p class="associations-title">英語精修班</p>
  			<p class="associations-info">按照不同年級酌情安排。</p>
  		</div>
  		<p class="col-md-12 associations-foot">
  			參與社团另行收費。
  		</p>
  	</div>
    <div class="row associations-content en" v-show="currentLang == 'en'">
      <img :src="imgUrl('art.png')" alt="">
      <div class="col-md-6">
        <p class="associations-title">Performing Art Association</p>
        <p class="associations-info">This association aims to help students develop creativity and relax through art work. This is a great opportunity to develop artistic skills, while giving students the opportunity to take time out of academic study and enjoy the arts! All students who want to express themselves through artistic performance are welcome.</p>
      </div>
      <div class="col-md-6">
        <p class="associations-title">Medical And Health Association</p>
        <p class="associations-info">Students in the medical and non-medical fields are welcome to participate in conversations and discussions on various issues affecting current medicine (including the controversial national medical service system and medical ethics), from different perspectives such as medical, economics and engineering, medical insurance. This is a great opportunity to develop transferable skills such as interpersonal skills, communication skills, teamwork and college interview preparation.</p>
      </div>
      <div class="col-md-6">
        <p class="associations-title">Financial and Economical Association</p>
        <p class="associations-info">Activities include the following: discussing current events, dealing with statistical issues, debates, game theory issues, stock challenges, Oxford incentives, and guest speakers.</p>
      </div>
      <div class="col-md-6">
        <p class="associations-title">English Advancement Class</p>
        <p class="associations-info">Arrange according to the situation of the students' level.</p>
      </div>
      <p class="col-md-12 associations-foot">
        Participating the associations will have additional charges.
      </p>
    </div>
  </main>
</template>
<script src="./associations.js"></script>
<style>
.njkc-associations img{
	display: block;
	margin: 0 auto;
}
.njkc-associations p.associations-title{
	width: 70%;
	color: #b27524;
	line-height: 3;
	/*border-bottom: 4px solid #b27524;*/
	font-weight: bold;
	font-size: 18px;
}
.njkc-associations .zh_hk p.associations-info{
  text-indent: 2em;
  margin-bottom: 40px;
  width: 80%;
}
.njkc-associations .en p.associations-info{
	/*text-indent: 2em;*/
	margin-bottom: 40px;
	width: 80%;
}
.njkc-associations .associations-foot{
	color: red;
}
@media (max-width: 990px) {
  .njkc-associations p.associations-title{
    width: 94%;
    font-size: 16px;
    margin: 0 auto;
    line-height: 30px;
  }
  .njkc-associations .zh_hk p.associations-info{
    font-size: 14px;
    width: 94%;
    margin: 0 auto 30px;
  }
  .njkc-associations .en p.associations-info{
    font-size: 14px;
    width: 94%;
    margin: 0 auto 30px;
  }
  .njkc-associations p.associations-foot{
    font-size: 14px;
    width: 94%;
    margin: 20px auto 0;
  }
  
}
@media (max-width: 480px) {
  .njkc-associations p.associations-title{
    width: 100%;
    font-size: 16px;
  }
  .njkc-associations .zh_hk p.associations-info{
    font-size: 14px;
    width: 100%;
  }
  .njkc-associations .en p.associations-info{
    font-size: 14px;
    width: 100%;
  }
  
}
</style>