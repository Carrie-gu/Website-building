$(function () {
	// header icon hover animation
	var $weixin = $(".header .header-top .top-left ul .weixin"); 
	var $weixin_sub = $(".header .header-top .top-left ul .weixin .sub"); 

	$weixin.hover( function () {
		$weixin_sub.stop().fadeIn("fast").animate({top:40},600);
	},function () {
		$weixin_sub.stop().hide().animate({top:80},100);
	}) 

	var $phone = $(".header .header-top .top-left ul .phone"); 
	var $phone_sub = $(".header .header-top .top-left ul .phone .sub"); 

	$phone.hover( function () {
		$phone_sub.stop().fadeIn("fast").animate({top:40},600);
	},function () {
		$phone_sub.stop().hide().animate({top:80},100);
	}) 

	// back-to-top
	var $backButton = $(".wrap .back-to-top");
	
	$backButton.click( function () {
		$("html,body").animate({scrollTop:0},800);
	})

	$(window).scroll( function () {
		if ( $(window).scrollTop() > $(window).height() ) {
			$backButton.fadeIn();
		} else {
			$backButton.fadeOut();
		}
	})

	$(window).trigger("scroll");
})
	