function scroll_to(clicked_link, nav_height) {
  var element_class = clicked_link.attr('href').replace('#', '.');
  var scroll_to = 0;
  if (element_class != '.top-content') {
    element_class += '-container';
    scroll_to = $(element_class).offset().top - nav_height;
  }
  if ($(window).scrollTop() != scroll_to) {
    $('html, body').stop().animate({
      scrollTop: scroll_to
    }, 1000);
  }
}


jQuery(document).ready(function() {

  $(window).on("load, resize", function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
      $(".top-content").removeClass("top-content").addClass("header-container");
    }
  });

  /*
      Navigation
  */
  $('a.scroll-link').on('click', function(e) {
    e.preventDefault();
    scroll_to($(this), $('nav').outerHeight());
  });
  // toggle "navbar-no-bg" class
  $('.top-content .text').waypoint(function() {
    $('nav').toggleClass('navbar-no-bg');
  });

  /*
      Background slideshow
  */
  $('.top-content').backstretch(
    ["assets/img/backgrounds/header1.jpg", "assets/img/backgrounds/header2.jpg", "assets/img/backgrounds/header3.jpg"], {
      duration: 3000,
      fade: 750
    }
  );

  $('#top-navbar-1').on('shown.bs.collapse', function() {
    $('.top-content').backstretch("resize");
  });
  $('#top-navbar-1').on('hidden.bs.collapse', function() {
    $('.top-content').backstretch("resize");
  });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function() {
    $('.testimonials-container').backstretch("resize");
  });

  /*
      Wow
  */
  new WOW().init();

});


jQuery(window).load(function() {

  /*
  	Loader
  */
  $(".loader-img").fadeOut();
  $(".loader").delay(1000).fadeOut("slow");

  /*
  	Hidden images
  */
  $(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");

});
