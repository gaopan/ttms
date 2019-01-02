import Translator from './njgx.translator.js'
import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'
import HomeTranslator from '../home.translator.js'
import GetRouteName from '@/utils/get-route-name.js'

import SearchBox from '@/components/search-box/SearchBox.vue'

let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

export default {
  data(){
    return {
      currentLang: shared.defaultLang,
      translator: Translator,
      navNameTip:{
        name:null, subName:null
      }
    };
  },
  created() {
    this.navNameTip = GetRouteName(HomeTranslator, this.currentLang, this.$route);
    eventHub.$on("changed-lang", this.changedLang);
  },
  components: {SearchBox},  
  watch:{
    currentLang(newV,oldV){
      this.navNameTip = GetRouteName(HomeTranslator, this.currentLang, this.$route);    
    },
    '$route.path':{
      handler(newV){
        this.navNameTip = GetRouteName(HomeTranslator, this.currentLang, this.$route);
      }
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
    }
  },
  beforeDestroy(){
    eventHub.$off('changed-lang', this.changedLang);
  }
}
