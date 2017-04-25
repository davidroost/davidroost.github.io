$(document).ready(function(){

  $("nav ul li:first-child").click(function(){
      console.log("hamburger menu clicked!");
      // $("ul li a").slideToggle();
      $("nav").toggleClass("open");
  });

  /*

  toggle()
  slideDown()

  */


// ********************** POP-UP WINDOW FOR PORTFOLIO SECTION **********************

  function deselect(e) {
    $('.popup').slideFadeToggle(function() {
      e.removeClass('selected');
      });
  };

  $(function() {
    $('#sea-b').on('click', function() {
      if($(this).hasClass('selected')) {
        deselect($(this));
      } else {
        $(this).addClass('selected');
        $('.popup').slideFadeToggle();
      }
      return false;
      });

      $('.close').on('click', function() {
        deselect($('#sea-b'));
        return false;
        });

      $('.close-bottom').on('click', function() {
        deselect($('#sea-b'));
        return false;
        });
  });

  $.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
  };

});
