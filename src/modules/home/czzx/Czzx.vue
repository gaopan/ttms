<template>
  <div class="content-wrapper">
    <div class="row">
      <router-view></router-view>
      <aside class="content-left" role="complementary">
        <div class="search-box-left">
          <search-box></search-box>
        </div>
        
        
        <!-- InstanceBeginEditable name="leftmenu" -->
        <div class="box">
          <h2>{{'section_content' | translate(translator, currentLang)}}</h2>
          <ul class="sideNav">
            <li v-for="nav in navs">
              <a :title="nav.name" :class="{active: $router.currentRoute.path == nav.path}" @click="navTo(nav.path)">{{nav.name}}</a>
            </li>
          </ul>
        </div>
        <!-- InstanceEndEditable -->
        <!-- InstanceBeginEditable name="leftblock1" -->
        <div class="box"><a title="Oxford International College Prospectus 2018" target="_blank" href="http://www.oxcoll.com/library-assets/oicprospectus2018.pdf"><img style="max-height: 300px; border: 1px solid black;" title="OIC Prospectus 2018" src="http://www.oxcoll.com/library-assets/prospectus-18.jpg" alt="OIC Prospectus 2018"></a></div>
        <!-- InstanceEndEditable -->
      </aside>
    </div>
  </div>
</template>
<script src="./czzx.js"></script>
<style type="text/css">
 .part1-2{
    margin-top: 70px;
 }
 .part1-1 .info-list,
 .part1-2 .info-list,
 .part1-3 .info-list{
    line-height: 28px;
 }

 .search-box-left{
   display: none;
 }

/* @media (min-width: 992px){
    .teacher-member {
        width: 970px;
    }
} */
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
      margin-top: 70px;
      padding-left: 20px;
   }

   .part1-1 .info-list li,
   .part1-2 .info-list li,
   .part1-3 .info-list li{
      font-size: 18px;
    
   }

   .part1-1 .info-list .square,
   .part1-2 .info-list .square,
   .part1-3 .info-list .square{
      margin-left: 20px;
   }      

}


</style>
