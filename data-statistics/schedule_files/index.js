$(function () {

    $('.nav li').on('click',function () {
        var index = $(this).index();
        var id= $(this).attr('id');
        if(index==0){
            $('.nav').toggleClass('sou');
        }else{
            $('.nav li').removeClass('color')
            $(this).addClass('color');
           $('.box').addClass('boxs');
            $('.box .nav_v').removeClass('block');
            $('.box .nav_v').eq(id).addClass('block');
        }
    })
    $('.nav_v div').on('click',function () {
        $('.nav_v div').removeClass('color');
        if($(this).hasClass('qit')&& !$(this).hasClass('colors')){
            $(this).addClass('colors');
            $('div.sanji').show();
        }else if($(this).hasClass('colors') && $(this).hasClass('colors')){
            $(this).removeClass('colors');
            $('div.sanji').hide();
        }else{
            $(this).addClass('color');
        }
    })
    $('.box .b_button').on('click',function () {
        $('.box').removeClass('boxs');
        $('.n_button').addClass('block');
    })
    $('.nav .n_button').on('click',function () {
        $('.box').addClass('boxs');
        $('.n_button').removeClass('block');
    })
    $('.nav li').hover(function () {
        if($('.nav').hasClass('sou')){
            $(this).find('.hover').show();
        }
    },function () {
        $(this).find('.hover').hide();
    })
    /*消息列表js*/
    /*$('.header ul.h_right .xiaoxi').on('click','li a',function () {
        $('.zhezhao').fadeIn();
        $('.details').fadeIn();
    })*/
    $('.details .de_gb').on('click',function () {
        $('.zhezhao').fadeOut();
        $('.details').fadeOut();
    })
    /*提醒列表js*/
    $('.tx_top div').on('click',function () {
        $('.tixing .tx_top div').addClass('color');
        $(this).removeClass('color');
        $('.tixing .tx_content').removeClass('block');
        $('.tixing .tx_content').eq($(this).index()).addClass('block');
    })
    $('.tx_content.one li a').on('click',function () {
        $('.zhezhao').fadeIn();
        $('.obtain').fadeIn();
    })
    $('.obtain .de_gb').on('click',function () {
        $('.zhezhao').fadeOut();
        $('.obtain').fadeOut();
    })
    $('.tx_content.tow li a').on('click',function () {
        $('.zhezhao').fadeIn();
        $('.obtains').fadeIn();
    })
    $('.obtains .de_gb').on('click',function () {
        $('.zhezhao').fadeOut();
        $('.obtains').fadeOut();
    })
    /*发布时间提醒*/
    function data() {
        var myDate = new Date(),year =myDate.getFullYear(),month=parseInt(myDate.getMonth())+1;
        var ru=myDate.getDate();
        var shi=myDate.getHours();
        var feng=myDate.getMinutes();
        $('.borders i').html( year+"-"+month+"-"+ru+"-"+shi+":"+feng);
        $('.data_box .da').eq(0).find('.number').html(year);
        $('.data_box .da').eq(1).find('.number').html(month);
        $('.data_box .da').eq(2).find('.number').html(ru);
        $('.data_box .da').eq(3).find('.number').html(shi);
        $('.data_box .da').eq(4).find('.number').html(feng);
    }
    data();
    $('.datas .de_content ul li .borders').on('click',function () {
       $(this).addClass('color');
        $('.data_box').show();
    })
    $('.data_box .da .jia').on('click',function () {
        var index = $(this).siblings('.number').text();
            $(this).siblings('.number').html(parseInt(index)+1);
    })
    $('.data_box .da .jian').on('click',function () {
        var index = $(this).siblings('.number').text();
        //     $(this).siblings('.number').html(parseInt(index)-1);
        // console.log(index);
        if(index<=1){
            $(this).siblings('.number').html('1');
        }else{
            $(this).siblings('.number').html(parseInt(index)-1);
        }

    })
    $('.data_box .button').on('click',function (e) {
        e.stopPropagation();
        var years=$('.data_box .da').eq(0).find('.number').text();
        var months=$('.data_box .da').eq(1).find('.number').text();
        var rus=$('.data_box .da').eq(2).find('.number').text();
        var shis=$('.data_box .da').eq(3).find('.number').text();
        var fengs=$('.data_box .da').eq(4).find('.number').text();
        $('.borders i').html( years+"-"+months+"-"+rus+"-"+shis+":"+fengs);
        $('.datas .de_content ul li .borders').removeClass('color');
        $('.data_box').hide();
    })
    $('.data_box .buttons').on('click',function (e) {
        e.stopPropagation();
        $('.datas .de_content ul li .borders').removeClass('color');
        $('.data_box').hide();
        data();
    })
    $('.right .selese').on('click',function () {
        $(this).find('.xiala').toggle();
    })
    $('.right .selese .xiala li').on('click',function () {
        $('.right .selese span').html($(this).text());
        $('.inners ul').hide();
        $('.inners ul').eq($(this).index()).show();
    })
    var arr=[];
    $('.inners ul li .in_button').on('click',function () {
        if($(this).hasClass('color')){
            $(this).removeClass('color');
            var name= $(this).siblings('span').text();
            for(var i=0;i<arr.length;i++){
                if(arr[i]===name){
                    $("div.new").eq(i).remove();
                    arr.splice(i,1);
               }
             }
        }else{
            $(this).addClass('color');
            var name=$(this).siblings('span').text();
            $("<div class='new'>"+name+"</div>").appendTo('.border');
            arr.push(name);
        }
    })
    $('.left li .border').on('click','.new',function () {
        $(this).remove();
        var names=$(this).text();
        for(var i=0;i<arr.length;i++){
            if(arr[i]===names){
                arr.splice(i,1);
                $(".in_inner li div.color").each(function(){
                    if($(this).parent().find("span").text()===names){
                        $(this).removeClass("color");
                    }
                });
            }
        }



    })
    $('.tx_bottom').on('click',function () {
        $('.datas').fadeIn();
        $('.zhezhao').fadeIn();
    })
    $('.datas .de_gb').on('click',function () {
        $('.zhezhao').fadeOut();
        $('.datas').fadeOut();
    })
    /*点击遮罩*/
    $('.zhezhao').on('click',function () {
        $('.zhezhao').fadeOut();
        $('.details').fadeOut();
        $('.obtain').fadeOut();
        $('.obtains').fadeOut();
        $('.zhezhao').fadeOut();
        $('.datas').fadeOut();
    });
    /*切换页面*/
    $('.page .pagin .pageurl a:eq(0),.page .pagin .pageurl a:eq(1),.page .pagin .pageurl a:eq(2),.page .pagin .pageurl a:eq(3),.page .pagin .pageurl a:eq(4),.page .pagin .pageurl a:eq(5),.page .pagin .pageurl a:eq(6)').on('click',function () {
        $('.page .pagin .pageurl a').removeClass('color');
        $(this).addClass('color');
    });
})
function run(){
    $('#error').remove();
}