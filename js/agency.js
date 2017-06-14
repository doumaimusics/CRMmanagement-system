$(function () {
    $('table a.delete').on('click',function () {
       /* var index=$(this).parents('tr').index();*/
        $('.hint,.zhezhao').fadeIn();
    });
    $('.zhezhao,.hint .t-top span,.hint .cancel').on('click',function () {
        $('.hint,.zhezhao').fadeOut();
    });
})