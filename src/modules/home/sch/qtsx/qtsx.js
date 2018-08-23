import Menu from '../home.menu.js'

var images = require.context('@/assets/imgs/', false, /\.(png|jpg)$/)

/*
children: [{
      name: "校服",
      path: '/qtsx/xf',
      href: '/#/qtsx/xf'
    }, {
      name: "膳食",
      path: '/qtsx/ss',
      href: '/#/qtsx/ss'
    }, {
      name: "保險",
      path: '/qtsx/bx',
      href: '/#/qtsx/bx'
    }, {
      name: "住宿",
      path: '/qtsx/zs',
      href: '/#/qtsx/zs'
    }, {
      name: "監護人",
      path: '/qtsx/jhr',
      href: '/#/qtsx/jhr'
    }, {
      name: "交通",
      path: '/qtsx/jt',
      href: '/#/qtsx/jt'
    }]*/
export default {
  name: 'qtsx',
  data(){
  	return {
  		menu: Menu[6].children
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
