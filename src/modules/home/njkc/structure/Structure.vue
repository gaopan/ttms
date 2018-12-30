<template>
  <main class="content-main njkc-structure" role="main">
  	<div class="structure-content">
  		<p class="structure-title">八年級至十一年級英國舍考</p>
      <p class="structure-info">IGCSE與O Level是世界公認的成熟體系，是基於選科的初中教育體系。</p>
      <p class="structure-title">十二至十三年級英圉高考</p>
      <p class="structure-info">英國高中課程，簡稱A level，歷史悠久，認受性廣泛，被幾乎所有英語授課的大學作為招生的入學標準。</p>
  	</div>
    <div class="structure-requirements">
      <div class="row requirements-content">
        <p class="requirements-total">報讀大學要求</p>
        <div class="col-md-6">
          <p class="requirements-title">英國大學</p>
          <p class="requirements-info">3-4個中學高級水準考試（A-Level）學科英國高校招生服務準備課程</p>
        </div>
        <div class="col-md-6">
          <p class="requirements-title">美國大學</p>
          <p class="requirements-info">3-4個中學高級水準考試（A-Level）學科美國高等院校考試/美國學業能力傾向測験準備課程</p>
        </div>
        <div class="col-md-6">
          <p class="requirements-title">香港/新加坡大學</p>
          <p class="requirements-info">4個中學高級水準考試（A-Level）學科英文授課</p>  
        </div>
        <div class="col-md-6">
          <p class="requirements-title">全球其他國家及地區</p>
          <p class="requirements-info">4個中學高級水準考試（A-Level）學科母語授課（如需要）</p>
        </div>
      </div>
    </div>
  	<div class="structure-nav">
  			<router-link v-for="structureNav in structureNavs" :to="structureNav.path">
  				{{structureNav.title}}
  			</router-link>
  	</div>
	  <router-view/>
  </main>
</template>
<script src="./structure.js"></script>
<style src='./structure.css'></style>