$(document).ready(function(){
    $('.slider__window').slick({
        dots: false,
        infinite: true,
        speed: 20,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
            }
          },
         
        
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        
    });     
  });
  $(document).ready(function(){
    $('.school__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        
        
        
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              infinite: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });
  $(document).ready(function(){
    $('.reward__slider-reward').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        
        
        
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
              infinite: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });
  $(document).ready(function(){
    $('.reward__slider-parents').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        
        
        
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
              infinite: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });