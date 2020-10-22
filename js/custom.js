/*=========================================================================
        Preloader
=========================================================================*/
$(window).load(function() {
    "use strict";
    $(".preloader-outer").delay(350).fadeOut('slow');
});

$(function(){
    "use strict";

    /*=========================================================================
            One Page Nav
    =========================================================================*/
    $(".navigation").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 700,
        scrollThreshold: 0.5,
        easing: 'easeInOutCubic'
    });


    /*=========================================================================
            Hamburger Menu & Mobile Push menu
    =========================================================================*/
    $(".hamburger-menu, .main-nav ul li a").on( 'click', function() {
        $(".header").toggleClass("pushed");
        $('.bar').toggleClass('animate');
    });


    /*=========================================================================
            Bootstrap Tooltip
    =========================================================================*/
    $(".resume-download").tooltip();


    /*=========================================================================
            Progress Bar Animation
    =========================================================================*/
    $(".progress-bar").each( (_, elem) => {
      const $elem = $(elem)
      const width = $elem.attr("data-width");
      $elem.css("width", width);
    })


    /*=========================================================================
            Welcome & Header Height
    =========================================================================*/
    $("#welcome").css({'height':($(window).height())+'px'});
    $(".header").css({'height':($(window).height())+'px'});


    /*=========================================================================
            Portfolio filter
    =========================================================================*/
    if($('#works .item-outer').length > 0){
      var filterizd = $('#works .item-outer').filterizr();
    }
    $( '.control ul li' ).on( 'click', function() {
          $( this ).parent().find( 'li.active' ).removeClass( 'active' );
          $( this ).addClass( 'active' );
    });


    /*=========================================================================
            Magnific Popup Functions
    =========================================================================*/
    $('.work-image').magnificPopup({
      type: 'image'
    });
    
    $('.resume-download').magnificPopup({
      items: {
        src: '#wip-dialog'
      },
      closeBtnInside: true,
      mainClass: 'mfp-with-zoom',
      removalDelay: 500,
    });

    $('.work-video').magnificPopup({
      type: 'iframe',
      iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>', 

          patterns: {
            youtube: {
              index: 'youtube.com/',

              id: 'v=',

              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }

          },

          srcAction: 'iframe_src',
        }
    });

});