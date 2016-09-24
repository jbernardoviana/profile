$(document).ready(function() {

  function scrollNav() {
    $('li > a').click(function(){
      //Toggle Class
      $(".active").removeClass("active");
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 160
      }, 400);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
  scrollNav();

  window.sr = ScrollReveal();
    sr.reveal('#summary', {mobile: true, reset: true, duration: 2000, origin: 'top' } );
    sr.reveal('#middle', {mobile: true, reset: true, duration: 2000, origin: 'left', scale: 0.6 } );
    sr.reveal('#hobbies', {mobile: true,  reset: true, duration: 2000, origin: 'right', scale: 0.6 } );
    sr.reveal('#location', {mobile: true, reset: true, duration: 2000, origin: 'top' } );
    sr.reveal('#footer', {mobile: true, reset: true, duration: 2000, origin: 'bottom' } );

});
