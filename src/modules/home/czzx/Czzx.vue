<template>
  <div class="content-wrapper">
    <div class="row">
      <p class = "nav-name-tip" v-show = "navNameTip.subName">{{navNameTip.name}} >> {{navNameTip.subName}}</p>
      <div class="inside-search-box">
        <search-box></search-box>
      </div>

      <router-view></router-view>

    </div>
  </div>
</template>
<script src="./czzx.js"></script>
<style type="text/css" src="./czzx.css"></style>
