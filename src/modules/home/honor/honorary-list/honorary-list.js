import Data from '@/api/data/honor/index.js'
import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'
let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

export default {
  name: 'honorary-list',
  data(){
    return {
      currentLang: shared.defaultLang,
      years:[2017,2018],
      isYear:2018,
      honoraryList:Data['zh_hk'][1].data
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);
  },
  computed: {
    content(){
      return this.honoraryList
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
    },
    turn_year(year){
      this.isYear = year
      this.honoraryList = Data['zh_hk'].filter(elem=>elem.year == year)[0].data
    }
  },
  beforeDestroy(){
    eventHub.$off("changed-lang", this.changedLang);
  }
}
