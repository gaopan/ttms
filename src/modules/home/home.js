import HomeTranslator from './home.translator.js'
import TypeChecker from '@/utils/type-checker.js'
import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'
import SearchBox from '@/components/search-box/SearchBox.vue'
import dropdownBlur from '@/directives/dropdown-blur.js';


let eventHub = shared.eventHub
let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)

export default {
  data() {
    return {
      outerNavIndex:null,
    	currentLang: shared.defaultLang,
    	translator: HomeTranslator,
    	langs: [/*{
    		name: '简',
    		value: 'zh_cn'
    	}, */{
    		name: "繁",
    		value: 'zh_hk'
    	}, {
    		name: "EN",
    		value: "en"
    	}],
      
    	navs: null,
      indexNav:{
        zh_hk:{
          name: "主頁",
          path: '/index',
          imgUrl: 'home-icon.png',
          notDisplayName: true,
          subPath:[]
        }, 
        en:{
          name: "Home",
          path: '/index',
          imgUrl: 'home-icon.png',
          notDisplayName: true,
          subPath:[]
        }, 
      },
      // navNameTip:{
      //   zh_hk:{
      //     name:"",
      //     subName:""
      //   },
      //   en:{
      //     name:"",
      //     subName:""
      //   }

      // }
    };
  },
  created(){

    this.navs = this.makeNav(HomeTranslator[this.currentLang].navs, this.$route.path);

  },
  watch:{
    currentLang(newV,oldV){
      this.navs = this.makeNav(HomeTranslator[this.currentLang].navs, this.$route.path);
    }
  },

  components: {SearchBox},

  directives:{
    dropdown:dropdownBlur
  }, 

  computed:{
    bIndexPage(){
      return this.$route.path === '/index';
    },
    navNameTip(){
      let navNameTip = { name:null, subName:null };

      HomeTranslator[this.currentLang].navs.every(nav=>{
        if(navNameTip.name && navNameTip.subName)return false;
        nav.subPath.every(nav_=>{
          if(nav_.path === this.$route.path){
            navNameTip.name = nav.name;
            navNameTip.subName = nav_.name;
            return false;
          }
          return true;
        })
        return true;
      })
      return navNameTip;

    }

  }, 
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },

    switchSubNav(nav,outerIndex){


      let bOpen = nav.bShow
      this.navs.forEach(outer=>{
        outer.bShow = false;
      }); 

      nav.bShow = bOpen ? false:true;
    },

    navTo(type,item,outerIndex,innerIndex) {

      this.navs.forEach(outer=>{
        outer.subPath.forEach(inner=>{
          inner.active = false;
        })
      })
              
      
      if(type ==='index'){
        this.$router.push(item.path);        

      }else{

        this.navs[outerIndex].subPath[innerIndex].active = true;

        this.navs[outerIndex].bShow = false;
        this.$router.push(item.path);
        
      }

    },
    isCurrentPath(path) {
      let active = false;
      if (path.indexOf('/') != 0) {
        active = this.$route.path.includes(path);
      } else if (this.$route.path.indexOf(path) === 0) {
        active = true;
      }
      return active;
    },
    changedLang(lang){
    	this.currentLang = lang.value;
    	this.navs = CommonUtils.deepClone(HomeTranslator[this.currentLang].navs);
    	eventHub.$emit('changed-lang', this.currentLang);
    },
    fnBlur(){

      if(this.$refs.navigator&&!this.$refs.navigator.contains(event.target)){
        this.navs.forEach(outer=>{
          outer.bShow = false;
        })
      }
    },

    makeNav(nav, currentath){

      let nav_ = [];

      if(TypeChecker.isArray(nav)){
        nav_ = CommonUtils.deepClone(nav);
        nav_.forEach(d=>{
          d.bShow = false;
          if(TypeChecker.isArray(d.subPath)){
            d.subPath.forEach(subD=>{
              subD.active =  currentath == subD.path ? true : false;
            }) 
          }
        })
      }

      return nav_;
    }
  }
}
