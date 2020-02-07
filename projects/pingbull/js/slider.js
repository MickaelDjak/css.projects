/**
 * header slider
 */

var currentSlide = 0;

var next = document.getElementById('next');
var previous = document.getElementById('previous');
var label = document.querySelectorAll('.slide__radiobutton div');
var slides = document.querySelectorAll('#slides .slide');

next.onclick = function () {
	goToSlide(currentSlide + 1);
};

previous.onclick = function () {
	goToSlide(currentSlide - 1);
};

for (var i = 0; i < label.length; i++) {
	label[i].onclick = function () {
		goToSlide(this.getAttribute('value'));
	}

}

function goToSlide(n) {
	slides[currentSlide].className = 'slide';
	label[currentSlide].className = '';

	currentSlide = (n + slides.length) % slides.length;

	slides[currentSlide].className = 'slide showing';
	label[currentSlide].className = 'select';
}

/**
 * post slider
 */
var currentSlidePost = 0;
var postLabel = document.querySelectorAll('.post_slide__radiobutton > div');
var postSlider = document.querySelectorAll('#post__slider .slide');

for (var i = 0; i < postLabel.length; i++) {
	postLabel[i].onclick = function () {
		goToPostSlide(this.getAttribute('value'));
	}
}

function goToPostSlide(n) {
	postLabel[currentSlidePost].className = '';
	postSlider[currentSlidePost].className = 'slide';

	currentSlidePost = n;

	postLabel[currentSlidePost].className = 'select';
	postSlider[currentSlidePost].className = 'slide showing';
}


/**
 * show menu
 */
var showMenu = true;
var firstListItem = document.querySelector('.navigation_top li:first-child');
firstListItem.onclick = function () {
	var nav = document.querySelector('.navigation_top');

	if (showMenu) {
		nav.classList.add('show');
		console.log(' + ');
	} else {
		nav.classList.remove('show');
		console.log(' - ');
	}
	showMenu = !showMenu;

}