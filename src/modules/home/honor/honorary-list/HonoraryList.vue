<template>
  <main class="content-main" role="main">
  	<div class="honor-honorary-list">
     <a :class="{'honorary-list-active':active == 2017}" @click="turnYear('2017')">牛津國際公學2017屆畢業生</a> 
     <a :class="{'honorary-list-active':active == 2018}" @click="turnYear('2018')">牛津國際公學2018屆畢業生</a> 
    </div>
    <div class="honorary-list-years">
    	<table v-if="active == 2017">
			<tr><th>等級</th><th>大學</th><th>學位課程</th></tr>
			<tr v-for="honorItem in honoraryList"><td>{{honorItem.grade}}</td><td>{{honorItem.college}}</td><td>{{honorItem.course}}</td></tr>
		</table>
    	<table v-else="active == 2018">
			<tr><th>大學</th><th>學位課程</th></tr>
			<tr v-for="honorItem in honoraryList"><td>{{honorItem.college}}</td><td>{{honorItem.course}}</td></tr>
		</table>
    </div>
  </main>
</template>
<script src="./honorary-list.js"></script>
<style src='./honorary-list.css'></style>