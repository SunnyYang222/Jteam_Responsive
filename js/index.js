$(function () {
    //最后一屏
    $(".containerImg>li>a").mouseenter(function () {
        $(this).find("img").css({
            border:"1px solid #cc8042"
        });

    });
    $(".containerImg>li>a").mouseleave(function () {
        $(this).find("img").css({
            border:"1px solid #5f5f5f"
        });
    });


    $(".cont").mouseenter(function () {
        $(".arrow").css("display","block")
    });
    $(".cont").mouseleave(function () {
        $(".arrow").css("display","none")
    });
//点击箭头时
    $(".arrowLeft").click(function () {
        $(".containerImg>li").animate({
            left:"-157px"
        },1000);
    });
    $(".arrowRight>li").click(function () {
        $(".containerImg").animate({
            left:"-157px"
        },1000);
    });

    $(".hanp-vc").mouseenter(function () {
        $(this).css({
            color:"#cc8042",
            borderColor: "#cc8042"
        })
    });
    $(".hanp-vc").mouseleave(function () {
        $(this).css({
            color:"#222",
            borderColor: "#222"
        })
    });

    //滑过加入购物车
    $(".prodct").mouseenter(function () {
        $(this).find(".product-inner").animate({
            top:"22px"
        },"fast");
        $(this).find(".viewproun").toggle();
        $(this).find("h3>a").css("text-decoration","underline");

    });
    $(".prodct").mouseleave(function () {
        $(this).find(".product-inner").animate({
            top:"0px"
        },"fast");
        $(this).find(".viewproun").toggle();
        $(this).find("h3>a").css("text-decoration","none");


    });
    //字体倾斜
    $(".prodct").mouseenter(function () {
        $(this).find(".product-inner").animate({
            top:"22px"
        },"fast");
        $(this).find(".viewproun").toggle();
        $(this).find("h3>a").css("text-decoration","underline");

    });
    $(".prodct").mouseleave(function () {
        $(this).find(".product-inner").animate({
            top:"0px"
        },"fast");
        $(this).find(".viewproun").toggle();
        $(this).find("h3>a").css("text-decoration","none");


    });
    $(".product-inner").mouseenter(function () {
        $(this).find("h3>a").css({
            textDecoration:"underline",
            fontStyle:"italic"
        });
    });
    $(".product-inner").mouseleave(function () {
        $(this).find("h3>a").css({
            textDecoration:"none",
            fontStyle:"normal"
        });


    });


    $(".backbottom li:last-child").mouseenter(function () {
        $(this).find(".iheImg").show();
        $(this).find(".product-inner").animate({
            top:"22px"
        },"fast");
        $(this).find(".viewproun").toggle();
        $(this).find("h3>a").css("text-decoration","underline");

    });
    $(".backbottom li:last-child").mouseleave(function () {
        $(this).find(".iheImg").hide();
        $(this).find(".product-inner").animate({
            top:"0px"
        },"fast");
        $(this).find(".viewproun").toggle();
        $(this).find("h3>a").css("text-decoration","none");
    });
    //滑过backmid
    $(".backmid>li").mouseenter(function () {
        $(this).find(".iheImg").show();
        $(this).find(".product-inner").animate({
            top:"22px"
        },"fast");
        $(this).find(".viewproun").toggle();
        $(this).find("h3>a").css("text-decoration","underline");

    });
    $(".backmid>li").mouseleave(function () {
        $(this).find(".iheImg").hide();
        $(this).find(".product-inner").animate({
            top:"0px"
        },"fast");
        $(this).find(".viewproun").toggle();
        $(this).find("h3>a").css("text-decoration","none");
    });
    //滑过vc_column-inner
    $(".vc_column-inner>li").mouseenter(function () {
        $(this).find(".vc-inn").show();
        $(this).find(".product-inner").animate({
            top:"22px"
        },"fast");
        $(this).find(".viewproun").toggle();
        $(this).find("h3>a").css("text-decoration","underline");

    });
    $(".vc_column-inner>li").mouseleave(function () {
        $(this).find(".vc-inn").hide();
        $(this).find(".product-inner").animate({
            top:"0px"
        },"fast");
        $(this).find(".viewproun").toggle();
        $(this).find("h3>a").css("text-decoration","none");
    });
    //出现箭头
    $(".vc-sm").mouseenter(function () {
        $(".owls").css({
            display:"block"
        });
        $(".owls i").css({
            color:"#fff"
        });
        $(".owl-left").css({
            background:"#cc8042"
        });
        $(".owl-right").css({
            background:"#cc8042"
        });

    });
    $(".vc-sm").mouseleave(function () {
        $(".owls").css({
            display:"none"
        });
        $(".owls i").css({
            color:"rgb(99, 99, 99)"
        });
        $(".owl-left").css({
            background:"#eee"
        });
        $(".owl-right").css({
            background:"#eee"
        });
    });
    
    
    //划过instalmid遮罩层出现
    $(".instalmid>li>.iheImg").width($(".instalmid>li>.midImg>img").width()+"px");
    $(".instalmid>li>.iheImg").height($(".instalmid>li>.midImg>img").height()+"px");

    $(".instalmid>li").mouseenter(function () {
        $(this).find(".iheImg").show();
    });
    $(".instalmid>li").mouseleave(function () {

        $(this).find(".iheImg").hide();
    });

    $(".instalbottom").mouseenter(function () {
        $(this).find(".arrowm").css({
            display:'block'
        });
        $(this).find(".arrowm i").css({
            color:"#cc8042"
        })
    });
    $(".instalbottom").mouseleave(function () {
        $(this).find(".arrowm").css({
            display:'none'
        });
        $(this).find(".arrowm i").css({
            color:"#636363"
        })
    });

    //当点击时
    $(".arrowm-left").click(function () {
        
    });
    $(".arrowm-right").click(function () {

    });

    //第一屏
    $(".triangle-topleft").width($(".wpb img").width()+"px");
    $(".triangle-topleft").height($(".wpb img").height()+"px");

    $(".triangle-top").width( $(".wpb_com-wrapper03 >.wpb img").width()+"px");
    $(".triangle-top").height( $(".wpb_com-wrapper03 >.wpb img").height()+"px");

    //遮罩层出现
    $(".wpb_com-wrapper03>.wpb").mouseleave(function () {
        $(this).find(".triangle-top").fadeOut({
            opacity:0

        },1000);

    });
    $(".wpb_com-wrapper03>.wpb").mouseenter(function () {
        $(this).find(".triangle-top").fadeIn({
            display:"block",
            opacity:0

        },1000);

    });

    $(".wpb").mouseleave(function () {
        $(this).find(".triangle-topleft").fadeOut({
            opacity:0

        },1000);

    });
    $(".wpb").mouseenter(function () {
        $(this).find(".triangle-topleft").fadeIn({
            opacity:0

        },1000);

    });



    //图片放大
    $(".fang").mouseenter(function () {
            $(this).find("a").animate({
                transform:'scale(2,2)',


            },1000)
    });
    //轮播图文字
    //coll-01
    $(".coll-01").mouseenter(function () {
        $(this).css({
            border:'2px solid #cc8042',
            color:"#cc8042"
        });

    });
    $(".coll-01").mouseleave(function () {
        $(this).css({
            border: '2px solid white',
            color:"white"
        })
    });
    //coll-02
    $(".coll-02").mouseenter(function () {
        $(this).css({
            border:'2px solid #cc8042',
            color:"#cc8042"
        });

    });
    $(".coll-02").mouseleave(function () {
        $(this).css({
            border: '2px solid white',
            color:"white"
        })
    });
    //vw-1
    $(".vw-1").mouseenter(function () {
        $(this).css({
            border:'2px solid #cc8042',
            color:"#cc8042"
        });

    });
    $(".vw-1").mouseleave(function () {
        $(this).css({
            border: '2px solid white',
            color:"white"
        })
    });
    //vw-2
    $(".vw-2").mouseenter(function () {
        $(this).css({
            border:'2px solid #cc8042',
            color:"#cc8042"
        });

    });
    $(".vw-2").mouseleave(function () {
        $(this).css({
            border: '2px solid white',
            color:"white"
        })
    });
    //collect
    $(".collect").mouseenter(function () {
        $(this).css({
            border:'2px solid #cc8042',
            color:"#cc8042"
        });

    });
    $(".collect").mouseleave(function () {
        $(this).css({
            border: '2px solid white',
            color:"white"
        })
    });
    //shopk
    $(".shopk").mouseenter(function () {
        $(this).css({
            border:'2px solid #cc8042',
            color:"#cc8042"
        });

    });
    $(".shopk").mouseleave(function () {
        $(this).css({
            border: '2px solid white',
            color:"white"
        })
    });

    //轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical',//是否垂直
        loop: true,//是否可以循环拖动
        autoplay:2000,//是否自动播放
        // 如果需要分页器
        pagination: '.swiper-pagination',

    })










});

/*回到顶部------------------------------------------------------------------*/
function backtop(){
    document.body.scrollTop=0;
}

/*------------------------------------------------------*/
window.onscroll=function(){
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var scrollTop01=document.body.scrollTop||document.documentElement.scrollTop;
    var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
    /*顶部导航栏的消失与重现*/
    if(scrollTop>=100&&scrollTop<=800){
        document.getElementById("header").style.top="-100px";
    }else{
        document.getElementById("header").style.top="0";
    }
    /*回到顶部按钮*/
    if(scrollTop<=100){
        document.getElementById("header_backtop").style.display="none";
    }else{
        document.getElementById("header_backtop").style.display="block";
    }

}

