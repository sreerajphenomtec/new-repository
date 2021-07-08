// =============first section=============

/*
	Smooth scroll functionality for anchor links (animates the scroll
	rather than a sudden jump in the page)
*/
$('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
  });
  $(".whats-btn").click(function(){
    $(".whats-rule").addClass("whats-rule-width");
    $(".banner-section").addClass("banner-section-two");
    $(".logo-button").addClass("logo-button-first");

  });
  $("#showme-proof-desk").click(function(){
    $(".break-whats-rule").toggleClass("break-whats-rule-css");
    $(".whats-rule").addClass("break-whats-overflow");

  });
  $("#showme-proof-mob").click(function(){
    $(".whats-rule").toggleClass("whats-rule-mob");
    $('header').addClass('header-bg-clr');

  });
  $(document).on("click", function(event){
    if(!$(event.target).closest(".whats-rule").length){
        $(".whats-rule").removeClass("break-whats-overflow");
        $(".break-whats-rule").removeClass("break-whats-rule-css");
        $(".whats-rule").removeClass("whats-rule-width");
        $(".banner-section").removeClass("banner-section-two");
      }
    });
    
    

  $(document).ready(function () {

    if ($(window).width() > 768) {
  setTimeout(function(){
    $('.video-loader').addClass('video-loader-opacity');
   
    $('.banner-section').addClass('banner-section-anim');
    $('header').addClass('header-anim');
}, 1400);
  }

});
$(document).ready(function () {

  if ($(window).width() < 767) {
setTimeout(function(){
  $('.video-loader').addClass('video-loader-opacity');
 
  $('.banner-section').addClass('banner-section-anim');
  $('header').addClass('header-anim');
}, 2000);
}

});
$("#mobile-firstfold").click(function(){
  $(".whats-rule").removeClass("whats-rule-width");
  $(".whats-rule").removeClass("whats-rule-mob");
  $(".banner-section").removeClass("banner-section-two");
  $(".mobile-firstSec-btn").addClass("hide-mobile");
  $('body').removeClass('overflow-hidden');
});

$("#section-1").scroll(function(){
  if ($(this).scrollTop() > 0) {
    // $(".whats-rule").addClass("whats-rule-width");
    $(".banner-section").addClass("banner-section-two");
    $(".logo-button").addClass("logo-button-first");
    // $('body').addClass('overflow-hidden');
   
  } 
  else {
    // $(".whats-rule").removeClass("whats-rule-width");
    // $(".banner-section").removeClass("banner-section-two");
    // $(".logo-button").removeClass("logo-button-first");
  }
});
$("#push-btn").click(function(e){
  $(".end-game").toggleClass("end-game-width");
  $(".second-section").addClass("second-section-overlay");
  $("header").addClass("section-two-white");
  $("header").removeClass("section-two-first");
  $(".banner-section").removeClass("banner-section-two");
  e.stopPropagation();
});
$("#push-btn-two").click(function(){
  $(".end-game").toggleClass("end-game-width");
  $(".second-section").addClass("second-section-overlay");
  $("header").addClass("section-two-white");
  $("header").removeClass("section-two-first");
  $(".round-arrow2").addClass("round-arrow2-block");
  $(".banner-section").removeClass("banner-section-two");
});
$("#close-pushtwo").click(function(){
  $(".end-game").toggleClass("end-game-width");
  $(".second-section").removeClass("second-section-overlay");
  $("header").removeClass("section-two-white");
  $("header").addClass("section-two-first");
  $(".round-arrow2").removeClass("round-arrow2-block");
  $(".banner-section").addClass("banner-section-two");
});

$("#section-two-three").click(function(){
  $(".end-game").removeClass("end-game-width");
  $(".second-section").removeClass("second-section-overlay");
  $(".section-three").addClass("section-three-animation");
  $("body").removeClass(" overflow-hidden");
 
});
$("#first-to-two").click(function(){
  $("header").toggleClass("section-two-first");
  $('body').removeClass('overflow-hidden');
  $(".whats-rule").removeClass("whats-rule-width");
  $(".banner-section").removeClass("banner-section-two");
});


    $(document).ready(function(){
      function resizeForm(){
          var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
          if(width > 1024){
            window.addEventListener('click', function(e){
	
              if (document.getElementById('clickbox').contains(e.target)){
             
              } else{
                $(".end-game").removeClass("end-game-width");
                $(".second-section").removeClass("second-section-overlay");
              }
            });
          }
      }
      window.onresize = resizeForm;
      resizeForm();
  });


// $(".round-arrow2 ").click(function(){

//   $('body').removeClass('overflow-hidden');

// });


// $(document).ready(function () {

//   if ($(window).width() > 768) {
//     $(window).on('scroll', function () {
//       var bodyheight = $(window).scrollTop() - $("header").offset().top;
//       // var impact_sectionheight = $(window).scrollTop() - $(".impact-section").offset().top;

//       if ($("header").offset().top <= $(window).scrollTop() + 20 && bodyheight < 10) {
//         $('body').addClass('overflow-hidden');
//       } 

//        else {

//       }

//     });
//   }

// });