require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./src/config/config');
const router = require('./src/routes/router');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const port = config.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));

class Carousel {
	/**
	 * 
	 * @param {HTMLElement} element 
	 * @param {Object} options 
	 * @param {Object} options.slidesToScroll Nombre d'éléments à faire défiler
	 * @param {Object} options.slidesToScroll Nombre d'éléments visible dans un slide
	 */
	constructor (element,options = {}) {
	this.element = element
	this.options = Object.assign ({}, {
		slidesToScroll: 1,
		slidesVisible: 1
	}, options)
	this.children = [].slice.call (element.children)
	let root = document.createElement('carousel')
	let container = this.createDivWithClass('carousel__container')
	root.appendChild(container)
	this.element.appendChild(root)
	this.children.forEach(function (child){
		this.createDivWithClass('carousel__item')
	container.appendChild(child)
	})
}

/**
 * 
 * @param {string} className 
 * @returns {HtmlElement}
 */
createDivWithClass (className) {
	let div = document.createElement('div')
	div.setAttribute('class', className)
	return div
}

}

document.addEventListener("DOMContentLoaded", function () {
	new Carousel(document.querySelector('#carousel1'), {
		slidesToScroll: 1,
		slidesVisible: 1
	}, options)
	
	
	})

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
]
