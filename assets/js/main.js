$('.slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1800,
  arrows: true,
  responsive: [
    {
      breakpoint: 415,
      settings: {
        arrows: false,
      }
    }
  ]
});

$('a[href^="#"]').on('click', function (event) {

  var target = $($(this).attr('href'));

  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top - 70
    }, 500);
  }

});

$('input:checkbox').change(function () {
  if ($(this).is(":checked")) {
    $('.lat').addClass("show");
  } else {
    $('.lat').removeClass("show");
  }
});

$(".anc").click(function () {
  $(".lat").removeClass("show");
  $('#chec').prop('checked', false);
});

$(".overlay").click(function () {
  $(".lat").removeClass("show");
  $('#chec').prop('checked', false);
});
