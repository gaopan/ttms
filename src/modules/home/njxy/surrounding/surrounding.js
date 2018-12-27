import Data from '@/api/data/njxy/surrounding.js'
import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'
let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

export default {
  name: 'surrounding',
  data(){
    return {
      currentLang: shared.defaultLang
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);
  },
  computed: {
    content(){
      // return "surrounding";
      return Data[this.currentLang]
      // return Data.cxzl[this.currentLang];
    }
  },
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    navTo(path){
      this.$router.push(path);
    },
    changedLang(lang){
      this.currentLang = lang;
    }
  },
  beforeDestroy(){
    eventHub.$off("changed-lang", this.changedLang);
  }
}
