$(function(){
	$(document).ready(function() {
		$('#pagepiling').pagepiling({
			menu: '#menu',
					anchors: ['page1', 'page2', 'page3','page4','page5'],
					anchorsColor:"#00bfff",
				sectionsColor: ['#FFFFFF'],
				navigation: {
						'position': 'right',
						 'tooltips': ['紺色', '桃色', '黒色']
			}
		});
	});


	// slick
	$('.ntu-slick').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});





// 大外かっこ
})
