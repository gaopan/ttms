<template>
  <main class="content-main rxsq-requirements" role="main">
    <img class="requirements-bg" :src="imgUrl('anthony-delanoix-17747-unsplash.jpg')" alt="">
  	<ul class="requirements-content" v-show="currentLang == 'zh_hk'">
  		<li><span class="glyphicon glyphicon-stop"></span>12歲或以上<span class="requirements-tip">（合資格入讀8年級至13年級學生）</span></li>
  		<li><span class="glyphicon glyphicon-stop"></span>香港永久性居民</li>
  		<li><span class="glyphicon glyphicon-stop"></span>或為合法居港並可在港接受教育人士<span class="requirements-tip">（如持有香港身份證居民）</span></li>
  		<li><span class="glyphicon glyphicon-stop"></span>或持有其他國籍的人士、在港工作的外籍人士子女等</li>
  	</ul>
    <ul class="requirements-content" v-show="currentLang == 'en'">
      <li><span class="glyphicon glyphicon-stop"></span>12 years old or above</li>
      <li><span class="glyphicon glyphicon-stop"></span>Hong Kong permanent residents;</li>
      <li><span class="glyphicon glyphicon-stop"></span>or have the right of residence and permission of receiving education in Hong Kong;</li>
      <li><span class="glyphicon glyphicon-stop"></span>or others countries’ residents.</li>
    </ul>
  </main>
</template>
<script src="./requirements.js"></script>
<style src='./requirements.css'></style>