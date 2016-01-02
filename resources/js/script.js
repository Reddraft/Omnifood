$(document).ready(function() {

  /* --------- STICKY NAVIGATION USING WAYPOINTS SCRIPT ---------*/


  $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
        $('nav').addClass('sticky');
      }else {
        $('nav').removeClass('sticky');
      }
  }, {
      offset: '70px' //height of sticky-nav
  });

 /*
  var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
    }, {
    offset: '25%'
  })
  */


  /* --------- SCROLL ON CTA BUTTONS ---------*/

  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top - 70}, 1000) // Scroll the html to section plans minus 70px with a delay of 1 sec
  })

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top - 70}, 1000) // Scroll the html to section features minus 70px with a delay of 1 sec
  })


  /* --------- SCROLLING NAVIGATION SCRIPT FROM CSS TRICKS JUST ADD ID'S AND ANCHORS TO SECTIONS ---------*/

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70 // minus 70px from top
        }, 1000);
        return false;
      }
    }
  });



  
});

