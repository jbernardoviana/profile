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


    if( $("li").hasClass("active") ){
      $(this).children().css("color","red");
    };

  }
  scrollNav();



});
