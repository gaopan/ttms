var images = require.context('@/assets/imgs/', false, /\.(png|jpg)$/)

export default {
  name: 'ziliao',
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    navTo(path){
    	this.$router.push(path);
    }
  }
}
