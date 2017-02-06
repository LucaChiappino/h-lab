$('.dropdown').hover(function(){
	$(this).find('.sub_navigation').slideToggle();
	
});


$('#tgmobmenu').click(function(){
	$("#mobmenu").css("height", "100vh");
	$("body").css("overflow", "hidden");
});

$('#xmobmenu').click(function(){
	$("#mobmenu").css("height", "0vh");
	$("body").css("overflow", "auto");
});




$('.menumoblink').click(function(){
		
	$('.mombile-li').css("display", "none");
	

	
	$('.freccia-destra').css("display", "inline");
	$('.freccia-giu').css("display", "none");
	
	
	
	if (!$(this).hasClass('active')){
		$('.menumoblink').removeClass("active");
		$(this).addClass("active");
		$(this).find('.mombile-li').slideToggle();
		$(this).find('.freccia-destra').css("display", "none");
		$(this).find('.freccia-giu').css("display", "inline");
	}else{
		$('.menumoblink').removeClass("active");

	}
	
	
});



