<template>
  <div class="content-wrapper">
    <div class="row">
      <p class = "nav-name-tip">{{currentLang == "en" ? 'Result':'搜索结果'}}</p>

      <div class="inside-search-box">
        <search-box></search-box>
      </div>

      <main class="content-main search-result-container" role="main">
        <!-- InstanceBeginEditable name="content" -->
       <!--  <h1>{{'search_results' | translate(translator, currentLang)}}</h1> -->

        <p v-if="currentLang=='en'">Found {{searchResult.length}} pages with reference to ( {{searchText}} )</p>
        <p v-if="currentLang=='zh_hk'">查詢到 {{searchResult.length}} 個頁面與 ( {{searchText}} ) 有關</p>
        
        <div v-for="item in searchResult">
          <h2>{{item.name}}</h2>
          <p><a :title="'read_more' | translate(translator, currentLang)" href="javascript:void(0)" @click="navTo(item.path)" class="read-more-search">{{'read_more' | translate(translator, currentLang)}}</a></p>
        </div>

      </main>

      <!-- <aside class="content-left" role="complementary">
        <form class="form-horizontal search" name="search" @submit.prevent="submit">
          <div class="form-group">
            <label class="label-control">{{'search' | translate(translator, currentLang)}} : </label>
            <input name="word" type="text" class="form-control" v-model="searchText" :placeholder="'search' | translate(translator, currentLang)">
            <input class="search-btn" type="submit">
          </div>
        </form>
        InstanceBeginEditable name="leftblock1"
        <div class="box"><a title="Oxford International College Prospectus 2018" target="_blank" href="http://www.oxcoll.com/library-assets/oicprospectus2018.pdf"><img style="max-height: 300px; border: 1px solid black;" title="OIC Prospectus 2018" src="http://www.oxcoll.com/library-assets/prospectus-18.jpg" alt="OIC Prospectus 2018"></a></div>
        InstanceEndEditable
      </aside> -->
    </div>
  </div>
</template>
<script src="./search.js"></script>
<style type="text/css">
  .search-result-container{
    padding-bottom: 30px;
  }
@media (max-width: 767px) {
  .search-result-container {
      font-size: 14px;
  }  
}

@media (min-width: 768px) {
  .search-result-container {
      font-size: 16px;
  }  
}


</style>
