<template>
  <!-- <main class="content-main" role="main" v-html="content"> -->
  <main class="content-main establishment part1-1" role="main">


		<ul class="info-list"  v-show = "currentLang=='zh_hk'">
			<li :class = "currentLang"><span class="square"></span>崇正中學為乔港崇正總會屬下之中學；</li>

			<li :class = "currentLang"><span class="square"></span>1957年起全心盡意施教勸學：</li>

			<li :class = "currentLang"><span class="square"></span>乃全港唯一不問出身、不计宗教背景、不看“死文憑”，唯重梘學子“自我完善”、“自我超脫”之研學精神的中势</li>

			<li :class = "currentLang"><span class="square"></span>—所真正關懷學生“現在與將來”的中學。</li>

			<!-- <li :class = "currentLang"><span class="square"></span>1926年徐仁苺先生建饑，總會冠以“工商”二字範圍太狭窄，不利於團結廣大客家鄉親，遂決議稱為“香港崇正總會”。</li>
      
      <li :class = "currentLang"><span class="square"></span>香港崇正總會在1922年至1940年期間，先後創辦了4間崇正義學，其經费概由會長胡文虎先生讚助。</li>
      
      <li :class = "currentLang"><span class="square"></span>總會先後創辦了《崇正月刊》、《崇正會刊》,還出版过共15卷的《客族考源》一书。</li>
      
      <li :class = "currentLang"><span class="square"></span>更多歷史成就，请参閱官方網站<a href="http://www.ttms.edu.hk" target="">http://www.ttms.edu.hk</a></li> -->
		</ul>
    <ul class="info-list" v-show = "currentLang=='en'">
      <li :class = "currentLang"><span class="square"></span>Tsung Tsin Middle School is a middle school subordinated to tho Hong Kong Tsung Tsin Association;</li>

      <li :class = "currentLang"><span class="square"></span>A school which has been wholeheartedly educating and teaching students since 1957;</li>

      <li :class = "currentLang"><span class="square"></span>The only school in Hong Kong that only values students"self-improvement and "self-detachment" spirits instead on rigidly emphasize on family birth, religious background, or "stiff diploma";</li>

      <li :class = "currentLang"><span class="square"></span>A school that truly cares for the students* present and future.    </li>
    </ul>
    <div class="part1-1-picture">      
      <img :src="imgUrl('cz_bg.png')">      
    </div>    
  </main>
</template>
<script src="./establishment.js"></script>
