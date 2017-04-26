$(document).ready(function(){

			$(".button").click(function(){
				$(".overlay").fadeToggle(200);
				$(".button").toggleClass('change');
			});

			$('.overlay').on('click', function(){
			$(".overlay").fadeToggle(200);   
			$(".button").toggleClass('change');
			open = false;
		});


var previousScroll = 0;

  $(window).scroll(function(){

    var currentScroll = $(this).scrollTop();
    if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
     
      if (currentScroll > previousScroll){
      	console.log("navbar hidden");
        window.setTimeout(hideNav, 500);
  
      } else {
      	console.log("show nav");
        window.setTimeout(showNav, 200);
      }
      
      previousScroll = currentScroll;
    }

  });

  function hideNav() {

    $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
  }
  function showNav() {
    $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
  }


		});