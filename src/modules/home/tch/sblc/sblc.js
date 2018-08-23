import Menu from '../home.menu.js'

var images = require.context('@/assets/imgs/', false, /\.(png|jpg)$/)

/*
children: [{
      name: "申請資料",
      path: "/sblc/sqzl",
      href: "/#/sblc/sqzl"
    }, {
      name: "報名費用",
      path: "/sblc/bmfy",
      href: "/#/sblc/bmfy"
    }, {
      name: "面試安排",
      path: "/sblc/msap",
      href: "/#/sblc/msap"
    }, {
      name: "課程收費",
      path: "/sblc/kcsf",
      href: "/#/sblc/kcsf"
    }]
*/
export default {
  name: 'sblc',
  data(){
  	return {
  		menu: Menu[5].children
  	};
  },
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    navTo(path){
    	this.$router.push(path);
    }
  }
}
