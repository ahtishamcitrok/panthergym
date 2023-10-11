const swiper = new Swiper('.products-list', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

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