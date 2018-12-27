<template>
  <form class="form-horizontal search" name="search" @submit.prevent="submit">
    <div class="form-group">
      <label class="label-control">{{'search' | translate(translator, currentLang)}} : </label>
      <input name="search" type="text" class="form-control" v-model="searchText" :placeholder="'search' | translate(translator, currentLang)">
      <input class="search-btn" type="submit">
    </div>
  </form>
</template>
<script src="./search-box.js"></script>
