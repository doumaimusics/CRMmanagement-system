
$(function(){
	//x,y 坐标,radius 半径,process 百分比,backColor 中心颜色, proColor 进度颜色, fontColor 中心文字颜色
	function DrowProcess(x,y,radius,process,backColor,proColor,fontColor,text1,text2){
		var canvas = document.getElementById('myCanvas');

		if (canvas.getContext) {
			var cts = canvas.getContext('2d');
		}else{
			return;
		}
		
		cts.beginPath();  
		// 坐标移动到圆心  
		cts.moveTo(x, y);  
		// 画圆,圆心是24,24,半径24,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针  
		cts.arc(x, y, radius, 0, Math.PI * 2, false);  
		cts.closePath();  
		// 填充颜色  
		cts.fillStyle = backColor;  
		cts.fill();

		cts.beginPath();  
		// 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形  
		cts.moveTo(x, y);  
		// 跟上面的圆唯一的区别在这里,不画满圆,画个扇形  
		cts.arc(x, y, radius, Math.PI * 1.5, Math.PI * 1.5 -  Math.PI * 2 * process / 100, true);  
		cts.closePath();  
		cts.fillStyle = proColor;  
		cts.fill(); 
		
		//填充背景白色
		cts.beginPath();  
		cts.moveTo(x, y); 
		cts.arc(x, y, radius - (radius * 0.1), 0, Math.PI * 2, true);  
		cts.closePath();
		cts.fillStyle = 'rgba(255,255,255,1)';  
		cts.fill(); 

		// 画一条线  
		cts.beginPath();  
		cts.arc(x, y, radius-(radius*0.30), 0, Math.PI * 2, true);  
		cts.closePath();  
		// 与画实心圆的区别,fill是填充,stroke是画线  
		cts.strokeStyle = backColor;  
		// cts.stroke();  
		  
		//在中间写字 
		cts.font = "normal 36pt 微软雅黑";  
		cts.fillStyle = fontColor;  
		cts.textAlign = 'center';  
		cts.textBaseline = 'middle';  
		cts.moveTo(x, y);  
		cts.fillText(text1, x, y-16);
		cts.font = "normal 10pt 微软雅黑";
		cts.fillText(text2, x, y+16);  
		
	}
	bfb = 0;
	time=0;
	function Start(){
		DrowProcess(320,130,80,bfb,'#ddd','#4c89c8','#6c747c','1210','本月询价');
		DrowProcess(634,130,80,bfb,'#ddd','#e76354','#6c747c','999','待反馈');
		DrowProcess(948,130,80,bfb,'#ddd','#4cc8af','#6c747c','8800','交易完成');

		// DrowProcess(1111,130,50,bfb,'#ddd','#4cc8af','#6c747c','8800','交易完成');
		
		t = setTimeout(Start,5);
		if(bfb>=80){
			clearTimeout(t);
			bfb=0;
			return;
		}
		bfb+=1;
	}
	//x,y 坐标,radius 半径,process 百分比,backColor 中心颜色, proColor 进度颜色, fontColor 中心文字颜色

	function Create(){
		
		DrowProcess(160,160,126,80,'#ddd','#32CD32','#32CD32');
	}

	Start();
	// Create();


	// 持有人弹框
	$('.feedback_content_bar tbody tr td a.cyr_icn').click(function(){
		$('.cyr_tankuang').fadeIn();
	 	$('.zhezhao').fadeIn();
	})
	// $('.cyr_tankuang ul li a.gb').click(function(){
	// 	$('.zhezhao').fadeOut();
	// 	$('.cyr_tankuang').fadeOut();
	// })
	$('.zhezhao').click(function(){
		$('.zhezhao').fadeOut();
		$('.cyr_tankuang').fadeOut();
	})

})