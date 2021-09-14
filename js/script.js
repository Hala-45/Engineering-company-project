$(document).ready (function(){

	
	
	
	
	$(".up").click(function(){
	//$(window).scrollTop(0);
	$("html,body").animate({
		scrollTop:0,
	},1000);

	
});
	$(window).scroll(function(){
		console.log($(window).scrollTop)
	if($(window).scrollTop() > 2200){
		$(".up").fadeIn();
	}
	else{
		$(".up").fadeOut();
	}
	});
});
	


			