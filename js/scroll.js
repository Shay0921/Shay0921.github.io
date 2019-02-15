//顶部菜单
var scrollLock = true;
var sizeLock = false;
$(function(){
	var $navW = $(".nav-white");
	$(window).scroll(function(){
		//判断滚动
	    var $scrollTop=$(window).scrollTop();
	    var docScrollTop=document.documentElement.scrollTop;
		var scrollTop;
		if($scrollTop){
			scrollTop=$scrollTop;
		}else{
			scrollTop=docScrollTop;
		}
		if(scrollTop>=60){
			sizeLock = true;
			$navW.css('margin-top',0);

		}else if(scrollTop < 60 && (window.innerWidth > 768 || scrollLock == false)){
			sizeLock = false;
			$navW.css('margin-top','-120px');
		}
	    //动态加载过渡效果
	    var $doText = $(".do .text");
		var $doDiv = $(".do .content-item");
	    if(scrollTop>=190){
			$doText.addClass('item-down');
	    }
	    if(scrollTop>=310){
			$doDiv.addClass('item-down');
	    }
	});
	window.onresize = function(){
		var $nav = $(".my-nav img");
		var scrollWidth = window.innerWidth;
		if(scrollWidth<=768){
			scrollLock = true;
			$navW.css('margin-top',0);
		}else if(scrollWidth > 768 && ($nav.offset().top < 60 || sizeLock == false)){
			scrollLock = false;
			$navW.css('margin-top','-120px');
		}
	}
});
