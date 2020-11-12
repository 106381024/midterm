$(document).ready(function(){


	$('.ul li:hover a').mouseover(
		function () {
			var index = $( ".ul li:hover a" ).index(this);
			$('.ul li a').css({"color":"red"});
		}
	);
	$('.ul li:hover a').mouseout(
		function () {
			var index = $( ".ul li:hover a " ).index(this);
			$('.ul li a').css({"color":"black"});
		}
	);


	$(".a1").click(function(){

		window.location.href = "期中.html";
		
		return true;
		
		})


	$(".a2").click(function(){

		window.location.href = "index.html";
			
		return true;
			
		})

	
	$(".a3").click(function(){

		window.location.href = "index-3.html";
				
		return true;
				
			})



	$(function () {
	var p=document.getElementsByClassName('img-g')[0];
		var button=document.querySelectorAll('.button-g span')
		// 设置3秒播放
		window.timer=setInterval(move,3000);
		// 轮播设置
		function move(){
		    // bannerimage的宽度乘以图片的个数
			if(parseInt(p.style.left)>-3-innerWidth){
			    // 和bannerimage的宽度保持一致即可：700
				p.style.left=parseInt(p.style.left)-innerWidth+'px'
				p.style.transition='left 1s';
				tog(-Math.round(parseInt(p.style.left)/innerWidth))
				if(parseInt(p.style.left)<=-3-innerWidth){
					setTimeout(function(){
						tog(0)
						p.style.left='0px'
						p.style.transition='left 0s';
					},1000)
				}
			}else{
				p.style.left='0px'
				p.style.transition='left 0s';
			}
		}



 
		// 设置小圆点
		for(var i=0;i<button.length;i++){
			// button[i].style.backgroundColor='#eee';
			button[i].onclick=function(){
				p.style.left=-innerWidth*this.getAttribute('data-index')+'px'
				tog(this.getAttribute('data-index'))
				clearInterval(window.timer)
				window.timer=setInterval(move,3000);
			}
		}

		// 设置小圆点
		function tog(index){
			if(index>5){
				tog(0);
				return;
			}
			for(var i=0;i<button.length;i++){
				button[i].style.backgroundColor='rgba(255, 255, 255, 0.5)';
			}
			button[index].style.backgroundColor='rgb(255, 255, 255)';
		}
 
		// 鼠标移上事件
		p.onmouseover=function(){
			clearInterval(window.timer)
		}
        // 鼠标移除事件
		p.onmouseout=function(){
			window.timer=setInterval(move,3000);
	}

	});


	var banners = ["img/1567251503635.jpg","img/1567251503635-2.jpg","img/1567251503635-3.jpg"]; // 图片地址
			var counter = 0;
			function run(){
				setInterval(cycle,1000);  //重复运行cycle函数，周期1000ms
			}
			function cycle(){
				counter++;
				if(counter == banners.length)	
					counter = 0;
				document.getElementById("banner").src = banners[counter];
			}
	


});
