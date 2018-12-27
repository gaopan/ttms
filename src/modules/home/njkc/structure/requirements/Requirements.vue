<template>
  <main class="content-main njkc-structure-requirements" role="main">
    <ul v-html="content">
    	
    </ul>
  </main>
</template>
<script src="./requirements.js"></script>
<style>
.njkc-structure-requirements{
  left: 0;
  border: 2px solid #b27524;
  padding-left: 10px;
  padding-top: 10px;
  height: 500px;
  width: 100%;
  background: #dcb454;
}
.njkc-structure-requirements .requirements-title{
  margin-bottom: 10px;
  width:400px;
}
.njkc-structure-requirements ul li{
  margin-bottom: 10px;
}
</style>