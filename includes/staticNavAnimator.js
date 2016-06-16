const $ = require('jquery');

 $(document).ready(function() {
    // 'Mutual exclusion' animation lock
    var scrollLock = false;

    $(window).scroll(function(event) {
        if(scrollLock){
            // Animation in progress
            return;
        }

        // Initiate lock
        scrollLock = true;

        var scroll = $(window).scrollTop();

        // if down scroll and below jumbotron
        if(scroll >= $("#about-me").offset().top -1){
            $('nav').removeClass('navbar-dark');
            $('nav').addClass('navbar-fixed-top navbar-light');

            $('nav').animate({
                top: "0px"
            }, function(){
                // Release lock
                scrollLock = false;
            });
        }else if(scroll == 0){
            $('nav').removeClass('navbar-fixed-top navbar-light');
            $('nav').addClass('navbar-dark');
            $('nav').removeAttr('style');
            scrollLock = false;
        }else{
            scrollLock = false;
        }
    });
});
