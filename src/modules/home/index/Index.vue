<template>
  <div class="content-wrapper index">
    <div class="index-search">
      <search-box></search-box>
    </div>
    <div class="index-container">
      <div class="welcome-index">
        <p class="welcome-p1">Welcome to</p>
        <p class="welcome-p2">
          <span class="welcome-p2-1">
            崇正牛津國際課程
          </span>
          <span class="welcome-p2-1">
            IGCSE A-LEVEL
          </span>
        </p>
        <p class="welcome-p3">
          TTMS OXFORD INTERNATIONAL PROGRAMME IGCSE A-LEVEL
        </p>
      </div>
      <div class="container-fluid picture-container">
        <div class="row picture-row">
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index2.png')">
              <p class="index-picture-description">
                <router-link to="/njgx">英國牛津國際公學</router-link>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index3.png')">
              <p class="index-picture-description">
                <router-link to="/njkc">崇正牛津國際中學課程</router-link>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index1.png')">
              <p class="index-picture-description">
                <router-link to="/czzx">香港崇正中學</router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="row picture-row">
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index4.png')">
              <p class="index-picture-description">
                <router-link to="/rxsq">入学申请</router-link>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index5.png')">
              <p class="index-picture-description">
                <router-link to="/njxy">崇正牛津校園</router-link>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index6.png')">
              <p class="index-picture-description">
                <router-link to="/honor">光榮榜與傑出學生</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- InstanceBeginEditable name="banner" -->
    <!-- <section>
      <div class="banner">
        <div class="blockGallery">
          <div class="rslides_container">
            <ul class="rslides rslides1">
              <li><img :src="imgUrl('gal2601.jpg')" alt="Students"></li>
              <li><img :src="imgUrl('gal1701.jpg')" alt="Students"></li>
              <li><img :src="imgUrl('galleryoic01.jpg')" alt="Students"></li>
              <li><img :src="imgUrl('gal2401.jpg')" alt="Students"></li>
              <li><img :src="imgUrl('gal19011.jpg')" alt="Students"></li>
              <li><img :src="imgUrl('gal20011.jpg')" alt="Students"></li>
              <li><img :src="imgUrl('gal2501.jpg')" alt="Students"></li>
              <li><img :src="imgUrl('gal2701.jpg')" alt="Students"></li>
              <li><img :src="imgUrl('gal3001.jpg')" alt="Students"></li>
              <li><img :src="imgUrl('gal32011.jpg')" alt="Students"></li>
            </ul>
          </div>
        </div>
        <div id="bannernews">
          <div class="bannernews">
            <h2><a href="http://www.oxcoll.com/blog/" title="Read our Latest News">Latest News</a></h2>
            <h3><a href="http://www.oxcoll.com/blog/hku-finance.html" title="HKU Young Finance">OIC Student Wins HKU Young Finance Team Award</a></h3>
            <p><a href="http://www.oxcoll.com/blog/hku-finance.html" title="HKU Young Finance">OIC student wins team award at HKU Young Finance Summer Program...</a></p>
            <h3><a href="http://www.oxcoll.com/blog/isaaward.html" title="ISAAward">OIC student wins ISA Lexden Award for Sixth Formers</a></h3>
            <p><a href="http://www.oxcoll.com/blog/isaaward.html" title="ISAAward">OIC A Level student, Abhiram Sasitharan, is named winner of 2018 ISA Lexden Award for Sixth Formers...</a></p>
            <h3><a href="http://www.oxcoll.com/blog/leaguetables2018.html" title="OIC tops The Times A-level league table for Englan">OIC tops The Times A-level league table for England</a></h3>
            <p><a href="http://www.oxcoll.com/blog/leaguetables2018.html" title="OIC tops The Times A-level league table for Englan">We are pleased to announce that Oxford International College has topped the A-Level League Table in England with a 12% rise in...</a></p>
          </div>
        </div>
      </div>
    </section>
    <div class="row">
      <main class="content-main" role="main">
        InstanceBeginEditable name="content"
    
        <div class="box"><img :title="'czgcUpdates' | translate(translator, currentLang)" :src="imgUrl('image013.jpg')" alt="" width="480">
          <div class="box-inner">
            <div class="box-dark">
              <h2><a @click="navTo('/czgc')" :title="'czgcUpdates' | translate(translator, currentLang)" href="javascript:void(0)">{{'czgcUpdates' | translate(translator, currentLang)}}</a></h2>
              <p></p>
            </div>
          </div>
        </div>
        <div class="box"><img :title="'latestImagesAndVideos' | translate(translator, currentLang)" :src="imgUrl('news-img-3.jpg')" alt="" width="480">
          <div class="box-inner">
            <div class="box-dark">
              <h2><a @click="navTo('/images')" :title="'latestImagesAndVideos' | translate(translator, currentLang)" href="javascript:void(0)">{{'latestImagesAndVideos' | translate(translator, currentLang)}}</a></h2>
              <p></p>
            </div>
          </div>
        </div>
        <div class="box"><img :title="'yycg' | translate(translator, currentLang)" style="height:262.5px;" :src="imgUrl('index-2.png')" alt="" width="480">
          <div class="box-inner">
            <div class="box-dark">
              <h2><a @click="navTo('/yycg')" :title="'yycg' | translate(translator, currentLang)" href="javascript:void(0)">{{'yycg' | translate(translator, currentLang)}}</a></h2>
              <p></p>
            </div>
          </div>
        </div>
        <p style="font-size: 0%; line-height: 0em; display: none; visibility: hidden; color: #fff;">The Oxford International College is funded by OCE - the guide to the <a style="color: #fff;" href="https://www.onlinecasinoselite.org">most trusted online casinos</a>.</p>
        <p><span style="border-radius: 2px; text-indent: 20px; width: auto; padding: 0px 4px 0px 0px; text-align: center; font: bold 11px/20px 'Helvetica Neue',Helvetica,sans-serif; color: #ffffff; background: #bd081c url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzBweCIgd2lkdGg9IjMwcHgiIHZpZXdCb3g9Ii0xIC0xIDMxIDMxIj48Zz48cGF0aCBkPSJNMjkuNDQ5LDE0LjY2MiBDMjkuNDQ5LDIyLjcyMiAyMi44NjgsMjkuMjU2IDE0Ljc1LDI5LjI1NiBDNi42MzIsMjkuMjU2IDAuMDUxLDIyLjcyMiAwLjA1MSwxNC42NjIgQzAuMDUxLDYuNjAxIDYuNjMyLDAuMDY3IDE0Ljc1LDAuMDY3IEMyMi44NjgsMC4wNjcgMjkuNDQ5LDYuNjAxIDI5LjQ0OSwxNC42NjIiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PHBhdGggZD0iTTE0LjczMywxLjY4NiBDNy41MTYsMS42ODYgMS42NjUsNy40OTUgMS42NjUsMTQuNjYyIEMxLjY2NSwyMC4xNTkgNS4xMDksMjQuODU0IDkuOTcsMjYuNzQ0IEM5Ljg1NiwyNS43MTggOS43NTMsMjQuMTQzIDEwLjAxNiwyMy4wMjIgQzEwLjI1MywyMi4wMSAxMS41NDgsMTYuNTcyIDExLjU0OCwxNi41NzIgQzExLjU0OCwxNi41NzIgMTEuMTU3LDE1Ljc5NSAxMS4xNTcsMTQuNjQ2IEMxMS4xNTcsMTIuODQyIDEyLjIxMSwxMS40OTUgMTMuNTIyLDExLjQ5NSBDMTQuNjM3LDExLjQ5NSAxNS4xNzUsMTIuMzI2IDE1LjE3NSwxMy4zMjMgQzE1LjE3NSwxNC40MzYgMTQuNDYyLDE2LjEgMTQuMDkzLDE3LjY0MyBDMTMuNzg1LDE4LjkzNSAxNC43NDUsMTkuOTg4IDE2LjAyOCwxOS45ODggQzE4LjM1MSwxOS45ODggMjAuMTM2LDE3LjU1NiAyMC4xMzYsMTQuMDQ2IEMyMC4xMzYsMTAuOTM5IDE3Ljg4OCw4Ljc2NyAxNC42NzgsOC43NjcgQzEwLjk1OSw4Ljc2NyA4Ljc3NywxMS41MzYgOC43NzcsMTQuMzk4IEM4Ljc3NywxNS41MTMgOS4yMSwxNi43MDkgOS43NDksMTcuMzU5IEM5Ljg1NiwxNy40ODggOS44NzIsMTcuNiA5Ljg0LDE3LjczMSBDOS43NDEsMTguMTQxIDkuNTIsMTkuMDIzIDkuNDc3LDE5LjIwMyBDOS40MiwxOS40NCA5LjI4OCwxOS40OTEgOS4wNCwxOS4zNzYgQzcuNDA4LDE4LjYyMiA2LjM4NywxNi4yNTIgNi4zODcsMTQuMzQ5IEM2LjM4NywxMC4yNTYgOS4zODMsNi40OTcgMTUuMDIyLDYuNDk3IEMxOS41NTUsNi40OTcgMjMuMDc4LDkuNzA1IDIzLjA3OCwxMy45OTEgQzIzLjA3OCwxOC40NjMgMjAuMjM5LDIyLjA2MiAxNi4yOTcsMjIuMDYyIEMxNC45NzMsMjIuMDYyIDEzLjcyOCwyMS4zNzkgMTMuMzAyLDIwLjU3MiBDMTMuMzAyLDIwLjU3MiAxMi42NDcsMjMuMDUgMTIuNDg4LDIzLjY1NyBDMTIuMTkzLDI0Ljc4NCAxMS4zOTYsMjYuMTk2IDEwLjg2MywyNy4wNTggQzEyLjA4NiwyNy40MzQgMTMuMzg2LDI3LjYzNyAxNC43MzMsMjcuNjM3IEMyMS45NSwyNy42MzcgMjcuODAxLDIxLjgyOCAyNy44MDEsMTQuNjYyIEMyNy44MDEsNy40OTUgMjEuOTUsMS42ODYgMTQuNzMzLDEuNjg2IiBmaWxsPSIjYmQwODFjIj48L3BhdGg+PC9nPjwvc3ZnPg==') no-repeat scroll 3px 50% / 14px 14px; position: absolute; opacity: 1; z-index: 8675309; display: none; cursor: pointer; top: 33px; left: 33px;">Save</span></p>
        InstanceEndEditable
      </main>
    </div> -->
  </div>
</template>
<script src="./index.js"></script>
<style type="text/css">
 
</style>
