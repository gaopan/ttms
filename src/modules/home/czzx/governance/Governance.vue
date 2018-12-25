<template>
  <main class="content-main" role="main">
		
		<div class="teacher-introduce">
      <div class="teacher-introduce-left">
        
        <div class="teacher-photo-wrapper">       
          <div class="stripe-background stripe-background-one"></div>       
          <div class="teacher-photo teacher-photo-one">
            <img :src="imgUrl('zzl.png')">
          </div>
        </div>
        
        <div class = "teacher-name-wrapper">
          <span class="teacher-title">课程总监</span>
          <span class="teacher-title">張紫伶博士</span>
          <!-- <span>Programme Director</span> -->
        </div>
      </div>
      <div class = "teacher-info">
        <p class="name">張紫伶博士 /Dr.Sammi Yu</p>
        <p class = "motto">“自信，專注，獨立，熱誠"</p>

        <p class="sentence">-我們相倌學生們應該在不同議題上秉持獨立的見解，不論是涉及全球或民族層面的议題，亦或是涉及當地或個人層面的事項。為了幫助學生擁有兼容東西方文化的價值觀，我們專注於培養他們的自信心、專注力、獨立性和熱誠。</p>
      </div>
    </div>

    <div class="teacher-experience">
      <ul class="experience-list-one info-list">
        <li>
            <p><span class="square"></span>學士 加牟大哥倫比亞大學 </p>
            <p class="sub-list-item">BA- 主修音樂，副修中文</p>
        </li>

        <li>
            <p><span class="square"></span>碩士 香港中文大學 </p>
            <p class="sub-list-item">MA -文化管理</p>
        </li>
        <li>
            <p><span class="square"></span>博士 -中國藝術研究院 </p>
            <p class="sub-list-item">PhD - 戲曲理論</p> 
        </li>

        <li><span class="square"></span>創始人港澳非物質文化遺産發展研究會(2016)</li>
        <li><span class="square"></span>客席教授，中國戯曲學校（2015)</li>
        <li><span class="square"></span>技術僱問，僱貝再培訓局(2008-2012) </li>
        <li><span class="square"></span>講師（學科）香港演藝學院(2012-2018)</li>
        <li><span class="square"></span>課程經理 香港公閬大學(2008-2012)</li>


        <!-- <li>Universrty of British Columbia</li> 
        <li>Major in Music, Minor in Chinese
        <li>Chinese University Hong Kong</li>
        <li>Cultural Management</li>
        <li>National Academy of Arts</li> 
        <li>Research in Chinese Opera</li> 
        <li>Founder, Hong Kong and Macau InUmgible Cultural Heritage Research Centre (2016)</li> 
        <li>Visiting Professor, National Academy of Chinese Theatre Arts (2015)</li> 
        <li>Technical Consultant, Employees Retraining Board (2013)</li> 
        <li>Lecturer (Academic), Hong Kong Academy of the Performing Arts (2012-2018)</li> 
        <li>Programme Manager, The Open University of Hong Kong (2008-2012)</li>  -->
        
      </ul>
      <div class="experience-photo">
        <img :src="imgUrl('clock.png')">
      </div>
    </div>

  	<div class="teacher-introduce">

			<div class = "teacher-title-picture">
				<img :src="imgUrl('44.png')">
			</div>

		 	<div class="teacher-introduce-right">
		 		
		 		<div class="teacher-photo-wrapper">				
					<div class="stripe-background stripe-background-two"></div>	 			
					<div class="teacher-photo teacher-photo-two">
						<img :src="imgUrl('lxc.png')">
					</div>
		 		</div>
		 		
				<div class = "teacher-name-wrapper teacher-name-wrapper-two">
					<span class="teacher-title">素質保證總顧問</span>
					<span class="teacher-title">林絢琛博士</span>
					<!-- <span>Programme Director</span> -->
				</div>
		 	</div>			
  	</div>

		<div class="teacher-experience">
			<div class="teacher-info-aside">

        <p class = "motto">“質棄保證個性發展”</p>

        <p class="sentence">-從历史發展來看，香港在提供跨地域的國際教育課程上是世界上做的最好的地區。它能夠在適應當地文化的同時，保證教學質量，這是跨地域的國際教育課程面對的最嚴峻挑戰。我們不僅重視智慧,還重視毎位學生個別的智慧、體力和文化發展。我們相信保證“個性發展”是人生成功的唯一途徑。</p>
        <p class="name">林絢琛博士</p>

      </div>
	    
			<!-- <div class="teacher-info-aside">
			
	    	<p class = "motto">“Quality Assurance”</p>

        <p class="sentence">-One of the toughest challenge for international education programme is to maintain the teaching and learning quality while adapting local culture, and Hong Kong is the best in the world in offering for its historical background. We value not just intelligence but also intellectual, physical, cultural development of each individual student. We believe "individuality” is the only way for life success.</p>
        <p class="name">Dr. Michael Lam</p>

      </div> -->
	
			<ul class="experience-list-two info-list">
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

				<li>香港運動教學會會長及院士</li>
			 
				<li>
	          <p>香港高等科技教育學院學士<span class="square"></span></p>
	          <p class="sub-list-item">課程編輯委員</p>
				</li>

				<li>福建省莆田市政協委員</li>

				<!-- Curriculum Director of Business School of 
								University of Northumbria of UK, Professor
								 
								Curriculum Director of Health College of 
								Sheffield Hallam University of UK, Professor
								
								Appointed expert of the Hong Kong Council 
								for Accreditation of Academic and Vocational 
								Qualification (appointed by the Hong Kong
								Government)
								
								President and Academician of the Hong Kong 
								Sports Teaching Association
								
								Member of Bachelor Degree Course Editorial 
								Board of Technological and Higher Education 
								Institute of Hong Kong
								
								Member of Putian People's Political 
								Consultative Conference, Fujian Province.
								Mainland China -->				
			</ul>

		</div>


  </main>
</template>
<script src="./governance.js"></script>
<style>

	.teacher-introduce{
		padding-right: 120px;
	}
	.stripe-background{
    width: 300px;
    height: 300px;
    line-height: 2.5;
    background-size: auto 6px;
    background-origin: content-box;
	}
	.stripe-background-one{
    transform: rotate(90deg) translateX(0px) translateY(-50px);
    background-image: linear-gradient(#A87C44 50%,transparent 3px);
	}

	.teacher-introduce-left,
	.teacher-photo,
	.teacher-name-wrapper,
	.teacher-info{
		display: inline-block;
	}
	.teacher-introduce-left{
    position: relative;
    vertical-align: top;
    width: 348px;
    height: 300px;		
	}
	.teacher-photo-wrapper{
		 margin-bottom: 20px;	
	}
	.teacher-photo{
    width: 142px;
    transform: translateX(0);
    position: absolute;
	}
	.teacher-photo-one{
    left: 0px;
    bottom: 0px;
	}

	.teacher-name-wrapper{
		color: rgb(168,124,68);
	}

	.teacher-title{
    display: block;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;		
	}

	.teacher-info{
    width: 600px;
    height: 430px;
    background: #a87c44;
    color: #fff;
    padding: 80px 30px 60px 30px;
	}
	
	.teacher-info .name,
	.teacher-info .motto,
	.teacher-info .sentence,
	.teacher-info-aside .name,
	.teacher-info-aside .motto,
	.teacher-info-aside .sentence {
	    margin-bottom: 15px;
	    line-height: 22px;
	}

	.teacher-info .name,
	.teacher-info-aside .name {
	  font-size: 20px;
	}	

	.teacher-info .motto,
	.teacher-info-aside .motto {
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 32px;
	}

	.teacher-info .sentence,
	.teacher-info-aside .sentence {
    font-size: 16px;
    line-height: 28px;
	}


/* bottom */
.teacher-experience {
    display: flex;
    padding-right: 120px;
    margin-bottom: 100px;
}

.teacher-experience li{
	margin-bottom: 40px;
	line-height: normal;
}

.teacher-experience .experience-sub-list li{
	margin-top: 10px;
}
.teacher-experience .experience-sub-list li+li{
	margin-bottom: 20px;
}


.experience-list-one {
    flex: 1;
}

.sub-list-item {
    margin-left: 20px;
}

.experience-photo {
  width: 530px;
}



/* teacher 2 */
.teacher-title-picture {
    display: inline-block;
    width: 600px;
    vertical-align: top;
}

.teacher-introduce-right {
    display: inline-block;
    position: relative;
}

.stripe-background-two{
    transform: rotate(90deg) translateX(0) translateY(3px);
    background-image: linear-gradient(#A87E74 50%,transparent 3px);
}

.teacher-photo-two {
    right: -50px;
    bottom: 80px;
}

.teacher-name-wrapper-two{
	   direction: rtl;
    float: right;
    margin-right: -50px;
}

.teacher-info-aside{
	flex: 1;
}

.experience-list-two{
	direction: rtl;
	width: 422px;
}

</style>
