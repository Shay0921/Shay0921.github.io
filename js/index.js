$(function(){
	window.onload = function(){
		var hItem = $(".header .item");
		hItem.addClass('item-active');
	};
});


//解决方案nav切换
var $a = $(".fangan-nav ul li a");
$a.click(function(e){
    e.preventDefault();
});
$(".fangan-nav").on("mouseenter","a",function(){
    $a.removeClass("active");
    $(this).addClass("active");
    var id = $(this).attr("href");
    console.log(id);
    $(id).addClass("current").siblings(":not(ul)").removeClass("current");
});

//面板案例切换彩色
var $img = $(".panel-cases li img");
var imgSrc;
$(".panel-cases").on("mouseenter","img",function(){
	imgSrc = $(this).attr("src");
	var i=imgSrc.indexOf("-d",0);
	if(i>0){
		var front = imgSrc.slice(0,i);
		var back = imgSrc.slice(i+2);
		var str = front+back;
		$(this).attr("src",str);
	}
});
$(".panel-cases").on("mouseleave","img",function(){
	$(this).attr("src",imgSrc);
});