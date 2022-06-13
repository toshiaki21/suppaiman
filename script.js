$(function () {

  // 1,熱中症とは？原因 
  $(".question").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass('on');
  })  

  $('#pagepiling').pagepiling({
    sectionSelector: '.section',
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    navigation: {
      'position': 'right',
      'tooltips': ['section1', 'section2', 'section3', 'section4', 'section5']
    },
    scrollingSpeed: 500,
  });

$(".ntu-slick").slick();

// 大外のカッコ
});