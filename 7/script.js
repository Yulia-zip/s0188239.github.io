$(document).ready(function () {
	$('.slider').slick({
		accessibility: true,
		adaptiveHeight: false,
		arrows: true,
		centerMode: true,
		centerPadding: '0',
		dots: true,
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 3,
		speed: 500,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					centerPadding: '0',
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					centerPadding: '0px',
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					centerPadding: '0px',
					slidesToShow: 1,
				},
			},
		],
	})
})
