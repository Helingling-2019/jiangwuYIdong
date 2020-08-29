 /* $(document).ready(function(){ */
	/* 侧边导航 */
	/* $(".sidebar ul li").on('mouseover',function(){
		$(".sidebar-box").hide();
	})
	$(".m-header-r").on('mouseover',function(){
		$(".sidebar-box").show();
	})
	$(".sidebar").on('mouseout',function(){
			  $(".sidebar-box").hide();
	}) */
	/* var aside = $(".sidebar-box").asideUi({
		hasmask: true,
		size: "4rem",
		position: "right",
		sidertime: 300
	});
	$(".m-header-r").on('touchend', function () {
		aside.toggle();
	}) 
	}) */
	/* function $(param){
			if(arguments[1] == true){
							return document.querySelectorAll(param);
						}else{
							return document.querySelector(param);
						}
			window.onload = function(){
			  let more = $(".m-header-r");
			  let show = $(".sidebar-box")
			  var sideBarLi = $(".sidebar > ul > li");
			  more.onclick=function(e){
			    show.classList.remove("remove")
			    show.classList.add("move")
			    e.stopPropagation()
			    show.onclick=function(e){
			      show.classList.add("move")
			      event.stopPropagation()    
			  }
			  $('html').onclick = function (e) {
			  show.classList.remove("move")
			  show.classList.add("remove") 
			  }
			}
			}
	  } */
	  
	  
	/* var list = document.querySelectorAll('.list');
	
	function accordion(e) {
	    e.stopPropagation();
	    if (this.classList.contains('active')) {
	        this.classList.remove('active');
	    } else
	    if (this.parentElement.parentElement.classList.contains('active')) {
	        this.classList.add('active');
	    } else
	    {
	        for (i = 0; i < list.length; i++) {
	            list[i].classList.remove('active');
	
	        }
	        this.classList.add('active');
	    }
	}
	for (i = 0; i < list.length; i++) {
	    list[i].addEventListener('click', accordion);
	} */
	/* 侧边导航*/
	/* 点击事件 */
	// 获取body宽度的一半的负值赋值给弹出列表
	$(document).ready(function(e) {
		var m = document.body.clientWidth;
		n = -m / 2;
		$(".sidebar").css("right", n + 'px');
	})
	// 设置定时器每隔100ms获取body宽度赋值给c
	$(document).ready(function() {
		setInterval(function() {
			// 获取body元素的大小
			var a = document.body.clientWidth;
			c = -a * 0.7;
		}, 100)
		// 点击按钮弹出侧边栏
		$('.toggle').click(function() {
			$('.sidebar-box').show();
			$('.sidebar').animate({
				right: 0
			}, 350);
		})
	
		// 点击空白处侧边栏收回
		$('.sidebar-other').click(function() {
			$('.sidebar').animate({
				right: c
			}, 350);
			setTimeout(function() {
				$('.sidebar-box').hide();
			}, 350)
	
		})
	/* $("#hf").children("a").click(function(){
	    return true;
	}); */
	})
	 
$(function(){
	
	/* 导航下拉 */
	var $sideBarLi = $(".d-menu-list > ul > li");
			var $sideBarLiChild = $(".d-menu-list ul ul > li");
			$sideBarLi.each(function(){
				if($(this).children().is("ul")){
					$(this).children("a").attr("href","javascript:void(0)");
					$(this).children("a").addClass("hasSelect");
				}
			});
			$sideBarLi.children("a").on("click",function(){
				$(this).toggleClass("rotate");
				$(this).siblings("ul").slideToggle().parent().siblings().children("ul").slideUp().siblings("a").removeClass("rotate");
			});
			
			 // 学校推荐
			   var m_Huxing_lunbo = new Swiper('.m_zx_lunbo', {
			        loop: true,
			        spaceBetween: 10,
			        centeredSlides: true,
			        slidesPerView: 'auto',
			        touchRatio: 0.5,
			        slideToClickedSlide: true
			    });
	
	/* 悬挂弹框 */
			
			$(".m-framegb").on('click',function(){
				$(".m-frame-box").hide();
			})
			$(".fr-on").on('click',function(){
				$(".m-frame-box").show();
			})	
			
})

 

         

 


