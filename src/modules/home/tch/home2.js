var images = require.context('@/assets/imgs/', false, /\.(png|jpg)$/)

export default {
  name: 'home',
  data() {
    return {
      menu: [
        { name: "願景與方法", path: '/vision', href: '/#/vision' },
        { name: "學術卓越", path: '/academic', href: '/#/academic' },
        { name: "職業準備", path: '/career', href: '/#/career' },
        { name: "親善大使計畫", path: '/ambassador', href: '/#/ambassador' },
        { name: "個人發展", path: '/development', href: '/#/development' },
        { name: "課外活動和體育運動", path: '/sport', href: '/#/sport' },
        // { name: "住宿和學生福利",  },
        { name: "申請流程及費用", path: '/fee', href: '/#/fee' },
        { name: "2016/2017年度光榮榜", path: '/honor', href: '/#/honor' },
      ],
      leftMenu: [
        { name: "願景與方法", path: '/vision', href: '/#/vision' },
        { name: "學術卓越", path: '/academic', href: '/#/academic' },
        { name: "職業準備", path: '/career', href: '/#/career' },
        { name: "親善大使計畫", path: '/ambassador', href: '/#/ambassador' }
      ],
      rightMenu: [
        { name: "個人發展", path: '/development', href: '/#/development' },
        { name: "課外活動和體育運動", path: '/sport', href: '/#/sport' },
        { name: "申請流程及費用", path: '/fee', href: '/#/fee' },
        { name: "2016/2017年度光榮榜", path: '/honor', href: '/#/honor' }
      ]
    };
  },
  mounted: function() {
    $('nav#dropdown').meanmenu({ window: window });

    // $('.header-search').on('click', function() {
    //   $('.search').toggleClass('open');
    //   return false;
    // });
  },
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    navTo(item){
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
    }
  }
}
