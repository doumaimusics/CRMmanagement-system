$(function () {
    /*洽谈、销售询价记录切换*/
    $('.in-list ul li').on('click',function () {
        var index=$(this).index();
        $('.in-list ul li').removeClass('active');
        $(this).addClass('active');
        $('.matter').hide().eq(index).show();
    });
    /*修改页面中单选按钮*/
    $('.flow-path').on('click',function () {
        $('.flow-path').removeClass('on');
        $(this).addClass('on');
    });
    $('.record').on('click',function () {
        $('.record').removeClass('on');
        $(this).addClass('on');
    });
    $('.flow-paths').on('click',function () {
        $('.flow-paths').removeClass('on');
        $(this).addClass('on');
    });
    $('.records').on('click',function () {
        $('.records').removeClass('on');
        $(this).addClass('on');
    });
})