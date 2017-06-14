
$(function(){
	// 日历
	;!function(){
		laydate({
		   elem: '#demo'
		})
	}();

   // 页码
	$('.page ul li').on('click',function(){
		$('.page ul li a').removeClass('ar');
		$(this).find('a').addClass('ar');
	})



})