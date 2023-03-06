console.log("bonjour Ben")

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const paragraph = document.querySelector("p");
const dotsElement = document.querySelector(".dots");
const numberOfSlide = slides.length;
const banner = document.getElementById("banner");
let count = 0;


banner.insertAdjacentHTML("beforeend", `<img class="banner-img" src="./assets/images/slideshow/${slides[0].image}"  alt="Image de Print-it">`);
let image = document.querySelector(".banner-img");

function dotElement() {
	for (let i = 0; i < numberOfSlide; i++) {
		dotsElement.insertAdjacentHTML("beforeend", `<div class="dot"></div>`);
	}
}
dotElement();


const dot = document.querySelectorAll(".dot");
console.log(dot)


dot[0].classList.add("dot_selected");


function displayImage(image) { 
	if (count == 0) {
		image = image.setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
	}
	else if (count == 1) {
		image = image.setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
		
	} else if (count == 2) {
		image = image.setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
		
	} else if (count == 3) {
		image = image.setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
			
	}
}


const displaySlider = (numIndex = 0) => {
	paragraph.innerHTML = (slides[numIndex].tagLine);
	return numIndex;
}
let numIndex = displaySlider();


function dotSelect(item) {
	item.classList.remove("dot_selected")
	dot[numIndex].classList.add("dot_selected");
}


function returnFirst(){
	if (numIndex >= numberOfSlide -1) {
		numIndex = -1;
		count = -1;
	}
}
arrowRight.addEventListener("click", returnFirst);


function returnLast(){
	if (numIndex <= 0) {
		numIndex = numberOfSlide;
		count = numberOfSlide;
	}
}
arrowLeft.addEventListener("click", returnLast); 
arrowRight.addEventListener("click", (e) => {  
	numIndex++;
	count++;
	displaySlider(numIndex);
	displayImage(image);
	dot.forEach(dotSelect); 
	console.log(numIndex, count)
});


arrowLeft.addEventListener("click", (e) => {  
	numIndex--;
	count--;
	displaySlider(numIndex);
	displayImage(image);
	dot.forEach(dotSelect);
	console.log(numIndex, count)
});