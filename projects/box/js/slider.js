
  $(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.nextArrow'),
        nextArrow: $('.prevArrow'),
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        
    });
    $('.feedback__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.feedback__slider__next-arrow'),
        nextArrow: $('.feedback__slider__prev-arrow'),
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        
    });
});