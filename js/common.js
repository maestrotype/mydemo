$(document).ready(function() {
    
     $(function() {
    $( "#datepicker" ).datepicker();
  });

	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 5,
		autoplaySpeed : 300,
		navSpeed : 300,
		dotsSpeed : 300,
		dragEndSpeed : 300
	});
	
	
	$(".slider .owl-item .wrap_text").animated("fadeInRight");
	
		
});
