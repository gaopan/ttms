<template>
  <main class="content-main" role="main">
    <div class="part2-1 part2-1-1">
      <div class="part2-1-1-left">
        <div class="history-content" v-show="currentLang=='zh_hk'">
          <p>英國牛津國陳公學在幫助學生成為獨立、稂棰主劲的學習者並成功入讀英國和世界知名大學上享有盛毋。</p>
          <p>英國牛津國際公學於2002年由牛津大學的一批學者成立，很快發展為英國名列前茅的牛津風格學院，並歡迎 來自世界各地的學生入讀。過去十五 年來，從學生到教師貝，牛津國際公 學創建了一個蓬勃發展的國際化社E。</p>
          <p>在牛津國陳公學，學生由來自牛津的最好的老師教授。我們的老師畢業自牛津大學或世界名校，他們都是各自領域的專家，懂得如何幫助學生獲得最佳表現。</p>
        </div>
        <div class="history-content" v-show="currentLang=='en'">
          <p>Oxford International College has an outstanding reputation for nurturing students to become independent, motivated learners emd successfully gain entry the best British and international universities.</p>
          <p>Oxford International College (OIC) was founded in 2002 by a group of experienced scholars from the University of Oxford.It has grown into one of themost successful private colleges in UK, welcoming students from UK and all over the world.Over the past 15 years, the College has created a thriving international community of students and staff.</p>
          <p>Students are taught by some of Oxford* s finest tutors.Our teaching staff are graduates from the University of Oxford and top universities worldwide and they are experts in their fields.They know what it takes to achieve top grades and how to help students achieve the best performance.</p>
        </div>

        <div class="left-bottom-pic">
          <img :src="imgUrl('2.1.2.png')">
        </div>
      </div>

      <div class="part2-1-1-right">
        <img :src="imgUrl('2.1.1.png')">
      </div>
    </div>

    <div class="part2-1 part2-1-2">
      <div class="part2-1-2-left">
        <img :src="imgUrl('2.1.3.png')">
      </div>

      <div class="member-four-experience part2-1-2-right">
        <div class="teacher-headPhoto-four">
          <img :src="imgUrl('23.jpg')">
        </div>
        <div class="teacher-name-wrapper teacher-four-name-wrapper" v-show="currentLang=='zh_hk'">
          <span class="teacher-title">馬裏奧•皮特斯博士</span>
          <span class="teacher-title">牛津國隙公學創始人</span>
        </div>

        <div class="teacher-name-wrapper teacher-four-name-wrapper" v-show="currentLang=='en'">
          <span class="teacher-title">Dr Mario Peters</span>
          <span class="teacher-title">Oxford International College Group Founder/Director</span>
        </div>

        <ul class="experience-list-four info-list" v-show="currentLang=='zh_hk'">
          <li>
            <p>
              <span class="square"></span>學士 - 倫敦大學學院|英國第4，世界第15
            </p>
          </li>
          <li>
            <p><span class="square"></span>碩士 - 爱丁堡大學丨英國第6，世界第27</p>
          </li>
          <li>
            <p><span class="square"></span>博士 - 牛津大學丨英國第1，世界第1</p>
          </li>
          <li>
            <p><span class="square"></span>牛津大學 - 空問物理研究员(1989-1999)</p>
          </li>
          <li>
            <p><span class="square"></span>創始人，牛津科學研究(1997)</p>
          </li>
          <li>
            <p><span class="square"></span>創始人，牛津國際公學(2003)</p>
          </li>
          <li>
            <p><span class="square"></span>創始人，牛津暑假學院(2010)</p>
          </li>
          <li>
            <p><span class="square"></span>創始人 ，靑年領導Trust(2012)</p>
          </li>
          <li>
            <p><span class="square"></span>創始人 ，Plan8網球學院，深圳(2013)</p>
          </li>
        </ul>

        <ul class="experience-list-four info-list" v-show="currentLang=='en'">
          <li>
            <p><span class="square"></span>BSC - University College London(UK No.4, world No.1)</p>
          </li>
          <li>
            <p><span class="square"></span>MSc - Edinburgh (UK No.8, world No.27)</p>
          </li>
          <li>
            <p><span class="square"></span>DPhil - Oxford (UK No.1, world No. 1)</p>
          </li>
          <li>
            <p><span class="square"></span>Oxford University - Researcher in Space Physics (1989-1999)</p>
          </li>
          <li>
            <p><span class="square"></span>Founder, Oxford Science Studies (1997)</p>
          </li>
          <li>
            <p><span class="square"></span>Founder, Oxford International College (2003)</p>
          </li>
          <li>
            <p><span class="square"></span>Founder, Oxford Summer Academy (2010)</p>
          </li>
          <li>
            <p><span class="square"></span>Founder, Youth Leadership Taist (2012)</p>
          </li>
          <li>
            <p><span class="square"></span>Founder, Plan8 Tennis Academy.Shenzhen (2013)</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="part2-1 part2-1-3">
      <div class="part2-1-3-top">
        <img :src="imgUrl('2.1.4.png')">
      </div>

      <div class="part2-1-3-bottom">
        <div class="part2-1-3-bottomLeft teacher-name-wrapper" v-show="currentLang=='zh_hk'">
          <span class="teacher-title">金 • 特 拉 爾 女 士</span>
          <span class="teacher-title">牛津國際公學校畏</span>
          <span class="teacher-title">崇正牛津國際課程項目總負貴人</span>
        </div>
        <div class="part2-1-3-bottomLeft teacher-name-wrapper" v-show="currentLang=='en'">
          <span class="teacher-title">Ms Kim Terrar</span>
          <span class="teacher-title">Oxford International College Principal</span>
          <span class="teacher-title"> and Managing Director</span>
        </div>
        <div class="part2-1-3-bottomRight">
          <ul class="info-list" v-show="currentLang=='zh_hk'">
            <li><span class="square"></span>紐西闌奧塔哥大學</li>
            <li><span class="square"></span>西澳大利亞大學聖喬治學院的住宅地理/地理學導師（擔任多年）</li>
            <li><span class="square"></span>任教於英國海明頓Wycombe Abbey女子學院，擔任倫敦的獨立中學副院長</li>
            <li><span class="square"></span>擔任牛津國際公學的校友與首席運營官（2011年10月開始）</li>
          </ul>
          <ul class="info-list" v-show="currentLang=='en'">
            <li><span class="square"></span>Otago University, New Zealand Residential Qeography/Geography of St.George's College, </li>
            <li><span class="square"></span>University of Western Australia Tutor (for many years)</li>
            <li><span class="square"></span>Teaches at Wycombe Abbey of UK, Headington Girls' School and serves as Associate Dean of the Independent Sixth Institute in London</li>
            <li><span class="square"></span>President and Chief Operating Officer of Oxford International College (starting in October 2011)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="part2-1 part2-1-4">
      <div class="part2-1-4-top">
        <img :src="imgUrl('2.1.5.png')">
      </div>

      <div class="part2-1-4-bottom darkBule">
        <div class="part2-1-4-bottomLeft teacher-name-wrapper" v-show="currentLang=='zh_hk'">
          <span class="teacher-title">優思明•薩沃爾女士</span>
          <span class="teacher-title">首席教育官</span>
        </div>

        <div class="part2-1-4-bottomLeft teacher-name-wrapper" v-show="currentLang=='en'">
          <span class="teacher-title">Ms Yasmin Sarwar</span>
          <span class="teacher-title">Oxford International College/Chief Education Officer</span>
        </div>

        <div class="part2-1-4-bottomRight">
          <ul class="info-list" v-show="currentLang=='zh_hk'">
            <li><span class="square"></span>2011年度英國科學科導師</li>
            <li><span class="square"></span>2015年度威爾士傑出女性</li>
            <li><span class="square"></span>2015年度諾貝爾傑出教育家</li>
            <li><span class="square"></span>英國頂尖醫學院面試小組成員</li>
            <li><span class="square"></span>2016年度TEDx演說家</li>
            <li><span class="square"></span>連續8年A-Level 成績排名記錄保持者</li>
          </ul>
          <ul class="info-list" v-show="currentLang=='en'">
            <li><span class="square"></span>UK Science Tutor of the Year 2011</li>
            <li><span class="square"></span>Weish Woman of the year 2015</li>
            <li><span class="square"></span>Interview Panelist for 2 Top UK Medical Schools</li>
            <li><span class="square"></span>IClaes Nobel Educator of Distinction 2015</li>
            <li><span class="square"></span>TEDx Speaker 2016</li>
            <li>
              <span class="square"></span>
              Founder of the UK' s Number 1 ranked school for A- level results for 8 consecutive years
            </li>
          </ul>
        </div>

      </div>
    </div>
  </main>
</template>
<script src="./history.js"></script>
<style type="text/css">

.part2-1-1 {
  display: flex;

}
.part2-1 .experience-list-four{
  direction: ltr;
}

.part2-1-1 .history-content {
  text-indent: 20px;
}

.part2-1-1-left {
  flex: 1;
  position: relative;
}

.history-content {
  /* height: 100%; */
}

.left-bottom-pic {
  margin-right: 30px;
  /* width: 100%; */
  position: absolute;
  bottom: 0;
}

.content-main .history-content p {
  line-height: 32px;
}

.part2-1-1-right {
  width: 300px;
}

.part2-1-2 {
  display: flex;
}

.part2-1-2-left {
  width: 380px;
}

.part2-1-2-right {
  flex: 1;
}

.content-main .part2-1-2-right img {
  width: 140px;
}

.part2-1-2-right .teacher-four-name-wrapper {
  margin-bottom: 80px;
  margin-top: 50px;
}

.part2-1-2-right .teacher-headPhoto-four {
  margin-top: 120px;
}


.part2-1-2-right .info-list li:after{
  height: 0;
  content:'';
  clear: both;
  visibility: hidden;
  display: block;
}


.part2-1-2-right .member-four-experience {
  height: 1205px;
}

.part2-1-4-bottom,
.part2-1-3-bottom {
  width: 100%;
  padding: 50px;
  display: flex;
}

.part2-1-4-bottomLeft.teacher-name-wrapper,
.part2-1-3-bottomLeft.teacher-name-wrapper {
  flex: 1;
}

.part2-1-4-bottomRight,
.part2-1-3-bottomRight {
  text-align: right;
  margin-left: 70px;
}

.part2-1-4-bottomRight,
.part2-1-3-bottomRight {
  text-align: right;
  margin-left: 20px;
  width: 390px;
}

.part2-1-4-bottomRight .info-list li,
.part2-1-3-bottomRight .info-list li {
  line-height: 30px;
}

.part2-1-4-bottomRight a,
.part2-1-4-bottomRight .info-list {
  color: #fff;
}

.part2-1-4-bottomRight .square {
  background: #fff;
}


.part2-1-4-bottom.darkBule,
.part2-1-3-bottom.darkBule {
  background: #111836;
}



@media(max-width:479px) {
  .history-content {
    font-size: 14px;
    /* height: 420px; */
  }

  .part2-1 {
    margin-bottom: 60px;
  }
  .content-main .history-content p {
      margin-bottom: 10px; 
  } 
}

@media(min-width:480px) {
  .content-main .history-content p {
      margin-bottom: 30px; 
  }
  .part2-1-4-bottom .teacher-title,
  .part2-1-3-bottom .teacher-title {
    font-size: 16px;
  } 

  .part2-1-2-right .info-list li p{
    float: right;
    
  }    
}

@media(min-width:480px) and (max-width:767px) {
  .history-content {
    /* height: 440px; */
  }

  .part2-1 {
    margin-bottom: 30px;
  }

}

@media(max-width:767px) {
  .part2-1-1-right {
    display: none;
  }

  .left-bottom-pic {
    display: inline-block;
    position: static;
    margin-right: 0;
  }

  .history-content {
    font-size: 14px;
    padding: 0;
  }

  /* part2 */
  .part2-1-2-left {
    display: none;
  }

  .member-four-experience {
    padding: 20px;
  }

  .part2-1-2-right .teacher-headPhoto-four {
    margin-top: 20px;
  }

  /* part3 */
  .part2-1-3-bottomRight,
  .part2-1-4-bottomRight {
    text-align: left;
    margin-left: 0;
    width: 100%;
    line-height: 30px;
  }

  .part2-1-3-bottom,
  .part2-1-4-bottom {
    padding: 20px;
    display: block;
  }

  .part2-1-3-bottom .teacher-title,
  .part2-1-4-bottom .teacher-title {
    margin-bottom: 10px;
    line-height: 24px;
  }

  .part2-1-3-bottomLeft.teacher-name-wrapper,
  .part2-1-4-bottomLeft.teacher-name-wrapper {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  .part2-1-2-right .info-list li {
    margin-bottom: 10px;
  }  

}

@media(min-width:768px) {
  .history-content {
    font-size: 16px;
  }

  .part2-1-4-bottom .teacher-title,
  .part2-1-3-bottom .teacher-title {
    font-size: 20px;
    line-height: 30px;
  }
  .part2-1-2-right .info-list li {
    margin-bottom: 40px;
  }  
}
@media(min-width:768px) and (max-width: 1500px) {
  .member-four-experience {

    padding-right: 30px;
    padding-left: 30px;
  }
}  
@media(min-width:768px) and (max-width: 1200px) {


  .part2-1 {
    margin-bottom: 50px;
  }

  .history-content {
    padding: 100px 40px 0 20px;
  }  
  .part2-1-4-bottom .teacher-title,
  .part2-1-3-bottom .teacher-title {
    font-size: 18px;
  }  
}


@media(min-width: 1200px) {
  .history-content {
    padding: 150px 100px 0 20px;
  }
}

@media(min-width:992px) and (max-width: 1500px) {
  .part2-1 {
    margin-bottom: 80px;
  }
}


</style>
