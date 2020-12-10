$('.slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1800,
  arrows: true,
});

$('a[href^="#"]').on('click', function (event) {

  var target = $($(this).attr('href'));

  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 500);
  }

});