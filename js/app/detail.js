/**
 * Created by Administrator on 2017/2/9.
 */
/*头部 加载*/
$(function(){
    //$("header").load("header.html");
})

$(function(){
    /*放大镜*/
    //鼠标进入，中等图片展示/大图片展示
    $(".smallImg").on("mouseenter",function(){
        //小图片变换背景边框
        $(".smallImg").css({
            backgroundPosition:"-200px -331px"
        })
        $(".smallImg").eq($(this).index()).css({
            backgroundPosition:"0 -187px"
        })
        $("#bpic-list>img").fadeOut(400);
        $("#bpic-list>img").eq($(this).index()).fadeIn(400);
        $("#bigView>img").hide();
        $("#bigView>img").eq($(this).index()).show();
    });
    //小视窗随鼠标移动
    $("#bpic-list").on("mouseenter",function(){//鼠标进入
        $(".smallView").show();
        $("#bigView").show();
        //小视窗岁鼠标移动
        $(window).on("mousemove", function (e) {
            var _left = e.pageX - $(".detailbox").offset().left - $(".smallView").outerWidth() / 2;
            var _top = e.pageY - $(".detailbox").offset().top - $(".smallView").outerHeight() / 2;
            if(_left <0){_left = 0;}
            if(_top < 0){_top = 0;}
            if(_left + $(".smallView").outerWidth() >$("#bpic-list").width()){
                _left = $("#bpic-list").width() - $(".smallView").outerWidth();
            }
            if(_top + $(".smallView").outerHeight() >$("#bpic-list").height()){
                _top =  $("#bpic-list").height() - $(".smallView").outerHeight();
            }
            $(".smallView").css({
                left:_left,top:_top
            });
            //给大视窗设置定位
            var _l=-2*_left;
            var _t=-2*_top;
            $("#bigView img").css({
                left:_l,
                top:_t,
            })
        });
    });
    $("#bpic-list").on("mouseleave",function(){//鼠标移出
        $(".smallView").hide();
        $("#bigView").hide();
    })
})
//图片加载gif
$(function(){
   setTimeout(function(){
        $("#imgLoading").css("display","none");
    },1000)
})
/*选项卡*/
$(function(){
    $(".changeC").click(function(){
        //nav 点击时，背景和字体颜色变换
        $(".changeC a").removeClass("changeC_on");
        $(".changeC a").eq($(this).index()).addClass("changeC_on");
        //选项卡
        $(".d-options>div").hide();
        $(".d-options>div").eq($(this).index()).show();
    });
    //吸顶菜单
    $(window).scroll(function(){
        var $top = $(window).scrollTop();
        if($top>742){
            $(".message_nav").css({
                position:"fixed",
                top:0,
                zIndex:"100"
            })
        }else{
            $(".message_nav").css({
                position:"static"
            })
        }
    })
    //图片加载
    var _imgLoad =[
        {gimg:"images/e0.jpg"},
        {gimg:"images/e1.jpg"},
        {gimg:"images/e2.jpg"},
        {gimg:"images/e3.jpg"}
    ];
    var _fashion = [
        {gimg:"images/sx1.jpg"},
        {gimg:"images/sx2.jpg"},
        {gimg:"images/sx3.jpg"},
        {gimg:"images/sx4.jpg"},
        {gimg:"images/sx5.jpg"},
        {gimg:"images/sx6.jpg"},
        {gimg:"images/sx7.jpg"}
    ]
   var _ensure = [
        {gimg:"images/zp1.jpg"},
        {gimg:"images/zp2.jpg"},
        {gimg:"images/zp4.jpg"},
        {gimg:"images/zp5.jpg"},
        {gimg:"images/zp6.jpg"},
        {gimg:"images/zp7.jpg"},
        {gimg:"images/zp8.jpg"},
        {gimg:"images/zp9.jpg"},
        {gimg:"images/zp10.jpg"}
    ]
    var _serve = [
        {gimg:"images/kf1.jpg"},
        {gimg:"images/kf2.jpg"}
    ]
    //封装函数
    function loadPic(_array,conClass){
        function loadImg(){
            $.each(_array,function(index,value){
                var $img = $("<img>").attr("src",value.gimg);
                $(conClass).append($img);
            })
        }
        loadImg(_array);
    }
    loadPic(_imgLoad,".conlist");
    loadPic(_fashion,".fashion");
    loadPic(_ensure,".zp_ensure");
    loadPic(_serve,".serve");

    //选项卡
    //hover 变换背景
    $(".zp").hover(function(){
        $(this).css({
            backgroundPosition:(0-130*($(this).index()))+"px"+" -133px"
        });
    },function(){
        $(".zp").eq($(this).index()).css({
            backgroundPosition:(0-130*($(this).index()))+"px"+" 0px"
        })
    })
    //li.zp  hover 对应的div出现
    $(".zp").on("mouseenter",function(){
        $(".zp_cons>div").hide();
        $(".zp_cons>div").eq($(this).index()).show();
        var _height = $(".zp_cons>div").eq($(this).index()).outerHeight();
        $(".zp_cons").css("height",_height);
        $(".d-options .zx_ensure").css("height",_height);
    });
})
angular.module("myApp",["r_right"]);
/*底部加载*/
$(function(){
    $("footer").load("footer.html");
    /*右侧边栏*/
    $(".changebg").eq(3).on("click",function(){
        $("html,body").stop().animate({scrollTop:0},500);
    })
    //点击span div消失
    $(".closemenu").on("click",function(){
        $("#backtop").css("display","none");
    })
    //hover 变换背景
    $(".changebg").hover(function(){
        $(this).css({
            backgroundPosition:"-68px "+(-1-58*($(this).index()-1))+"px"
        })
    },function(){
        $(this).css({
            backgroundPosition:"0px "+(-1-58*($(this).index()-1))+"px"
        })
    })
})