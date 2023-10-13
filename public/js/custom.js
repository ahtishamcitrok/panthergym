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
      992: {
        items: 3,
        nav: true,
        loop: true
      },
      1200: {
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

  //Micro Modal Init
  MicroModal.init();

  // Close modal on click of element with custom close attribute
  $('[data-close-modal]').on('click', function () {
    let currModal = $(this).closest('.modal').attr('id')
    MicroModal.close(currModal)
  })

  $('[data-micromodal-trigger="confirmation-modal"]').on('click', function(){
    
    MicroModal.close('booking-modal');
  })
  $('[data-micromodal-trigger="cancel-modal"]').on('click', function(){
    MicroModal.close('booking-modal');
  })
});

// password field show password

$(document).ready(function () {
  $(".toggle-password").click(function () {
    // Toggle the input type
    var passwordField = $(this).siblings(".password");
    if (passwordField.attr("type") === "password") {
      passwordField.attr("type", "text");
    } else {
      passwordField.attr("type", "password");
    }

    // Toggle the icon class
    var eyeIcon = $(this);
    if (eyeIcon.hasClass("fa-eye-slash")) {
      eyeIcon.removeClass("fa-eye-slash").addClass("fa-eye");
    } else {
      eyeIcon.removeClass("fa-eye").addClass("fa-eye-slash");
    }
  });
});

