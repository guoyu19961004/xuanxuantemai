var backToTop=document.getElementById("back-to-top");
var logo=document.getElementById("logo");
var sideNav =document.getElementById("side-nav");
var rightFixed =document.getElementById("right-fixed");
var time = null;
var isTop = true;
var clientHeight = document.documentElement.clientHeight;
window.onload=function(){
	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			console.log(osTop + "+" + clientHeight);
		if(osTop >= 200){
			logo.style.display = "block";
			sideNav.style.top=0;
		}
		else{
			logo.style.display="none";
			sideNav.style.top=220+"px";
		}
		if(osTop>0){
			backToTop.style.display = "block";
			rightFixed.style.bottom=0;
		}else{
			backToTop.style.display = "none";
			rightFixed.style.bottom=50+"px";
		}
		if(!isTop){
			clearInterval(time);
		}
		isTop = false;
	}
	backToTop.onclick = function(){
		time = setInterval(function(){
	    	var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/6);
			isTop = true;
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			if(osTop == 0){
				clearInterval(time);
			}
		},30);
	}
}