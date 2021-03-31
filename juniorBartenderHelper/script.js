"use strict"

const cocktail = class {
	constructor(name, ingredients, method, remarks) {
		this.name = name;
		this.ingredients = ingredients;
		this.method = method;
		this.remarks = remarks;
	}
}

const chooseCocktail = function(cocktail) {
	//display Name
	console.log(cocktail.name);
	document.querySelector(".manual-name").textContent = `Name: ${cocktail.name}`;
	
	//display Ingredients
	console.log(cocktail.ingredients);
	let ingredientsText = ""
	cocktail.ingredients.forEach(function(ing) {
		ingredientsText += `${ing}, `;
	})
	ingredientsText = ingredientsText.slice(0, ingredientsText.length - 2);
	document.querySelector(".manual-ingredients").textContent = `Ingredients: ${ingredientsText}`;
	
	//display Method
	console.log(cocktail.method);
	
	//display Remarks
	console.log(cocktail.remarks);
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

const bloodymary = new cocktail("Bloody Mary", ["strawberry", "tomato"], "Mixing", "NA");