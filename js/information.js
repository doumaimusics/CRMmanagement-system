/**
 * Created by 前端-张瑞康 on 2017/3/28.
 */
$(function () {
    $('.content .inner .matter .middle  tbody tr').on('click',function () {
        $('.zhezhao,.tishi').fadeIn();
    });
    $('.zhezhao').on('click',function () {
        $('.tishi').fadeOut();
    });
   /* $('.client').on('click',function () {
        $('.client').removeClass('on');
        $(this).addClass('on');
    });*/
    $('.tishi .ts-center li').on('click',function () {
        var index=$(this).index();
        $('.tishi .ts-center li,.tishi .ts-top ul,.tishi .ts-bottom').removeClass('active');
        $(this).addClass('active');
        $('.tishi .ts-top ul').eq(index).addClass('active');
        $('.tishi .ts-bottom').eq(index).addClass('active');
    });

    $('.tishi .ts-top ul li .add').on('click',function () {
        var index=$('.messages').length+1;
        var time=getNowFormatDate();
        console.log(time);
        $('.tishi .ts-bottom').eq(1).prepend(' <div class="messages"> <div class="me-title">第<span>'+index+'</span>次跟进记录</div> <div class="me-inner1"><textarea name="" id="" cols="30" rows="10"></textarea></div> <div class="me-time">记录时间: <span>'+time+'</span></div> <div class="me-top">上级领导意见</div> <div class="me-inner2"><textarea name="" id="" cols="30" rows="10"></textarea></div> </div>');
    });
    $('.tishi .ts-top .alter').on('click',function () {
       $(this).hide();
       $('.tishi .ts-top .achieve').show();
        $('.tishi .ts-bottom .gjzt span').html('');
        $('.tishi .ts-bottom .area span').html('');
        $('.tishi .ts-bottom .gjzt select,.tishi .ts-bottom .area select').show();
        $('.tishi .ts-bottom .degree .yinying').hide();
    });
    $('.tishi .ts-top .achieve').on('click',function () {
        $(this).hide();
        $('.tishi .ts-top .alter').show();
        $('.tishi .ts-bottom .gjzt select,.tishi .ts-bottom .area select').hide();
        $('.tishi .ts-bottom .gjzt span').html($('.tishi .ts-bottom .gjzt select option:selected').text());
        $('.tishi .ts-bottom .area span').html($('.tishi .ts-bottom .area select:eq(0) option:selected').text()+"-"+$('.tishi .ts-bottom .area select:eq(1) option:selected').text()+"-"+$('.tishi .ts-bottom .area select:eq(2) option:selected').text());
        $('.tishi .ts-bottom .degree .yinying').show();
        $('.tishi .ts-bottom .days .xzts').hide();
    });
    $('.tishi .ts-bottom .days').on('click',function () {
        if($(".alter").is(":hidden")){
            $('.tishi .ts-bottom .days .xzts').show();
        }else{
            $('.tishi .ts-bottom .days .xzts').hide();
        }
    });
    $('.tishi .ts-bottom .days .xzts .xzts-bottom a').on('click',function (event) {
        event.stopPropagation();
        $('.tishi .ts-bottom .days .xzts').hide();
    });
    $('.tishi .ts-bottom .degree span').on('click',function () {
        var index=$(this).index();
        var name;
        if(index===0){
            name="one";
        }else if(index===1){
            name="two";
        }else if(index===2){
            name="three";
        }else if(index===3){
            name="four";
        }else if(index===4){
            name="five";
        };
        /*console.log(name);*/
        $('.tishi .ts-bottom .degree').removeClass('one two three four five').addClass(name);

    });


    /*时间函数*/
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        };
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        };
        if (hours >= 0 && hours <= 9) {
            hours = "0" + hours;
        };
        if (minutes >= 0 && minutes <= 9) {
            minutes = "0" + minutes;
        };
        if (seconds >= 0 && seconds <= 9) {
            seconds = "0" + seconds;
        };
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + hours + seperator2 + minutes
            + seperator2 + seconds;
        return currentdate;
    };
    /*顶部信息圆形进度展示条*/
    var cicle = function() {
        var oTx = $(".tx");
        var cicleTransform = function(aa, num, old_num) {
            var b_l_a = aa.find(".bar-left-an");
            var b_r_a = aa.find(".bar-right-an");
            var c_num = num;
            if(c_num > 50) {
                b_r_a.css({
                    "transform": "rotate(45deg)",
                    "transition": "transform 1s linear"
                });
                setTimeout(function() {
                    b_l_a.css({
                        "transform": "rotate(" + (((c_num-50)/100*360)-135) + "deg)",
                        "transition": "transform 1s linear"
                    });
                },1000);
            } else {
                if(old_num > 50) {
                    setTimeout(function() {
                        b_r_a.css({
                            "transform": "rotate(" + ((c_num/100*360)-135) + "deg)",
                            "transition": "transform 1s linear"
                        });
                    },1000);
                    b_l_a.css({
                        "transform": "rotate(-135deg)",
                        "transition": "transform 1s linear"
                    });
                } else {
                    b_r_a.css({
                        "transform": "rotate(" + ((c_num/100*360)-135) + "deg)",
                        "transition": "transform 1s linear"
                    });
                }
            }
        }
        var setnum = function(num) {
            oTx.text(num + "%");
        }
        var getnum = function() {
            return parseInt(oTx.text());
        }
        return {
            init: function(aa,num) {
                cicleTransform(aa,num, getnum());
                setnum(num);
            }
        }
    }();

    /*调用及配置*/
    cicle.init($('.cicle-one'),70);
    cicle.init($('.cicle-two'),20);
    cicle.init($('.cicle-three'),90);
    cicle.init($('.cicle-four'),30);
    
    /*编辑业绩目标*/
    $('.set-goal').on('click',function () {
        $('.zhezhao,.setGoal-box').fadeIn();
    });
    $(' .setGoal-box .t-top span,.setGoal-box .t-bottom li,.zhezhao').on('click',function () {
        $('.zhezhao,.setGoal-box').fadeOut();
    });

    /*滚动监听顶部动画*/
   /* $('.inner').scroll(function() {
        var top = $('.inner').scrollTop();
        if(top>=1){
          $('.chart').slideUp(1500);
        }else{
            $('.chart').slideDown(2000);
        }
    });*/
})
