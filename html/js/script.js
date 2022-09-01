$(function(){


    //배너와 버튼

    var visual = $('.banner>li');
    var button = $('#button>li');
    var current = 0; 
    var setIntervalId; 
    timer();

    function timer(){
        setIntervalId = setInterval(function(){
            var prev = visual.eq(current);
            var pn = button.eq(current);

            move(prev, 0, '-100%');
            pn.removeClass('on');

            current++;

            if(current == visual.size()){current=0}

            var next = visual.eq(current);
            var pnn = button.eq(current);

            move(next, '100%', 0);
            pnn.addClass('on');
        }, 2500);
    };

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},500);
    }


    button.on({click: function(){

        var tg = $(this);
        var i = tg.index();
        
        button.removeClass('on');  
        tg.addClass('on'); 

        move1(i);

        }

    });

    function move1(i){
        if(current == i) return

        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);

        currentEl.css({left:0}).stop().animate({left:'-100%'},500);
        nextEl.css({left:'100%'}).stop().animate({left:0},500);

        current = i;

    }

   
    $('.banner, #button').on({
        mouseover:function(){
            clearInterval(setIntervalId);
        }, mouseout: function(){
            timer();
        }
    });



    //상단 헤더 작동하는 부분

    jQuery(document).ready(function(){
        $(".nav>ul>li").hover(function(){
            $(this).find(".sub").stop().slideDown();
        },function(){
            $(this).find(".sub").stop().slideUp();
        });
    });

    jQuery(document).ready(function(){
        $(".nav>ul>li>ul>li").hover(function(){
            $(this).find(".sub2").stop().slideDown();
        },function(){
            $(this).find(".sub2").stop().slideUp();
        });
    });




    //날씨


    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=ff23761d0b2c8f1ae78f4c1afd920239&units=Metric', function(data){

    var $minTemp = data.main.temp_min;
    var $maxTemp = data.main.temp_max;
    var $cTemp = data.main.temp;

    var now = new Date(Date.now());
    var b = now.getDay()
    switch(b){
        case 1 : c="월"
        break

        case 2 : c="화"
        break

        case 3 : c="수"
        break

        case 4 : c="목"
        break

        case 5 : c="금"
        break

        case 6 : c="토"
        break

    }

    var month = now.getMonth()+1;
    var $cDate = now.getFullYear() +'년' + month + '월' + now.getDatte() + '일' + c + '요일' + now.getHours() + '시' + now.getMinutes() + '분';

    $('.ctemp').append($cTemp);
    $('.clowtemp').append($minTemp);
    $('.chightemp').append($maxTemp);

    $('h5').prepend($cDate);

})



   jQuery(document).ready(function(){
        $(".slicemenu>ul>li").click(function(){
            $(this).find(".sliceul").stop().slideUp();
        },function(){
            $(this).find(".sliceul").stop().slideDown();
        });
    });

   /*  $(window).scroll(function(){
        if($(this).scrollTop()<=500){
            $('.slicemenu .sliceul').stop().animate({bottom:'-100%', opacity:0},1200,'swing');
        }
    }) */



    mainSlide1();

    function mainSlide1(){
        setIterval01 = setInterval(function(){
            slide1.stop().animate({left:-slideListWidth1},500,function(){
                $('ul.cnt_banner>li:first').insertAfter('ul.cnt_banner>li:last');
                //슬라이드에 다음이미지 삽입하기 insertAfter
                //지정한 요소 시작부분에 내용을 삽입 Before
                slide1.css('left',0);
            })
        },2000);
    }

    //슬라이드영역, 이전 다음 버튼

    $('.cnt_banner .next1_1 .prev1_1').hover(function(){
        clearInterval(setIterval01);
    }, function(){
        mainSlide1();
    });

    //오른쪽에서 왼쪽으로 이동
    function next1_1(){
        slide1.stop().animate({left:-slideListWidth1},500,function(){
            $('ul.cnt_banner>li:first').insertAfter('ul.cnt_banner>li:last');
            slide1.css('left',0);
        });
    }

    //왼쪽에서 오른쪽으로 이동
    function prev1_1(){
        $('ul.cnt_banner>li:last').insertBefore('ul.cnt_banner>li:first');
        slide1.css('left',-slideListWidth1);
        slide1.animate({left:0},500);
    }

    $('.prev1_1').click(function(){
        prev1_1();
    });

    $('.next1_1').click(function(){
        next1_1();
    });




});