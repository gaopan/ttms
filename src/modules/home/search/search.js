import TypeChecker from '@/utils/type-checker.js'
import Translator from './search.translator.js'
import CommonUtils from '@/utils/common-utils.js'
import IndexData from './index-data.js'
import shared from '@/shared.js'
let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

console.log(IndexData)
console.log(shared.defaultLang)
export default {
  data(){
    return {
      currentLang: shared.defaultLang,
      translator: Translator,
      searchText: this.$router.currentRoute.params.search,
      // indexData: IndexData.fetchData(shared.defaultLang),
      indexData: IndexData,
      searchResult: [],
      dataBase:null
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);

    this.dataBase = this.getDataBase(this.indexData, this.currentLang);
    // this.search(this.searchText);

    this.searchResult = this.searchDataBase(this.dataBase, this.searchText);

    console.log(this.searchResult)
  },
  watch: {
    "searchText": function(val){
      if(!!this.searchText.trim()){
        this.searchResult = this.searchDataBase(this.dataBase, this.searchText);
      }
    }
  },
  computed: {
    navs(){
      return CommonUtils.deepClone(Translator[this.currentLang].navs);
    }
  },
  methods: {

    getDataBase(data, lang){
      let dataBase = [];

      if(TypeChecker.isArray(data)){
        data.forEach(d=>{
          d[lang].forEach(d_=>{
            dataBase.push(d_);
          })
        })      
      }
      return dataBase;
    },

    searchDataBase(dataBase, key){
      let searchResult = [];
      if(TypeChecker.isArray(dataBase)){
        dataBase.forEach(d=>{
          let bMatch = d.data.some(txt => {
            return txt.indexOf(key) >= 0;
          })

          if(bMatch)searchResult.push({name:d.name, path:d.path})
        })
      }

      return searchResult;
    },
    imgUrl: function(path) {
      return images('./' + path);
    },
    navTo(path){
      this.$router.push(path);
    },
    changedLang(lang) {
      this.currentLang = lang;
      // this.indexData = IndexData.fetchData(lang);
    },

    submit(){
      if(!!this.searchText.trim()){
        console.log(this.searchText.trim)
        this.searchDataBase(this.dataBase, this.searchText);
      }
    }
  },
  beforeDestroy(){
    eventHub.$off('changed-lang', this.changedLang);
  }
}
