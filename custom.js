$(function() {
  // Trigger
  $('.trigger').click(function() {
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  });
  $('section, .menu a').click(function() {
    $('.trigger, .gnb').removeClass('active');
  });
  // Change CSS with Scroll
  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active');
    } else {
      $('header, .gototop').removeClass('active');
    }
  });
  // slick.js history
  $('.history-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
  });
  // slick.js project photo
  $('.project-photo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed:500,
    cssEase: 'linear',
  });
})