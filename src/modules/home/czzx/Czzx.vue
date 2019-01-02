<template>
  <div class="content-wrapper">
    <div class="row">
      <p class = "nav-name-tip" v-show = "navNameTip.subName">{{navNameTip.name}} >> {{navNameTip.subName}}</p>
      <div class="inside-search-box">
        <search-box></search-box>
      </div>

      <router-view></router-view>
      <!-- <aside class="content-left" role="complementary">
        <div class="search-box-left">
          <search-box></search-box>
        </div>
        
        
        InstanceBeginEditable name="leftmenu"
        <div class="box">
          <h2>{{'section_content' | translate(translator, currentLang)}}</h2>
          <ul class="sideNav">
            <li v-for="nav in navs">
              <a :title="nav.name" :class="{active: $router.currentRoute.path == nav.path}" @click="navTo(nav.path)">{{nav.name}}</a>
            </li>
          </ul>
        </div>
        InstanceEndEditable
        InstanceBeginEditable name="leftblock1"
        <div class="box"><a title="Oxford International College Prospectus 2018" target="_blank" href="http://www.oxcoll.com/library-assets/oicprospectus2018.pdf"><img style="max-height: 300px; border: 1px solid black;" title="OIC Prospectus 2018" src="http://www.oxcoll.com/library-assets/prospectus-18.jpg" alt="OIC Prospectus 2018"></a></div>
        InstanceEndEditable
      </aside> -->
    </div>
  </div>
</template>
<script src="./czzx.js"></script>
<style type="text/css">

 .part1-1 .info-list,
 .part1-2 .info-list,
 .part1-3 .info-list{
    line-height: 28px;
 }

 .search-box-left{
   display: none;
 }

@media (max-width:480px){
  .part1-2 {
      margin-top: 30px;
  } 
}

@media(min-width:480px){
  main.content-main.part1-2{
      padding-top: 40px;
      padding-bottom: 60px;  
  }
  .part1-2 {
      margin-top: 70px;
  }   
}

@media(min-width:480px) and (max-width:768px){

}
@media(min-width:768px){
  .search-box-left{
    display: inline-block;
  }  

}

@media(max-width:768px){
    .part1-1 .info-list .square,
    .part1-2 .info-list .square,
    .part1-3 .info-list .square{
      margin-left: 10px;
    }   
    .part1-1 .info-list li, .part1-2 .info-list li, .part1-3 .info-list li {
        font-size: 14px;
        line-height: 18px;
    }  

    .part1-1-picture,
    .part1-3-picture{
      margin-bottom: 30px;
    }    
}
  .part1-1 .info-list, .part1-3 .info-list {
      margin-top: 20px;
      padding-right: 0;
  }
@media(min-width:768px){
  .part1-2 .info-list{
      padding-right: 0;
    }

   .part1-3 .info-list,
   .part1-1 .info-list{
      margin-top: 20px;
      /* padding-left: 70px; */
   }

   .part1-1 .info-list li.zh_hk,
   .part1-2 .info-list li.zh_hk,
   .part1-3 .info-list li.zh_hk{
      font-size: 18px;
    
   }
   .part1-1 .info-list li.en,
   .part1-2 .info-list li.en,
   .part1-3 .info-list li.en{
      font-size: 16px;
    
   }

   .part1-1 .info-list .square.zh_hk,
   .part1-2 .info-list .square.zh_hk,
   .part1-3 .info-list .square.zh_hk{
      /* margin-left: 20px; */
   }   

    .part1-1-picture,
    .part1-3-picture{
      margin-bottom: 40px;
    }      

}


</style>
