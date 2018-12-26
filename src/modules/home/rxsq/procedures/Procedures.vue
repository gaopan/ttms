<template>
  <main class="content-main rxsq-procedures" role="main">
  <!-- <main class="content-main" role="main" v-html="content"> -->
  	<ul>
  		<li>通過線上報名收到入學申請表，請填妥入學申請表及下列有關文件親身或郵寄至：<span class="procedures-address">香港九龍長沙灣廣利道11號 香港崇正中學（國際課程入學部）</span></li>
  		<li>a. 校方收取入學申請表及核對申請人提交的有關資料後，將於7個工作天内發出面試通告書。</li>
  		<li>b. 面試分為兩部分：英語面談口試及入學能力測試。</li>
  		<li>c. 面試後校方計算試卷分數，成績及錄取結果於面試後14個工作天内以書面公佈。</li>
  		<li>d. 獲取錄的申請人請根據錄取通知書上指定日期繳交按金港幣10,000元（不設退還）<span class="procedures-color-red">*</span>，作留位之用。</li>
  		<li>e. 收費及相關款項必須根據錄取通知書上的指定日期或之前缴付。</li>
      <ul class="procedures-files">
        <h3>有關文件如下：</h3>
        <li>身份證副本及護照副本</li>
        <li>最近三年學歷證明副本</li>
        <li>相關證明檔副本（請參考入學申請表）</li>
        <li>報名費繳款證明：接受郵寄劃線支票拾頭為「星光88有限公司」或轉帳到中國銀行（香港）戶口 ： 012-611-0-013044-8</li>
      </ul>
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