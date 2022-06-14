$(function () {

  // 1,熱中症とは？原因 
  $(".question").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass('on');
  })  

  // 2,熱中症になってしまったら
  $(".nts-severity-list1").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass('on');
  })  

  $(".ntu-slick").slick();

  $('#pagepiling').pagepiling({
    sectionSelector: '.section',
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    navigation: {
      'position': 'right',
      'tooltips': ['熱中症とは？', '熱中症になってしまったら', '熱中症予防', '熱中症予防おすすめアイテム', '一押しアイテム']
    },
    scrollingSpeed: 500,
  });

 
  // go to top 
  $('.go-top-btn').on('click',function(){
    $('html,body').animate({'scrollTop':0},1000); 
   })



// 大外のカッコ
});