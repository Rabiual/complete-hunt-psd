$ (function(){
  var loder = document.getElementById("preloder");
  window.addEventListener ("load",function (){
    loder.style.display="none";
  })
  
  
  
  //  slick slide code  
  $('.banner-main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: ".next",
    prevArrow: ".prev"
});

// lightbox code 
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})



// service part slick
$('.service_slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: '0px',
  nextArrow: ".rnext",
  prevArrow: ".rprev",
});


// feed part slick 
$('.feed-text-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  nextArrow: ".fnext",
  prevArrow: ".fprev",
  asNavFor: '.feed-img'
});
$('.feed-img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.feed-text-slick',
  centerMode: true,
  vertical:true,
  centerPadding:'0', 
  focusOnSelect: true,
  nextArrow: ".fnext",
  prevArrow: ".fprev",
});
			

// **************** ================ theme end ====================**************//




$('.company_main').slick({

  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [{
      breakpoint: 576,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
      }
  }, ],
  responsive: [{
      breakpoint: 768,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
      }
  }, ],
  responsive: [{
      breakpoint: 992,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
      }
  }, ],


});

// scrolling part start
$('.arrow').click(function() {
  $('html,body').animate({
      scrollTop: 0
  })
})



$(window).scroll(function() {
  var scrolling = $(this).scrollTop()

  if (scrolling > 10) {
      $('.menu_bg').addClass('nav_bg')
  } else {
      $('.menu_bg').removeClass('nav_bg')
  }

  if (scrolling > 100) {
      $(".arrow").fadeIn("500")
  } else {
      $(".arrow").fadeOut("500")
  }


})



// scrolling part end 






// $('.theme_main').slick({

//   slidesToShow: 5,
//   slidesToScroll: 1,
//   centerMode: true,
//   centerPadding: '0',
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 1000,
//   responsive: [{
//       breakpoint: 576,
//       settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: '0',
//       }
//   }, ],
//   responsive: [{
//       breakpoint: 768,
//       settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: '0',
//       }
//   }, ],
//   responsive: [{
//       breakpoint: 992,
//       settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: '0',
//       }
//   }, ],


// });

// **************** ================ theme end ====================**************//

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });
			




  
})