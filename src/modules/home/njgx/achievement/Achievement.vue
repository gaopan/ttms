<template>
  <main class="content-main" role="main">
  	<div class="part2-4">
			<p class="part2-4-sentence-1" :class = "currentLang" v-show = "currentLang=='zh_hk'">
				英國牛津國際公學在獨立學院的中學高级水準考試成績上名列前茅。根據2018年的中學高级水準考試評定結果，牛津國際公學的成績達到A*/A為83.5%,當中佔A等級成績有58.2%。去年成績逹到A*/A為71%,逭個成績比較起來有著令人藉得鼓舞的進步，讓牛津國際學校成為英格藺地區高級水準考試成級最佳的學校之一。
			</p>


			<p class="part2-4-sentence-1" v-show = "currentLang=='en'">
				We are proud of the fact that Oxford International College is ranked among the top performers in the independent colleges.According to the results of the 2018 secondary level examinations, Oxford International College has achieved excellent rankings.The statistical data reached A*/A of 83.5% this year, accounting for 58.2% of the A grade.Last year's achievement reached 71% of A*/A.This result is an encouraging result, and it has become one of the best schools in the UK.
			</p>

			<div class="part2-4-table-1">
				<table  v-show = "currentLang=='zh_hk'" class="achievement-table">
					<thead>
						<tr>
							<th>排序</th>
							<th>英國</th>
							<th>2018 A-Level A*/A 成績</th>
							<th>相比2017的成績(變化百分比)</th>
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
								<span class = "block-element">吉爾福德高中</span>
								<span class = "block-element">吉爾福德</span>
							</td>
							<td>82.8%</td>
							<td class="minus">-3.0%</td>
						</tr>
						<tr>
							<td>03</td>
							<td>
								<span class = "block-element">詹姆斯艾倫女子學校</span>
								<span class = "block-element">倫敦</span>
							</td>
							<td>82.4%</td>
							<td>+13.4%</td>
						</tr>
						<tr>
							<td>04</td>
							<td>
								<span class = "block-element">艾德伯格女王學院</span>
								<span class = "block-element">約克</span>
							</td>
							<td>82.2%</td>
							<td class="minus">-3.0%</td>
						</tr>
						<tr>
							<td>05</td>
							<td>
								<span class = "block-element">西敏公學，西敏</span>
								<span class = "block-element">倫敦市</span>
							</td>
							<td>82.2%</td>
							<td class="minus">-4.9%</td>
						</tr>
						<tr>
							<td>06</td>
							<td>
								<span class = "block-element">莫德林學院</span>
								<span class = "block-element">牛津</span>
							</td>
							<td>82.2%</td>
							<td>+0.2%</td>
						</tr>
						<tr>
							<td>07</td>
							<td>
								<span class = "block-element">布萊頓學院</span>
								<span class = "block-element">布萊頓</span>
							</td>
							<td>82.1%</td>
							<td>+5.4%</td>
						</tr>
						<tr>
							<td>08</td>
							<td>
								<span class = "block-element">博思學校</span>
								<span class = "block-element">劍橋</span>
							</td>
							<td>81.5%</td>
							<td class="minus">-6.3%</td>
						</tr>
						<tr>
							<td>09</td>
							<td>
								<span class = "block-element">康科特學院</span>
								<span class = "block-element">什羅普郡</span>
							</td>
							<td>80.8%</td>
							<td class="minus">-4.6%</td>
						</tr>
						<tr>
							<td>10</td>
							<td>
								<span class = "block-element">倫敦城市女校</span>
								<span class = "block-element">倫敦</span>
							</td>
							<td>80.4%</td>
							<td class="minus">-4.7%</td>
						</tr>

					</tbody>
				</table>

				<table  v-show = "currentLang=='en'" class="achievement-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>England</th>
							<th>2018 A-Level A*/A score</th>
							<th>Change from 2017</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>01</td>
							<td>
								<span class = "block-element">Oxford International</span>
								<span class = "block-element">College,Oxford</span>
							</td>
							<td>83.5%</td>
							<td>+12.1%</td>
						</tr>
						<tr>
							<td>02</td>
							<td>
								<span class = "block-element">Guidford High School </span>
								<span class = "block-element">for Girls,Guildford</span>
							</td>
							<td>82.8%</td>
							<td class="minus">-3.0%</td>
						</tr>
						<tr>
							<td>03</td>
							<td>
								<span class = "block-element">James Allen's Girls'</span>
								<span class = "block-element">School,London</span>
							</td>
							<td>82.4%</td>
							<td>+13.4%</td>
						</tr>
						<tr>
							<td>04</td>
							<td>
								<span class = "block-element">Queen Etheburga's</span>
								<span class = "block-element">College,York</span>
							</td>
							<td>82.2%</td>
							<td class="minus">-3.0%</td>
						</tr>
						<tr>
							<td>05</td>
							<td>
								<span class = "block-element">Westminster School</span>
								<span class = "block-element">,Westminster</span>
							</td>
							<td>82.2%</td>
							<td class="minus">-4.9%</td>
						</tr>
						<tr>
							<td>06</td>
							<td>
								<span class = "block-element">Magdalen College </span>
								<span class = "block-element">School,Oxford </span>
							</td>
							<td>82.2%</td>
							<td>+0.2%</td>
						</tr>
						<tr>
							<td>07</td>
							<td>
								<span class = "block-element">Brighton College,</span>
								<span class = "block-element">Brighton</span>
							</td>
							<td>82.1%</td>
							<td>+5.4%</td>
						</tr>
						<tr>
							<td>08</td>
							<td>
								<span class = "block-element">The Perse School,</span>
								<span class = "block-element">Cambridge</span>
							</td>
							<td>81.5%</td>
							<td class="minus">-6.3%</td>
						</tr>
						<tr>
							<td>09</td>
							<td>
								<span class = "block-element">Concord College,</span>
								<span class = "block-element">Shrewsbury</span>
							</td>
							<td>80.8%</td>
							<td class="minus">-4.6%</td>
						</tr>
						<tr>
							<td>10</td>
							<td>
								<span class = "block-element">City of London School</span>
								<span class = "block-element">For Girls</span>
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
					<p class="teacher-introduce">■   曾在摩根大通集團，法國外貿銀行，富通集團等機構擔任要職</p>
					<p class="teacher-introduce">■   從2010年開始從事教學，持有英文語言教學一等榮譽資格證，任教香港英皇書院同學會小學二校、聖方濟各英文小學、聖若瑟小學等學校</p>
					<p class="teacher-introduce">■   教學時鼓勵學生積極提問，強調幫助學生養成閱讀的好習慣，對提高學生英語能力經驗充足</p>
				</div>

				<div class="course-item-wrapper">
					<p class="course-teacher">左韋女士</p>
					<p class="teacher-introduce">■   知名青少年文學作家，獲獎無數之外，多篇作品編入香港内地小學語文及香港小學語文教科書；</p>
					<p class="teacher-introduce">■   有二十多年的豐富教學經験，任職過香港大學SPACE、香港科技大學、香港公開大學、香港城市大學、香港中文大學、香港演藝學院中文課導師；</p>
					<p class="teacher-introduce">■   香港21世紀人文出版社主編，編寫中文教材之餘，多年獲邀擔任香港藝術發展局文學評審員、香港“中文文學獎”、“青年文學獎”評委，香港“文學雙年獎”、“香港書獎”的評審委員等職。</p>
				</div>

				<p class="teacher-category">理科主教老師</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">鮑勃先生</p>
					<p class="teacher-introduce">■   工程師出身，註冊有五項物理發明専利</p>
					<p class="teacher-introduce">■   曾在中學任教數學、物理及生物，獲得過榮譽教師稱號</p>
					<p class="teacher-introduce">■   會根據學生的英文水準及知識儲備調整教學節奏、補充教學教材，在保證課堂參與度的同時鍛煉學生的批判性思考能力</p>
				</div>

				<div class="course-item-wrapper">
					<p class="course-teacher">黄卓謙先生</p>
					<p class="teacher-introduce">■  香港浸會大學體育及康樂領袖學榮譽學士畢業</p>
					<p class="teacher-introduce">■  香港浸會大學學科講師</p>
					<p class="teacher-introduce">■  花旗銀行健身中心經理</p>
					<p class="teacher-introduce">■  中國香港健美總會/香港棒球總會/香港欖球總會教練</p>
				</div>				

				<p class="teacher-category">世界常識及藝術科主教老師</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">謝柏梁教授</p>
					<p class="teacher-introduce">■  北京市高創計劃領軍人物</p>
					<p class="teacher-introduce" style="margin-left: 20px;">國務院政府特殊津貼專家</p>
					<p class="teacher-introduce">■  中國戲曲學院戲文系主任</p>
					<p class="teacher-introduce" style="margin-left: 20px;">中國文藝評論基地主任</p>
					<p class="teacher-introduce">■  中國戯曲學會常務理事</p>
					<p class="teacher-introduce" style="margin-left: 20px;">中國戯劇文學學會副會長</p>
				</div>

				<div class="course-item-wrapper">
					<p class="course-teacher">張紫伶博士</p>
					<p class="teacher-introduce">■  出身梨園世家，為粤劇宗師白駒榮孫女，名伶白雪梅之女，獲多項音樂國際比赛獎項</p>
					<p class="teacher-introduce">■  英屬哥倫比亞大學學士，香港中文大學文化管理碩士，中國藝術研究院（北京）王文章院長博士研究生</p>
					<p class="teacher-introduce">■  港澳非物質文化遺產發展研究會秘書長</p>
					<p class="teacher-introduce">■  中國戯曲學院客席教授，香港演藝學院講師，香港公開大學課程主任</p>
				</div>

				<p class="teacher-category">中國傳統文化客席老師</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">白雪梅女士</p>
					<p class="teacher-introduce">■   梨国世家粵劇名伶</p>
				</div>

				<div class="course-item-wrapper">
					<p class="course-teacher">詠春教練 尹教練</p>
					<p class="teacher-introduce">■   尹教練的詠春師承葉問門派</p>
					<p class="teacher-introduce">■   尹教練畢業於美國加州藝術學院與香港理工大學</p>
					<p class="teacher-introduce">■   擔任室内設計專業的大學講師</p>
				</div>

				<p class="teacher-category">邀請心理輔導專家</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">胡美儀女士</p>
					<p class="teacher-introduce">■   香港著名粵曲歌手</p>
					<p class="teacher-introduce">■   心理學專家</p>
				</div>
			</div>
			<div class = "part2-4-3" v-show = "currentLang=='en'">
				<div class="part2-4-3-title">
					<p class="name">TTMS OXFORD INTERNATIONAL PROGRAMME</p>
					<p class="line"></p>
				</div>
			
				<p class="teacher-category">Liberal arts main teacher</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">Mr.BURDETT Scott</p>
					<p class="teacher-introduce">■   Abundant experiences at senior positions in JP Morgan Chase Group, French Foreign Trade Bank, Fortis Group and other institutions</p>
					<p class="teacher-introduce">■   Starts to teach since 2010 with the first-class certificate in English language teaching, teaching schools includes Kings College Old Boys’ Association Primary School No.1, St. Francis of Assisi’ s English Primary School, St. Joseph's Primary School and so on.</p>
					<p class="teacher-introduce">■   Scott has sufficient experience in helping students improving their English. He encourages students to ask questions actively during the class and emphasis on help students develop good reading habits.</p>
				</div>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">Ms.CHOR Wai</p>
					<p class="teacher-introduce">■   As a well-known youth literature writer, Teacher CHOR has won numerous awards herself and a number of her works have been compiled into the Chinese textbooks in Hong Kong and Mainland China.</p>
					<p class="teacher-introduce">■   She has over 20 years of teaching experience, used to work as Chinese Language teacher at the University of Hong Kong SPACE, the Hong Kong University of Science and Technology, the Chinese University of Hong Kong, the City University of Hong Kong, the Open University of Hong Kong, and the Hong Kong Academy for Performing Arts;</p>
					<p class="teacher-introduce">■   She is the chief editor at Hong Kong 21st Century Humanities Publishing House, and has been invited to be the judge at Hong Kong Arts Development Council, in Hong Kong "Chinese Literature Award", "Young Literature Award", and Hong Kong "Literature Biennial Award" and so on.</p>
				</div>
			
				<p class="teacher-category">Science teacher</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">Mr. LIVAR Bob</p>
					<p class="teacher-introduce">■   Bob has registered five physical invention patents as an engineer</p>
					<p class="teacher-introduce">■   He taught mathematics, physics and biology in secondary school and won the honorary teacher title.</p>
					<p class="teacher-introduce">■   He will adjust the pace of teaching and provide supplemental teaching materials according to students' English level and knowledge reserve. He emphasizes on raising students' critical thinking ability while ensuring classroom participation.</p>
				</div>
			
				<div class="course-item-wrapper">
					<p class="course-teacher">Mr.Wong Cheuk-him</p>
					<p class="teacher-introduce">■   Bachelor of Social Sciences in Sport & Recreation Leadership</p>
					<p class="teacher-introduce">■   Lecturer at Hong Kong Baptist University</p>
					<p class="teacher-introduce">■   Fitness Center Manager at Citi Bank</p>
					<p class="teacher-introduce">■   Coach at Hong Kong China Bodybuilding and Fitness Association, Hong Kong Baseball Association Limited, Hong Kong Rugby Union</p>
				</div>				
			
				<p class="teacher-category">Teacher of World Common Sense and Art</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">Prof.Xie Boliang</p>
					<p class="teacher-introduce">■   A leading figure of Beijing's High-level Innovation and Entrepreneurial Talents Supporting Plan, State Council Special Allowance Expert.</p>
					<p class="teacher-introduce">■   Director of the Drama Department of National Academy of Chinese Theatre Arts, Director of the Center for Chinese Literary and Arts Criticism.</p>
					<p class="teacher-introduce">■   Managing Director of the Chinese Opera Society, Vice President of the Chinese Theatre Literature Association.</p>
				</div>
							
				<div class="course-item-wrapper">
					<p class="course-teacher">Dr.Sammi YU</p>
					<p class="teacher-introduce">■   With the family background of opera artists, as the granddaughter of Cantonese opera master PAI JU RONG and the daughter of the famous artist PAI XUE MEI, Sammi won various music awards in international competitions.</p>
					<p class="teacher-introduce">■   Bachelor(University of British Columbia),Master in Cultural Management(The Chinese University of Hong Kong), PhD in Theater and Chinese Traditional Opera (Chinese Academy of Arts);</p>
					<p class="teacher-introduce">■   Head of General Secretary, Hong Kong & Macau Intangible Cultural Heritage Research Centre.</p>
					<p class="teacher-introduce">■   Visiting Professor at National Academy of Chinese Theatre Arts, lecturer at Hong Kong Academy for Performing Arts, and Curriculum Director at The Open University if Hong Kong.</p>
				</div>
			
				<p class="teacher-category">Chinese Culture</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">Ms Pai Xue Mei</p>
					<p class="teacher-introduce">■   Famous Cantonese Opera Artist</p>
				</div>
						
				<div class="course-item-wrapper">
					<p class="course-teacher">Wing Chun  Ms WAN Terry</p>
					<p class="teacher-introduce">■   The Wing Chun training of our coach Ms Wan originates to Master Yip Man</p>
					<p class="teacher-introduce">■   Bachelor of Fine Arts (California College of Arts), Master of Design(HK Polytechnic University)</p>
					<p class="teacher-introduce">■   University Lecturer in Interior Architectural Design</p>
				</div>
				
				<p class="teacher-category">Invite counseling experts</p>
				
				<div class="course-item-wrapper">
					<p class="course-teacher">Ms Amy Wu</p>
					<p class="teacher-introduce">■   Hongkong famous singer of Cantonese Opera</p>
					<p class="teacher-introduce">■   Psychologist</p>
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
      			<p class="part244-teacher-name">喬納森貝克特先生</p>
      			<p class="part244-teacher-experience">■   牛津大學化學榮譽碩士畢業</p>
      		</div>

					<!-- 2 -->
      		<div class="part244-course-item">
      			<p class="part244-course-name">生物課程</p>
      			<p class="part244-teacher-name">佐伊倫迪博士</p>
      			<p class="part244-teacher-experience">■   牛津大學生物化學博士畢業</p>
      			<p class="part244-teacher-experience">■   牛津大學生物化學碩士畢業</p>
      		</div>

					<!-- 3 -->
      		<div class="part244-course-item">
      			<p class="part244-course-name">物理課程</p>
      			<p class="part244-teacher-name">蒂姆克羅斯頓先生</p>
      			<p class="part244-teacher-experience">■   物理碩士畢業</p>
      			<p class="part244-teacher-experience">■   文學碩士畢業</p>
      		</div>

					<!-- 4 -->
      		<div class="part244-course-item">
      			<p class="part244-course-name">心理學課程</p>
      			<p class="part244-teacher-name">多莉麥克勞林女士</p>
      			<p class="part244-teacher-experience">■   英國超意識心理學家</p>
      			<p class="part244-teacher-experience">■   心理學文憑，英國超意識心理學協會</p>
      			<p class="part244-teacher-experience">■   科學榮譽學士畢業</p>
      		</div>
					
					<!-- 5 -->
      		<div class="part244-course-item">
      			<p class="part244-course-name">數學/統計學課程</p>
      			<p class="part244-teacher-name">茱斯利帕克-柯林斯先生</p>
      			<p class="part244-teacher-experience">■   牛津大學統計學碩士畢業</p>
      			<p class="part244-teacher-experience">■   牛津大學文學榮譽學士畢業</p>
      		</div>

					<!-- 6 -->
      		<div class="part244-course-item">
      			<p class="part244-course-name">商業學課程</p>
      			<p class="part244-teacher-name">米哈伊爾•拉科夫希克博士</p>
      			<p class="part244-teacher-experience">■   博士畢業</p>
      			<p class="part244-teacher-experience">■   工商管理碩士畢業</p>
      			<p class="part244-teacher-experience">■   科學榮譽碩士畢業</p>
      			<p class="part244-teacher-experience">■   科學榮譽學士畢業</p>
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
    			<p class="part244-teacher-experience">■   Honors Master in Chemistry in University of Oxford</p>
    		</div>

    		<div class="part244-course-item">
    			<p class="part244-course-name">Biology</p>
    			<p class="part244-teacher-name">Dr.Zoe Lundy</p>
    			<p class="part244-teacher-experience">■   Doctor of Philosophy in Biochemistry in University of Oxford</p>
    			<p class="part244-teacher-experience">■   Master in Biochemistry in University of Oxford</p>
    		</div>

    		<div class="part244-course-item">
    			<p class="part244-course-name">Physics</p>
    			<p class="part244-teacher-name">Mr.Tim Croston</p>
    			<p class="part244-teacher-experience">■   Master of Physics</p>
    			<p class="part244-teacher-experience">■   Master of Arts</p>
    		</div>

    		<div class="part244-course-item">
    			<p class="part244-course-name">Psychotogy</p>
    			<p class="part244-teacher-name">Ms.Dolly McLaughlin</p>
    			<p class="part244-teacher-experience">■   UK Humanistic Psychology Practitioner</p>
    			<p class="part244-teacher-experience">■   Postgraduate Diploma in Psychology, UK Association of Humanistic Psychology Practitioner</p>
    			<p class="part244-teacher-experience">■   Honors Bachelor of Science</p>
    		</div>

    		<div class="part244-course-item">
    			<p class="part244-course-name">Maths / Statistics</p>
    			<p class="part244-teacher-name">Mr.Lesley Parker-Collins</p>
    			<p class="part244-teacher-experience">■   Master of Statistics in University of Oxford</p>
    			<p class="part244-teacher-experience">■   Honors Bachelor of Arts in University of Oxford</p>
    		</div>

    		<div class="part244-course-item">
    			<p class="part244-course-name">Business</p>
    			<p class="part244-teacher-name">Dr.Mikhail Rakovshik</p>
    			<p class="part244-teacher-experience">■   PHD</p>
    			<p class="part244-teacher-experience">■   Master of Business Administration</p>
    			<p class="part244-teacher-experience">■   Honors Master of Science</p>
    			<p class="part244-teacher-experience">■   Honors Bachelor of Science</p>
    		</div>

    	</div>
  	</div>
  </main>
</template>
<script src="./achievement.js"></script>
<style type="text/css" src="./achievement.css"></style>
