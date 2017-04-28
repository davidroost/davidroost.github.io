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

// fade in images in portfolio boxes

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

// nav background color change on scroll
      $(document).ready(function () {
          $(window).scroll(function () {
              if ($(document).scrollTop() > 225) {
                  $("header").addClass("scrolled");
              } else {
                  $("header").removeClass("scrolled");
              }
          });
      });

// publication viewer

});


// baby-blue:  rgb(155, 218, 252);
// brown:      rgb(133, 96, 70);
// red:        rgb(178, 0, 0);
// red-dark:   rgb(133, 7, 7);
// off-white:  rgb(255, 241, 200);
// grey:       rgb(128, 128, 128);

// font guide
// font-family: 'Oswald', sans-serif;
// font-family: 'Muli', sans-serif; (200,400,900)
// font-family: 'Lobster', cursive;
// font-family: 'Questrial', sans-serif;
// font-family: 'Pacifico', cursive;
// font-family: 'Rokkitt', serif; (400,600,800)
