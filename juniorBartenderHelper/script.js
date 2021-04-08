"use strict"

const cocktail = class {
	constructor(name, ingredients, method, remarks="NA") {
		this.name = name;
		this.ingredients = ingredients;
		this.method = method;
		this.remarks = remarks;
	}
}

const displayCocktail = function(cocktail) {
	//display Name
	document.querySelector(".manual-name").textContent = `Name: ${cocktail.name}`;
	
	//display Ingredients
	let tempArr = [];
	for (const [k, v] of Object.entries(cocktail.ingredients)) {
		tempArr.push(`${k}: ${v}`);
	}
	document.querySelector(".manual-ingredients").innerHTML = `Ingredients: ${tempArr.join(",<br>		    ")}`;
	
	//display Method
	document.querySelector(".manual-method").innerHTML = `Method: ${cocktail.method}`
	
	//display Remarks
	document.querySelector(".manual-remarks").innerHTML = `Remarks: ${cocktail.remarks}`
	
	//choose bottles in the bin and the rack
	//write
}

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


//-----------------------------test
document.getElementById("b1-1").classList.toggle("sp-bottle-selected");

const bloodymary = new cocktail("Bloody Mary", {"strawberry": "20ml", "tomato": "50ml"}, "Mixing");
const oldFashioned = new cocktail("Old-Fashioned", {"whisky": "45ml", "sugar": "a bit"}, "Mixing");

const selectButton = document.querySelector(".select-button");

selectButton.addEventListener("click", function() {
	if(selectButton.selectedIndex === 1) {
		displayCocktail(bloodymary);
	} else if (selectButton.selectedIndex === 2) {
		displayCocktail(oldFashioned);
	}
})