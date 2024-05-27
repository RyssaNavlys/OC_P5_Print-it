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


// Sliders events listener
const sliderLeftArrow = document.getElementById('sliderLeftArrow');
const sliderRightArrow = document.getElementById('sliderRightArrow');

sliderLeftArrow.addEventListener("click", (event) => {
	// Debug : detect event
	console.log('click detected on left arrow');
	// Get current slide
	// Current slide - 1
	// Update slide
});

sliderRightArrow.addEventListener("click", (event) => {
	// Debug : detect event
	console.log('click detected on right arrow');
	// Get current slide
	// Current slide + 1
	// Update slide
});