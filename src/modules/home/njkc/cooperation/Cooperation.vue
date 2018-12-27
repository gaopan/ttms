<template>
  <main class="content-main njkc-cooperation" role="main">
  	<ul v-html="content">
  		
  	</ul>
    <div class="cooperation-footer">
      <img src="../../../../assets/imgs/school_bg.png" alt="">
    </div>
  </main>
</template>
<script src="./cooperation.js"></script>
<style>
.njkc-cooperation ul li{
  padding: 6px 12px;
  margin-bottom: 10px;
}
.njkc-cooperation ul li.associations-foottip{
  color: red;
}
.njkc-cooperation ul li.associations-title{
  background: #b27524;
  width: 30%;
  color: #fff;
}
.njkc-cooperation .cooperation-footer{
  width: 100%;
  background: #111836;
  padding: 10px;
  border-radius: 20px;
}
.njkc-cooperation .cooperation-footer img{
  display: block;
  margin: 0 auto;
}
</style>