
/* 클릭시 제거 */
$('.top_sub').children().eq(1).children().click(function(){
    $(this).parent().css({visibility:'hidden'})
})
$('.top_sub').children().eq(-1).children().click(function(){
    $(this).parent().parent().parent().css({display:'none'})
})
/* 2DEPTH 구현 */
$('.gnb_all').mouseleave(function(){
    $('.menu_dept').stop().slideUp();
})
$('.gnb li a').mouseenter(function(){
    $('.menu_dept').stop().slideDown();
})
/* 링크방지 */
$('.real_time ul li a').click(function(e){
    e.preventDefault();
})
/* 현재 브라우저의 높이값을 받아 caxa 구현 */
$(window).scroll(function(){
    var currentHeight = $(this).scrollTop();
    console.log(currentHeight);
    if(currentHeight>1950){
        $('.caxa').css({opacity:'1'})
        setTimeout(function(){
            moveSNS();
        },500)
    }  
    if(currentHeight>600){
        
    }
})
let checkSNS = 0;
/* casa 구현 */
function moveSNS(){
    $('.caxa_sns ul').eq(0).css({transform:'translateY(-300px)',opacity:'1'});
    setTimeout(function(){
        $('.caxa_sns ul').eq(1).css({transform:'translateY(300px)',opacity:'1'});
        setTimeout(function(){
            $('.caxa_sns ul').eq(2).css({transform:'translateY(-300px)',opacity:'1'})
            setTimeout(function(){
                $('.caxa_sns').siblings('p').css({opacity:'1'})
            },800)
        },500)
    },500)
}    
/* 수동 슬라이드 구현 */
var imageIndex = 1;
var slider = $('.slider').length;
function plusSlides(num){
    imageIndex += num;
    imageSlides(imageIndex);
    $('.slider_btn a').click(function(e){
        e.preventDefault();
    })
}
/* 수동 슬라이드 구현 */
function imageSlides(num){
    if(num<1){
        imageIndex = slider;
    }
    if(num>slider){
        imageIndex = 1;
    }
    var slideValue = -(imageIndex-1)*1170+'px';
    $('.slider').stop().css('transform','translateX('+slideValue+')');
    resetAutoSlide();
}
/* 자동 슬라이드 구현 */
var AutoSlide;
function startAutoSlide() {
    AutoSlide = setInterval(function() {
        imageIndex++;
        imageSlides(imageIndex);
    }, 5000); 
}
function resetAutoSlide() {
    clearInterval(AutoSlide);
    startAutoSlide();
}
/* 비디오 구현 */
function onVideo(num){
    var videoIndex = $('.real_time ul li a').length;
    for(var i=0;i<videoIndex;i++){
        $('.real_time figure iframe').css({'display':'none'});        
    }
    $('.real_time figure iframe').eq(num).css({'display':'block'})
}
startAutoSlide();

/* event슬라이드 구현 */
var eventSlideIndex = 0;
let eventSlideWidth = 1;

function eventAutoSlide() {
    eventSlideWidth++;
    $('.eventSliderBox').css({transform:'translateX('+-eventSlideWidth*0.5+'px)'})
    if(eventSlideWidth%1120 ===0){
        eventSlideWidth = 1;
        $('.eventSliderBox').children().eq(0).appendTo('.eventSliderBox').children().eq(-1);
        $('.eventSliderBox').children().eq(0).appendTo('.eventSliderBox').children().eq(-1);
    }
}
    
setInterval(function(){
    if(eventSlideIndex==0){
        eventAutoSlide();
        }
},5)   

$('.eventSliderBox').hover(function(){
    eventSlideIndex++;
},function(){
    eventSlideIndex--;
});

/* 버튼 구현 */
$('.eventPause').children().eq(0).click(function(){
    $(this).removeClass('active');
    $(this).siblings('img').addClass('active');
    eventSlideIndex++;
})
$('.eventPause').children().eq(1).click(function(){
    $(this).removeClass('active');
    $(this).siblings('img').addClass('active');
    eventSlideIndex--;
});

