import Menu from './home.menu.js'
var images = require.context('@/assets/imgs/', false, /\.(png|jpg)$/)

export default {
  name: 'home',
  data() {
    return {
      menu: Menu,
      leftMenu: Menu.slice(0, 3),
      rightMenu: Menu.slice(3)
    };
  },
  mounted: function() {
    $('nav#dropdown').meanmenu({ window: window });

    // $('.header-search').on('click', function() {
    //   $('.search').toggleClass('open');
    //   return false;
    // });

    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 1) {
        $('.sticker').addClass("stick");
      } else {
        $('.sticker').removeClass("stick");
      }
    });

    /*--------------------------
      ScrollUp
  ---------------------------- */
    setTimeout(function() {
      $.scrollUp({
        window: window,
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
      });
    }, 0);

  },
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
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
    }
  }
}
