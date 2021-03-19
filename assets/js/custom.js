/*************************************

Template Name: Mars Academy | professional  Bootstrap 4 Template
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Description: eCourses | Personal Portfolio HTML5 Template
Version: 1.0

NOTE: This is active js file of the template.

****************************************/

/*global $ , alert, console*/

/* ==================================
      Start WOW
===================================== */
$(document).ready(function () {
  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();
});

/* ==================================
      Start dropdown
===================================== */

$('.dropdown').on('show.bs.dropdown', function (e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function (e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

/* ==================================
      Start Navigation Bar
===================================== */
$(document).ready(function () {
  var header = $("#min-header"),
    height = header.height(),
    yOffset = 0,
    triggerPoint = 100;
  $('.header-height').css('height', height + 'px');
  $(window).on('scroll', function () {
    yOffset = $(window).scrollTop();

    if (yOffset >= triggerPoint) {
      header.removeClass("animated cssanimation fadeIn");
      header.addClass("navbar-fixed-top  cssanimation animated fadeInDown");
    } else {
      header.removeClass("navbar-fixed-top cssanimation  animated fadeInDown");
      header.addClass("animated cssanimation fadeIn");
    }

  });
});

window.onload = function () {
  window.jQuery ?
    $(document).ready(function () {
      $(".sidebarNavigation .navbar-collapse")
        .hide()
        .clone()
        .appendTo("body")
        .removeAttr("class")
        .addClass("sideMenu")
        .show(),
        $("body").append("<div class='overlay'></div>"),
        $(".sideMenu").addClass(
          $(".sidebarNavigation").attr("data-sidebarClass")
        ),
        $(".navbar-toggle, .navbar-toggler").on("click", function () {
          $(".sideMenu, .overlay").toggleClass("open"),
            $(".overlay").on("click", function () {
              $(this).removeClass("open"), $(".sideMenu").removeClass("open");
            });
        }),
        $("body").on("click", ".sideMenu.open .nav-item", function () {
          $(this).hasClass("dropdown") ||
            $(".sideMenu, .overlay").toggleClass("open");
        }),
        $(window).resize(function () {
          $(".navbar-toggler").is(":hidden") ?
            $(".sideMenu, .overlay").hide() :
            $(".sideMenu, .overlay").show();
        });
    }) :
    console.log("sidebarNavigation Requires jQuery");
};


/* ==================================
      Start sidebarCollapse 
===================================== */

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

/* ==================================
      Start progress bar
===================================== */

$(document).ready(function ($) {
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);

});

/* ==================================
      Start Slick slider
===================================== */

$(document).ready(function () {
  $('#clients-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    rtl: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('#courses').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    rtl: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/* ==================================
      Start popover
===================================== */

$(document).ready(function () {
  $('[data-toggle="popover"]').popover()
})

/* ==================================
      Start mixitup
===================================== */

$(document).ready(function () {
  var mixer = mixitup('.mixitup');
});

/* ==================================
      start loading 
===================================== */

// start loading 
$(window).on("load", function () {

  "use strict";

  // Loading Elements

  $(".sk-cube-grid").fadeOut(1000, function () {

    // Show The Scroll

    $(this).parent().slideUp(1000, function () {

      $(this).remove();
    });
  });
});

// Material Select Initialization
// Material Select Initialization
$(document).ready(function() {
  $('.mdb-select').materialSelect();
  });

  $(function() {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});


/* ==================================
      Check the scroll position
===================================== */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    event.preventDefault();
    $(".scrollToTop").css({
      'transform': 'translate(0px, 0px)'
    });
  } else {
    $(".scrollToTop").css({
      'transform': 'translate(-80px, 0px)'
    });
  }
});
/* ==================================
     Click and scrolls top effect
===================================== */
$('.scrollToTop').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});


$(function () {
  $('.material-tooltip-main').tooltip({
    template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-inner"></div></div>'
  });
})


$(document).ready(function () {
  $('.table').DataTable({
    "ordering": false // false to disable sorting (or any other option)
    });
  $('.dataTables_length').addClass('bs-select');
  });

  $(document).ready(function () {
    $("#start").click(function () {
      $("#show-box").toggle();
    });
  });