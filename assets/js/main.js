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

        
    });

})(jQuery);