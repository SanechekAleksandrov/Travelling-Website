$(function () {

   $('.header-slider__inner').slick({
      slidesToShow: 1,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed: 3000,
      dots:true, 
      arrows: false,
      fade: true,
    });

    $('.reviews__slider').slick({
      slidesToShow: 1,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed: 3000,
      dots:true, 
      fade: true,
      prevArrow:'<button type="button" class="slick-prev"><img src="images/reviews/arrow-left.svg" alt="arrow"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="images/reviews/arrow-right.svg" alt="arrow"></button>'
    });

    $(".header-nav__menu a, .footer__rights-btn").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
      });


  


























})