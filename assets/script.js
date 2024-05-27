// Sliders content
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Add dot
function addDot(container) {
	// Create new div
	let newDot = document.createElement("div");
	// Adding class
	newDot.classList.add('dot');
	// Adding new div in the container
	container.getElementsByClassName("dots")[0].appendChild(newDot);
}
// Select dot
function selectDot(container, dotKey) {
	// Getting dots container
	let dotsContainer = container.getElementsByClassName("dots")[0];
	// Getting dots content
	let dotsList = dotsContainer.getElementsByClassName("dot");
	// Getting selected dots
	let selectedDotsList = dotsContainer.getElementsByClassName("dot_selected");
	// unselect every selected dots : loop to prevent multiple selected dots bug
	for(let i=0; i<selectedDotsList.length; i++) {
		if(selectedDotsList[i] !== dotsList[dotKey]) {
			selectedDotsList[i].classList.remove("dot_selected");
		}
	}
	// select dot
	console.log("selectedDot number " + dotKey);
	dotsList[dotKey].classList.add("dot_selected");
}
// Init sliders dots
function initSliderDot(container, slides, selectedDotKey = 0) {
	// Prevent selectDot out of range
	if(selectedDotKey < 0 || selectedDotKey > slides.length-1) {
		selectedDotKey = 1;
	}
	// Adding dots
	for(let i = 0; i < slides.length; i++) {
		console.log("add dot with key " + i);
		addDot(container);
	}
	// Select dot
	selectDot(container, selectedDotKey);
}

// decrease slider
function decreaseSliderKey(slide,currentKey) {
	// if decreased Key is in range
	if(currentKey-1 >= 0 && currentKey-1 < (slide.length - 1)) {
		return currentKey-1;
	// if decreasedKey is out of range, select last Slider item
	} else {
		return slide.length - 1;
	}
}
// increase slider
function increaseSliderKey(slide,currentKey) {
	// if increased Key is in range
	if(currentKey + 1 >= 0 && currentKey + 1 <= (slide.length - 1)) {
		return currentKey + 1;
	// if decreasedKey is out of range, select first Slider item
	} else {
		return 0;
	}
}

// update slider content
function updateSliderContent(container,slides,slideKey) {
	// slide IMG
	const slideImg = container.getElementsByClassName("banner-img")[0];
	// slide text (<p>)
	const slideTxt = container.querySelector("p");
	// update content
	slideImg.src = "./assets/images/slideshow/" + slides[slideKey].image;
	slideTxt.innerHTML = slides[slideKey].tagLine;
}




// Init Banner Slider Dot
const bannerSliderContainer = document.getElementById("banner");
let currentKey = 0;
initSliderDot(bannerSliderContainer,slides, currentKey);


// Sliders events listener
const sliderLeftArrow = document.getElementById('sliderLeftArrow');
const sliderRightArrow = document.getElementById('sliderRightArrow');

sliderLeftArrow.addEventListener("click", (event) => {
	// Debug : detect event
	console.log('click detected on left arrow');
	// Decrease slider Key
	currentKey = decreaseSliderKey(slides,currentKey);
	// Update slide
	updateSliderContent(bannerSliderContainer,slides,currentKey);
	// update dot
	selectDot(bannerSliderContainer,currentKey);
});

sliderRightArrow.addEventListener("click", (event) => {
	// Debug : detect event
	console.log('click detected on right arrow');
	// Increase slider Key
	currentKey = increaseSliderKey(slides,currentKey);
	// Update slide
	updateSliderContent(bannerSliderContainer,slides,currentKey);
	// update dot
	selectDot(bannerSliderContainer,currentKey);
});