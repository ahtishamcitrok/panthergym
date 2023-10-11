jQuery(document).ready(function ($) {

  // Products Slider 
  $('.products-list').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: true
      }
    },
    nav: true,
    navText: [
        "<img src='./img/arrow-left.svg' class='prev-btn'>",
        "<img src='./img/arrow-right.svg' class='next-btn'>"
    ],
    onInitialized: setEqualHeight, // Call function on carousel initialization
    onResized: setEqualHeight,
  })

  // Testimonails Slider 
  $('.review-parent-box').owlCarousel({
    loop: true,
    margin: 24,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: true
      }
    },
    nav: true,
    navText: [
        "<img src='./img/arrow-left.svg' class='prev-btn'>",
        "<img src='./img/arrow-right.svg' class='next-btn'>"
    ],
    onInitialized: setEqualHeight, // Call function on carousel initialization
    onResized: setEqualHeight,
    
  })
  function setEqualHeight(event) {
    var maxHeight = 0;
    $('.owl-item', event.target).each(function () {
      var itemHeight = $(this).height();
      maxHeight = Math.max(maxHeight, itemHeight);
    });
    $('.owl-item', event.target).height(maxHeight);
  }

  // Mobile Menu Toggle
  if ($(window).width() <= 991) {
    $('.header-nav').prepend('<img src="./img/close-icon.svg" class="close-menu" alt="">')
  }

  var $headerNav = $('.header-nav, .menu-toggle');

  // Click event handler on the document
  $(document).on('click', function (event) {
    // Check if the clicked element is not within .header-nav and its children
    if (!$(event.target).closest($headerNav).length) {
      // Toggle the class on the hidden element
      $('.header-nav').removeClass('visible')
      $('body').removeClass('menu-open')
    }
  });

  $('.menu-toggle, .close-menu').on('click', function () {
    $('.header-nav').toggleClass('visible')
    $('body').toggleClass('menu-open')
  })
})


// schedule page tabs js

$(document).ready(function () {
  $(".tablinks").click(function () {
    // Remove the active class from all tablinks
    $(".tablinks").removeClass("active");

    // Add the active class to the clicked tablink
    $(this).addClass("active");

    // Hide all tab contents
    $(".tabcontent").hide();

    // Show the corresponding tab content based on the index of the clicked tablink
    const index = $(this).index();
    $(".tabcontent").eq(index).show();
  });
});