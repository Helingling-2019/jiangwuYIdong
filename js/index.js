$(function(){
	//导航按钮
	var btnHide = false
		$('#img').click(function(){
			console.log(111)
			btnHide = !btnHide
			if(btnHide == true){	
			$('.sideBar').css('display', 'block')
			$('.img1').css('display','none')
			$('.img2').css('display','block')
			$(".head").css("position","fixed");
			$(".head").css("z-index","999");
		} else {
			$('.sideBar').css('display', 'none')
			$('.img1').css('display','block')
			$('.img2').css('display','none')
			$(".head").css("position","static");
		}
		})
	var $sideBarLi = $(".sideBar > ul > li");
	var $sideBarLiChild = $(".sideBar ul ul > li");
	$sideBarLi.each(function(){
		if($(this).children().is("ul")){
			$(this).children("a").attr("href","");
			$(this).children("span").addClass("hasSelect");
		}
	});
	
	 $sideBarLiChild.each(function(){
		if($(this).children().is(".sideBar-child")){
			$(this).children("a").attr("href","");
			$(this).children("span").addClass("hasSelect");
		}
	});
	$sideBarLi.children("span").on("click",function(){
		$(this).toggleClass("rotate");
		$(this).siblings("div").slideToggle().parent().siblings().children("div").slideUp().siblings("span").removeClass("rotate");
	});
	$sideBarLiChild.children("span").on("click",function(){
		$(this).toggleClass("rotate");
		$(this).siblings(".sideBar-child").slideToggle().parent().siblings().children(".sideBar-child").slideUp().siblings("a").removeClass("rotate");
	})
	/*
	*   获取 DOC 超出可视区域的高度
	*/
/* 	$(window).scroll(function (){
	    var ster = $(this).scrollTop();
	    navign1(ster);
	});
	
	 var dir1 = $(document).scrollTop();  
	 navign1(dir1); */
})