$(function () {
    $('.botton_bar a').click(function () {
        $('.details_list ul li.dis_none').toggle();
        $('.details_list ul li.readonly_text input').removeAttr("readonly");//去除input元素的readonly属性
        $('.details_list ul li.readonly_text input').attr("type","text");//添加input元素的tepy/text属性
        $('.details_list ul li.readonly_text textarea').removeAttr("readonly");//去除input元素的readonly属性
        $('.details_list ul li.readonly_text textarea').attr("type","text");//添加input元素的tepy/text属性
    })
})