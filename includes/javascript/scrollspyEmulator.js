// Created by Andrew Richardson
// Feel free to use, modify and distribute this script
const $ = require('jquery');

$.fn.makeActive = function(){
    this.parent().children('.active').removeClass('active');
    this.addClass('active');
};

$(document).ready(function() {
    $(".row h1").css("padding-top", $("nav").outerHeight());
    $("#about-me.row h1").css("padding-top", $("nav").outerHeight() + 50);

    $(window).scroll(function(){
        var top = $(window).scrollTop();

        if(top < $("#about-me").offset().top -1){
            $("#homeNav").makeActive();
        }
        else if(top < $("#in-action").offset().top - 1){
            $("#projectsNav").makeActive();
        }
        else if(top < $("#contact").offset().top - 1){
            $("#actionNav").makeActive();
        }else{
            $("#contactNav").makeActive();
        }
    });

    $(window).resize(function() {
        $(".row h1").css("padding-top", $("nav").outerHeight());
        $("#about-me.row h1").css("padding-top", $("nav").outerHeight() + 50);
    });

    // Navbar click
    $('.navbar-nav .nav-link').click(function(e){
        e.preventDefault();

        // Get link
        var location = $(this).attr("href");

        if(location != "#"){
            // Scroll to content section
            $('body,html').animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 700);
        }else{
            // Scroll to top of page
            $('body,html').animate({
                scrollTop: 0
            }, 700, function(){
                $('nav').removeClass('navbar-fixed-top navbar-light');
                $('nav').addClass('navbar-dark');
                $('nav').removeAttr('style');
            });
        }
    });

    $("#readMore").click(function(e){
        e.preventDefault();

        $('body,html').animate({
            scrollTop: $("#about-me").offset().top
        });
    });
});
