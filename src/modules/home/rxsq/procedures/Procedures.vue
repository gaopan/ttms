<template>
  <main class="content-main rxsq-procedures" role="main">
    <div class="procedures-content" v-show="currentLang == 'zh_hk'">
      <ul class="procedures-steps">
        <li class="procedures-steps-title">通過線上報名收到入學申請表，請填妥入學申請表及下列有關文件親身或郵寄至：</li>
        <li class="procedures-steps-address">香港九龍長沙灣廣利道11號 香港崇正中學（國際課程入學部）</li>
        <li>a. 校方收取入學申請表及核對申請人提交的有關資料後，將於7個工作天内發出面試通告書；</li>
        <li>b. 面試分為兩部分：英語面談口試及入學能力測試；</li>
        <li>c. 面試後校方計算試卷分數，成績及錄取結果於面試後14個工作天内以書面公佈；</li>
        <li>d. 獲取錄的申請人請根據錄取通知書上指定日期繳交按金港幣10,000元（不設退還）*，作留位之用；</li>
        <li>e. 收費及相關款項必須根據錄取通知書上的指定日期或之前缴付。</li>
      </ul>
      <ul class="procedures-files">
        <li class="procedures-files-title">有關文件如下：</li>
        <li><span class="glyphicon glyphicon-stop"></span>身份證副本及護照副本</li>
        <li><span class="glyphicon glyphicon-stop"></span>最近三年學歷證明副本</li>
        <li><span class="glyphicon glyphicon-stop"></span>相關證明檔副本（請參考入學申請表）</li>
        <li><span class="glyphicon glyphicon-stop"></span>報名費繳款證明：接受郵寄劃線支票拾頭為「星光88有限公司」或轉帳到中國銀行（香港）戶口 ： 012-611-0-013044-8</li>
        <!-- <li class="procedures-files-tip">申請人因退學或其他原因不能入學，報名費及按金將不獲退款。</li> -->
      </ul>
      <div class="procedures-timeline">
        <div class="timeline-total">
          報名時間線
        </div>
        <ul>
          <li class="timeline-left">
            <span class="glyphicon glyphicon-adjust"></span>
            <span class="timeline-title">(2018)</span>
            <div class="timeline-item">
              <p class="timeline-item-title">五月至七月</p>
              <p>現場報名及面試</p>
            </div>
          </li>
          <li class="timeline-right">
            <div class="timeline-item">
              <p class="timeline-item-title">十一月中旬</p>
              <p>報名開始</p>
            </div>
            <span class="glyphicon glyphicon-adjust"></span>
          </li>
          <li class="timeline-left">
            <span class="timeline-title">(2019)</span>
            <span class="glyphicon glyphicon-adjust"></span>
            <div class="timeline-item">
              <p class="timeline-item-title">七月初</p>
              <p>報名截止（外籍申請人）</p>
            </div>
          </li>
          <li class="timeline-right">
            <span class="glyphicon glyphicon-adjust"></span>
            <div class="timeline-item">
              <p class="timeline-item-title">七月九日</p>
              <p>教育局公佈自行分配學位及統一派位結果</p>
            </div>
          </li>
          <li class="timeline-left">
            <div class="timeline-item">
              <p class="timeline-item-title">八月三十一日</p>
              <p>報名截止（本地申請人）</p>
            </div>
            <span class="glyphicon glyphicon-adjust"></span>
          </li>
          <li class="timeline-right">
            <span class="glyphicon glyphicon-adjust"></span>
            <div class="timeline-item">
              <p class="timeline-item-title">九月</p>
              <p>先修班</p>
            </div>
          </li>
          <li class="timeline-left">
            <div class="timeline-item">
              <p class="timeline-item-title">九月底</p>
              <p>迎新</p>
            </div>
            <span class="glyphicon glyphicon-adjust"></span>
          </li>
          <li class="timeline-right">
            <span class="glyphicon glyphicon-adjust"></span>
            <div class="timeline-item">
              <p class="timeline-item-title">十月八日</p>
              <p>開學日</p>
            </div>
          </li>
        </ul>
      </div>
    </div> 	
    <div class="procedures-content" v-show="currentLang == 'en'">
      <ul class="procedures-steps">
        <li class="procedures-steps-title">Register online to receive the application form.Please complete the application form and send the following relevant documents in person or by post to: </li>
        <li class="procedures-steps-address">Hong Kong Tsung Tsin Middle School (International Programme Admissions Office), No.11 Kwong Lee Road, Cheung Sha Wan, Kowloon, Hong Kong.</li>
        <li>a. After receiving admissions application, the school will check the relevant documents submitted by the applicant and arrange an interview. The notice of interview will be sent within 7 working days.</li>
        <li>b. The interview is divided into two parts: admission test and interview test.</li>
        <li>c. The interview results will be announced within 14 working days after the interview.</li>
        <li>d. Applicants who have obtained the admissions will pay a deposit of HK$10,000*(non-refundable) for place reservation.</li>
        <li>e. The Programme Fee of the 1st semester, the 2nd semester and related payments must be paid by the specified date in the Offer Letter.</li>
      </ul>
      <ul class="procedures-files">
        <li class="procedures-files-title">The relevant documents are as follows</li>
        <li><span class="glyphicon glyphicon-stop"></span>Copy of ID card and passport</li>
        <li><span class="glyphicon glyphicon-stop"></span>Copy of academic certificate in recent three years</li>
        <li><span class="glyphicon glyphicon-stop"></span>Copy of relevant supporting documents (please refer to the application form)</li>
        <li><span class="glyphicon glyphicon-stop"></span>Proof of payment of Registration Fee: Crossed cheque of the registration fee (payable to "Star Light 88 Limited") / registration fee payment receive to Bank of China (HK) account: 012-611-0-013044-8</li>
        <!-- <li class="procedures-files-tip">申請人因退學或其他原因不能入學，報名費及按金將不獲退款。</li> -->
      </ul>
      <div class="procedures-timeline">
        <div class="timeline-total">
          Timeline
        </div>
        <ul>
          <li class="timeline-left">
            <span class="glyphicon glyphicon-adjust"></span>
            <span class="timeline-title">(2018)</span>
            <div class="timeline-item">
              <p class="timeline-item-title">MAY To JUL</p>
              <p>Walk-in Application & Interview</p>
            </div>
          </li>
          <li class="timeline-right">
            <div class="timeline-item">
              <p class="timeline-item-title">Middle of NOV</p>
              <p>Application Starts</p>
            </div>
            <span class="glyphicon glyphicon-adjust"></span>
          </li>
          <li class="timeline-left">
            <span class="timeline-title">(2019)</span>
            <span class="glyphicon glyphicon-adjust"></span>
            <div class="timeline-item">
              <p class="timeline-item-title">Early of JUL</p>
              <p>Application Deadline (for non-Local Applicants)</p>
            </div>
          </li>
          <li class="timeline-right">
            <span class="glyphicon glyphicon-adjust"></span>
            <div class="timeline-item">
              <p class="timeline-item-title">9 JUL</p>
              <p>Education Bureau Announces Middle School Offer Results</p>
            </div>
          </li>
          <li class="timeline-left">
            <div class="timeline-item">
              <p class="timeline-item-title">31 AUG</p>
              <p>Application Deadline (for Local Applicants)</p>
            </div>
            <span class="glyphicon glyphicon-adjust"></span>
          </li>
          <li class="timeline-right">
            <span class="glyphicon glyphicon-adjust"></span>
            <div class="timeline-item">
              <p class="timeline-item-title">SEP</p>
              <p>Prep Program</p>
            </div>
          </li>
          <li class="timeline-left">
            <div class="timeline-item">
              <p class="timeline-item-title">End of SEP</p>
              <p>New Student Orientation</p>
            </div>
            <span class="glyphicon glyphicon-adjust"></span>
          </li>
          <li class="timeline-right">
            <span class="glyphicon glyphicon-adjust"></span>
            <div class="timeline-item">
              <p class="timeline-item-title">8 OCT</p>
              <p>Orientation Day</p>
            </div>
          </li>
        </ul>
      </div>
    </div> 
  </main>
</template>
<script src="./procedures.js"></script>
<style src='./procedures.css'></style>