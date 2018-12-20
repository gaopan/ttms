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
  created(){
    console.log(this.$router.currentRoute)
    console.log(this.navs)
  },
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    navTo(item) {
      console.log(item)
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
