<template>
  <main class="content-main part1-2" role="main">
 <!--  <main class="content-main" role="main" v-html="'achievement'"> -->
		<ul class="info-list" v-show = "currentLang=='zh_hk'">
			<li :class = "currentLang"><span class="square"></span>香港崇正總會是目前全世界創辦時間最早，影響力最大的客家人社會组織之一,成立於1921年9月29日，至今已經走過了風風雨雨的90年歲月。</li>
			<li :class = "currentLang"><span class="square"></span>香港崇正總會，原名“旅港崇正工商總會"，創建人有張發奎、胡文虎、林翼中、賴際熙、李瑞琴、黄茂林等。</li>
			<li :class = "currentLang"><span class="square"></span>1926年徐仁苺先生建饑，總會冠以“工商”二字範圍太狭窄，不利於團結廣大客家鄉親，遂決議稱為“香港崇正總會”。</li>
			<li :class = "currentLang"><span class="square"></span>香港崇正總會在1922年至1940年期間，先後創辦了4間崇正義學，其經费概由會長胡文虎先生讚助。</li>
			<li :class = "currentLang"><span class="square"></span>總會先後創辦了《崇正月刊》、《崇正會刊》,還出版过共15卷的《客族考源》一书。</li>
			<li :class = "currentLang"><span class="square"></span>更多歷史成就，请参閱官方網站<a href="http://www.ttms.edu.hk" target="">http://www.ttms.edu.hk</a></li>
		</ul>  	
		<ul class="info-list" v-show = "currentLang=='en'">
			
			<li :class = "currentLang"><span class="square"></span>Hong Kong Tsung Tsin Association is one of the world' s earliest and most influential Hakka social organizations.It was established on September 29,1921 and has been through the ups and downs of 90 years.</li>
			<li :class = "currentLang"><span class="square"></span>The founders of Hong Kong Tsung Tsin Association, formerly known as "Tsung Tsin Industry and Commerce Association in Hong Kong" include Zhang Fakui, Aw Boon Haw, Lin Yizhong, Lai Jixi, Li Ruiqin, Huang Maolin and so on.</li>
			<li :class = "currentLang"><span class="square"></span>In 1926.Mr.Xu Renshou suggested that the scope was limited by the "Commerce and Induslry" in the name, which was not conducive to uniting Hakka folks, so the name was amended as "Hong Kong Tsung Tsin Association" since then.</li>
			<li :class = "currentLang"><span class="square"></span>During the period from 1922 to 1940, the Hong Kong Tsung Tsin Association established four Tsung Tsin charity schools, and the funds were sponsored by the president Mr.Aw Boon Haw.</li>
			<li :class = "currentLang"><span class="square"></span>The Association has successively launched the Tsung Tsin Monthly and Tsung Tsin Association Journal, and published the book total 5 volumes of Hakka Origin Investigation.</li>
			<li :class = "currentLang"><span class="square"></span>For more achievements over the past, please refer to the official website http://www.ttms.edu.hk</li>

		</ul>

  </main>
</template>
<script src="./achievement.js"></script>
