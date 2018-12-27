import Translator from './contact.translator.js'
import Data from '@/api/data/contact/index.js'
import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'

import SearchBox from '@/components/search-box/SearchBox.vue'

let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

export default {
  data(){
    return {
      currentLang: shared.defaultLang,
      translator: Translator
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);
  },
  components: {SearchBox},  
  computed: {
    navs(){
      return CommonUtils.deepClone(Translator[this.currentLang].navs);
    },
    content(){
      return Data[this.currentLang];
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
