  /*
  ========================================================================
  VERSION : 1.0
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Template Name   : RD-JENNY
  Author          : RAHUL DAS
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Copyright (c) 2018 
  ========================================================================
  */
  (function ($) {
   "use strict";
   jQuery(document).ready(function($){
       //home page js start
       var headline = document.querySelector('.trigger-headline'),
       trigger = document.querySelector('.btn--trigger'),
       segmenter = new Segmenter(document.querySelector('.segmenter'), {
         pieces: 4,
         animation: {
          duration: 1500,
          easing: 'easeInOutExpo',
          delay: 100,
          translateZ: 100
        },
        parallax: true,
        positions: [
        {top: 0, left: 0, width: 45, height: 45},
        {top: 55, left: 0, width: 45, height: 45},
        {top: 0, left: 55, width: 45, height: 45},
        {top: 55, left: 55, width: 45, height: 45}
        ],
        onReady: function() {
          trigger.classList.remove('btn--hidden');
          trigger.addEventListener('click', function() {
           segmenter.animate();
           headline.classList.remove('trigger-headline--hidden');
           this.classList.add('btn--hidden');
         });
        }
      });
      //home page js end
     //SKILL BAR START
     $('#skillbar-area4').skillbars({
      style: 3,
      showLevel: true
    });
       //SKILL BAR END
       // IMAGE LOADED JQUERY START     
       $('.grid').imagesLoaded( function() {
  // images have loaded
    //PORTFOLIO START  
    var $grid = $('.grid').isotope({
      itemSelector: '.gallery',
      percentPosition: true,
      masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.gallery'
  }      
})          
// filter items click
$('.portfolio-filter').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});  
 // filter items on button click
 $('.portfolio-filter').on( 'click', 'li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});  
 //PORTFOLIO END
});
 // IMAGE LOADED JQUERY    END   
     }); //DOCUMENT.READY BACKET CLOSE
   //WINDOW.LOADED START
   jQuery(window).load(function(){
    //PRELOADING START
    $("#preload").delay(350).fadeOut("slow")
    //PRELOADING END 
  }); //WINDOW.LOAD JS BACKET CLOSE
 }(jQuery)); //JQUERY MAIN  BACKET CLOSE