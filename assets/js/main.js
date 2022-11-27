(function ($) {
    'use strict';
    
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });

    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 3000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    });

    $(window).on('scroll', function(){
        if($(window).scrollTop() > 100) {
            $('.bottom-header').addClass('fixed-header');
            if ($(window).width() < 992) {
                header.removeClass('fixed-header');
            }
        } else {
            $('.bottom-header').removeClass('fixed-header');
        }
    });

}(jQuery));