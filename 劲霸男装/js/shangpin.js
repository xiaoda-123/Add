$(document).ready(function(){
	$(".i").hide();
	$(".qq,.i").mouseover(function(){
		$(".i").show();
	})
	$(".i").mouseout(function(){
		$(".i").hide();
	})
	
})

 $(document).ready(function(){
 	$(".x").hover(function(){
		$(".c").toggle();
 	})
	$(".c").hover(function(){
		$(".c").toggle();
	})
 })
 
 
 $(document).ready(function(){
 	$(".erweima").mouseover(function(){
 		 $(".erweima1").show(500);
 	})
 	$(".erweima").mouseout(function(){
 		$(".erweima1").hide(500);
 	})
 })
 
 
 $(function(){
	 $(".pp img").mouseover(function(){
	 $(this).attr("src","http://image.k-boxing.com/upload/goods/CTCD2419-0292(1)_15558974855713.jpg")
	 })
	 $(".pp img").mouseout(function(){
	 $(this).attr("src","img/shangpin1.jpg")
	 });
	 
	
 });

	
	$(function(){	
		 $(".paix").hide(); 
		 $(".z").mouseover(function(){
		 	 $(".paix").show();
		 })
		 $(".z").mouseout(function(){
		 	$(".paix").hide();
		 })	
		 $(".paix").mouseover(function(){
		 	 $(".paix").show();
		 })
		 $(".paix").mouseout(function(){
		 	$(".paix").hide();
		 })	
	}) 