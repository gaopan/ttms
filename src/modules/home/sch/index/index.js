var images = require.context('@/assets/imgs/', false, /\.(png|jpg)$/)

export default {
  name: 'home-index',
  data(){
  	return {
  		iframeSize: {x: 0, y: 0}
  	};
  },
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    }
  },
  mounted(){
  	let iframeContainer = this.$refs.iframeContainer;

  	this.iframeSize.x = iframeContainer.clientWidth;
  	this.iframeSize.y = this.iframeSize.x / 640 * 468;
  }
}
