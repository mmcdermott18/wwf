$(document).ready(function() {
    // run function on initial page load
    slider();
    // run function on resize of the window
    $(window).resize(function() {
      // slider();
    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

function slider() {
  $('.gallery').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  });
}