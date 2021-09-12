;(function ($) {
"use strict";


    $ (document).ready (function () {
        $ ('.login-form').addClass ('display-block');
        $ ('.forgot-password').addClass ('display-hide');
        $ ('.forget-pass').on ('click', function () {
            if ( $ ('.forgot-password').hasClass ('display-hide') ) {
                $ ('.forgot-password').removeClass ('display-hide').addClass ('display-block');

            }
            if ( $ ('.login-form').hasClass ('display-block') ) {
                $ ('.login-form').removeClass ('display-block').addClass ('display-hide');

                return false;
            }
        });
        
        $ ('.back-to-login').on ('click', function () {
            if ( $ ('.forgot-password').hasClass ('display-block') ) {
                $ ('.forgot-password').removeClass ('display-block').addClass ('display-hide');

            }
            if ( $ ('.login-form').hasClass ('display-hide') ) {
                $ ('.login-form').removeClass ('display-hide').addClass ('display-block');

                return false;
            }
        });

        $(document).on("click", function(e) {
            if ($(e.target).is(".dropdown-menu") === false) {
                $ ('.login-form').removeClass ('display-hide').addClass ('display-block');
                $ ('.forgot-password').removeClass ('display-block').addClass ('display-hide');
            }
        });


                // Canvas menu add class
        $ (".navigation-trigger").on ("click", function () {
            $ (".navigation, .off-canvas-overlay").addClass ("toggled");
            return false;
        });

        // Canvas menu remove class
        $ (".menu-close, .off-canvas-overlay").on ("click", function () {
            $ (".navigation, .off-canvas-overlay").removeClass ("toggled");
        });

        $('#example').hierarchySelect({
            hierarchy: false,
            width: 'auto'
        });


// fixed nav bar in jquery
$(window).scroll(function() {
    if($(this).scrollTop() > 150) {
        $('.search-action').addClass('fixedElement');
    } else {
        $('.search-action').removeClass('fixedElement');
    };
});

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scroll-to-top').fadeIn();
            }
            else {
                $('.scroll-to-top').fadeOut();
            }
          });

        $(".scroll-to-top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
        
    });

})(jQuery);