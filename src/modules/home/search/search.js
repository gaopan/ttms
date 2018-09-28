import Translator from './search.translator.js'
import CommonUtils from '@/utils/common-utils.js'
import IndexData from './index-data.js'
import shared from '@/shared.js'
let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

export default {
  data(){
    return {
      currentLang: shared.defaultLang,
      translator: Translator,
      searchText: this.$router.currentRoute.params.search,
      indexData: IndexData.fetchData(shared.defaultLang),
      searchResult: []
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);
    this.search(this.searchText);
  },
  watch: {
    "searchText": function(val){
      this.search(val);
    }
  },
  computed: {
    navs(){
      return CommonUtils.deepClone(Translator[this.currentLang].navs);
    }
  },
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    navTo(path){
      this.$router.push(path);
    },
    changedLang(lang) {
      this.currentLang = lang;
      this.indexData = IndexData.fetchData(lang);
    },
    search(text){
      let matched = [];
      this.indexData.forEach(nav => {
        if(!nav.children) {
          if(nav.name.indexOf(text) > -1) {
            matched.push({
              name: nav.name,
              path: nav.path
            });
          }
        } else {
          nav.children.forEach(_nav => {
            if(_nav.name.indexOf(text) > -1) {
              matched.push({
                name: nav.name + " >> " + _nav.name,
                path: _nav.path 
              });
            }
          });
        }
      });
      this.searchResult = matched;
    },
    submit(){
      this.search(this.searchText);
    }
  },
  beforeDestroy(){
    eventHub.$off('changed-lang', this.changedLang);
  }
}
