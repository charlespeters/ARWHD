//for FIT SUITE
$(".entry").fitVids();
$('h1.fithero').fitText(.625);
$('h2.fithero').fitText(1.5);


//navigation
$(document).ready(function() {
	$('.navbtn').click(function() {
		$('.nav').toggleClass('show');
	});
});
