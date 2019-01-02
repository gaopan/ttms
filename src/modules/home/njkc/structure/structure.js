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
      structureNavs:[[{
        name:'eightYear',
        path:'eight-year',
        title:'八年級'
      },{
        name:'nineYear',
        path:'nine-year',
        title:'九年級'
      },{
        name:'tenYear',
        path:'ten-year',
        title:'十年級'
      },{
        name:'elevenYear',
        path:'eleven-year',
        title:'十一年級'
      },{
        name:'twelveYear',
        path:'twelve-year',
        title:'十二年級'
      },{
        name:'twelveThirteenYear',
        path:'twelve-thirteen-year',
        title:'十二及十三年級'
      }],[{
        name:'eightYear',
        path:'eight-year',
        title:'Year 8'
      },{
        name:'nineYear',
        path:'nine-year',
        title:'Year 9'
      },{
        name:'tenYear',
        path:'ten-year',
        title:'Year 10'
      },{
        name:'elevenYear',
        path:'eleven-year',
        title:'Year 11'
      },{
        name:'twelveYear',
        path:'twelve-year',
        title:'Year 12'
      },{
        name:'twelveThirteenYear',
        path:'twelve-thirteen-year',
        title:'Year 12 and 13'
      }]],
      active:'eightYear',
      courseYears:[]
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);
    this.courseYears = Data[this.currentLang]['eightYear']
    // console.log(this.$refs.njkcTable.children[9].addClass('years-subtotal'))
  },
  computed: {
    content(){
      // return Data[this.currentLang]
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
    turnYears(name){
      this.active = name;
      this.courseYears = Data[this.currentLang][name]
    }
  },
  beforeDestroy(){
    eventHub.$off("changed-lang", this.changedLang);
  }
}
