/**
 * Created by Administrator on 2017/2/7.
 */
/*--吸顶菜单&楼层效果--*/
$(function(){
    $(window).scroll(function(){
        var $top = $(window).scrollTop();
        /*if($top>600){
         $("#menu").fadeIn(500);
         $("#right_nav").fadeIn(500);
         }else{
         $("#menu").fadeOut(500);
         $("#right_nav").fadeOut(500);
         }
        $("#right_nav").on("click",function(){
            $("html,body").stop().animate({scrollTop:0},500);
        });*/
        if($top>136){
            $(".top-downbg").css({
                background:"rgba(3,3,3,0.8)",
                position:"fixed",
                top:0,
                zIndex:99
            });
            $(".nav").css({
                background:"rgba(247,247,247,0.95)",
                position:"fixed",
                top:"45px",
                zIndex:99
            });
        }else{
            $(".top-downbg").css({
                opacity:1,
                position:"static",
            });
            $(".nav").css({
                opacity:1,
                position:"static"
            })
        }
    })
})