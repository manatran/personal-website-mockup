const menu = document.querySelector('.fa-bars');
const down = document.querySelector('.down');

const planet1 = document.querySelector('.planet1');
const planet2 = document.querySelector('.planet2');

menu.addEventListener('click', e => {
	e.preventDefault();
});

down.addEventListener('click', e => {
	e.preventDefault();
	// Down button scroll
	window.scroll({
		top: screen.height - 256,
		left: 0,
		behavior: 'smooth'
	});
})

window.addEventListener('scroll', e => {
	if (window.scrollY < screen.height) {
		// Down button opacity
		down.style.opacity = (500 - window.scrollY) / 500;

		// Planet movement
		if (screen.width < 1080) {
			planet1.style.top = (window.scrollY / 75) + 15 + '%';
			planet2.style.bottom = (window.scrollY / 25) - 5 + '%';
		} else {
			planet1.style.top = (window.scrollY / 50) + 15 + '%';
			planet2.style.bottom = (window.scrollY / 25) + '%';
		}
	}

})