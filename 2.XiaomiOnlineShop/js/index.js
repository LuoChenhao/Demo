window.addEventListener('load',function() {
	//1.获取元素
	var btn1 = document.querySelector('.idx-video .item .pic');
	var btn2 = document.querySelector('idx-video-box .title');
	var bg = document.querySelector('.idx-video-bg');
	var vedio = document.querySelector('.idx-video-box');
	
	//2.鼠标点击btn就显示或隐藏视频播放背景
	btn1.addEventListener('click',function() {
		bg.style.display = 'block';
		vedio.style.display = 'block';
	})
	btn2.addEventListener('click',function() {
		bg.style.display = 'none';
		vedio.style.display = 'none';
	})
	
})
