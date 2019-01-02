import Data from '@/api/data/honor/honorary-list.js'
import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'
let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

export default {
  name: 'honorary-list',
  data(){
    return {
      currentLang: shared.defaultLang,
      honoraryList:'',
      active:2018
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);
    this.honoraryList = Data[this.currentLang]['2018']
    // console.log(Data[this.currentLang])
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
    turnYear(year){
      this.active = year
      this.honoraryList = Data[this.currentLang][year]
    }
  },
  beforeDestroy(){
    eventHub.$off("changed-lang", this.changedLang);
  }
}
