import Translator from './njkc.translator.js'
import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'
import SearchBox from '@/components/search-box/SearchBox.vue'
import HomeTranslator from '../home.translator.js'
import GetRouteName from '@/utils/get-route-name.js'


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
  components: {SearchBox},  
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
