<template>
  <div class="content-wrapper">
    <div class="row">
      <p class = "nav-name-tip">{{currentLang == "en" ? 'Result':'搜索结果'}}</p>

      <div class="inside-search-box">
        <search-box @newSearchText = "updateSearchText" :bSearchRoute = "true"></search-box>
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
