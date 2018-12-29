import HomeTranslator from './home.translator.js'
import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'

let eventHub = shared.eventHub
let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)

export default {
  data() {
    return {
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
    	navs: CommonUtils.deepClone(HomeTranslator[shared.defaultLang].navs)
    };
  },
  created(){},
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    switchSubLevel(nav,type){
      if(type == 'hide'){
        this.switchSubLevel.Timer =  setTimeout(()=>{
          nav.bShow = false;
          clearTimeout(this.switchSubLevel.Timer);
        },200);
      }else if(type == 'show'){
        this.navs.forEach(d=>{
          d.bShow = false;
        })
        
        if(this.switchSubLevel.Timer)clearTimeout(this.switchSubLevel.Timer);
        nav.bShow = true;
      }
    },
    navTo(item) {
      this.$router.push(item.path);
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
    }
  }
}
