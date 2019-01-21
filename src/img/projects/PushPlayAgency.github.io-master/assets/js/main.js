"use strict";

$(document).ready(function($) {


  /*---------------------------------------------*
   * Mobile menu
   ---------------------------------------------*/
  $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - 80)
        }, 1000);
        if ($('.navbar-toggle').css('display') != 'none') {
          $(this).parents('.container').find(".navbar-toggle").trigger("click");
        }
        return false;
      }
    }
  });


  /*---------------------------------------------*
   * WOW
   ---------------------------------------------*/
  var wow = new WOW({
    mobile: false // trigger animations on mobile devices (default is true)
  });
  wow.init();

  /*---------------------------------------------*
   * MagnificPopup
   ---------------------------------------------*/
  $('.popup-img').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('.video-link').magnificPopup({
    items: [{
      src: 'https://vimeo.com/188906206',
      type: 'iframe' // this overrides default type
    }],
    gallery: {
      enabled: false
    },
    type: 'image'
  });



  /*---------------------------------------------*
   * Slider
   ---------------------------------------------*/
  $(".testimonial_slid").slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<i class='fa fa-angle-left nextprevleft'></i>",
    nextArrow: "<i class='fa fa-angle-right nextprevright'></i>",
    autoplay: true,
    autoplaySpeed: 5000
  });

  // Featured Slider
  $('.featured_slider').slick({
    centerMode: true,
    dote: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 1500,
    index: 2,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  /*---------------------------------------------*
   * Events
   ---------------------------------------------*/
  // var eventList = document.getElementById("eventsListing");
  // var eventListText = "";
  // var events;
  // $.ajax({
  //   url: 'https://www.eventbriteapi.com/v3/organizers/14654708873/events/?token=OLC6JTC67B7EUAMVAKGO',
  //   dataType: 'JSON',
  //   method: "GET",
  //   success: function(results) {
  //     console.log("Results: ", results);
  //
  //     events = results.events;
  //     for (var i = 0; i < events.length; i++) {
  //
  //       // Test length of title and description to aviod overflow.
  //       if (events[i].name.text.length >= 35) {
  //         events[i].name.text = events[i].name.text.substr(0, 35) + "...";
  //       }
  //
  //       if (events[i].description.text === null) {
  //         events[i].description.text = "";
  //       } else {
  //         if (events[i].description.text.length >= 112) {
  //           events[i].description.text = events[i].description.text.substr(0, 112) + "...";
  //         }
  //       }
  //
  //       // Converting date information
  //       events[i].start.local = events[i].start.local.slice(0, events[i].start.local.search("T"));
  //       var datetime = events[i].start.local;
  //       datetime = datetime.split("-");
  //
  //       // Taking of preceeding zero from day property
  //       if (datetime[2].startsWith("0")) {
  //         datetime[2] = datetime[2].slice(1);
  //       }
  //
  //       //Covert to month abbreviation
  //       switch (datetime[1]) {
  //         case "01":
  //           datetime[1] = "Jan";
  //           break;
  //         case "02":
  //           datetime[1] = "Feb";
  //           break;
  //         case "03":
  //           datetime[1] = "Mar";
  //           break;
  //         case "04":
  //           datetime[1] = "Apr";
  //           break;
  //         case "05":
  //           datetime[1] = "May";
  //           break;
  //         case "06":
  //           datetime[1] = "Jun";
  //           break;
  //         case "07":
  //           datetime[1] = "Jul";
  //           break;
  //         case "08":
  //           datetime[1] = "Aug";
  //           break;
  //         case "09":
  //           datetime[1] = "Sep";
  //           break;
  //         case "10":
  //           datetime[1] = "Oct";
  //           break;
  //         case "11":
  //           datetime[1] = "Nov";
  //           break;
  //         case "12":
  //           datetime[1] = "Dec";
  //           break;
  //
  //       }
  //
  //       eventListText += "<li>"
  //       eventListText += "<time datetime=" + datetime + ">";
  //       eventListText += "<span class='day'>" + datetime[2] + "</span>";
  //       eventListText += "<span class='month'>" + datetime[1] + "</span>";
  //       eventListText += "<span class='year'>" + datetime[0] + "</span>";
  //       eventListText += "<span class='time'></span>";
  //       eventListText += "</time>";
  //
  //       // Check if logo is provided
  //       if (events[i].logo === null) {
  //         events[i].logo = '"assets/images/background/Video.jpg"';
  //         eventListText += "<img src=" + events[i].logo + "/>";
  //       } else {
  //         eventListText += "<img src=" + events[i].logo.original.url + "/>";
  //       }
  //
  //       eventListText += "<div class='info'>";
  //       eventListText += "<h2 class='title'>" + events[i].name.text + "</h2>";
  //       eventListText += "<p class='desc'>" + events[i].description.text + "</p>";
  //       eventListText += "</div>";
  //       eventListText += "</li>";
  //     }
  //     console.log(eventList);
  //     eventList.innerHTML = eventListText;
  //   },
  //   error: function(err) {
  //     console.log("err: ", err);
  //   }
  // });


  /*---------------------------------------------*
   * ScrollUp
   ---------------------------------------------*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('.scrollup').fadeIn('slow');
    } else {
      $('.scrollup').fadeOut('slow');
    }
  });
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });


});
