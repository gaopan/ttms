<template>
  <main class="content-main" role="main">
		<div class="school-construction">
			<img :src="imgUrl('construction.png')" alt="">
		</div>

		<div class="teacher-member">
			<div class="teacher-introduce">

	      <div class="teacher-one-photo">        
	        <div class="teacher-photo-wrapper">       
	          <div class="stripe-background stripe-background-one"></div>       
	          <div class="teacher-headPhoto teacher-headPhoto-one">
	            <img :src="imgUrl('zzl.png')">
	          </div>
	        </div>        
	        <div class = "teacher-name-wrapper" v-show = "currentLang=='zh_hk'">
	          <span class="teacher-title">课程总监</span>
	          <span class="teacher-title">張紫伶博士</span>
	        </div>
	        <div class = "teacher-name-wrapper xs" v-show = "currentLang=='en'">
	          <span class="teacher-title teacher-2 en xs">Programme Director</span>
	          <span class="teacher-title teacher-2 en xs">Dr.Sammi Yu</span>
	        </div>
	      </div>

	      <div class = "teacher-info" v-show = "currentLang=='zh_hk'">
	        <p class="name">張紫伶博士 /Dr.Sammi Yu</p>
	        <p class = "motto">“自信，專注，獨立，熱誠”</p>

	        <p class="sentence">-我們相倌學生們應該在不同議題上秉持獨立的見解，不論是涉及全球或民族層面的议題，亦或是涉及當地或個人層面的事項。為了幫助學生擁有兼容東西方文化的價值觀，我們專注於培養他們的自信心、專注力、獨立性和熱誠。</p>
	      </div>

	      <div class = "teacher-info" v-show = "currentLang=='en'">
	        <p class="name">Dr.Sammi Yu</p>
	        <p class = "motto">"confident Concentration Independent Passion"</p>

	        <p class="sentence">We believe all the student should have their own perspectives on different issues globally, nationally, locally and personally.In order to help student acquires both Eastern and Western culture values, we focus on developing their confidence, concentration, independence and passion characteristics.</p>
	      </div>


	    </div>

	    <div class="teacher-experience">
	      <ul class="experience-list-one info-list"  v-show = "currentLang=='zh_hk'">
	        <li :class = "currentLang">
	            <p><span class="square"></span>學士 加牟大哥倫比亞大學 </p>
	            <p class="sub-list-item">BA- 主修音樂，副修中文</p>
	        </li>

	        <li :class = "currentLang">
	            <p><span class="square"></span>碩士 香港中文大學 </p>
	            <p class="sub-list-item">MA -文化管理</p>
	        </li>
	        <li :class = "currentLang">
	            <p><span class="square"></span>博士 -中國藝術研究院 </p>
	            <p class="sub-list-item">PhD - 戲曲理論</p> 
	        </li>

	        <li :class = "currentLang"><span class="square"></span>創始人港澳非物質文化遺産發展研究會(2016)</li>
	        <li :class = "currentLang"><span class="square"></span>客席教授，中國戯曲學校（2015)</li>
	        <li :class = "currentLang"><span class="square"></span>技術僱問，僱貝再培訓局(2008-2012) </li>
	        <li :class = "currentLang"><span class="square"></span>講師（學科）香港演藝學院(2012-2018)</li>
	        <li :class = "currentLang"><span class="square"></span>課程經理 香港公閬大學(2008-2012)</li>
				</ul>

				<ul class="experience-list-one info-list"  v-show = "currentLang=='en'">
	        <li :class = "currentLang">
	            <p><span class="square"></span>Universrty of British Columbia</p>
	            <p class="sub-list-item">Major in Music, Minor in Chinese</p>
	        </li>
		      <li :class = "currentLang">
	            <p><span class="square"></span>Chinese University Hong Kong</p>
	            <p class="sub-list-item">Cultural Management</p>
	        </li>
		      <li :class = "currentLang">
	            <p><span class="square"></span>National Academy of Arts</p>
	            <p class="sub-list-item">Research in Chinese Opera</p>
	        </li>

	        <li :class = "currentLang"><span class="square"></span>Founder, Hong Kong and Macau InUmgible Cultural Heritage Research Centre (2016)</li> 
	        <li :class = "currentLang"><span class="square"></span>Visiting Professor, National Academy of Chinese Theatre Arts (2015)</li> 
	        <li :class = "currentLang"><span class="square"></span>Technical Consultant, Employees Retraining Board (2013)</li> 
	        <li :class = "currentLang"><span class="square"></span>Lecturer (Academic), Hong Kong Academy of the Performing Arts (2012-2018)</li> 
	        <li :class = "currentLang"><span class="square"></span>Programme Manager, The Open University of Hong Kong (2008-2012)</li>
	      
	      </ul>
	      <div class="experience-photo">
	        <img :src="imgUrl('clock.png')">
	      </div>
	    </div>
		</div>

		<div class="teacher-member teacher-member-two">
	  	
	  	<!-- show in large screen -->
	  	<div class="teacher-introduce part1-3-2-introduce1">

				<div class = "teacher-title-photo">
					<img :src="imgUrl('44.png')">
				</div>

			 	<div class="teacher-introduce-right">
			 		
			 		<div class="teacher-photo-wrapper">				
						<div class="stripe-background stripe-background-two"></div>	 			
						<div class="teacher-headPhoto teacher-headPhoto-two">
							<img :src="imgUrl('lxc.png')">
						</div>
			 		</div>
			 		
					<div class = "teacher-name-wrapper teacher-name-wrapper-two xs" v-show = "currentLang=='zh_hk'">
						<span class="teacher-title xs">素質保證總顧問</span>
						<span class="teacher-title xs">林絢琛博士</span>
						<!-- <span>Programme Director</span> -->
					</div>
					<div class = "teacher-name-wrapper teacher-name-wrapper-two xs" v-show = "currentLang=='en'">
						<span class="teacher-title xs en">Programme Director</span>
						<span class="teacher-title xs en">Dr. Michael Lam</span>
						<!-- <span></span> -->
					</div>

			 	</div>

	  	</div>
			<!-- show in low screen -->
			<div class="teacher-introduce part1-3-2-introduce2">

	      <div class="teacher-one-photo small">        
	        <div class="teacher-photo-wrapper">       
	          <div class="teacher-headPhoto teacher-headPhoto-one">
	            <img :src="imgUrl('lxc.png')">
	          </div>
	        </div>        
	        <div class = "teacher-name-wrapper xs" v-show = "currentLang=='zh_hk'">
	          <span class="teacher-title xs">素質保證總顧問</span>
	          <span class="teacher-title xs">林絢琛博士</span>
	        </div>
	        <div class = "teacher-name-wrapper xs" v-show = "currentLang=='en'">
						<span class="teacher-title xs">Programme Director</span>
						<span class="teacher-title xs">Dr. Michael Lam</span>
	        </div>


	      </div>

	      <div class = "teacher-info"  v-show = "currentLang=='zh_hk'">
	        <p class="name">林絢琛博士</p>
	        <p class = "motto">“質棄保證個性發展”</p>

	        <p class="sentence">-從历史發展來看，香港在提供跨地域的國際教育課程上是世界上做的最好的地區。它能夠在適應當地文化的同時，保證教學質量，這是跨地域的國際教育課程面對的最嚴峻挑戰。我們不僅重視智慧,還重視毎位學生個別的智慧、體力和文化發展。我們相信保證“個性發展”是人生成功的唯一途徑。</p>
	      </div>

				<div class="teacher-info" v-show = "currentLang=='en'">
				
		    	<p class = "motto">“Quality Assurance”</p>

	        <p class="sentence">-One of the toughest challenge for international education programme is to maintain the teaching and learning quality while adapting local culture, and Hong Kong is the best in the world in offering for its historical background. We value not just intelligence but also intellectual, physical, cultural development of each individual student. We believe "individuality” is the only way for life success.</p>
	        <p class="name">Dr. Michael Lam</p>

	      </div>	      
	    </div>

			<div class="teacher-experience">
				<div class="teacher-info-aside"  v-show = "currentLang=='zh_hk'">

	        <p class = "motto">“質棄保證個性發展”</p>

	        <p class="sentence">-從历史發展來看，香港在提供跨地域的國際教育課程上是世界上做的最好的地區。它能夠在適應當地文化的同時，保證教學質量，這是跨地域的國際教育課程面對的最嚴峻挑戰。我們不僅重視智慧,還重視毎位學生個別的智慧、體力和文化發展。我們相信保證“個性發展”是人生成功的唯一途徑。</p>
	        <p class="name">林絢琛博士</p>

	      </div>
		    
				<div class="teacher-info-aside" v-show = "currentLang=='en'">
				
		    	<p class = "motto">“Quality Assurance”</p>

	        <p class="sentence">-One of the toughest challenge for international education programme is to maintain the teaching and learning quality while adapting local culture, and Hong Kong is the best in the world in offering for its historical background. We value not just intelligence but also intellectual, physical, cultural development of each individual student. We believe "individuality” is the only way for life success.</p>
	        <p class="name">Dr. Michael Lam</p>

	      </div>
		
				<ul class="experience-list-two info-list part1-3-2-experience1"  v-show = "currentLang=='zh_hk'">
					<li>
	            <p>英國諾桑比亞大學商學院<span class="square"></span></p>
	            <p class="sub-list-item">課程總監/教授</p>
					</li>

					<li>
		          <p>英國雪菲爾哈倫大學健康學院<span class="square"></span></p>
		          <p class="sub-list-item">課程總監/教授</p>
					</li>

					<li>
		          <p>香港政府學歷及資歷評審局委任專家<span class="square"></span></p>
		          <p class="sub-list-item">(香港政府委任)</p>
					</li>

					<li>香港運動教學會會長及院士<span class="square"></span></li>
				 
					<li>
		          <p>香港高等科技教育學院學士<span class="square"></span></p>
		          <p class="sub-list-item">課程編輯委員</p>
					</li>

					<li>福建省莆田市政協委員</li>
				</ul>

				<ul class="experience-list-two info-list part1-3-2-experience1"  v-show = "currentLang=='en'">
					<li>
	            <p>Curriculum Director of Business School of University of Northumbria of UK<span class="square"></span></p>
	            <p class="sub-list-item">Professor</p>
					</li>

					<li>
		          <p>Curriculum Director of Health College of Sheffield Hallam University of UK<span class="square"></span></p>
		          <p class="sub-list-item">Professor</p>
					</li>

					<li>
		          <p>Appointed expert of the Hong Kong Council for Accreditation of Academic and Vocational Qualification<span class="square"></span></p>
		          <p class="sub-list-item">(appointed by the Hong KongGovernment)</p>
					</li>

					<li>President and Academician of the Hong Kong Sports Teaching Association<span class="square"></span></li>
				 
					<li>
		          <p>Higher Education Institute of Hong Kong<span class="square"></span></p>
		          <p class="sub-list-item">Member of Bachelor Degree Course Editorial Board of Technological</p>
					</li>

					<li>Member of Putian People's Political Consultative Conference, Fujian Province.Mainland China.</li>
				</ul>											
				

	      <!-- <ul class="experience-list-one info-list part1-3-2-experience2"  v-show = "currentLang=='zh_hk'">
	      		  <li>
	      		      <p><span class="square"></span>英國諾桑比亞大學商學院</p>
	      		      <p class="sub-list-item">課程總監/教授</p>
	      		  </li>
	      		
	      		  <li>
	      		      <p><span class="square"></span>英國雪菲爾哈倫大學健康學院</p>
	      		      <p class="sub-list-item">課程總監/教授</p>
	      		  </li>
	      		  <li>
	      		      <p><span class="square"></span>香港政府學歷及資歷評審局委任專家</p>
	      		      <p class="sub-list-item">(香港政府委任)</p> 
	      		  </li>
	      		
	      		  <li><span class="square"></span>香港運動教學會會長及院士</li>
	      		
	      		  <li>
	      		      <p><span class="square"></span>香港高等科技教育學院學士</p>
	      		      <p class="sub-list-item">課程編輯委員</p> 
	      		  </li>
	      		
	      		  <li><span class="square"></span>福建省莆田市政協委員</li>
	      		
	      		
	      		  <li>Universrty of British Columbia</li> 
	      		  <li>Major in Music, Minor in Chinese
	      		  <li>Chinese University Hong Kong</li>
	      		  <li>Cultural Management</li>
	      		  <li>National Academy of Arts</li> 
	      		  <li>Research in Chinese Opera</li> 
	      		  <li>Founder, Hong Kong and Macau InUmgible Cultural Heritage Research Centre (2016)</li> 
	      		  <li>Visiting Professor, National Academy of Chinese Theatre Arts (2015)</li> 
	      		  <li>Technical Consultant, Employees Retraining Board (2013)</li> 
	      		  <li>Lecturer (Academic), Hong Kong Academy of the Performing Arts (2012-2018)</li> 
	      		  <li>Programme Manager, The Open University of Hong Kong (2008-2012)</li>
	      		  
	      		</ul>		 -->		
			</div>
		</div>

		<div class="teacher-member teacher-member-three">
			<div class="teacher-introduce-three">
	      
	      <div class="teacher-three-photo">
	        
	        <div class="teacher-photo-wrapper">       
	          <div class="stripe-background stripe-background-three"></div>       
	          <div class="teacher-headPhoto teacher-headPhoto-three">
	            <img :src="imgUrl('xbl.png')">
	          </div>
	        </div>
	        
	        <div class = "teacher-name-wrapper teacher-three-name-wrapper xs" v-show = "currentLang=='zh_hk'">
	          <span class="teacher-title xs">中國傅統文化藝術鑣顧間</span>
	          <span class="teacher-title xs">謝柏粱教授</span>
	        </div>
	        <div class = "teacher-name-wrapper teacher-three-name-wrapper xs" v-show = "currentLang=='en'">
	          <span class="teacher-title xs">Chinese Traditional Culture and Art Genera General Counselor</span>
	          <span class="teacher-title xs">Professor Xie Boliang</span>
	        </div>


	      </div>

	      <ul class="experience-list-three info-list"  v-show = "currentLang=='zh_hk'">
	        <li>
	            <p><span class="square"></span>北京市高創針进领軍人物</p>
	            <p class="sub-list-item">國務院政府特殊津貼專家</p>
	        </li>

	        <li>
	            <p><span class="square"></span>中國戯曲學院戲文系主任</p>
	            <p class="sub-list-item">中文藝評論基地主任</p>
	        </li>

	        <li>
	            <p><span class="square"></span>中國戯曲學會常務理事</p>
	            <p class="sub-list-item">中國戯劇文學學會副會長</p>
	        </li>

	        <li>
	            <p><span class="square"></span>上海交通大學跨文化交流與研究中心主任</p>
	            <p class="sub-list-item">中文系主任、教授(2002-2008)</p>
	        </li>

	        <li>
	            <p><span class="square"></span>南京師範大學特聘教授</p>
	            <p class="sub-list-item">戯劇影視學科帶頭人、博士生導師(2000-2005)</p>
	        </li>

	        <li><span class="square"></span>美國佛薩大學、加州大學柏克萊分校、斯坦福大學(1999-2000)等校訪問與講座教授</li>
	        
	      </ul>  

	      <ul class="experience-list-three info-list"  v-show = "currentLang=='en'">
	        <li>
	            <p><span class="square"></span>A leading figure of Beijing's High-level Innovation and Entrepreneurial Talents Supporting Plan</p>
	            <p class="sub-list-item">State Council Special Allowance Expert</p>
	        </li>	      	
	        <li>
	            <p><span class="square"></span>Director of the Drama Department of National Academy of Chinese Theatre Arts</p>
	            <p class="sub-list-item">Director of the Center for Chinese Literary and Arts Criticismc</p>
	        </li>	      	
	        <li>
	            <p><span class="square"></span>Managing Director of the Chinese Opera Society</p>
	            <p class="sub-list-item">Vice President of the Chinese Theatre Literature Association</p>
	        </li>	      	
	        <li>
	            <p><span class="square"></span>Director of the Intercultural Communication and Research Center of Shanghai Jiao Tong UniversityDirector</p>
	            <p class="sub-list-item">Professor of the Chinese Department (2002-2008)</p>
	        </li>	      	
	        <li>
	            <p><span class="square"></span>Distinguished Professor of Nanjing Normal University</p>
	            <p class="sub-list-item">Leader of Drama and Film, PHD Supervisor (2000-2005)</p>
	        </li>	      	
					<li><span class="square"></span>Visiting and Chair Professor at the University of Florida, University of California at Berkeley, and Stanford University (1999-2000)</li>
	      	
	      </ul>

			</div>

			<div class="teacher-title-photo-three">
				<div class="photo">
					<img :src="imgUrl('title-photo-3.png')">
				</div>
				<div class="background-color"></div>
			</div>
		</div>

		<div class="teacher-member teacher-member-four">
			
			<div class = "top-part">
				<div class="picture-1">
					<img :src="imgUrl('teacher141.png')">
				</div>

				<div class="member-four-experience">
					<div class="teacher-headPhoto-four">
							<img :src="imgUrl('JustinLiu.png')">
					</div>

					<div class="teacher-name-wrapper teacher-four-name-wrapper" v-show = "currentLang=='zh_hk'">
						<span class="teacher-title">首席招生官</span> 
						<span class="teacher-title">劉博微教授</span>
					</div>

					<div class="teacher-name-wrapper teacher-four-name-wrapper" v-show = "currentLang=='en'">
						<span class="teacher-title">Chief Executive Officer</span> 
						<span class="teacher-title">Prot Justin Liu</span>
					</div>

		      <ul class="experience-list-four info-list"  v-show = "currentLang=='zh_hk'">
		        <li>
		            <p>牛津國際（香港）教育集團<span class="square"></span></p>
		            <p class="sub-list-item">首席執行官</p>
		        </li>

		        <li>
		        	香港中文大學、香港浸會大學雙碩士<span class="square"></span>
		        </li>

		        <li>
		            <p>亞太國際教育交流協會<span class="square"></span></p>
		            <p class="sub-list-item">執行委貝會主席</p>
		        </li>
		      </ul>  					
		      <ul class="experience-list-four info-list"  v-show = "currentLang=='en'">
		        <li>
		            <p>Oxford International (Hong Kong) Education Group<span class="square"></span></p>
		            <p class="sub-list-item">Chief Executive Officer</p>		        	
		        </li>

		        <li>
		        	Double Master CUHK\HKBU<span class="square"></span>
		        </li>

		        <li>
		            <p>Asia-Pacific International Education Exchange Association<span class="square"></span></p>
		            <p class="sub-list-item">President Of the Executive Committee</p>		        	
		        </li>	      	
					</ul>
						<!-- 
						
						
						 -->	        
				</div>
			</div>
				
			<div class = "bottom-part">   
				<div class="member-four-teacher-info" v-show = "currentLang=='zh_hk'">
					<p class="name">劉博微教授/Prot Justin Liu</p>      
					<p class="motto">“面向未來培育人才”</p>      
					<p class="sentence"> 
						-通過幫助超過一千位學生入讀理想大學的經驗，我們相信离中教育十分重要的使命是培養出學生的“自主學習意識”和“自學能力”。在融合了西方科學的教育模式與東方鎪典的文化箱®以後，我們相信所有學生都能面向未來進行全面發展，從而收穫藤盛的人生。     
					</p>   
				</div>   
				<div class="member-four-teacher-info" v-show = "currentLang=='en'">
					<p class="name">Prot Justin Liu</p>      
					<p class="motto">"Nourish the Future"</p>      
					<p class="sentence"> 
						-With the experience in helping more than 1,000 students going to their designated University, we believe that one importance mission of High School education is to cultivate students' setf- motivated learning attitude and independent learning ability.Integrated the western scientific education    models and eastern sophisticated culture heritages, we believe all students will be well-rounded nourished and articulate to their flourish future.     
					</p>   
				</div>   
				<!--   -->
					
				<div class="picture-2">
					<img :src="imgUrl('teacher142.png')">
				</div>
				
			</div>
		</div>

  </main>
</template>
<script src="./governance.js"></script>
<style src="./governance.css"></style>
