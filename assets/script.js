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
function selectDot(container, dotNumber) {
	// Getting dots container
	let dotsContainer = container.getElementsByClassName("dots")[0];
	// Getting dots content
	let dotsList = dotsContainer.getElementsByClassName("dot");
	// Getting selected dots
	let selectedDotsList = dotsContainer.getElementsByClassName("dot_selected");
	// unselect every selected dots : loop to prevent multiple selected dots bug
	for(let i=0; i<selectedDotsList.length; i++) {
		if(selectedDotsList[i] !== dotsList[dotNumber]) {
			selectedDotsList[i].classList.remove("dot_selected");
		}
	}
	// select dot
	console.log("selectedDot number " + dotNumber);
	dotsList[dotNumber-1].classList.add("dot_selected");
}
// Init sliders dots
function initSliderDot(container, slides, selectedDot = 1) {
	// Prevent selectDot out of range
	if(selectedDot < 0 || selectedDot > slides.length) {
		selectedDot = 1;
	}
	// Adding dots
	for(let i = 0; i < slides.length; i++) {
		console.log("add dot number " + (i + 1));
		addDot(container);
	}
	// Select dot
	selectDot(container, selectedDot);
}

// Init Banner Slider Dot
initSliderDot(document.getElementById("banner"),slides);


// Sliders events listener
const sliderLeftArrow = document.getElementById('sliderLeftArrow');
const sliderRightArrow = document.getElementById('sliderRightArrow');

sliderLeftArrow.addEventListener("click", (event) => {
	// Debug : detect event
	console.log('click detected on left arrow');
	// Get current slide
	// Current slide - 1
	// Update slide
	// update dot
});

sliderRightArrow.addEventListener("click", (event) => {
	// Debug : detect event
	console.log('click detected on right arrow');
	// Get current slide
	// Current slide + 1
	// Update slide
	// update dot
});