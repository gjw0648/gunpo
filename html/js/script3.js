$(function(){


    



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

    jQuery(document).ready(function(){
        $(".scroll ul > li").hover(function(){
            $(this).find(".sub").stop().slideDown();
        },function(){
            $(this).find(".sub").stop().slideUp();
        });
    });




   




});