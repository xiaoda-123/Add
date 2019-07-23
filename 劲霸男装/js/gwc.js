$(document).ready(function(){
	$(".i").hide();
	$(".qq,.i").mouseover(function(){
		$(".i").show();
	})
	$(".i").mouseout(function(){
		$(".i").hide();
	})
	$(".erweima").mouseover(function(){
		$(".erweima1").show(500);
	})
	$(".erweima").mouseout(function(){
		$(".erweima1").hide(500);
	})
	 $(".m").click(function(){
		 $(".b").toggleClass("add");	
	});
	$(".m").click(function(){
		 $(".yc ul li").toggle();
	})
	$(".yc ul li").click(function(){
		var a=$(".yc ul li").html()
		alert(a)
		// var $chima=
		 // $(".yc ul li").toggle();
	})
})