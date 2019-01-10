<template>
  <main class="content-main rxsq-fees" role="main">
    <div class="row fees-top" v-show="currentLang == 'zh_hk'">
      <div class="col-md-7">
        <table class="fees-table">
          <tr>
            <th>年級</th>
            <th>收費（港幣）</th>
            <th>年級</th>
            <th>收費（港幣）</th>
          </tr>
          <tr>
            <td>8</td>
            <td>148,000</td>
            <td>11</td>
            <td>158,000</td>
          </tr>
          <tr>
            <td>9</td>
            <td>148,000</td>
            <td>12</td>
            <td>168,000</td>
          </tr>
          <tr>
            <td>10</td>
            <td>158,000</td>
            <td>13</td>
            <td>168,000</td>
          </tr>
        </table>
      </div>
      <div class="col-md-5 ">
        <div class="fees-scheme">
          <h2>獎學金計劃</h2>
          <p class="fees-amount fees-amount-zh">$ 1000<span>（崇正牛津獎學金）</span></p>
          <p class="fees-amount fees-amount-zh">$ 800<span>（總監嘉賞計劃）</span></p>
          <p class="fees-tip fees-tip-zh">經由學校評選，每學期2位學生可獲得以上獎學金計耋</p>
        </div>
      </div>
    </div>
    <div class="row fees-top" v-show="currentLang == 'en'">
      <div class="col-md-7">
        <table class="fees-table">
          <tr>
            <th>Year</th>
            <th>Fees (HK$)</th>
            <th>Year</th>
            <th>Fees (HK$)</th>
          </tr>
          <tr>
            <td>8</td>
            <td>148,000</td>
            <td>11</td>
            <td>158,000</td>
          </tr>
          <tr>
            <td>9</td>
            <td>148,000</td>
            <td>12</td>
            <td>168,000</td>
          </tr>
          <tr>
            <td>10</td>
            <td>158,000</td>
            <td>13</td>
            <td>168,000</td>
          </tr>
        </table>
      </div>
      <div class="col-md-5 ">
        <div class="fees-scheme">
          <h2>Scholarship Scheme</h2>
          <p class="fees-amount fees-amount-en">$ 1000<span>(TTMS-OIC Scholarship)</span></p>
          <p class="fees-amount fees-amount-en">$ 800<span>(Director's Award)</span></p>
          <p class="fees-tip fees-tip-en">2 students per semester can be awarded the above scholarships with certificate from the school.</p> 
        </div>
      </div>
    </div>
    <div class="row fees-bottom" v-show="currentLang == 'zh_hk'">
      <div class="fees-include">
        <h3>收費表中的費用已包括：</h3>
        <p><span class="glyphicon glyphicon-stop"></span>學校校服一件、運動服一套、學習材料</p>
        <p><span class="glyphicon glyphicon-stop"></span>報名費：港幣300元<span class="fees-include-red">（不設退還）*</span></p>
      </div>
      <div class="fees-notinclude">
        <h3>收費表中的費用不包括：</h3>
        <p><span class="glyphicon glyphicon-stop"></span>英國牛津國際公學課程行政費、債券、報名費、捐獻或其他雜費。</p>
        <p><span class="glyphicon glyphicon-stop"></span>學生保險：這是必要的，學生如有其他保險覆盖則可以免除。請注意，校方建議家長自行安排保險，校方不提供保險計劃來支付學費退款。</p>
        <p><span class="glyphicon glyphicon-stop"></span>雅思考試（如有需要）</p>
        <p><span class="glyphicon glyphicon-stop"></span>公開考試費用</p>
        <p><span class="glyphicon glyphicon-stop"></span>額外的一對一課程（例如A-level、IELTS和音樂課程）</p>
        <p><span class="glyphicon glyphicon-stop"></span>學校專修社團及其活動</p>
        <p><span class="glyphicon glyphicon-stop"></span>校外活動和一些可選的課外活動</p>
      </div>
    </div>
    <div class="row fees-bottom" v-show="currentLang == 'en'">
      <div class="fees-include">
        <h3>Programme Fees include: </h3>
        <p><span class="glyphicon glyphicon-stop"></span>School uniform, sportswear, learning materials</p>
        <p><span class="glyphicon glyphicon-stop"></span>Registration Fee: HK$300<span class="fees-include-red">(non-refundable)*</span></p>
      </div>
      <div class="fees-notinclude">
        <h3>The following fees are not included in the Programme Fees:</h3>
        <p><span class="glyphicon glyphicon-stop"></span>OIC Programme Administrative Fee, Application Fee, Donation Fee, Debenture Fee or other expenses.</p>
        <p><span class="glyphicon glyphicon-stop"></span>Student Insurance is a compulsory unless an alternative cover is provided. Please note that the school does not provide an insurance scheme to cover fee refunds. Parents are encouraged to make their own arrangements.</p>
        <p><span class="glyphicon glyphicon-stop"></span>IELTS test (if needed)</p>
        <p><span class="glyphicon glyphicon-stop"></span>Public examination fee</p>
        <p><span class="glyphicon glyphicon-stop"></span>Additional one-to-one classes (for examples: A-level, IELTS and music lessons)</p>
        <p><span class="glyphicon glyphicon-stop"></span>School Professional Associations and its activities</p>
        <p><span class="glyphicon glyphicon-stop"></span>Off-campus activities and some optional extracurricular activities</p>
      </div>
    </div>
  </main>
</template>
<script src="./fees.js"></script>
<style src='./fees.css'></style>