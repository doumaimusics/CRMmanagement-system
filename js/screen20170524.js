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
    });
	$(document).on("click",".xiala li a",function(){
	  $('.editor_box > nav > div').removeClass('ar');
      $("."+$(this).attr("data-c")).addClass("ar");
	  $(this).addClass("color_m");
	  $("#cc_type_id").val(parseInt($(this).attr("data-t")));
	  $("#cc_type_cm").val($(this).attr("data-c"));
	  if($(".editor_box").attr("data-r")=='index' && $(".editor_box").attr("data-ur")!='')
	  {		  
		return $("#seach-form").submit();   
	  }	  
    });

	$(document).on("click",".allowall",function(){
	  $('.editor_box > nav > div').removeClass('ar');
      $(this).addClass("ar");	  
	  $("#cc_type_id").val(0);
	  if($(".editor_box").attr("data-r")=='index' && $(".editor_box").attr("data-ur")!='')
	  {		
		return $("#seach-form").submit();   	
	  }	  
    });

    $('.bu-nav li').on('click',function () {
        if($(this).index() < 3){
            $('.bu-nav li').removeClass('color');
            $(this).addClass('color');
        }else{
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }else{
                $(this).addClass('active').siblings().removeClass('active');
            }
        }
    });
	/*搜索列表中属性被选中点击后选中*/
	if($("#seach_list").attr("data-cm") && $("#seach_list").attr("data-cm")!=''){
		$('.editor_box > nav > div').removeClass('ar');
		$('.editor_box > nav > div.'+$("#seach_list").attr("data-cm")).addClass('ar');
	}else{
		$('.editor_box > nav > div').removeClass('ar');
		$('.editor_box > nav > div.allowall').addClass('ar');
	}
});