
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.header-container') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/***** Navigation *****/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});

	/***** Toggle Navigation *****/
	// $('.header-links').waypoint(function() {
	// 	$('nav').toggleClass('navbar-no-bg');
	// });
	
    /***** Background Images *****/
    // $('.header').backstretch("src/img/backgrounds/header.jpg");
    // $('.call-to-action-container').backstretch("src/img/backgrounds/callToAction.jpg");
    
    // $('#top-navbar-1').on('shown.bs.collapse', function(){
    // 	$('.header').backstretch("resize");
    // });
    // $('#top-navbar-1').on('hidden.bs.collapse', function(){
    // 	$('.header').backstretch("resize");
    // });
    
    /***** WOW *****/
    new WOW().init();
	
});


jQuery(window).load(function() {
	
	/***** Loader *****/
	$(".loader-img").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");
	
	/***** Hidden Images *****/
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
	
});

