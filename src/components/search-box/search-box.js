import Translator from './search-box.translator.js'
import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'
let eventHub = shared.eventHub

export default {
  data(){
    return {
      currentLang: "zh_hk",
      translator: Translator,
      searchText: ""
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);
  },
  methods: {
    changedLang(lang) {
      this.currentLang = lang;
    },
    submit(){
      // debugger
    	this.$router.push({
    		name: "Search",
    		params: { search: this.searchText }
    	});
    }
  },
  beforeDestroy(){
    eventHub.$off('changed-lang', this.changedLang);
  }
}
