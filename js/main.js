$(document).ready(function() {
  /*Show the white bar on scroll down*/
  $(window).scroll(function() {

    var scroll = $(window).scrollTop();
    var objectSelect = $('.trigger');
    var objectPosition = objectSelect.offset().top;

    if (scroll > objectPosition) {

      $('.onscroll_bar').addClass('displayBar');

    } else {

      $('.onscroll_bar').removeClass('displayBar');

    }

  });

  /*Open and close burger menu*/
  $(".burger").on("click", function(){
    $("header .navigation nav ul").toggleClass("open");
    console.log("open");
  });
});