<template>
  <main class="content-main" role="main">
  	<div class="honor-honorary-list" v-show="currentLang == 'zh_hk'">
     <a :class="{'honorary-list-active':active == 2017}" @click="turnYear('2017')">2017屆牛津國際公學畢業生</a> 
     <a :class="{'honorary-list-active':active == 2018}" @click="turnYear('2018')">2018屆牛津國際公學畢業生</a> 
    </div>

    <div class="honor-honorary-list" v-show="currentLang == 'en'">
     <a :class="{'honorary-list-active':active == 2017}" @click="turnYear('2017')">Oxford International College Class of 2017</a> 
     <a :class="{'honorary-list-active':active == 2018}" @click="turnYear('2018')">Oxford International College Class of 2018</a> 
    </div>

    <div class="honorary-list-years">
    	<table v-show="active == 2017 && currentLang == 'zh_hk'">
  			<tr><th>等級</th><th>大學</th><th>學位課程</th></tr>
  			<tr v-for="honorItem in honoraryList"><td>{{honorItem.grade}}</td><td>{{honorItem.college}}</td><td>{{honorItem.course}}</td></tr>
  		</table>

      <table v-show="active == 2017 && currentLang == 'en'">
        <tr><th>Grade</th><th>University</th><th>Degree Course</th></tr>
        <tr><td>A*A*A</td><td>University of Oxford</td><td>Medicine</td></tr>
        <tr><td>A*A*A*AA</td><td>University of Birmingham</td><td>Classics</td></tr>
        <tr><td>A*A*A</td><td>University College London (UCL)</td><td>Biochemistry</td></tr>
        <tr><td>A*AA</td><td>University of Sheffield</td><td>Biochemistry</td></tr>
        <tr><td>A*AA</td><td>University College London (UCL)</td><td>Medicine</td></tr>
        <tr><td>A*AA</td><td>University of Glasgow</td><td>Medicine</td></tr>
        <tr><td>A*AA</td><td>University College London (UCL)</td><td>Engineering</td></tr>
        <tr><td>A*AA</td><td>University of Warwick</td><td>Mathematics</td></tr>
        <tr><td>A*AB</td><td>University of Bristol</td><td>Computer Science</td></tr>
        <tr><td>AAB</td><td>University of Edinburgh</td><td>Architecture</td></tr>
        <tr><td>A*A*A</td><td>University of Warwick</td><td>Law</td></tr>
        <tr><td>A*A*A</td><td>University College London (UCL)</td><td>Mathematics with Management Studies</td></tr>
        <tr><td>A*A*A*A*A</td><td>University College London (UCL)</td><td>Biomedical Science</td></tr>
        <tr><td>A*A*A</td><td>University of Newcastle</td><td>Medicine</td></tr>
        <tr><td>A*AAA</td><td>University College London (UCL)</td><td>Biomedical Science</td></tr>
        <tr><td>A*AA</td><td>University College London (UCL)</td><td>Economics</td></tr>
        <tr><td>A*AA</td><td>University College London (UCL)</td><td>Computer Science</td></tr>
        <tr><td>AAA</td><td>University of Surrey</td><td>Veterinary Medicine and Science</td></tr>
      </table>

      <table v-show="active == 2018 && currentLang == 'zh_hk'">
  			<tr><th>大學</th><th>學位課程</th></tr>
  			<tr v-for="honorItem in honoraryList"><td>{{honorItem.college}}</td><td>{{honorItem.course}}</td></tr>
  		</table>

      <table v-show="active == 2018 && currentLang == 'en'">
        <tr><th>University</th><th>Degree Course</th></tr>
        <tr><td>University of Oxford</td><td>Medicine</td></tr>
        <tr><td>University of Cambridge</td><td>Medicine,Civil Engineering,Economics</td></tr>
        <tr><td>University of Birmingham</td><td>Medicine,Physics</td></tr>
        <tr><td>University College London (UCL)</td><td>Medicine,Civil Engineering,Economics</td></tr>
        <tr><td>University of Sheffield</td><td>Biomedical Sciences,Physics</td></tr>
        <tr><td>Imperial College London</td><td>Medicine,Civil Engineering</td></tr>
        <tr><td>University of Glasgow</td><td>Dentistry,Sociology</td></tr>
        <tr><td>Kings College London</td><td>Medicine,Pharmacy</td></tr>
        <tr><td>University of Warwick</td><td>Biomedical Sciences</td></tr>
        <tr><td>University of Bristol</td><td>Electrical Engineering</td></tr>
        <tr><td>University of Edinburgh</td><td>Electrical Engineering</td></tr>
        <tr><td>Royal College of Surgeons,Ireland</td><td>Medicine</td></tr>
        <tr><td>Heriot-Watt University</td><td>Actuarial Science</td></tr>
        <tr><td>University of Central Lancashire</td><td>Medicine and Surgery</td></tr>
        <tr><td>University of Newcastle</td><td>Medicine,Dentistry,Sociology</td></tr>
        <tr><td>University of Essex</td><td>Management and Marketing</td></tr>
        <tr><td>University of Hong Kong (HKU)</td><td>International Business and Global Management</td></tr>
        <tr><td>University of Manchester</td><td>Actuarial Science and Mathematics</td></tr>
        <tr><td>University of Surrey</td><td>Business Management</td></tr>
      </table>
    </div>
  </main>
</template>
<script src="./honorary-list.js"></script>
<style src='./honorary-list.css'></style>