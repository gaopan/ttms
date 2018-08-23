require('imports-loader?window.jQuery=jquery!./lib/jquery.meanmenu.js')
require('imports-loader?window.jQuery=jquery!./lib/jquery.scrollUp.min.js')
require('imports-loader?window.jQuery=jquery!./lib/jquery.mb.YTPlayer.js')
require('imports-loader?window.jQuery=jquery!./lib/jquery.ajaxchimp.min.js')
require('imports-loader?window.jQuery=jquery!./lib/jquery.counterup.min.js')
require('imports-loader?window.jQuery=jquery!./lib/slick.min.js')
require('imports-loader?window.jQuery=jquery!./lib/textilate.js')
window.WOW = require('./lib/wow.min.js').WOW;

require('bootstrap-loader')
require('babel-polyfill')

jQuery(document).ready(function() {

  /*----------------------------
      Wow js active
  ------------------------------ */
  // new WOW().init();

  /*--------------------------
      Counter Up
  ---------------------------- */
  $('.counter').counterUp({
    delay: 70,
    time: 5000
  });

  /*--------------------------------
  	Testimonial Slick Carousel
  -----------------------------------*/
  $('.testimonial-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  /*------------------------------------
  	Testimonial Slick Carousel as Nav
  --------------------------------------*/
  $('.testimonial-image-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-text-slider',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    responsive: [{
        breakpoint: 450,
        settings: {
          dots: false,
          slidesToShow: 3,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  });

  /*------------------------------------
  	Textilate Activation
  --------------------------------------*/
  $('.tlt').textillate({
    loop: true,
    minDisplayTime: 2500
  });

  /*------------------------------------
  	Video Player
  --------------------------------------*/
  $(".player").YTPlayer({
    showControls: false
  });

  $(".player-small").YTPlayer({
    showControls: false
  });

  /*------------------------------------
  	MailChimp
  --------------------------------------*/
  $('#mc-form').ajaxChimp({
    language: 'en',
    callback: mailChimpResponse,
    // ADD YOUR MAILCHIMP URL BELOW HERE!
    url: '#'
  });

  function mailChimpResponse(resp) {

    if (resp.result === 'success') {
      $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
      $('.mailchimp-error').fadeOut(400);

    } else if (resp.result === 'error') {
      $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
    }
  }

  /*------------------------------------
  	ColorSwitcher
  --------------------------------------*/
  $('.ec-handle').on('click', function() {
    $('.ec-colorswitcher').trigger('click')
    $(this).toggleClass('btnclose');
    $('.ec-colorswitcher').toggleClass('sidebarmain');
    return false;
  });
  $('.ec-boxed,.pattren-wrap a,.background-wrap a').on('click', function() {
    $('.as-mainwrapper').addClass('wrapper-boxed');
    $('.as-mainwrapper').removeClass('wrapper-wide');
  });
  $('.ec-wide').on('click', function() {
    $('.as-mainwrapper').addClass('wrapper-wide');
    $('.as-mainwrapper').removeClass('wrapper-boxed');
  });
});
