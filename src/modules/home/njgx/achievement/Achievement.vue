<template>
  <main class="content-main" role="main">
  	<div class="part2-4">
			<p class="part2-4-sentence-1" v-show = "currentLang=='zh_hk'">
				英國牛津國際公學在獨立學院的中學高级水準考試成績上名列前茅。根據2018年的中學高级水準考試評定結果，牛津國陳公學的成结逮到AVA為83.5%,當中佔A等级成播有58.2%。去年成績逹到AVA為71%,逭個成績比較起來有著令人藉得鼓舞的進步，讓牛津國嫌學校成為英格藺地E高级水準考試成級最佳的學校之一。
			</p>


			<p class="part2-4-sentence-1" v-show = "currentLang=='en'">
				We are proud of the fact that Oxford International College is ranked among the top performers in the independent colleges.According to the results of the 2018 secondary level examinations, Oxford International College has achieved excellent rankings.The statistical data reached A*/A of 83.5% this year, accounting for 58.2% of the A grade.Last year's achievement reached 71% of A*/A.This result is an encouraging result, and it has become one of the best schools in the UK.
			</p>

			<div class="part2-4-table-1">
				<table class="achievement-table">
					<thead>
						<tr>
							<th>排序</th>
							<th>英國</th>
							<th>2018 A-Level A*/A 成绩</th>
							<th>相对2017的成绩(變化百分比)</th>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td>01</td>
							<td>
								<span class = "block-element">牛津國際公學</span>
								<span class = "block-element">牛津</span>
							</td>
							<td>83.5%</td>
							<td>+12.1%</td>
						</tr>
						<tr>
							<td>02</td>
							<td>
								<span class = "block-element">牛津國際公學</span>
								<span class = "block-element">牛津</span>
							</td>
							<td>82.8%</td>
							<td class="minus">-3.0%</td>
						</tr>
						<tr>
							<td>03</td>
							<td>
								<span class = "block-element">牛津國際公學</span>
								<span class = "block-element">牛津</span>
							</td>
							<td>82.4%</td>
							<td>+13.4%</td>
						</tr>
						<tr>
							<td>04</td>
							<td>
								<span class = "block-element">牛津國際公學</span>
								<span class = "block-element">牛津</span>
							</td>
							<td>82.2%</td>
							<td class="minus">-3.0%</td>
						</tr>
						<tr>
							<td>05</td>
							<td>
								<span class = "block-element">牛津國際公學</span>
								<span class = "block-element">牛津</span>
							</td>
							<td>82.2%</td>
							<td class="minus">-4.9%</td>
						</tr>
						<tr>
							<td>06</td>
							<td>
								<span class = "block-element">牛津國際公學</span>
								<span class = "block-element">牛津</span>
							</td>
							<td>82.2%</td>
							<td>+0.2%</td>
						</tr>
						<tr>
							<td>07</td>
							<td>
								<span class = "block-element">牛津國際公學</span>
								<span class = "block-element">牛津</span>
							</td>
							<td>82.1%</td>
							<td>+5.4%</td>
						</tr>
						<tr>
							<td>08</td>
							<td>
								<span class = "block-element">牛津國際公學</span>
								<span class = "block-element">牛津</span>
							</td>
							<td>81.5%</td>
							<td class="minus">-6.3%</td>
						</tr>
						<tr>
							<td>09</td>
							<td>
								<span class = "block-element">牛津國際公學</span>
								<span class = "block-element">牛津</span>
							</td>
							<td>80.8%</td>
							<td class="minus">-4.6%</td>
						</tr>
						<tr>
							<td>10</td>
							<td>
								<span class = "block-element">牛津國際公學</span>
								<span class = "block-element">牛津</span>
							</td>
							<td>80.4%</td>
							<td class="minus">-4.7%</td>
						</tr>

					</tbody>
				</table>
			</div>

      <div class = "part2-4-3" v-show = "currentLang=='zh_hk'">
				<div class="part2-4-3-title">
					<p class="name">崇正牛津國際課程</p>
					<p class="line"></p>
				</div>

				<p class="teacher-category">文科主教老師</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">貝司國先生</p>
					<p class="teacher-introduce"><span class = "square"></span>曾在摩根大通集團，法國外贸銀行，富通集團等機構檐任要職</p>
					<p class="teacher-introduce"><span class = "square"></span>從2010年開始從事教學，持有英文語言教學一等榮辔資格證，任教香港英皇軎院同學會小學二校、聖方濟各英文小學、型若瑟小學等學校</p>
					<p class="teacher-introduce"><span class = "square"></span>教學時鼓勵學生穑極提問，強調幫助學生巷成閱通的好習憤，對提窩學生英語能力經驗充足</p>
				</div>

				<div class="course-item-wrapper">
					<p class="course-teacher">左韋女士</p>
					<p class="teacher-introduce"><span class = "square"></span>知名育少年文學作家，獲獎無數之外，多篇作品编入香港内地小學語文及香港小學語文教科害；</p>
					<p class="teacher-introduce"><span class = "square"></span>有二十多年的瑩富教學經験，任職過香港大學SPACE、香港科技大學、香港公開大學、香港城市大學、香港中文大學、香港演藝學院中文課導師；</p>
					<p class="teacher-introduce"><span class = "square"></span>香港21世紀人文出版社主編，編寫中文教材之餘，多年獲邀檐任香港藝術發展局文學評審員、香港“中文文學獎”、“青年文學獎”評委，香港“文學雙年獎”、“香港會獎”的評審委貝等職。</p>
				</div>

				<p class="teacher-category">理科主教老師</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">鮪勃先生</p>
					<p class="teacher-introduce"><span class = "square"></span>工程師出身，註冊有五項物理發明离利</p>
					<p class="teacher-introduce"><span class = "square"></span>曾在中學任教數學、物理及生物，獲得過榮费教師稱號</p>
					<p class="teacher-introduce"><span class = "square"></span>會根據學生的英文水準及知識儲備調整 教學節奏、捕充教學教材，在保證課堂參與度的同時鍛煉學生的批判性思考能力</p>
				</div>

				<div class="course-item-wrapper">
					<p class="course-teacher">黄卓謙先生</p>
					<p class="teacher-introduce"><span class = "square"></span>香港浸食大學體育及康樂領袖學榮辔學士畢業</p>
					<p class="teacher-introduce"><span class = "square"></span>香港浸會大學學科講師</p>
					<p class="teacher-introduce"><span class = "square"></span>花旗銀行健身中心經理</p>
					<p class="teacher-introduce"><span class = "square"></span>中國香港健美總會/香港棒球總會/香港欖球總會教練</p>
				</div>				

				<p class="teacher-category">世界常識及藝術科主教老师</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">謝柏梁教授</p>
					<p class="teacher-introduce"><span class = "square"></span>北京市H創計寊領軍人物國務院政府特殊津貼専家</p>
					<p class="teacher-introduce"><span class = "square"></span>中國戲曲學院戲文系主任中國文莓評論基地主任</p>
					<p class="teacher-introduce"><span class = "square"></span>中國戯曲學會常務理事中國戯刺文學學會副會長</p>
				</div>

				<div class="course-item-wrapper">
					<p class="course-teacher">張紫伶博士</p>
					<p class="teacher-introduce"><span class = "square"></span>出身梨園世家，為粤劇宗師白駒榮孫女，名伶白霣梅之女，獲多項音樂國際比赛獎項</p>
					<p class="teacher-introduce"><span class = "square"></span>英届哥倫比亞大學學士，香港中文大學文化管理碩士，中國藝術研究院（北京）王文章院長博士研究生</p>
					<p class="teacher-introduce"><span class = "square"></span>港澳非物質文化遗產發展研究會秘害長</p>
					<p class="teacher-introduce"><span class = "square"></span>中國戯曲學院客席教授，香港演藝學院講師，香港公開大學課程主任</p>
				</div>

				<p class="teacher-category">中國傳統文化客席老师</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">白雪梅女士</p>
					<p class="teacher-introduce"><span class = "square"></span>梨国世家粤剧名伶</p>
				</div>

				<div class="course-item-wrapper">
					<p class="course-teacher">詠春教練 尹教練</p>
					<p class="teacher-introduce"><span class = "square"></span>尹教練的詠春師承葉問門派</p>
					<p class="teacher-introduce"><span class = "square"></span>尹教練舉業於美國加州藝術學院與香港理工大學</p>
					<p class="teacher-introduce"><span class = "square"></span>檐任室内設計專業的大學講師</p>
				</div>

				<p class="teacher-category">遨請心理輔導專家</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">胡美儀女士</p>
					<p class="teacher-introduce"><span class = "square"></span>香港著名粵曲歌手</p>
					<p class="teacher-introduce"><span class = "square"></span>心理學專家</p>
				</div>
			</div>
			<div class = "part2-4-3" v-show = "currentLang=='en'">
				<div class="part2-4-3-title">
					<p class="name">TTMS OXFORD INTERNATIONAL PROGRAMME</p>
					<p class="line"></p>
				</div>
			
				<p class="teacher-category">Liberal arts bishop teacher</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">Mr.BURDETT Scott</p>
					<p class="teacher-introduce"><span class = "square"></span>Abundant experiences at senior positions in JP Morgan Chase Group, French Foreign Trade Bank, Fortis Group and other institutions</p>
					<p class="teacher-introduce"><span class = "square"></span>Starts to teach since 2010 with the first-class certificate in English language teaching, teaching schools includes Kings College Old Boys’ Association Primary School No.1, St.Francis of Assisi’ s English Primary School, St.Joseph's Primary School and so on.</p>
					<p class="teacher-introduce"><span class = "square"></span>Scott has sufficient experience in helping students improving their English.He encourages students to ask questions actively during the class and emphasis on help students develop good reading habits.</p>
				</div>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">Ms.CHOR Wai</p>
					<p class="teacher-introduce"><span class = "square"></span>As a well-known youth literature writer, Teacher CHOR has won numerous awards herself and a number of her works have been compiled into the Chinese textbooks in Hong Kong and Mainland China.</p>
					<p class="teacher-introduce"><span class = "square"></span>She has over 20 years of teaching experience, used to work as Chinese Language teacher at the University of Hong Kong SPACE, the Hong Kong University of Science and Technology, the Chinese University of Hong Kong, the City University of Hong Kong, the Open University of Hong Kong, and the Hong Kong Academy for Performing Arts;</p>
					<p class="teacher-introduce"><span class = "square"></span>She is the chief editor at Hong Kong 21st Century Humanities Publishing House, and has been invited to be the judge at Hong Kong Arts Development Council, in Hong Kong "Chinese Literature Award", "Young Literature Award", and Hong Kong "Literature Biennial Award" and so on.</p>
				</div>
			
				<p class="teacher-category">Science bishop teacher</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">Mr_ LIVAR Bob</p>
					<p class="teacher-introduce"><span class = "square"></span>Bob has registered five physical invention patents as an engineer</p>
					<p class="teacher-introduce"><span class = "square"></span>He taught mathematics, physics and biology in secondary school and won the honorary teacher title.</p>
					<p class="teacher-introduce"><span class = "square"></span>He will adjust the pace of teaching and provide supplemental teaching materials according to students' English level and knowledge reserve.He emphasizes on raising students' critical thinking ability while ensuring classroom participation.</p>
				</div>
			
				<div class="course-item-wrapper">
					<p class="course-teacher">Mr.Wong Cheuk-him</p>
					<p class="teacher-introduce"><span class = "square"></span>Bachelor of Social Sciences in Sport & Recreation Leadership</p>
					<p class="teacher-introduce"><span class = "square"></span>Lecturer at Hong Kong Baptist University</p>
					<p class="teacher-introduce"><span class = "square"></span>Fitness Center Manager at Citi Bank</p>
					<p class="teacher-introduce"><span class = "square"></span>Coach at Hong Kong China Bodybuilding and Fitness Association, Hong Kong Baseball Association Limited, Hong Kong Rugby Union</p>
				</div>				
			
				<p class="teacher-category">Bishop teacher of World Common Sense and Art</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">Prof.Xie Boliang</p>
					<p class="teacher-introduce"><span class = "square"></span>A leading figure of Beijing's High- level Innovation and Entrepreneurial Talents Supporting Plan, State Council Special Allowance Expert.</p>
					<p class="teacher-introduce"><span class = "square"></span>Director of the Drama Department of National Academy of Chinese Theatre Arts, Director of the Center for Chinese Literary and Arts Criticism.</p>
					<p class="teacher-introduce"><span class = "square"></span>Managing Director of the Chinese Opera Society, Vice President of the Chinese Theatre Literature Association.</p>
				</div>
							
				<div class="course-item-wrapper">
					<p class="course-teacher">Dr.Sammi YU</p>
					<p class="teacher-introduce"><span class = "square"></span>With the family background of opera artists, as the granddaughter of Cantonese opera master PAI JU RONG and the daughter of the famous artist PAI XUE MEI, Sammi won various music awards in international competitions.</p>
					<p class="teacher-introduce"><span class = "square"></span>Bachelor(University of British Columbia),Master in Cultural Management(The Chinese University of Hong Kong), PhD in Theater and ChineseTraditional Opera (Chinese Academy of Arts);</p>
					<p class="teacher-introduce"><span class = "square"></span>Head of General Secretary, Hong Kong & Macau Intangible Cultural Heritage Research Centre.</p>
					<p class="teacher-introduce"><span class = "square"></span>Visiting Professor at National Academy of Chinese Theatre Arts,lecturer at Hong Kong Academy for Performing Arts, and Curriculum Director at The Open University if Hong Kong.</p>
				</div>
			
				<p class="teacher-category">Chinese Culture</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">MsPaiXueMei</p>
					<p class="teacher-introduce"><span class = "square"></span>梨国世家粤剧名伶</p>
				</div>
						
				<div class="course-item-wrapper">
					<p class="course-teacher">Wing Chun  Ms WAN Terry</p>
					<p class="teacher-introduce"><span class = "square"></span>The Wing Chun training of our coach Ms Wan originates to Master Yip Man</p>
					<p class="teacher-introduce"><span class = "square"></span>Bachelor of Fine Arts (California College of Arts), Master of Design(HK Polytechnic University)</p>
					<p class="teacher-introduce"><span class = "square"></span>University Lecturer in Interior Architectural Design</p>
				</div>
				
				<p class="teacher-category">Invite counseling experts</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">Ms Amy Wu</p>
					<p class="teacher-introduce"><span class = "square"></span>Hongkong famous singer of Cantonese Opera</p>
					<p class="teacher-introduce"><span class = "square"></span>Psychologist</p>
				</div>
			
			</div>


      <div class="part2-4-4" v-show = "currentLang=='zh_hk'">
      	<div class="part2-4-4-title part2-4-3-title" :style = "bgPhoto">
					<p class="name">崇正牛津國際課程</p>
					<p class="line"></p>
      	</div>
 
      	<div class="part2-4-4-course">
      		<!-- 1 -->
      		<div class="part244-course-item">
      			<p class="part244-course-name">化學課程</p>
      			<p class="part244-teacher-name">喬纳森貝克特先生</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>牛津大學化學榮镟碩士畢業</p>
      		</div>

					<!-- 2 -->
      		<div class="part244-course-item">
      			<p class="part244-course-name">生物課程</p>
      			<p class="part244-teacher-name">佐伊倫迪博士</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>牛津大學生物化學博士畢業</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>牛津大畢生物化學碩士畢業</p>
      		</div>

					<!-- 3 -->
      		<div class="part244-course-item">
      			<p class="part244-course-name">物理課程</p>
      			<p class="part244-teacher-name">蒂姆克羅斯額先生</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>物理碩士畢業</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>文學碩士畢業</p>
      		</div>

					<!-- 4 -->
      		<div class="part244-course-item">
      			<p class="part244-course-name">心理學課程</p>
      			<p class="part244-teacher-name">多莉麥克勞林女士</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>英國超意識心理學家</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>心理學文憑，英國超意識心理學協會</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>科學榮毪學士畢業</p>
      		</div>
					
					<!-- 5 -->
      		<div class="part244-course-item">
      			<p class="part244-course-name">數學/統計學課程</p>
      			<p class="part244-teacher-name">茱斯利帕克-柯林斯先生</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>牛津大學統計學碩士畢業</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>牛津大學文學榮轡學士畢業</p>
      		</div>

					<!-- 6 -->
      		<div class="part244-course-item">
      			<p class="part244-course-name">商業學課程</p>
      			<p class="part244-teacher-name">米哈伊爾•拉科夫希克博士</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>博士畢業</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>工商管理碩士畢業</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>科學榮费碩士畢業</p>
      			<p class="part244-teacher-experience"><span class = "square"></span>科學榮普學士畢業</p>
      		</div>
      	</div>


      </div>
			<div class="part2-4-4-course" v-show = "currentLang=='en'">
      	<div class="part2-4-4-title part2-4-3-title" :style = "bgPhoto">
					<p class="name">Hong Kong TTMS Oxford International Programme</p>
					<p class="line"></p>
      	</div>

    		<div class="part244-course-item">
    			<p class="part244-course-name">Chemistry</p>
    			<p class="part244-teacher-name">Mr.Jonathan Beckett</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Honors Master in Chemistry in University of Oxford</p>
    		</div>

    		<div class="part244-course-item">
    			<p class="part244-course-name">Biology</p>
    			<p class="part244-teacher-name">Dr.Zoe Lundy</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Doctor of Philosophy in Biochemistry in University of Oxford</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Master in Biochemistry in University of Oxford</p>
    		</div>

    		<div class="part244-course-item">
    			<p class="part244-course-name">Physics</p>
    			<p class="part244-teacher-name">Mr.Tim Croston</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Master of Physics</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Master of Arts</p>
    		</div>

    		<div class="part244-course-item">
    			<p class="part244-course-name">Psychotogy</p>
    			<p class="part244-teacher-name">Ms.Dolly McLaughlin</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>UK Humanistic Psychology Practitioner</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Postgraduate Diploma in Psychology, UK Association of Humanistic Psychology Practitioner</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Honors Bachelor of Science</p>
    		</div>

    		<div class="part244-course-item">
    			<p class="part244-course-name">Maths / Statistics</p>
    			<p class="part244-teacher-name">Mr.Lesley Parker-Collins</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Master of Statistics in University of Oxford</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Honors Bachelor of Arts in University of Oxford</p>
    		</div>

    		<div class="part244-course-item">
    			<p class="part244-course-name">Business</p>
    			<p class="part244-teacher-name">Dr.Mikhail Rakovshik</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>PHD</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Master of Business Administration</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Honors Master of Science</p>
    			<p class="part244-teacher-experience"><span class = "square"></span>Honors Bachelor of Science</p>
    		</div>

    	</div>
  	</div>
  </main>
</template>
<script src="./achievement.js"></script>
<style type="text/css">
  .part2-4{
    margin-bottom: 200px;
  }

	.part2-4 p.part2-4-sentence-1{
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 40px;
    text-indent: 36px;
    line-height: 28px;
	}

	.achievement-table {
	  width: 100%;
	  border-collapse: collapse;
	  border-spacing: 0;
	  vertical-align: middle;
	  word-break: break-all;
	  word-wrap: break-word;
	  table-layout: fixed;  
	}

	.achievement-table .block-element{
		display: block;
	}

	.achievement-table thead {
		color: #fff;
	  font-size: 16px;
	  word-break: keep-all;
	}

  .achievement-table thead tr{
  	background: #111836;
  }

  .achievement-table tbody tr:nth-child(odd){
  	background: #D6DAE0;
  }
    .achievement-table tbody tr:nth-child(even){
  	background: #8DC2D9;
  }

	.achievement-table tbody {
	  /*font-size: 16px;*/
	  font-size: 16px;
	  word-break: keep-all;
	}


	.achievement-table th {
	  padding-top: 6px;
	  padding-bottom: 6px;
	  height: 48px;
	  position: relative;
	  text-align: center;
	}

	.achievement-table th:not(:last-child):after {
	  content: "";
	  display: block;
	  position: absolute;
	  width: 1px;
	  left: 100%;
	  top: 6px;
	  bottom: 6px;
	  background-color: #fff;
	}

	.achievement-table th:first-child{
	  padding-left: 18px;
	  padding-right: 16px;  
	}
	.achievement-table th:last-child{
	  padding-left: 8px;
	  padding-right: 18px;  
	}

	.achievement-table th:not(:first-child):not(:last-child){
	  padding-left: 8px;
	  padding-right: 16px;

	}

	.achievement-table tbody>tr {
	  border: 1px solid #cccccc;
	  border-radius: 20px;
	}
	.achievement-table tbody>tr>td:first-child{
		font-weight: bold;
	}

	.achievement-table tbody>tr>td {
	  height: 48px;  
	  padding: 6px 8px;
	  text-align: center;
	}

	.achievement-table .minus{
		color: red;
	}


.part2-4-3 {
    background: #111836;
    margin-top: 100px;
    padding: 70px 50px 0 50px;
}

.part2-4-3-title {
    margin-bottom: 50px;
}

.part2-4-4-title .name,
.part2-4-3-title .name {
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    color: #fff;
}
.part2-4-4-title .line,
.part2-4-3-title .line {
    height: 6px;
    background: #A87C44;
    width: 100px;
}
.part2-4-3 .teacher-category {
    color: #fff;
    line-height: 40px;
    font-size: 18px;
    border-bottom: 2px solid #A87C44;
}

.part2-4-3 .course-item-wrapper {
    display: inline-block;
    width: 40%;
    display: inline-block;
    color: #fff;
    vertical-align: top;
    margin-bottom: 30px;
    margin-left: 32px;
}
.part2-4-3 .course-item-wrapper .square{
	background: #fff;
   margin-left: -24px;
}
.part2-4-3 .teacher-introduce {
	 line-height: 28px;
   margin-left: 24px;
   font-size: 16px;
}
.part2-4-3 .course-item-wrapper .course-teacher {
	font-size: 18px;
  background: #a87c44;
  padding-left: 20px;
  line-height: 36px;
}


.part2-4-4 {
  margin-top: 100px;
}

.part2-4-4-title {
    height: 260px;
    padding-left: 40px;
    padding-top: 90px;
}


.part244-course-item {
    display: inline-block;
    width: 40%;
    display: inline-block;
    width: 28%;
    vertical-align: top;
    margin-bottom: 30px;
    margin-left: 32px;
}

.part244-course-name {
    color: #a87c44;
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 30px;
    line-height: 26px;
}
.part2-4-4  p.part244-teacher-name {
    margin-bottom: 20PX;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
}

.part244-teacher-experience{
	margin-left: 24px;
	font-size: 16px;
}

.part2-4-4-course .square{
	margin-left: -24px;
}

@media(max-width: 479px){
	.part2-4-sentence-1,
	.achievement-table thead,
	.achievement-table tbody{
		font-size: 14px;
	}	

	.part244-course-name{
		font-size: 18px;
		margin-bottom: 0;
	}	
	.part244-teacher-name{
		font-size: 18px;
		margin-bottom: 0;
	}

	.part244-teacher-experience{
		font-size: 14px;
	}
}
@media(max-width: 767px){
	.part2-4-sentence-1{
		font-size: 14px;
	}
	.part2-4-4-course{
		padding-left: 0;
	}
	.part244-course-item{
    width: 42%;
    margin-left: 20px;		
	}
	.part244-course-name{
		 font-size: 20px;
	}
	.part244-teacher-name,
	.part244-teacher-experience{
		font-size: 14px;
	}


	.part2-4-3{
		padding: 40px 20px 0;
	}
	.part2-4-3-title{
		margin-bottom: 40px;
	}
	.part2-4-3-title .name, .part2-4-4-title .name{
		 font-size: 28px;
	}
	.part2-4-3 .course-item-wrapper{
		margin-left: 20px;
		margin-bottom: 20px;
	}

	.part2-4-3 .teacher-introduce{
		font-size: 14px;
	}
}
</style>
