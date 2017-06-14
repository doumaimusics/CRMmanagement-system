/**
 * Created by 前端-张瑞康 on 2017/4/7.
 */
$(function () {
    $('span.date').on('click',function () {
        $('span.date').removeClass('on');
        $(this).addClass('on');
    });
    $(':button').on('click',function () {
        $(this).addClass('color');
    });
    /*业务1、2切换*/
    $('.client-title li').on('click',function () {
        var index=$(this).index();
        $('.client-title li').removeClass('active');
        $(this).addClass('active');
        $('.client-content').hide();
        $('.client-content').eq(index).show();
    });                
    /*点修改*/
    $('.client-amend').on('click',function () {
        $(this).hide();
        $('.client-done').show();
        $('.reset li input').show();
        for(var i=0; i<$('.reset li').length;i++){
            $('.reset li').eq(i).find('input').val($('.reset li').eq(i).find('input').siblings('span').text());
        };
        $('.reset li span').html('');
    });
    /*点完成*/
    $('.client-done').on('click',function () {
        $(this).hide();
        $('.client-amend').show();
        for(var i=0; i<$('.reset li').length;i++){
            $('.reset li').eq(i).find('span').html($('.reset li').eq(i).find('span').siblings('input').val());
        };
        $('.reset li input').hide();
        $('.hint').fadeIn();
        setTimeout(function () {
            $('.hint').fadeOut();
        },1500);
    });
    /*确定收到款项弹窗*/
    $('.client-affirm').on('click',function () {
        $('.black-box,.zhezhao').fadeIn();
    });
    $('.black-box .close,.black-box .cancel,.zhezhao').on('click',function () {
        $('.black-box,.zhezhao').fadeOut();
    });
})
