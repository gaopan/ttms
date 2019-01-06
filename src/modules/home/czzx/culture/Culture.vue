<template>
  <!-- <main class="content-main" role="main" v-html="content"> -->
  <main class="content-main part1-3" role="main">
  	<ul class="info-list" v-show = "currentLang == 'en'">
			<li :class = "currentLang"><span class="square"></span>Emphasis on the integration of "globalization" and "localization" of students.</li>
			<li :class = "currentLang"><span class="square"></span>Focus on cultivating sludents' "independent learning ability" and "self-learning ability".</li>
			<li :class = "currentLang"><span class="square"></span>Integrate the scientific nature of western education and the national advantage of Chinese cultural heritage.</li>
		</ul>
  	<ul class="info-list" v-show = "currentLang == 'zh_hk'">
			<li :class = "currentLang"><span class="square"></span>重視學子“全球化”與“本地化”的融合發展。</li>
			<li :class = "currentLang"><span class="square"></span> 重點培養學子”獨立學習能力”及”自主學習能力”的素质</li>
			<li :class = "currentLang"><span class="square"></span>融合西方教育的科學性與中國傳統文化的民族性學習優勢。</li>
		</ul>
		<div class="part1-3-picture">
			<img :src="imgUrl('motto.png')">
		</div>
  </main>
</template>
<script src="./culture.js"></script>
