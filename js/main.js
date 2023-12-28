$(document).ready(function() {
    // run function on initial page load
    slider();
    dateColor();
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

function dateColor() {
  var el = document.getElementById('date');
  el.onchange = function() {
    if (el.value === '') {
        el.classList.add("empty");
    } else {
        el.classList.remove("empty");
    }
}
}