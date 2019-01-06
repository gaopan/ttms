<template>
  <main class="content-main" role="main">
  	<div class="part2-2 part2-2-2">
      <div class = "part2-2-2-top">
        <img :src="imgUrl('2.1.6.png')">
      </div>

      <div class = "part2-2-2-bottom" v-show="currentLang=='zh_hk'">
        <p class="part222-prog part222-prog-zh">我們相信所有的學生都可以成為未來的專業人士、創新者、領導者或學者。 為了幫助學生在學術和職業生涯中取 得成功，我們認識到：學習需要超越傅統的課堂範圍。</p>
        <p class="part222-prog part222-prog-zh">在 二十一世紀，學生決不能僅僅滿足於聽老師教授如何取得好成績，他們 必須完全投入到自身的學術興趣當中， 參加俱樂部、社團，在他們選擇的學 科競赛中競爭，通過開展新活動走出自己的舒適區,收穫富有洞見的工作經歴，學習如何應對生活中的挑戰。</p>
        <p class="part222-prog part222-prog-zh">我們學習方法的成效有目共睹。當學 生從學院離開時，他們將成為全面發 展的成人，取得個人成功和專業成就。</p>
        <p class="part222-prog part222-prog-zh">我們塑造的文化氛圈在於：為自己的成就擔起责任，與具備改善當今世界的使命感。</p>
        <p class="part222-prog part222-prog-zh">沒有個人品德，學術成就會變得亳無意義。我們充滿熱情地為學生配備各 種互補的技能和能力，這些技能和能力將在他們的人生中為其服務，幫助他們樹立品格和通應能力。希盟學生 能夠通過反思自身經歷、使用這些知識來服務、領導、激勵他人，這就是英國牛津國嫌公學將個人發展纳入其核心裸程的重要原因。</p>
      </div>
      <div class = "part2-2-2-bottom"  v-show="currentLang=='en'">
        <p class="part222-prog part222-prog-en">We believe all the students can become the professionals, innovators, leaders and scholars. In order to help students achieve success in the academic and career life, we recognize that learning needs to transcend traditional curriculum range.</p>
      
        <p class="part222-prog part222-prog-en">In the 21st century, students can not only be satisfied with that just follow the teachers and professors how to achieve good results.They must fully participate in their own academic interests, participate in clubs and societies, compete in the discipline competitions they choose, walk out of their comfort zone through new activities, gain insightful work experience, and learn how to cope with the challenges of life.</p>
      
        <p class="part222-prog part222-prog-en">The effectiveness of our learning methods is obvious to all.When students leave the college, they will become fully developed adults with personal success and professional achievement.</p>
      
        <p class="part222-prog part222-prog-en">The cultural atmosphere we create is: responsibility for your achievements and a sense of mission to improve the world today.</p>
      
        <p class="part222-prog part222-prog-en">Without personal morality, academic achievement will become meaningless.We are passionate about providing students with complementary skills and abilities that will serve them in their lives, helping them to develop character and adaptability.It is hoped that students will be able to serve, lead and motivate others by reflecting on their own experiences and using this knowledge.This is why Oxford International College has incorporated personal development into its core curriculum.</p>        
      </div>
      
  	</div>
  </main>
</template>
<script src="./objective.js"></script>
<style type="text/css" src="./objective.css"></style>
