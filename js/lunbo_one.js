// 轮播图组
// 
// =============顶部主轮播图
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    autoplay:3000
 });


//==============Shop By Type
 
    var mySwiper1=  new Swiper('.swiper-container1', {
        loop: true,
        slidesPerView : 4,
        nextButton: '.swiper-button-next',
        prevButton:'.swiper-button-prev',
    })    

  var mySwiper5=  new Swiper('.swiper-container5', {
        loop: true,
        slidesPerView : 2,
        nextButton: '.swiper-button-next',
        prevButton:'.swiper-button-prev',
    })    





// ============Our Blogs
	var mySwiper2=  new Swiper('.swiper-container2', {
        loop: true,
        slidesPerView : 3,
        nextButton: '.swiper-button-next',
        prevButton:'.swiper-button-prev',
    })    
//响应式轮播图
    var mySwiper3=  new Swiper('.swiper-container3', {
        loop: true,
        slidesPerView : 2,
        nextButton: '.swiper-button-next',
        prevButton:'.swiper-button-prev',
    })  
