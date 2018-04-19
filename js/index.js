/*David Roost Creative Website - Author: David Roost*/

$(document).ready(function(){



// pre-page loader
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 6000);






var sources = document.querySelectorAll('video#my-video source');
// Define the video object this source is contained inside
var video = document.querySelector('video#my-video');
for(var i = 0; i<sources.length;i++) {
  sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
}
// If for some reason we do want to load the video after, for desktop as opposed to mobile (I'd imagine), use videojs API to load
video.load();



// Nav Bar Drop Down On Mobile
  $("nav ul li:first-child").click(function(){
      console.log("hamburger menu clicked!");
      // $("ul li a").slideToggle();
      $("nav").toggleClass("open");

  });
  $("nav ul li a").click(function(){
      console.log("hamburger menu clicked!");
      // $("ul li a").slideToggle();
      $("nav").toggleClass("open");
  });


// scroll menu down  :)

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



});
