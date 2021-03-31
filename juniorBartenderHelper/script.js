"use strict"

const assignBottleToIdAndColor = function(bottleName, id, color) {
	document.getElementById(id).classList.add(bottleName);
	document.querySelector(`.${bottleName}`).style.backgroundColor = color;
}

const main = function() {
	assignBottleToIdAndColor("strawberry", "b1-1", "red");
	assignBottleToIdAndColor("pineapple", "b1-2", "yellow");
	assignBottleToIdAndColor("passion-fruit", "b1-3", "orange");
	
	assignBottleToIdAndColor("whisky", "bsp-1", "brown");
}

main();

document.getElementById("b1-1").classList.toggle("sp-bottle-selected");