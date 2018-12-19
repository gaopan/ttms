<template>
  <div class="content-wrapper">
    <div class="row">
      <router-view></router-view>
      <aside class="content-left" role="complementary">
        <form class="form-horizontal search" id="search-2" name="search">
          <div class="form-group">
            <label for="searchsite-2" class="label-control">{{'search' | translate(translator, currentLang)}} : </label>
            <input name="word" type="text" class="form-control" id="searchsite-2" value="" :placeholder="'search' | translate(translator, currentLang)">
            <input class="search-btn" name="search-btn" type="submit" id="search-2-btn" value="Sign Up">
          </div>
        </form>
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
<script src="./njgx.js"></script>
