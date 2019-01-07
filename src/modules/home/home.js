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
      bShowSmallNav:false,
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
    };
  },
  created(){
    eventHub.$on("go-to-search",this.updateNavList)
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
    }

  }, 
  methods: {
    updateNavList(){
      this.navs = this.makeNav(HomeTranslator[this.currentLang].navs,null);
    },
    showSmallNav(){
      this.bShowSmallNav = !this.bShowSmallNav;

    },
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

    navTo(type,item,outerIndex,innerIndex,space) {

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

      if(space === "small"){
        this.bShowSmallNav = false;
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
      // console.log(lang)
      if(this.currentLang !== lang.value){
      	this.currentLang = lang.value;
      	this.navs = CommonUtils.deepClone(HomeTranslator[this.currentLang].navs);
        shared.defaultLang = this.currentLang;
      	eventHub.$emit('changed-lang', this.currentLang);
      }
    },


    fnBlur(){
      if((this.$refs.navigator && !this.$refs.navigator.contains(event.target))
          &&(this.$refs.smallNavEle && !this.$refs.smallNavEle.contains(event.target)) 
        ){
        // console.log("fnBlur1")
        this.navs.forEach(outer=>{
          outer.bShow = false;
        })

      }
    },
    fnBlurSmallNav(){
      if((this.$refs.navigator && !this.$refs.navigator.contains(event.target))
          &&(this.$refs.smallNavEle && !this.$refs.smallNavEle.contains(event.target)) 
        ){
        this.navs.forEach(outer=>{
          outer.bShow = false;
        })

        this.bShowSmallNav = false;
      }      
    },

    makeNav(nav, currentPath){

      let nav_ = [];

      if(TypeChecker.isArray(nav)){
        nav.forEach(d=>{


          let subPath = [];
          if(TypeChecker.isArray(d.subPath)){
            d.subPath.forEach(subD=>{
              let active =  currentPath == subD.path ? true : false;
              subPath.push({
                active: active,
                href: subD.href,
                name: subD.name, 
                path: subD.path
              })
            }) 
          }

          nav_.push({
          bShow: false,
          description: d.description,
          name: d.name,
          path: d.path,
          subPath: subPath        
          })
        })
      }

      return nav_;
    }


  }
}
