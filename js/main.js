$(document).ready(function(){
	var nav = $(".navbar-fixed-top");
	var distancia = $(".navbar-fixed-top").offset();
	if(distancia.top>0){
		nav.removeClass("normal").addClass("efecto");
	}
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll>=560){
			nav.removeClass("normal").addClass("efecto");
		}else{
			nav.removeClass("efecto").addClass("normal");
		}
	});
	$('section#pantallas a').on('click',function(){
		$('#modal img').attr('src',$(this).attr("data-image-url"));
	});
	$('section#app .anima1').waypoint(function(){
		$('section#app .anima1').addClass('animated fadeInUp');
	},{
		offset: '60%'
	});
	$('section#app .anima2').waypoint(function(){
		$('section#app .anima2').addClass('animated fadeInUp');
	},{
		offset: '60%'
	});
	$('section#app .anima3').waypoint(function(){
		$('section#app .anima3').addClass('animated fadeInUp');
	},{
		offset: '60%'
	});
	$('section#caracteristicas .anima3').waypoint(function(){
		$('section#caracteristicas .anima3').addClass('animated fadeInUp');
	},{
		offset: '60%'
	});
	$('section#caracteristicas .anima1').waypoint(function(){
		$('section#caracteristicas .anima1').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});
	$('section#caracteristicas .anima2').waypoint(function(){
		$('section#caracteristicas .anima2').addClass('animated fadeInLeft');
	},{
		offset: '60%'
	});
	$('section#pantallas .anima1').waypoint(function(){
		$('section#pantallas .anima1').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});
	$('section#pantallas .anima2').waypoint(function(){
		$('section#pantallas .anima2').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});
	$('section#pantallas .anima3').waypoint(function(){
		$('section#pantallas .anima3').addClass('animated fadeInLeft');
	},{
		offset: '60%'
	});
	$('section#descargar .anima1').waypoint(function(){
		$('section#descargar .anima1').addClass('animated fadeInLeft');
	},{
		offset: '60%'
	});

});
smoothScroll.init({
    selector: '[data-scroll]', 
    selectorHeader: '[data-scroll-header]', 
    speed: 1100, 
    easing: 'easeInOutQuad',
    offset: 0, 
    updateURL: false, 
    callback: function ( anchor, toggle ) {} 
});
