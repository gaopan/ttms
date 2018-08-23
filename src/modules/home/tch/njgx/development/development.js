var images = require.context('@/assets/imgs/', false, /\.(png|jpg)$/)

export default {
  name: 'development',
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    navTo(path){
    	this.$router.push(path);
    }
  }
}
