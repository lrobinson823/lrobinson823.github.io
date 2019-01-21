$(document).ready(function() {
  /***** Navigation *****/
  $('a.scroll-link').on('click', function(e) {
    e.preventDefault();
    scroll_to($(this), $('nav').outerHeight());
  });

  /***** Toggle Navigation *****/
  $('.header-links').waypoint(function() {
    $('nav').toggleClass('navbar-no-bg');
  });

  /***** CAROUSEL OPTIONS *****/
  $('#quote-carousel').carousel({
    pause: true,
    interval: 10000,
  });

  /***** WOW *****/
  new WOW().init();

});

function scroll_to(clicked_link, nav_height) {
  var element_class = clicked_link.attr('href').replace('#', '.');
  var scroll_to = 0;
  if (element_class != '.header-container') {
    element_class += '-container';
    scroll_to = $(element_class).offset().top;
  }
  if ($(window).scrollTop() != scroll_to) {
    $('html, body').stop().animate({
      scrollTop: scroll_to
    }, 1000);
  }
}
