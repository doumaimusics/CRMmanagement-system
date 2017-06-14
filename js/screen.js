/**
 * Created by 商标 on 2017/5/20.
 */
$(function () {
	$('.editor_box > nav > div').click(function () {
		// $('.ar').removeClass();
		// $(this).addClass('ar');
		// $('.xiala').hide();
		// $(this).find('.xiala').show();
		// $(this).find('.xiala').toggle()

		if($(this).index()<1){
			$('.editor_box > nav > div').removeClass('ar');
			$(this).addClass('ar');
		}else {
			if ($(this).hasClass('ar')){
				$(this).removeClass('ar');
			}else{
				$(this).addClass('ar').siblings().removeClass('ar');
			}
		}
	})

	// $('.bu-nav li').on('click',function () {
	// 	if($(this).index() < 3){
	// 		$('.bu-nav li').removeClass('color');
	// 		$(this).addClass('color');
	// 	}else{
	// 		if($(this).hasClass('active')){
	// 			$(this).removeClass('active');
	// 		}else{
	// 			$(this).addClass('active').siblings().removeClass('active');
	// 		}
	// 	}
	// })
		// 下拉筛选
		$('ul.navs li').on('click',function () {
			$('.bu-nav li.select').removeClass('active');
			// if($(this).index() < 1){
			// 	$('ul.navs li').removeClass('color');
			// 	$(this).addClass('color');
			// }else{
				if($(this).hasClass('active')){
					$(this).removeClass('active');
				}else{
					$('li.sele').removeClass('active');
					$(this).addClass('active').siblings().removeClass('active');
					$('.op-nav').removeClass('active');
				}
			// }
		})
		$('ul.navs li ul.op-nav li').on('click',function (e) {
			e.stopPropagation();
			$('ul.navs li.sele').each(function(index,item){
				$('ul.navs li.sele').eq(index).find('span').text($('ul.navs li.sele').eq(index).attr('title'));
			});
			$('.op-nav').removeClass('active');
			$(this).parents('li.sele').find('span').text($(this).text());
			$(this).parent('.op-nav').addClass('active');
			$(this).parents('li.sele').removeClass('active');
			$('ul.navs li').removeClass('color');
			$(this).parents('li.sele').addClass('color');
		})


		$('.bu-nav li').on('click',function () {
			$('.navs li.sele').removeClass('active');
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('ul.op-nav').removeClass('active');
			}else{
				$('ul.op-nav').removeClass('active');
				$(this).addClass('active').siblings().removeClass('active');
			}
		})
		$('.bu-nav li .op-nav li').on('click',function (e) {
			e.stopPropagation();
			$('.bu-nav li.select').each(function(index,item){
				$('.bu-nav li.select').eq(index).find('span').text($('.bu-nav li.select').eq(index).attr('title'));
			});
			$('ul.op-nav').removeClass('active');
			$(this).parents('li.select').find('span').text($(this).text());
			$(this).parent('ul.op-nav').addClass('active');
			$('.bu-nav li').removeClass('color');
			$(this).parents('li.select').removeClass('active');
			$(this).parents('li.select').addClass('color');
		})

})
