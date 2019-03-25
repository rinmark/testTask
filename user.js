document.addEventListener('DOMContentLoaded', () => {
	// $( "a.header-list__link" ).click(function( event ) {
	// 	event.preventDefault();
	// 	$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
	// });

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});

// menu for mobile
let menuList = document.querySelector('.header-list');

document.querySelector('.menuMob').addEventListener('click', () => {
	menuList.classList.toggle('header-list-active');
});
});
