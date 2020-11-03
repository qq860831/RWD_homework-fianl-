$(document).ready(function (){
    // 漢堡選單
    $('.hamburger').click(function(e){
        $('.navbar').toggleClass('show');
    });

    // sidebar折疊式選單
    $('.list').click(function(e){
        e.preventDefault();
        $(this).toggleClass('list-active')
        $(this).parent().siblings().find('a').removeClass('list-active')
    });

    // 愛心選擇
    $('.fa-heart-o').click(function(e){
        e.preventDefault(); //去掉a連結的作用
        $(this).toggleClass(' fa fa-heart-o');
        $(this).toggleClass(' fa fa-heart');
    });
});