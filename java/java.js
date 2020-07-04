$('.header-burger').on('click',()=>{
	$(".header-burger").toggleClass('active');
	$(".header-menu").toggleClass('active');
})
$('.count').each(function(){
	$(this).prop('counter',0).animate({
		counter:$(this).text()
	},{
		duration:1000,
		easing:'swing',
		step:function(now){
			$(this).text(Math.ceil(now));
		}
	})
})
$('.slider').slick({
	centerMode:true,
	slidesToShow:3,
	centerPadding: '60px' ,
	dots: true,
	arrows:false,
	responsive:[{
		breakpoint:1030,
		settings:{
			centerMode:false,
			slidesToShow:2,
			centerPadding: '60px' 
		}
	},{
		breakpoint:768,
		settings:{
			centerMode:false,
			slidesToShow:1,
			centerPadding: '60px' 
		},
	}],

});