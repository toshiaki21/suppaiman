$(function(){

// 1,熱中症とは？原因 
  $(".question").on("click",function(){
    $(this).next().slideToggle();
    $(this).toggleClass('on');
  })

console.log('Hello world');

$('#pagepiling').pagepiling({
  menu: '#menu',
  anchors: ['page1', 'page2', 'page3','page4'],
  navigation: {
    'position': 'right',
    'tooltips': ['section1', 'section2', 'section3', 'section4']
  },
  scrollingSpeed: 1000,
  sectionSelector: '.contents'
});
});


// 大外のカッコ
})
