$(function () {
    /*洽谈、销售询价记录切换*/
    $('.in-list ul li').on('click',function () {
        var index=$(this).index();
        $('.in-list ul li').removeClass('active');
        $(this).addClass('active');
        $('.matter').hide().eq(index).show();
    });
    /*点击销售询价记录修改*/
    $('.matter-two .amend').on('click',function () {
        $('.zhezhao,.amend-box').fadeIn();
    });
    $('.zhezhao,.amend-box .save a,.amend-box .save input').on('click',function () {
        $('.zhezhao,.amend-box').fadeOut();
    })
    /*修改页面中单选按钮*/
    $('.flow-path').on('click',function () {
        $('.flow-path').removeClass('on');
        $(this).addClass('on');
    });
    $('.record').on('click',function () {
        $('.record').removeClass('on');
        $(this).addClass('on');
    });
    /*洽谈变更申请*/
    $('.set-follow').on('click',function () {
        $('.set-followBox').show();
    });
    $('.set-followBox .submit').on('click',function (event) {
        event.stopPropagation();
        $('.set-followBox').hide();
    });
    /*洽谈工作排班表*/
    var myDate = new Date();
    var year = myDate.getFullYear()
    var Month = myDate.getMonth()+1;
    /*当月数据*/
    var date1 = new Date(year+'-'+Month+'-1');
    var index=date1.getDay();
    var day=myDate.getDate();
//            console.log(day);
    var arr=[
        '一', '二','三','四','五','六','日'
    ];
    var str=[];
    str.push(arr.splice(index-1)+','+arr.splice(0));
    var cc = str[0].split(',');
    $('.List_box.danyue .week li').each(function (i) {
        $('.List_box.danyue .week li').eq(i).html('星期'+cc[i]);
    });
    /*for(var i=0;i<$('.List_box.danyue .week li').length;i++){
        $('.List_box.danyue .week li')[i].innerHTML='星期'+cc[i];
    };*/
    if(Month == 2){
        days= year % 4 == 0 ? 29 : 28;
    }
    else if(Month == 1 || Month == 3 || Month == 5 || Month == 7 || Month == 8 || Month == 10 || Month == 12){
        days= 31;
    }
    else{
        days= 30;
    }
    for(var i=0;i<days;i++){
        $('<li><p>'+(i+1)+'</p><input type="text" value="" placeholder="请输入值班人员"><div class="no"></div></li>').appendTo('.List_box.danyue ul.List_calendar');
        if(day-1>i){
            $('.List_box.danyue ul.List_calendar li').addClass('List_color');
        }
    }
    /*次月数据*/
    var datels = new Date(year+'-'+(Month+1)+'-1');
    var indexs = datels.getDay();
    var arrs=[
        '一', '二','三','四','五','六','日'
    ];
    var strs=[];
    strs.push(arrs.splice(indexs-1)+','+arrs.splice(0));
    var ccs = strs[0].split(',');
    console.log(indexs);
    $('.List_box.ciyue .week li').each(function (i) {
        $('.List_box.ciyue .week li').eq(i).html('星期'+ccs[i]);
    })
    if(Month+1 == 2){
        dayss= year % 4 == 0 ? 29 : 28;
    }
    else if(Month+1 == 1 || Month+1 == 3 || Month+1 == 5 || Month+1 == 7 || Month+1 == 8 || Month+1 == 10 || Month+1 == 12){
        dayss= 31;
    }
    else{
        dayss= 30;
    }
    for(var i=0;i<dayss;i++){
        $('<li><p>'+(i+1)+'</p><input type="text" value="" placeholder="请输入值班人员"><div class="no"></div></li>').appendTo('.List_box.ciyue ul.List_calendar');
    }

    $('.List .List_nav li').on('click',function () {
        $('.List .List_nav li').removeClass('List_color');
        $(this).addClass('List_color');
        $('.List_box').hide();
        $('.List_box').eq($(this).index()).show();
    });
    
    
    /*洽谈值班表修改—保存切换*/
    $('.List .List_button a').eq(0).show();
    $('.List .List_button a').eq(0).on('click',function () {
        $(this).hide();
        $('.List .List_button a').eq(1).show();
        $('.List').addClass('active');
    });
    $('.List .List_button a').eq(1).on('click',function () {
        $(this).hide();
        $('.List .List_button a').eq(0).show();
        $('.List').removeClass('active');
    });
    /*点击洽谈值班表*/
    $('.duty-roster ').on('click',function () {
        $('.zhezhao,.List').fadeIn();
    });
    $('.zhezhao,.List .List_button .close').on('click',function () {
        $('.zhezhao,.List').fadeOut();
    });
    



})