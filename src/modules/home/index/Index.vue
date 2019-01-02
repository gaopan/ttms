<template>
  <div class="content-wrapper index">
    <div class="index-search">
      <search-box></search-box>
    </div>
    <div class="index-container">
      <div class="welcome-index"  v-show = "currentLang=='zh_hk'">
        <p class="welcome-p1">Welcome to</p>
        <p class="welcome-p2">
          <span class="welcome-p2-1">
            崇正牛津國際課程
          </span>
          <span class="welcome-p2-2">
            IGCSE A-LEVEL
          </span>
        </p>
        <p class="welcome-p3">
          TTMS OXFORD INTERNATIONAL PROGRAMME IGCSE A-LEVEL
        </p>
      </div>
      <div class="welcome-index"  v-show = "currentLang=='en'">
        <p class="welcome-p1">Welcome to</p>
        <p class="welcome-p3-en">
          TTMS OXFORD INTERNATIONAL PROGRAMME IGCSE A-LEVEL
        </p>
      </div>


      <div class="container-fluid picture-container">
        <div class="row picture-row">
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index2.png')">
              <p class="index-picture-description" v-show = "currentLang=='zh_hk'">
                <router-link to="/njgx">英國牛津國際公學</router-link>
              </p>
              <p class="index-picture-description" v-show = "currentLang=='en'">
                <router-link to="/njgx">Oxford International College</router-link>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index3.png')">
              <p class="index-picture-description" v-show = "currentLang=='zh_hk'">
                <router-link to="/njkc">崇正牛津國際中學課程</router-link>
              </p>
              <p class="index-picture-description" v-show = "currentLang=='en'">
                <router-link to="/njkc">TTMS-OIC Programme</router-link>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index1.png')">
              
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="index-picture-middle">
              <div>{{'schoolName' | translate(translator, currentLang)}}</div>
            </div>
          </div>
        </div>
        <div class="row picture-row">
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index4.png')">
              <p class="index-picture-description" v-show = "currentLang=='zh_hk'">
                <router-link to="/rxsq">入学申请</router-link>
              </p>
              <p class="index-picture-description" v-show = "currentLang=='en'">
                <router-link to="/rxsq">Admission Guideline</router-link>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index5.png')">
              <p class="index-picture-description" v-show = "currentLang=='zh_hk'">
                <router-link to="/njxy">崇正牛津校園</router-link>
              </p>
              <p class="index-picture-description" v-show = "currentLang=='en'">
                <router-link to="/njxy">TTMS OIC Campus</router-link>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('index6.png')">
              <p class="index-picture-description" v-show = "currentLang=='zh_hk'">
                <router-link to="/honor">光榮榜與傑出學生</router-link>
              </p>
              <p class="index-picture-description" v-show = "currentLang=='en'">
                <router-link to="/honor">Honorary List</router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="row picture-row">
          <div class="col-xs-12">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('czzx-xg.png')">
            </div>
          </div>
        </div>
        <div class="row picture-row">
          <div class="col-xs-12">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('czzx-2.png')">
            </div>
          </div>
        </div>
        <div class="row picture-row">
          <div class="col-xs-12">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('czzx-3.png')">
            </div>
          </div>
        </div>
        <div class="row picture-row">
          <div class="col-xs-12">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('njgx.jpg')">
            </div>
          </div>
        </div>
        <div class="row picture-row">
          <div class="col-xs-12">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('czzx-4.jpg')">
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid picture-container">
        <div class="row picture-row">
          <div class="col-xs-12">
            <div class="index-picture-wrapper">
              <img :src="imgUrl('czzx-plan.jpg')">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style type="text/css">
 
</style>
