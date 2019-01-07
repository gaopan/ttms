import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'
let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

export default {
  name: 'achievement',
  data(){
    return {
      currentLang: shared.defaultLang,
      bgPhoto:{
        backgroundImage:`url(${this.imgUrl('2.4.1.png')})`
      }
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);
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
