/*David Roost Creative Website - Author: David Roost*/

$(document).ready(function(){

	var bLazy = new Blazy({
	  success: function(){
	    updateCounter();
	  }
	});

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




	// scroll tabs

	// Cache selectors
	var lastId,
	    topMenu = $("#top-menu"),
	    topMenuHeight = topMenu.outerHeight()+1,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	// menuItems.click(function(e){
	//   var href = $(this).attr("href"),
	//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	//   $('html, body').stop().animate({
	//       scrollTop: offsetTop
	//   }, 2000);
	//   e.preventDefault();
	// });

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;

	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";

	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }
	});
// https://stackoverflow.com/questions/9979827/change-active-menu-item-on-page-scroll




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



// faster youtube embed


( function() {

	var youtube = document.querySelectorAll( ".youtube" );

	for (var i = 0; i < youtube.length; i++) {

		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";

		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );

				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );
	};

} )();


});
