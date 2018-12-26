<template>
  <main class="content-main rxsq-procedures" role="main">
  	<ul v-html="content">
  	</ul>
  </main>
</template>
<script src="./procedures.js"></script>
<style>
.rxsq-procedures ul li{
  margin-bottom: 10px;
}
.rxsq-procedures ul li span.procedures-address{
  
}
.rxsq-procedures ul ul.procedures-files li{
  /*text-indent: 2em;*/
}
.rxsq-procedures .procedures-color-red{
  color:red;
}
</style>