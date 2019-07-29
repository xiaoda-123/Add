$(function(){		
	$(".sp1 .xux").mouseover(function(){
		 $(this).css({"border":"1px dashed #d0021b ","background":"url(img/tp89.gif)right no-repeat","background-size":"14px 14px"}); 
	}).mouseout(function(){
		 $(this).css({"border":"","background":""}); 
	})
	
	
	$("#yhh").mouseover(function(){
		$(".yh").show();		
		$(".My_yh").addClass("My_yh2")
		$("#yhh").css("background","#eaeceb")
	}).mouseout(function(){
		$(".yh").hide();	
		$(".My_yh").removeClass("My_yh2")
		$("#yhh").removeAttr("style"," ")     
	});
	
	
	
	$("#khh").mouseover(function(){
		$(".kh").show();		
		$(".My_yh3").addClass("My_yh4")
		$("#khh").css("background","#eaeceb")
	}).mouseout(function(){
		$(".kh").hide();	
		$(".My_yh3").removeClass("My_yh4")
		$("#khh").removeAttr("style"," ")     
	});
	
	
	
	
	
	//全选
	$(".checkbox").click(function(){
		 if(this.checked){
			 $("[type=checkbox]").prop("checked",true);
		 }else{
			 $("[type=checkbox]").prop("checked",false);
		 }
	});
	
	
	//全选
		$(".checkbox4").click(function(){
		 if(this.checked){
			 $("[type=checkbox]").prop("checked",true);
		 }else{
			 $("[type=checkbox]").prop("checked",false);
		 }
	});
	
	
	//删除商品
	 $(".remove_sc").on("click","a",function(){
		$(this).parents("li").remove();
		spsl();
	}) 
	
	
	//复选框删除商品
	 	$("#del").click(function(){
	 	$(".gwc_sp1 li").each(function(){
			if($(".gwc_sp1 .checkbox3").prop("checked")){
				$(this).remove();
				
			}
			
		}) 
		$("input[type=checkbox]").removeAttr("checked");
		spsl();
	}); 
	
 
	 
	
 	
	$("[name=minus]").click(function(){
		var a=parseInt($(this).next().val());
		a=a-1;		
		$(this).next().val(a);
		if(a<1){
			 a=1;
			 $(this).next().val(a);
		}
		zoja();
		spsl();
		
	});
	
	$("[name=plus]").click(function(){
		var b=parseInt($(this).prev().val());
		b=b+1;			
		$(this).prev().val(b);
		zoja();	 
		spsl();
	}); 
		
	
	zoja();
	function zoja(){
		var money=0;
		$(".gwc_sp_li").each(function(i,dom){                 
			var shul=$(dom).find(".shul").val(); 
			var xiaoji = shul*$(dom).find(".price").text();
			$(dom).find(".price2").text(parseInt(xiaoji));
			money += xiaoji;
		});
		$("#totalPrice").html(money);
	}
	
	
	spsl();
	function spsl(){
		var a = 0;
		$(".gwc_sp_li").each(function(i,dom){
			var num = $(dom).find(".shul").val(); 
			a += parseInt(num);
		});
		$("#sl").text(a);
	}
	
	
});