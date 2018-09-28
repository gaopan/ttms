import Translator from './index.translator.js'
import shared from '@/shared.js'
let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub
export default {
  data() {
    return {
      currentLang: shared.defaultLang,
      translator: Translator
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);
  },
  mounted() {
    $(".blockGallery .rslides").responsiveSlides({ auto: !0, pager: !1, nav: !1, speed: 800, timeout: 6e3 });
  },
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    changedLang(lang) {
      this.currentLang = lang;
    },
    navTo(path){
      this.$router.push(path);
    }
  },
  beforeDestroy(){
  	eventHub.$off('changed-lang', this.changedLang);
  }
}
