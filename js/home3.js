// $(".home3_section").mouseenter(function(){
//
//     $(this).css("background","#000");
// });
//测试
//轮播图






//商品列表
$(".sec-two-one").mouseenter(function () {
    $(this).find(".two-one").children("img:last").show().children("img:first").hide(400);
    $(this).find(".two-one").children(".f-hide").stop().animate({top:"65%", opacity:"1"},"fast" );
     $(this).find("a").addClass("two-add");

})
$(".sec-two-one").mouseleave(function () {
    $(this).find(".two-one").children("img:last").hide().children("img:first").show(400);

    $(this).find(".two-one").children(".f-hide").stop().animate({top:"100%", opacity:"0"},"fast" );
     $(this).find("a").removeClass("two-add");
})
$(".home3-sec-two").mouseenter(function () {

    $(".mrd_bl").fadeIn("slow");
    $(".mrd_br").fadeIn("slow");

})
$(".home3-sec-two").mouseleave(function () {

    $(".mrd_bl").fadeOut("slow");
    $(".mrd_br").fadeOut("slow");

})
//商品列表轮播；
$(".hight-c").click(function () {

})

























$(".t-two-two").mouseenter(function () {
    $(this).stop().animate({bottom:"38%"},"fast");
    $(this).find("h4").css({transform: " scale(1.4)"}
        ,300);

})
$(".t-two-two").mouseleave(function () {
    $(this).stop().animate({bottom:"30%"},"fast");
    $(this).find("h4").css({transform: " scale(1)"}
        ,300);
})


$(".t-one-two-one").mouseenter(function () {
    $(this).stop().animate({bottom:"8%"},"300");
    $(this).find("h4").css({transform: " scale(1.4)"}
        ,300);

})
$(".t-one-two-one").mouseleave(function () {
    $(this).stop().animate({bottom:"0%"},"300");
    $(this).find("h4").css({transform: " scale(1)"}
        ,300);
})


