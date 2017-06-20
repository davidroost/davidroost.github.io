$(document).ready(function(){

  $("nav ul li:first-child").click(function(){
      console.log("hamburger menu clicked!");
      // $("ul li a").slideToggle();
      $("nav").toggleClass("open");

  });
  $("nav ul li a").click(function(){
      console.log("hamburger menu clicked!");
      // $("ul li a").slideToggle();
      $("nav").toggleClass(".class");
  });
  /*

  toggle()
  slideDown()

  */





// scroll menu :)

$(".menu li a").click(function(e) {
    e.preventDefault();
    var offset = 20; //Offset of 20px
    var element = $(this).attr('title');
    $('html, body').animate({
        scrollTop: $("#" + element).offset().top + offset
    }, 2000);
});


$('.greeting-section-img').click(function(e) {
    e.preventDefault();
    var offset = 20; //Offset of 20px
    $('html, body').animate({
        scrollTop: $("#portfolio-section").offset().top + offset
    }, 2000);
});

$('.fewd-scroll').click(function(e) {
    e.preventDefault();
    var offset = 20; //Offset of 20px
    $('html, body').animate({
        scrollTop: $("#fewd-section").offset().top + offset
    }, 2000);
});


// ********************** BACKGROUND VIDEO FOR GREETING SECTION **********************


(function() {
  /**
   * Video element
   * @type {HTMLElement}
   */
  var video = document.getElementById("my-video");

  /**
   * Check if video can play, and play it
   */
  video.addEventListener( "canplay", function() {
    video.play();
  });
})();


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


// slideshow
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

// slideshow fade out on scroll


// fewd popup section
// Get the modal
      var modal = document.getElementById("myModal");

      // Get the button that opens the modal
      var btn = document.getElementById("fewd-button");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("closefewd")[0];

      // When the user clicks on the button, open the modal
      btn.onclick = function() {
          modal.style.display = "block";
      }

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("closefewdbottom")[0];

            // When the user clicks on the button, open the modal
            btn.onclick = function() {
                modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }


// fade in greeting text

  $(function() {
      $(window).scroll( function(){

          $('.fadeInBlock').each( function(i){  // This is whats slowing down the loading of the site

              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();

              /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
              bottom_of_window = bottom_of_window + 10;

              if( bottom_of_window > bottom_of_object ){

                  $(this).animate({'opacity':'1'},200);

              }
          });

      });
  });


});

// new blue rgb(0, 204, 255);
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
