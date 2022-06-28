$(document).ready(function() {
	$('#pagepiling').pagepiling({
		menu: '#menu',
	    	anchors: ['page1', 'page2', 'page3','page4','page5'],
        anchorsColor:"#FFFFFF",
			sectionsColor: ['#FFFFFF'],
			navigation: {
			    'position': 'right',
			   	'tooltips': ['紺色', '桃色', '黒色']
		}
	});
});