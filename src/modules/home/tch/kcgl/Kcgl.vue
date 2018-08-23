<template>
  <div class="czzx">
    <div class="breadcrumb-banner-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="breadcrumb-text">
              <h1 class="text-center">課程概覽</h1>
              <div class="breadcrumb-bar">
                <ul class="breadcrumb text-center">
                  <li><a href="javascript:void(0)" @click="navTo('/tch/index')">主頁</a></li>
                  <li>課程概覽</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="horizonal-nav-area">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <router-view></router-view>
          </div>
          <div class="col-xs-12">
            <ul class="list-group">
              <li v-for="m in menu" class="list-group-item" @click="navTo(m.path)" :class="{active: m.path==$router.currentRoute.fullPath}">{{m.name}}</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./kcgl.js"></script>
