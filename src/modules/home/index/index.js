import Translator from './index.translator.js'
import shared from '@/shared.js'
import SearchBox from '@/components/search-box/SearchBox.vue'


let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let videos = require.context('@/assets/videos/', false, /\.(mp4|mov)$/)
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
    // $(".blockGallery .rslides").responsiveSlides({ auto: !0, pager: !1, nav: !1, speed: 800, timeout: 6e3 });
  },
  components: {SearchBox},  
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    videoUrl: function(path){
      return videos('./' + path);
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
