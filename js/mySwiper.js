var swiper = new Swiper('.swiper-container1', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    freeMode: true,
    loop:true,
    calculateHeight:true,
    roundLengths:true,
    cssWidthAndHeight:true,
    visiblilityFullfit:true,
    autoplay:3000
});

var swiper = new Swiper('.swiper-container2', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    freeMode: true,
    loop:true,
    calculateHeight:true,
    roundLengths:true,
    cssWidthAndHeight:true,
    visiblilityFullfit:true,
    autoplay:3000
});
// $(".swiper-container2").mouseenter(function () {
//     swiper.stopAutoplay();
// });
// $(".swiper-container2").mouseleave(function(){//离开开启
//     swiper.startAutoplay();
// });