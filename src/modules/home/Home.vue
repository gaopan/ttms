<template>
  <div :id="$router.currentRoute.path == '/index' ? 'home' : 'inside'">
    <header role="banner" :class = "currentLang">

      <div class="advert">
        <img class="header-top-bg" :src="imgUrl('oxcoll_banner.png')" alt="Oxford International College" title="Oxford International College">
      </div>
      <!-- school logo, school name, school address -->
      <div class="navbar navbar-inverse" role="navigation">
        <div class="container">
          <div class="navbar-header" :class = "currentLang">
            <div  class="school-log-wrapper" itemscope="" itemtype="http://schema.org/Organization">
              <a itemprop="url" class="navbar-brand" href="/">
    						<img :src="imgUrl('czzx-logo.png')" />
    					</a>
              <div class="school-title-wrapper" :class = "currentLang">
                <p class="school-title" :class = "{'en':currentLang === 'en','zh':currentLang === 'zh_hk'}">{{'schoolName' | translate(translator, currentLang)}}</p>
                <p class="school-subtitle-en" v-show = "currentLang === 'zh_hk'">HONG KONG TSUNG TSIN MIDDLE SCHOOL</p>
              </div>
            </div>
            <!--    -->

            <div class="brand-strap-1">
              <div class="school-info-1" :class = "currentLang">
                <!-- <p class="big-1" :class = "currentLang">{{'name' | translate(translator, currentLang)}}</p> -->
                <p :class = "currentLang">
                  {{'address' | translate(translator, currentLang)}}
                  <br/> {{'contact' | translate(translator, currentLang)}}
                  <br/> {{'contact_tel' | translate(translator, currentLang)}}
                </p>
              </div>

            </div>            
          </div>

          <div class="brand-strap">
            <div class="school-info" :class = "currentLang">
              <p class="big" :class = "currentLang">{{'name' | translate(translator, currentLang)}}</p>
              <p :class = "currentLang">
                {{'address' | translate(translator, currentLang)}}
                <br/> {{'contact' | translate(translator, currentLang)}}
                <br/> {{'contact_tel' | translate(translator, currentLang)}}
              </p>
            </div>
            <div class="langs">
              <div :class="{active: lang.value==currentLang}" class="lang" v-for="lang in langs" @click="changedLang(lang)">{{lang.name}}</div>
            </div>
          </div>
          <!--/.nav-collapse -->
         </div>
      </div>

    </header>

    <!-- <div class="search_button-nav">
          <div class="search-box-top">
            <search-box></search-box>
          </div>            
       
      </div>   -->  

    <nav role="navigation" class="navbar-collapse collapse" ref = "navigator"  v-dropdown = "fnBlur">
      <ul class="nav navbar-nav">
        <li @click="navTo('index',indexNav[currentLang])" :class = "{'active':bIndexPage}">
          <a href="javascript:void(0)" :class = "{'en':currentLang === 'en','zh':currentLang === 'zh_hk'}">
            <img v-if="indexNav[currentLang].imgUrl" :src="imgUrl(indexNav[currentLang].imgUrl)" :class="indexNav[currentLang].imgClass" />
          </a>          
        </li>
        <li :class="{active: isCurrentPath(nav.path)}" @click = "switchSubNav(nav,outerIndex)"  v-for="(nav,outerIndex) in navs">
        <!-- <li :class="{active: isCurrentPath(nav.path)}" @click="navTo(nav)" v-for="nav in navs"> -->
          <a href="javascript:void(0)" :class = "{'en':currentLang === 'en','zh':currentLang === 'zh_hk'}">
            <span class = "nav-itemName" :class = "currentLang" v-if="!nav.notDisplayName&&nav.nameHtml" v-html="nav.nameHtml"></span>
            <span class = "nav-itemName" :class = "currentLang" v-if="!nav.notDisplayName&&!nav.nameHtml">{{nav.name}}</span>
            <img v-if="nav.imgUrl" :src="imgUrl(nav.imgUrl)" :class="nav.imgClass" />
            <span class = "nav-description">{{nav.imgUrl ? "" : nav.description}}</span>
          </a>
          <!--  -->
          <ul v-show = "nav.bShow" class="sub-nav-list">
            <li v-for = "(subPath, innerIndex) in nav.subPath" @click="navTo('child',subPath,outerIndex,innerIndex)" :class = "{'active':subPath.active, 'en':currentLang === 'en','zh':currentLang === 'zh_hk'}">{{subPath.name}}</li>
          </ul>
        </li>
      </ul>
    </nav> 
    


    <div class="switch-navigation" ref = "smallNavEle">
      <div class="toggle-button-wrapper">
        <button @click = "showSmallNav" class="navbar-toggle" type="button">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
        </button>
      </div>  

      <div class="navbar-collapse-2" v-show = "bShowSmallNav" v-dropdown = "fnBlurSmallNav" >
           <ul class="nav navbar-nav">
           
              <li @click="switchSubNav(nav,outerIndex)" v-for="(nav,outerIndex)  in navs">
                <a  href="javascript:void(0)" :class = "{'active': isCurrentPath(nav.path), 'en':currentLang === 'en','zh':currentLang === 'zh_hk'}">
                  <span class = "nav-itemName" :class = "currentLang" v-if="!nav.notDisplayName&&nav.nameHtml" v-html="nav.nameHtml"></span>
                  <span class = "nav-itemName" :class = "currentLang" v-if="!nav.notDisplayName&&!nav.nameHtml">{{nav.name}}</span>
                  <!-- <img v-if="nav.imgUrl" :src="imgUrl(nav.imgUrl)" :class="nav.imgClass" /> -->
                  <span class = "nav-description">{{nav.imgUrl ? "" : nav.description}}</span>
                  <!-- <span class="square" v-show = "isCurrentPath(nav.path)"></span> -->
                </a>
                <ul v-show = "nav.bShow" class="sub-nav-list-2">
                  <li v-for = "(subPath, innerIndex) in nav.subPath" @click="navTo('child',subPath,outerIndex,innerIndex,'small')" :class = "{'active':subPath.active}">{{subPath.name}}</li>
                </ul>            
              </li>
            </ul>
      </div>

    </div>

    <router-view></router-view>
    <footer role="contentinfo">
      <div class="container">
        <div id="footer-left">
          <img :src="imgUrl('address-big.png')" />
        </div>
        <div id="footer-middle">
          <p>
            <strong>{{'name' | translate(translator, currentLang)}}</strong>
            <br/>
            <br/>{{'address' | translate(translator, currentLang)}}
            <br/> {{'contact' | translate(translator, currentLang)}}
            <br/> {{'contact_tel' | translate(translator, currentLang)}}
            <br/> {{'contact_fax' | translate(translator, currentLang)}}
            <!-- <br/> {{'contact_phone' | translate(translator, currentLang)}} -->
            <br/> {{'admissionOffice' | translate(translator, currentLang)}}

            <br/>
            {{'website' | translate(translator, currentLang)}}
            <a href="www.ttms.edu.hk">www.ttms.edu.hk</a>
            <br/>
            {{'email' | translate(translator, currentLang)}}
            <a>info@ttms.edu.hk</a>
          </p>
          <p class="provider-info">&lt;Content provided by Oxford International (Hong Kong) Education Group&gt;</p>
        </div>
        <div id="footer-right">
          <img :src="imgUrl('address.png')" />
        </div>
      </div>

      <div class="sub-footer-container">
        <div id="footer-middle">
          <p>
            <strong>{{'name' | translate(translator, currentLang)}}</strong>
            <br/>
            <br/>{{'address' | translate(translator, currentLang)}}
            <br/> {{'contact' | translate(translator, currentLang)}}
            <br/> {{'contact_tel' | translate(translator, currentLang)}}
            <br/> {{'contact_fax' | translate(translator, currentLang)}}
            <!-- <br/> {{'contact_phone' | translate(translator, currentLang)}} -->
            <br/> {{'admissionOffice' | translate(translator, currentLang)}}
            <br/>
            {{'website' | translate(translator, currentLang)}}
            <a href="www.ttms.edu.hk">www.ttms.edu.hk</a>
            <br/>
            {{'email' | translate(translator, currentLang)}}
            <a>info@ttms.edu.hk</a>
          </p>
        </div> 
        <div class="footer-map-wrapper">
          <div id="footer-left">
            <img :src="imgUrl('address-big.png')" />
          </div>        
          <div id="footer-right">
            <img :src="imgUrl('address.png')" />
          </div>               
        </div>
        <div class="provider-info">&lt;Content provided by Oxford International (Hong Kong) Education Group&gt;</div>
      </div>
    </footer>
    <div class="footer-sub">
      <img :src="imgUrl('star88.jpg')" style="height:70px" alt="星光88" title="星光88">
      <img src="http://www.oxcoll.com/library-assets/isa1001.gif" alt="" width="145" height="74"><img src="http://www.oxcoll.com/library-assets/edexcel.gif" alt="Edexcel" title="Edexcel" width="137" height="70">
      <img src="http://www.oxcoll.com/library-assets/aqa.gif" alt="AQA" title="AQA">
      <img src="http://www.oxcoll.com/library-assets/ocr.gif" alt="OCR" title="OCR">
      <img src="http://www.oxcoll.com/library-assets/wjec.gif" alt="WJEC" title="WJEC">
      <img src="http://www.oxcoll.com/library-assets/university-of-cambridge.gif" alt="University of Cambridge" title="University of Cambridge">
      <img src="http://www.oxcoll.com/library-assets/cife.gif" alt="cife" title="cife">
    </div>
  </div>
</template>
<script src="./home.js"></script>
<style src="./home.css"></style>
