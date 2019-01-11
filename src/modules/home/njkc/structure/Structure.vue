<template>
  <main class="content-main njkc-structure" role="main">
    <div class="structure-content" v-show="currentLang == 'zh_hk'">
      <p class="structure-title">八年級至十一年級 英國會考</p>
      <p class="structure-info">IGCSE與O Level是世界公認的成熟體系，是基於選科的初中教育體系。</p>
      <p class="structure-title">十二至十三年級 英國高考</p>
      <p class="structure-info">英國高中課程，簡稱A level，歷史悠久，認受性廣泛，被幾乎所有英語授課的大學作為招生的入學標準。</p>
    </div>
  	<div class="structure-content" v-show="currentLang == 'en'">
  		<p class="structure-title">Year 8 to Year 11 IGCSE/O Level</p>
      <p class="structure-info">IGCSE and O Level are worldwide recognized mature systems in the world and are based on the junior high school education system.</p>
      <p class="structure-title">Year 12 to Year 13 AS + A Level</p>
      <p class="structure-info">The British General Certificate of Education Advanced Level, referred to as A level, has a long history and wide acceptance, and is accepted as an admission standard by almost all Englishspeaking universities.</p>
  	</div>

    <div class="structure-requirements" v-show="currentLang == 'zh_hk'">
      <div class="row requirements-content">
        <p class="requirements-total">報讀大學要求</p>
        <div class="col-md-6">
          <p class="requirements-title">英國大學</p>
          <p class="requirements-info">3-4個中學高級水準考試（A-Level）學科</p>
          <p class="requirements-info">英國高校招生服務準備課程</p>
        </div>
        <div class="col-md-6">
          <p class="requirements-title">美國大學</p>
          <p class="requirements-info">3-4個中學高級水準考試（A-Level）學科</p>
          <p class="requirements-info">美國高等院校考試/美國學業能力傾向測験準備課程</p>
        </div>
        <div class="col-md-6">
          <p class="requirements-title">香港/新加坡大學</p>
          <p class="requirements-info">4個中學高級水準考試（A-Level）學科</p>  
          <p class="requirements-info">英文授課</p>
        </div>
        <div class="col-md-6">
          <p class="requirements-title">全球其他國家及地區</p>
          <p class="requirements-info">4個中學高級水準考試（A-Level）學科</p>
          <p class="requirements-info">母語授課（如需要）</p>
        </div>
      </div>
    </div>
    
    <div class="structure-requirements" v-show="currentLang == 'en'">
      <div class="row requirements-content">
        <p class="requirements-total">Requirements for Higher Education</p>
        <div class="col-md-6">
          <p class="requirements-title">UK Universities</p>
          <p class="requirements-info">3-4 A-level subjects </p>
          <p class="requirements-info">UCAS preparation</p>
        </div>
        <div class="col-md-6">
          <p class="requirements-title">US Universities</p>
          <p class="requirements-info">3-4 A-level subjects </p>
          <p class="requirements-info">ACT/SAT preparation</p>
        </div>
        <div class="col-md-6">
          <p class="requirements-title">Universities of Hong Kong/Singapore</p>
          <p class="requirements-info">4 A-Level subjects, </p>  
          <p class="requirements-info">English as Teaching Language</p>
        </div>
        <div class="col-md-6">
          <p class="requirements-title">Rest of the world</p>
          <p class="requirements-info">4 A-level subjects, </p>
          <p class="requirements-info">plus native language if required</p>
        </div>
      </div>
    </div>

    <div class="structure-nav" v-show="currentLang == 'zh_hk'">
        <a :class="{'structure-nav-active':active == structureNav.name}" v-for="structureNav in structureNavs[0]" @click="turnYears(structureNav.name)">
          {{structureNav.title}}
        </a>
    </div>

  	<div class="structure-nav" v-show="currentLang == 'en'">
  			<a :class="{'structure-nav-active':active == structureNav.name}" v-for="structureNav in structureNavs[1]" @click="turnYears(structureNav.name)">
  				{{structureNav.title}}
  			</a>
  	</div>

    <div class="njkc-year" v-show="currentLang == 'zh_hk'">
      <table ref="njkcTable">
        <tr>
          <th class="njkc-year-sortnum">序號</th>
          <th class="njkc-year-term">學期</th>
          <th class="njkc-year-course">科目名稱</th>
          <th class="njkc-year-igcse">
            <span v-if="active == 'eightYear' || active == 'nineYear' ||active == 'tenYear' ||active == 'elevenYear' ">
              IGCSE
            </span>
            <span v-else-if="active == 'twelveYear' || active == 'twelveThirteenYear'">
              AL
            </span>
          </th>
        </tr>
        <tr v-for="courseYear in courseYears" :class="{'years-subtotal':courseYear.IGCSE&&courseYear.IGCSE.type=='class'}">
          <td>{{courseYear.rank}}</td>
          <td>{{courseYear.semester}}</td>
          <td>{{courseYear.courseTitle}}</td>
          <!-- <td>{{courseYear.IGCSE}}</td> -->
          <td>
            <span v-if = "courseYear.IGCSE&&courseYear.IGCSE.type=='icon'">
              <i :class="courseYear.IGCSE.value"></i>
            </span>
            <span v-else-if = "courseYear.IGCSE&&courseYear.IGCSE.type=='class'||courseYear.IGCSE.type=='string'">
              {{courseYear.IGCSE.value}}
            </span>
            <!-- <span v-else-if = ""></span> -->
          </td>
        </tr>
      </table>     
    </div>

    <div class="njkc-year" v-show="currentLang == 'en'">
  	  <table ref="njkcTable">
        <tr>
          <th class="njkc-year-sortnum">Rank</th>
          <th class="njkc-year-term">Semester</th>
          <th class="njkc-year-course">Course Title</th>
          <th class="njkc-year-igcse">
            <span v-if="active == 'eightYear' || active == 'nineYear' ||active == 'tenYear' ||active == 'elevenYear' ">
              IGCSE
            </span>
            <span v-else-if="active == 'twelveYear' || active == 'twelveThirteenYear'">
              AL
            </span>
          </th>
        </tr>
        <tr v-for="courseYear in courseYears" :class="{'years-subtotal':courseYear.IGCSE&&courseYear.IGCSE.type=='class'}">
          <td>{{courseYear.rank}}</td>
          <td>{{courseYear.semester}}</td>
          <td>{{courseYear.courseTitle}}</td>
          <!-- <td>{{courseYear.IGCSE}}</td> -->
          <td>
            <span v-if = "courseYear.IGCSE&&courseYear.IGCSE.type=='icon'">
              <i :class="courseYear.IGCSE.value"></i>
            </span>
            <span v-else-if = "courseYear.IGCSE&&courseYear.IGCSE.type=='class'||courseYear.IGCSE.type=='string'">
              {{courseYear.IGCSE.value}}
            </span>
            <!-- <span v-else-if = ""></span> -->
          </td>
        </tr>
      </table>     
    </div>
  </main>
</template>
<script src="./structure.js"></script>
<style src='./structure.css'></style>