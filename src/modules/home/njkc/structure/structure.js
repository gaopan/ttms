import Data from '@/api/data/njkc/structure.js'
import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'
let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

export default {
  name: 'structure',
  data(){
    return {
      currentLang: shared.defaultLang,
      structureNavs:[{
        name:'EightYear',
        path:'eight-year',
        title:'八年級'
      },{
        name:'NineYear',
        path:'nine-year',
        title:'九年級'
      },{
        name:'TenYear',
        path:'ten-year',
        title:'十年級'
      },{
        name:'ElevenYear',
        path:'eleven-year',
        title:'十一年級'
      },{
        name:'TwelveYear',
        path:'twelve-year',
        title:'十二年級'
      },{
        name:'TwelveThirteenYear',
        path:'twelve-thirteen-year',
        title:'十二及十三年級'
      },]
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);
  },
  computed: {
    content(){
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
