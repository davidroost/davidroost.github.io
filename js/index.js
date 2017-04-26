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
    $(portfolio_box_popup_id).slideFadeToggle(function() {
        e.removeClass('selected');
        });
  };

  var portfolio_box_popup_id

  var portfolio_box_id

  $(function() {
    $('.portfolio-box').on('click', function() {
        if($(this).hasClass('selected')) {
          deselect($(this));
        }
        else {
            $(this).addClass('selected');

            portfolio_box_popup_id="#"+$(this).attr("id")+"-popup";
            // we're setting a variable to add the hash and get the id, and add the popup name,

            portfolio_box_id="#"+$(this).attr("id");

            $(portfolio_box_popup_id).slideFadeToggle();
        }
        return false;
        });

    $('.close').on('click', function() {
        deselect($(portfolio_box_id));
        return false;
        });

    $('.close-bottom').on('click', function() {
        deselect($(portfolio_box_id));
        return false;
        });
  });

  $.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
  };

// fade in

function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('.portfolio-box');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.portfolio-box');
});


});
