<template>
  <main class="content-main honor-candidates" role="main">
  	<ul v-show="currentLang == 'zh_hk'">
		<li class="candidates-title">2018年的畢業生中有許多傑出的學生：</li>
		<li><span class="glyphicon glyphicon-stop"></span>Lenny Kwok（5A * A -香港中文大學全球商業）</li>
		<li><span class="glyphicon glyphicon-stop"></span>Karen Poon（5A * -劍橋工程學院）</li>
		<li><span class="glyphicon glyphicon-stop"></span>Angela Lee（4A * A -劍橋醫學）</li>
		<li><span class="glyphicon glyphicon-stop"></span>Avinash Sekar（4A * -劍橋大學經濟學）</li>
		<li><span class="glyphicon glyphicon-stop"></span>Shazril Suhail（4A * -劍橋工程學院）</li>
		<li><span class="glyphicon glyphicon-stop"></span>Jimmy Wong（3A * -劍橋工程學院）</li>
  	</ul>

  	<ul v-show="currentLang == 'en'">
		<li class="candidates-title">Many of the outstanding candidates from class of 2018 are as the following:</li>
		<li><span class="glyphicon glyphicon-stop"></span>Lenny Kwok (5A*A - Global Business in The Chinese University of Hong Kong)</li>
		<li><span class="glyphicon glyphicon-stop"></span>Karen Poon (5A* - Faculty of Engineering in Cambridge University)</li>
		<li><span class="glyphicon glyphicon-stop"></span>Angela Lee (4A*A - Medicine in Cambridge University)</li>
		<li><span class="glyphicon glyphicon-stop"></span>Avinash Sekar (4A* - Economics in Cambridge University)</li>
		<li><span class="glyphicon glyphicon-stop"></span>Shazril Suhail (4A* - Faculty of Engineering in Cambridge University)</li>
		<li><span class="glyphicon glyphicon-stop"></span>Jimmy Wong (3A* - Faculty of Engineering in Cambridge University)</li>
  	</ul>
  </main>
</template>
<script src="./candidates.js"></script>
<style>
.honor-candidates ul li{
	margin-bottom: 20px;
	padding: 6px 12px;
}
.honor-candidates ul li.candidates-title{
	background: #b27524;
	color: #fff;
	font-size: 18px;
	/*line-height: 3;*/
	line-height: 28px;
	font-weight: bold;
}
.honor-candidates .glyphicon-stop{
	margin-right: 10px;
}
@media (max-width: 768px) {
	.honor-candidates ul li.candidates-title{
		font-size: 16px;
	}
    .honor-candidates ul li{
    	margin-bottom: 16px;
		font-size: 14px;
    } 
}
@media (max-width: 480px) {
	.honor-candidates ul li.candidates-title{
		font-size: 14px;
	}
    .honor-candidates ul li{
		font-size: 14px;
		margin-bottom: 10px;
    } 

}
</style>