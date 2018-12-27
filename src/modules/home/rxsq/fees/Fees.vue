<template>
  <main class="content-main rxsq-fees" role="main">
  	<ul v-html="content">
  		
  	</ul>
  </main>
</template>
<script src="./fees.js"></script>
<style>
.rxsq-fees table.fees-table{
  width: 100%;
}
.rxsq-fees table.fees-table th{
  background: #262162;
  padding: 6px 12px;
  border: 1px solid #b27524;
  border-bottom: 2px solid #b27524;
  color: #fff;
}
.rxsq-fees table.fees-table td{
  padding: 6px 12px;
  border: 1px solid #b27524;
}
.rxsq-fees .fees-content li{
  margin-bottom: 10px;
}
.rxsq-fees .fees-scheme{
  border: 2px solid #b27524;
  margin-left: 50px;
  margin-bottom: 10px;
  padding: 10px 10px 0 10px;
  width: 300px;
  text-align: center;
  background: #d8ac42;
  color: #fff;
}
.rxsq-fees .fees-content .fees-content-red{
  color: red;
}
</style>