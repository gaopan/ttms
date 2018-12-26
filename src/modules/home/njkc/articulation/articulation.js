import Data from '@/api/data/njkc/articulation.js'
import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'
let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

export default {
  name: 'articulation',
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
      // return "articulation";
      return Data[this.currentLang]
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
