import TypeChecker from '@/utils/type-checker.js'
import Translator from './search.translator.js'
import CommonUtils from '@/utils/common-utils.js'
import IndexData from './index-data.js'
import shared from '@/shared.js'
import SearchBox from '@/components/search-box/SearchBox.vue'

let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

export default {
  data(){
    return {
      currentLang: shared.defaultLang,
      translator: Translator,
      searchText: this.$router.currentRoute.params.search,
      indexData: IndexData,
      searchResult: [],
      dataBase:null
    }; 
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);

    this.dataBase = this.getDataBase(this.indexData, this.currentLang);

    this.searchResult = this.searchDataBase(this.dataBase, this.searchText);

    console.log("searchResult", this.searchResult)
  },
  watch: {
    currentLang(newV, oldV){
      if(newV)this.$router.push('/index')
    },
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
  components: {SearchBox},  
  
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
    },

    submit(){
      if(this.searchText && !!this.searchText.trim()){
        this.searchDataBase(this.dataBase, this.searchText);
      }
    }
  },
  beforeDestroy(){
    eventHub.$off('changed-lang', this.changedLang);
  }
}
