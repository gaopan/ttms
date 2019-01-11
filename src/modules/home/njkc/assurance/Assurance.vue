<template>
  <main class="content-main njkc-assurance" role="main">
    <div class="row zh_hk" v-show="currentLang == 'zh_hk'">
  		<div class="col-md-4 assurance-content">
  			<img :src="imgUrl('clock.png')" alt="">
  		</div>
  		<div class="col-md-8">
  			<p class="assurance-title">任課老師由牛津國際公學委派；</p>
  			<p>授課老師全為母語教學，並在各自領域取得傑出成就。英語授課科目的資深外籍教師，母語為英語，來自英國、美國、加拿大以及其他國家；中文科目授課老師，母語為中文，有二十餘年教學經驗，出版60餘本中文書籍，獲獎無數之餘，也擔任香港各類中文比賽的評審和出版社主編；</p>
  			<p>教師會定期撰寫學習報告，評估學生的學習進度，報告將提交學校教學委員會，並與家長進行一對一報告，保障學生不斷進步；</p>
  			<p>秉持著中西融合的教育理念，學校邀請葉問門派的詠春尹教練開設大師班，學習文化色彩濃厚的詠春拳法。尹教練本身也擔任室内設計專業的大學講師，畢業於美國與香港名校。</p>
  		</div>
  	</div>
    <div class="row en" v-show="currentLang == 'en'">
      <div class="col-md-4 assurance-content">
        <img :src="imgUrl('clock.png')" alt="">
      </div>
      <div class="col-md-8">
        <p class="assurance-title">The teacher is recognized by Oxford International College</p>
        <p>
          Teachers are all taught in their mother tongue and have achieved outstanding achievements in their respective fields. Senior foreign teachers in English-language subjects, are native English speaker and come from the United Kingdom, the United States, Canada, and other countries;The Chinese language teacher is native Chinese speaker herself and has more than 20 years of teaching experience. She has published more than 60 Chinese books and won numerous awards. She is also the editor of various Chinese competitions in Hong Kong and Chief Editor from publisher.</p>
        <p>
          Teachers will regularly write study reports to assess the progress of students. The report will be submitted to the school's teaching committee and will be report to parents to ensure students' improvement.
        </p>
        <p>
          Holding the mission of integrate Chinese culture and the Western education, the school invites Ms Terry Wan, the Wing Chun coach originates from Master Yip Man to open a master class for students to learn Wing Chun. Ms Wan is a university lecturer herself in Interior Architectural Design and graduated from top university in USA and HK as well.</p>
      </div>
    </div>
  </main>
</template>
<script src="./assurance.js"></script>
<style src='./assurance.css'></style>