$(function () {
	$('.stribution_conter').click(function(){
		 $('.stribution_conter a').removeClass('ar');
		  $(this).find('a').addClass('ar');
	})
	$('.stribution_conter01').click(function(){
		$('.block').fadeIn();
		$('.none').fadeOut();
	})
	$('.stribution_conter02').click(function(){
		$('.block').fadeOut();
		$('.none').fadeIn();
	})
	// 单选框
	$(".new_customer_rts ul li .pay_list_c1").on("click",function(){
	  $(this).parent('label').siblings().find('span').removeClass('on');
	  $(this).addClass('on');
	})

	// 确认弹框
	$('.new_customer_lf ul .preservation a').click(function(){
	  $('.tankuang').fadeIn();
	  $('.zhezhao').fadeIn();
	})
	$('.zhezhao').click(function(){
	  $('.tankuang').fadeOut();
	  $('.zhezhao').fadeOut();
	})
	$('.consultation_route01 a.gb').click(function(){
	  $('.tankuang').fadeOut();
	  $('.zhezhao').fadeOut();
	})

	// 二级弹框
	
    $('.popup p .determine').click(function(){
      $('.tankuang').fadeOut();
      $('.zhezhao01').fadeOut();
      $('.zhezhao').fadeOut();
      $('.popup').fadeOut();
    })
    $('.popup p .cancel').click(function(){
      $('.tankuang').fadeOut();
      $('.zhezhao').fadeOut();
      $('.zhezhao01').fadeOut();
      $('.popup').fadeOut();
    })
    $('.popup .popup_title .dl_icn01').click(function(){
      $('.tankuang').fadeOut();
      $('.zhezhao').fadeOut();
      $('.zhezhao01').fadeOut();
      $('.popup').fadeOut();
    })
    $('.form_box table tbody tr').click(function(){
        $('.popup').fadeIn();
        $('.zhezhao01').fadeIn();
    })
	// $('.tankuang_bar ul li.tk_content a').click(function(){
	//     $('.popup').fadeIn();
	//     $('.zhezhao01').fadeIn();
	// })
 //    $('.popup p .determine').click(function(){
 //      $('.tankuang').fadeOut();
 //      $('.zhezhao01').fadeOut();
 //      $('.zhezhao').fadeOut();
 //      $('.popup').fadeOut();
 //    })
 //    $('.popup p .cancel').click(function(){
 //      $('.tankuang').fadeOut();
 //      $('.zhezhao').fadeOut();
 //      $('.zhezhao01').fadeOut();
 //      $('.popup').fadeOut();
 //    })
 //    $('.popup .popup_title .dl_icn01').click(function(){
 //      $('.tankuang').fadeOut();
 //      $('.zhezhao').fadeOut();
 //      $('.zhezhao01').fadeOut();
 //      $('.popup').fadeOut();
 //    })
})
