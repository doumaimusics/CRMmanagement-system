/**
 * Created by 前端-张瑞康 on 2017/3/24.
 */

$(function () {
    $('.operation').on('click',function () {
        $('.zhezhao,.tishi').fadeIn();
    });
    $(' .tishi .t-top span,.tishi .t-bottom li,.zhezhao').on('click',function () {
        $('.zhezhao,.tishi').fadeOut();
    });
   /* $('.tr li select').on('click',function () {
        if($(this).parent().hasClass('finsh')){
            $(this).attr('disabled','disabled');
        }
    })*/
})