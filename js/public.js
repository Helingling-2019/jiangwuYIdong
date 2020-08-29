 $(function(){
	 /* 资讯列表 */
	 $(".find_nav_list li").on('click', function(){
	     nav_w=$(this).width();
	     var fn_w = ($(".find_nav").width() - nav_w) / 2;
	     var fnl_l;
	     var fnl_x = parseInt($(this).position().left);
	     if (fnl_x <= fn_w) {
	         fnl_l = 0;
	     } else if (fn_w - fnl_x <= flb_w - fl_w) {
	         fnl_l = flb_w - fl_w;
	     } else {
	         fnl_l = fn_w - fnl_x;
	     }
	     $(".find_nav_list").animate({
	         "left" : fnl_l
	     }, 300);
	     sessionStorage.left=fnl_l;
	     var c_nav=$(this).find("a").text();
	 });
	 var Yleft = $('.find_nav_list ul li a.on').position().left;
	 var Yleftlast = $('.find_nav_list ul li').last().position().left;
	 var Ylefteq2 = $('.find_nav_list ul li').eq(-2).position().left;
	 var Ylefteq3 = $('.find_nav_list ul li').eq(-3).position().left;
	 
	 if (Yleft < 150) {
	     $(".find_nav_list").css("left","0px");
	 }else if(Yleft>Yleftlast){
	     $(".find_nav_list").css("left",'-'+(Yleft-$(window).width()+95)+"px");
	 }else if(Yleft>Ylefteq2){
	     $(".find_nav_list").css("left",'-'+(Yleft-($(window).width()/2)-15)+"px");
	 }else if(Yleft>Ylefteq3){
	     $(".find_nav_list").css("left",'-'+(Yleft-($(window).width()/2)+90)+"px");
	 }else{
	     $(".find_nav_list").css("left",'-'+(Yleft-90)+"px");
	 };
	 
	 var fl_w=$(".find_nav_list").width();
	 var flb_w=$(".find_nav_left").width();
	 $(".find_nav_list").on('touchstart', function (e) {
	     var touch1 = e.originalEvent.targetTouches[0];
	     x1 = touch1.pageX;
	     y1 = touch1.pageY;
	     ty_left = parseInt($(this).css("left"));
	 });
	 $(".find_nav_list").on('touchmove', function (e) {
	     var touch2 = e.originalEvent.targetTouches[0];
	     var x2 = touch2.pageX;
	     var y2 = touch2.pageY;
	     if(ty_left + x2 - x1>=0){
	         $(this).css("left", 0);
	     }else if(ty_left + x2 - x1<=flb_w-fl_w){
	         $(this).css("left", flb_w-fl_w);
	     }else{
	         $(this).css("left", ty_left + x2 - x1+20);
	         // console.log(ty_left + x2 - x1+20)
	     }
	     if(Math.abs(y2-y1)>0){
	         e.preventDefault();
	     }
	 });
	 // 点击切换导航栏 ajax 切换
	     $(".find_nav_list1 ul").on('click','li',function(){
	         var $this = $(this);
	         cityid = $this.find('a').attr('data-city');
	         $('.newslist_list_main ul').html("");     //切换内容之前先清空盒子
	         AjaxFn();                 //调用Ajax方法
	         LoadingDataFn();                 //调用Ajax方法
	      
	     })
 })