import Menu from '../home.menu.js'

var images = require.context('@/assets/imgs/', false, /\.(png|jpg)$/)

export default {
  name: 'czzx',
  data(){
  	return {
  		menu: Menu[3].children
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
