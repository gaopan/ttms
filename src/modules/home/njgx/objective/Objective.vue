<template>
  <main class="content-main" role="main">
  	<div class="part2-2 part2-2-2">
      <div class = "part2-2-2-top">
        <img :src="imgUrl('2.1.6.png')">
      </div>

      <div class = "part2-2-2-bottom" v-show="currentLang=='zh_hk'">
        <p class="part222-prog part222-prog-zh">我們相信所有的學生都可以成為未來的專業人士、創新者、領導者或學者。 為了幫助學生在學術和職業生涯中取 得成功，我們認識到：學習霑要超越 傅統的課堂範圍。</p>
        <p class="part222-prog part222-prog-zh">在 二 + — 世紀，學生決不能保保滿足 於睡老師教授如何取得好成结，他們 必須完全投入到自身的學術興趣當中， 參加俱樂部、社團，在他們洪擇的學 科競赛中競爭，通過開展新活動走出 自 己 的 舒 適E, 收 穫 富 有 洞 見 的 工 作 經歴，學習如何應對生活中的挑戰。</p>
        <p class="part222-prog part222-prog-zh">我們學習方法的成效有目共睹。當學 生從學院離開時，他們將成為全面發 展的成人，取得個人成功和專業成就。</p>
        <p class="part222-prog part222-prog-zh">我們塑造的文化氛圈在於：為自己的 成就檐起责任，與具備改赛當今世界 的使命感。</p>
        <p class="part222-prog part222-prog-zh">沒有個人品德，學術成就食變得亳無 意義。我們充滿熱情地為學生配備各 棰互補的技能和能力，逭些技能和能 力將在他們的人生中為其服務，幫助 他們樹立品格和通應能力。希盟學生 能夠通遇反思自身經歷、使用逍些知 鏟來服務、領導、激勵他人，逍就是 英國牛津國嫌公學將個人發展纳入其 核心裸程的重要原因。</p>
      </div>
      <div class = "part2-2-2-bottom"  v-show="currentLang=='en'">
        <p class="part222-prog part222-prog-en">We believe all the students can become the professionals, innovators, leaders and scholars.In order to help students achieve success in the academic and career life, we recognize: that learning needs to transcend traditional curriculum range.</p>
      
        <p class="part222-prog part222-prog-en">Irt the 21st century, students can not only be satisfied with that just follow the teachers and professors how to achieve good results.They must fully participate in their own academic interests, participate in clubs and societies, compete in the discipline competitions they choose, walk out of their comfort zone through newactivities, gain insightful work experience, and learn how to cope with the challenges of life.</p>
      
        <p class="part222-prog part222-prog-en">The effectiveness of our learning methods is obvious to all.When students leave the college, they will become fully developed adults with personal success and professional achievement.</p>
      
        <p class="part222-prog part222-prog-en">The cultural atmosphere we create is: responsibility for your achievements and a sense of mission to improve the world today.</p>
      
        <p class="part222-prog part222-prog-en">Without personal morality, academic achievement will become meaningless.We are passionate about providing students with complementary skills and abilities that will serve them in their lives, helping them to develop character and adaptability.It is hoped that students will be able to serve, lead and motivate others by reflecting on their own experiences and using this knowledge.This is why Oxford International College has incorporated personal development into its core curriculum.</p>        
      </div>
      
  	</div>
  </main>
</template>
<script src="./objective.js"></script>
<style type="text/css">
  .part2-2{
    margin-bottom: 200px;
  }

  .part2-2 .part2-2-2-bottom {
    padding: 60px 60px 0 60px;
  }

  .part2-2 p.part222-prog {
    font-size: 18px;
    line-height: 28px;
  }
  .part2-2 p.part222-prog-en {
      text-indent: 24px;

  }
  .part2-2 p.part222-prog-zh {
      text-indent: 24px;

  }

  @media(max-width: 767px){
    .part2-2{
      margin-right: 0;
      margin-bottom: 0;
    }
    .part2-2.part2-2-2{
      margin-top: 46px;
    }
    .part2-2 .part2-2-2-bottom{
      padding:20px;
    }
    .part2-2 p.part222-prog{
      font-size: 14px;
    }
  }


</style>
