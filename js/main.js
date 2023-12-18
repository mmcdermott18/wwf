$(document).ready(function() {
    // run function on initial page load
    slider();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

function slider() {
  $('.gallery').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    variableWidth: true
  });
}