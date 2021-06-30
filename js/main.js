"use strict";

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 105) {
          $(".header").css("background" , "black");
        }
   
        else{
            $(".header").css("background" , "transparent");  	
        }
    })
  })

  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 105) {
          $(".logo-text").css("color" , "#fff");
        }
   
        else{
            $(".logo-text").css("color" , "black");  	
        }
    })
  })


//About-us Carousel
$(".slick-slide").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, //2000ms = 2s,
  autoplayHoverpause: true,
});


// Animation
AOS.init({
    duration: 1000,
  });