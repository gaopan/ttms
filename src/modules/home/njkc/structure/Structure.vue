<template>
  <main class="content-main njkc-structure" role="main">
  	<div class="structure-title" v-html="content">
  		
  	</div>
  	<ul class="structure-nav">
  		<li v-for="structureNav in structureNavs" key="index">
  			<router-link :to="structureNav.path">
  				{{structureNav.title}}
  			</router-link>
  		</li>
  	</ul>
	  <router-view/>
  </main>
</template>
<script src="./structure.js"></script>
<style src='./structure.css'></style>