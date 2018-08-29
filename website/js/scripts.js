const menu = document.querySelector('.fa-bars');
const down = document.querySelector('.down');

const planet1 = document.querySelector('.planet1');
const planet2 = document.querySelector('.planet2');

const close = document.querySelector('.fa-times');
const maximize = document.querySelector('.fa-window-maximize');
const minimize = document.querySelector('.fa-window-minimize');

const projects = document.querySelector('.projects-window');

close.addEventListener('click', e => {
	projects.classList.remove('maximized');
})
maximize.addEventListener('click', e => {
	projects.classList.toggle('maximized');
})
minimize.addEventListener('click', e => {
	projects.classList.remove('maximized');
})

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


console.log(
	" -yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy-" + '\n',
	"-yyyyyyyyyyyyyyyyyys    syyyyyyyyyyyyyyyyyy-" + '\n',
	"-MMMMMMMMMMMMMMM           NMMMMMMMMMMMMMMM-" + '\n',
	"-MMMMMMMMMMMN                  MMMMMMMMMMMM-" + '\n',
	"-MMMMMMMMmhs      shmMNmy       ydNMMMMMMMM-" + '\n',
	"-MMMMNdy       ydNN      NNhs      shmMMMMM-" + '\n',
	"-Mmhs      shmN             NNdy       ydNM-" + '\n',
	"-       ydNNdy                ymNNds      s-" + '\n',
	"-    hNMmhs                      shNMmy    -" + '\n',
	"-   sMN      ssssss      ssssss     sMm    -" + '\n',
	"-   sMm      MMMMMMm    mMMMMMM      Mm    -" + '\n',
	"-   sMm      MMMMMMMNshMMMMMMMM      Mm    -" + '\n',
	"-   sMm      MMMMNNNNNNNNNNMMMM      Mm    -" + '\n',
	"-   sMm      MMMN          NMMM      Mm    -" + '\n',
	"-   sMm      MMMMyys    yyyMMMM      Mm    -" + '\n',
	"-   sMm      MMMMMMd    MMMMMMM      Mm    -" + '\n',
	"-   sMm      MMMMMMd    MMMMMMM      Mm    -" + '\n',
	"-   sMm      sssssss    sssssss      Mm    -" + '\n',
	"-    dNNdy                        ymMNh    -" + '\n',
	"-      shNMmh                 shNMdy       -" + '\n',
	"-Ndy       hdNNds          ymNNds       ydM-" + '\n',
	"-MMMMmh       shmMmys  shNMmy       shmMMMM-" + '\n',
	"-MMMMMMMNds       ymMNMNhs       ymMMMMMMMM-" + '\n',
	"-MMMMMMMMMMMmys              shNMMMMMMMMMMM-" + '\n',
	"-MMMMMMMMMMMMMMNdy        ydNMMMMMMMMMMMMMM-" + '\n',
	"-ddddddddddddddddddy///shdddddddddddddddddd-" + '\n',
	"-dddddddddddddddddddddddddddddddddddddddddd-" + '\n',
	'\n',
	"Do you like code as much as I do?" + '\n',
	"Check out mine at https://github.com/manatran" + '\n',
	"Or send me an email at manaustransez@hotmail.com for more information."
);