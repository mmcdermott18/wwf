$(document).ready(function() {
    // run function on initial page load
    slider();
    dateColor();
    dateValue();
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

function dateValue() {
  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
  $('#date').val(today);
  console.log( $('#date').val() );
};