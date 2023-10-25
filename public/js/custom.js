jQuery(document).ready(function ($) {

  // Products Slider 
  $('.products-list.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      992: {
        items: 3,
        nav: true,
        dots: false,
        dotsEach: 1,
        loop: true,
      },
      1200: {
        items: 4,
        loop: true,
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

  // featured classes slider
  $('.featured-classes.owl-carousel').owlCarousel({
    loop: true,
    margin: 24,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
        nav: false,
      },
      992: {
        items: 3,
        nav: true,
        dots: false,
        dotsEach: 1,
        loop: true,
      },
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
        nav: false,
        dots: true,
      },
      600: {
        items: 1,
      },
      992: {
        items: 2,
        nav: true,
        dots: false,
        dotsEach: 1,
        loop: true,
      },
      1200: {
        items: 3,
      },
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

  $('[data-micromodal-trigger="confirmation-modal"]').on('click', function () {

    MicroModal.close('booking-modal');
  })
  $('[data-micromodal-trigger="cancel-modal"]').on('click', function () {
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

  //Cart Drawer
  $('[data-drawer-target]').on('click', function () {
    let drawerId = $(this).data('drawer-target');
    if ($('.custom-backdrop').length <= 0) {
      $('body').append('<div class="custom-backdrop"></div>')
    }
    $('.custom-backdrop').toggleClass('visible')
    $('#' + drawerId).toggleClass('translate-x-full')
  })

  $('.close-drawer').on('click', function () {
    $(this).closest('.drawer').addClass('translate-x-full');
    $('.custom-backdrop').removeClass('visible')
  })

  $('.custom-backdrop').on('click', function () {
    $('.drawer').addClass('translate-x-full');
    $('.custom-backdrop').removeClass('visible')
  })

  //Accordion Script
  $('.accordion-head').on('click', function () {
    $(this).next().slideToggle()

    $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');

  })

  $(".search-btn").on("click", function() {
    $(".search-wrap").slideToggle(250);
  });
  
  $(".mobile-search-btn").on("click", function() {
    $(".mobile-search").slideToggle(250);
  });

});

$(document).ready(function () {
  $('.icon-left').click(function () {
    showPrevImage();
  });

  $('.icon-right').click(function () {
    showNextImage();
  });

  $('.thumbnails .cursor-pointer').click(function () {
    changeMainImage($(this).find('img').attr('src'));
  });

  const mainImageContainer = document.querySelector('.main-image');

  const hammerMainImage = new Hammer(mainImageContainer);
  hammerMainImage.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

  hammerMainImage.on('swipeleft', function () {
    showNextImage();
  });

  hammerMainImage.on('swiperight', function () {
    showPrevImage();
  });

});

function showPrevImage() {
  const activeIndex = getActiveIndex();
  if (activeIndex > 0) {
    setActiveImage(activeIndex - 1);
  }
}

function showNextImage() {
  const activeIndex = getActiveIndex();
  const totalImages = getTotalImages();
  if (activeIndex < totalImages - 1) {
    setActiveImage(activeIndex + 1);
  }
}

function changeMainImage(src) {
  $('#main-image').attr('src', src);
  setActiveThumbnail(src);
}

function getActiveIndex() {
  return $('.thumbnails .cursor-pointer.active').index();
}

function getTotalImages() {
  return $('.thumbnails .cursor-pointer').length;
}

function setActiveImage(index) {
  $('.thumbnails .cursor-pointer').removeClass('active');
  $('.thumbnails .cursor-pointer:eq(' + index + ')').addClass('active');
  const src = $('.thumbnails .cursor-pointer:eq(' + index + ') img').attr('src');
  changeMainImage(src);
}

function setActiveThumbnail(src) {
  $('.thumbnails .cursor-pointer').removeClass('active');
  $('.thumbnails .cursor-pointer img[src="' + src + '"]').parent().addClass('active');
}



// crowd meter page chartjs

var ctx = document.getElementById('crowdChart').getContext('2d');

var data = {
  labels: ['3 AM', '', '', '6 AM', '', '', '9 AM', '', '', '12 PM', '', '', '3 PM', '', '', '6 PM', '', '', '9 PM', '', '', '12 AM', '', ''],
  datasets: [
    {
      label: 'Percent Capacity',
      data: [2, 18, 7, 17, 9, 10, 12, 2, 6, 11, 18, 17, 16, 4, 9, 100, 7, 3, 18, 11, 8, 11, 6, 18, 15],
      backgroundColor: '#E73B45', // Bar color
      borderWidth: 0, // Border width
      borderRadius: 2, // Border radius
    },
  ],
};

var chart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0
        },
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          max: 100,
          stepSize: 10,
        },
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      }
    },
  },
});