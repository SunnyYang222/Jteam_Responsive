
/*section页面中心内容*/
/*第一板块点击轮播*/

// function setSwiper(){
//     // var sWidth=document.body.scrollWidth;
//     var sWidth=$(window).width();
//     var swiperItem=document.getElementsByClassName("swiperItem");
//     for(var i=0;i<swiperItem.length;i++){
//         swiperItem[i].style.width=(sWidth-30*2)/3+"px";
//     }
//     var swiperItemWidth = $(".swiperItem").width();
//     var clickSwiper_contentWidth=swiperItemWidth*10+(30*10);
//     $(".clickSwiper_content").width(clickSwiper_contentWidth);
//     // $(".clickSwiper_content").css("width",clickSwiper_contentWidth);
//
// }
//
// setSwiper();
// $(window).resize(function () {
//     setSwiper();
// });

// 第二板块 遮罩层宽高自适应设置
function zzc() {
    var zzcHeight = $(".pic_Column img").height();
    var zzcWidth = $(".pic_Column img").width();

    $(".zzc").each(function () {
        $(this).height(zzcHeight);
        $(this).width(zzcWidth);
    });
}
$(window).load(zzc);
$(window).resize(zzc);


// 第三板块 多层商品列表
$(".lists_header_link_item").click(function () {
    $(".lists_header_link_item").each(function () {
       $(this).removeClass("active");
    });
    $(this).addClass("active");

    var index = $(this).index();
    // alert(index);

    // 点击切换对应菜单
    $(".lists_content_item").each(function () {
        $(this).removeClass("active");
    });
    $($(".lists_content_item")[index]).addClass("active");

});
// 第三板块 商品列表遮罩层宽高自适应设置
function addCartzzc() {
    var zzcWidth = $(".lists_content_item_pic>a>img").width();
    var Height = $(".lists_content_item_pic>a>img").height();


    $(".addCartzzc").each(function () {
        $(this).width(zzcWidth-14);
        $(this).css("top",(Height-38)+"px");

    });
}
$(window).load(addCartzzc);
$(window).resize(addCartzzc);



// 动态改变每个li的宽度
function listChange(n){

    var totalWidth=$(".lists_content_item").width();

    $(".lists_content_item>li").each(function () {
        $(this).width((totalWidth-30*(n-1))/n);
    })
}


// 第五板块 遮罩层宽高自适应设置
function zzcBlog() {
    var zzcBlogHeight = $(".section_blog .swiper-slide>img").height();

    $(".blog_zzc").each(function () {
        $(this).height(zzcBlogHeight);
    });
}
$(window).load(zzcBlog);
$(window).resize(zzcBlog);





