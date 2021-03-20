"use strict";

const mainScreen = document.querySelector(".screen-main");
const auxScreen = document.querySelector(".screen-aux");

const clearMainScreen = () => {mainScreen.innerHTML = "0";}
const clearAuxScreen = () => {auxScreen.innerHTML = "";}

const controlDigits = function(mainScreenNum) {
	const maxDigital = 11;
	if (mainScreenNum.length + 1 >= maxDigital) {
		return mainScreenNum.slice(0, maxDigital);
	}	else {
		return mainScreenNum;
	}
}

const divide = (num1, num2) => Number(num1) / Number(num2);
const multiply = (num1, num2) => Number(num1) * Number(num2);
const minus = (num1, num2) => Number(num1) - Number(num2);
const plus = (num1, num2) => Number(num1) + Number(num2);
const inverse = (num) => 1 / Number(num);
const squareRoot = (num) => Math.sqrt(num);

let isMainResult = false;


const btnClickColorChange = function(className) {
	document.querySelector(`${className}`).classList.toggle("btn-clicked");
	setTimeout(function() {
		document.querySelector(`${className}`).classList.toggle("btn-clicked");
	}, 60)
};

const keyBackEvent = function() {
	btnClickColorChange(".btn-back");
	mainScreen.innerHTML = mainScreen.textContent.slice(0, -1);
	// if no digit, give a zero
	if (mainScreen.textContent === "") mainScreen.innerHTML = "0";
};

const keyDotEvent = function() {
	btnClickColorChange(".btn-num-dot");
	// if no dot in screen
	if (!/\./.test(mainScreen.innerHTML)) {
	mainScreen.innerHTML = mainScreen.textContent + ".";
	}
};

const keyZeroEvent = function() {
	btnClickColorChange(".btn-num-0");
	// if screen is only 0, keep 0; else add digit behind
	if (mainScreen.textContent === "0" || isMainResult === true) {
		mainScreen.innerHTML = "0";
		isMainResult = false;
	} else {
		mainScreen.innerHTML = mainScreen.textContent + "0";
	}
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
};

const keyOneEvent = function() {
	btnClickColorChange(".btn-num-1");
	if (mainScreen.textContent === "0" || isMainResult === true) {
		mainScreen.innerHTML = 1;
		isMainResult = false;
	} else {
		mainScreen.innerHTML = mainScreen.textContent + "1";
	}
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
};

const keyTwoEvent = function() {
	btnClickColorChange(".btn-num-2");
	// if screen is only 0, show 2; else add digit
	if (mainScreen.textContent === "0" || isMainResult === true) {
		mainScreen.innerHTML = 2;
		isMainResult = false;
	} else {
		mainScreen.innerHTML = mainScreen.textContent + "2";
	}
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
};

const keyThreeEvent = function() {
	btnClickColorChange(".btn-num-3");
	// if screen is only 0, show 3; else add digit
	if (mainScreen.textContent === "0" || isMainResult === true) {
		mainScreen.innerHTML = 3;
		isMainResult = false;
	} else {
		mainScreen.innerHTML = mainScreen.textContent + "3";
	}
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
}

const keyFourEvent = function() {
	btnClickColorChange(".btn-num-4");
	// if screen is only 0, show 4; else add digit
	if (mainScreen.textContent === "0" || isMainResult === true) {
		mainScreen.innerHTML = 4;
		isMainResult = false;
	} else {
		mainScreen.innerHTML = mainScreen.textContent + "4";
	}
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
};

const keyFiveEvent = function() {
	btnClickColorChange(".btn-num-5");
	// if screen is only 0, show 5; else add digit
	if (mainScreen.textContent === "0" || isMainResult === true) {
		mainScreen.innerHTML = 5;
		isMainResult = false;
	} else {
		mainScreen.innerHTML = mainScreen.textContent + "5";
	}
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
};

const keySixEvent = function() {
	btnClickColorChange(".btn-num-6");
	// if screen is only 0, show 6; else add digit
	if (mainScreen.textContent === "0" || isMainResult === true) {
		mainScreen.innerHTML = 6;
		isMainResult = false;
	} else {
		mainScreen.innerHTML = mainScreen.textContent + "6";
	}
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
};

const keySevenEvent = function() {
	btnClickColorChange(".btn-num-7");
	// if screen is only 0, show 7; else add digit
	if (mainScreen.textContent === "0" || isMainResult === true) {
		mainScreen.innerHTML = 7;
		isMainResult = false;
	} else {
		mainScreen.innerHTML = mainScreen.textContent + "7";
	}
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
};

const keyEightEvent = function() {
	btnClickColorChange(".btn-num-8");
	// if screen is only 0, show 8; else add digit
	if (mainScreen.textContent === "0" || isMainResult === true) {
		mainScreen.innerHTML = 8;
		isMainResult = false;
	} else {
		mainScreen.innerHTML = mainScreen.textContent + "8";
	}
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
};

const keyNineEvent = function() {
	btnClickColorChange(".btn-num-9");
	// if screen is only 0, show 9; else add digit
	if (mainScreen.textContent === "0" || isMainResult === true) {
		mainScreen.innerHTML = 9;
		isMainResult = false;
	} else {
		mainScreen.innerHTML = mainScreen.textContent + "9";
	}
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
};

const keyPlusMinusEvent = function() {
	btnClickColorChange(".btn-plusMinus");
	if (mainScreen.textContent[0] !== "-" && mainScreen.textContent[0] !== "0") {
		mainScreen.innerHTML = "-" + mainScreen.textContent;
	} else if (mainScreen.textContent[0] === "-") {
		mainScreen.innerHTML = mainScreen.textContent.slice(1);
	}
	isMainResult = false;
};

const keyCEEvent = function() {
	btnClickColorChange(".btn-CE");
	clearMainScreen();
};

const keyCEvent = function() {
	btnClickColorChange(".btn-C");
	clearMainScreen();
	clearAuxScreen();
};

const calculate = function() {
	auxScreen.innerHTML = auxScreen.textContent + mainScreen.textContent;
		const calcArr = auxScreen.textContent.split(" ");
		switch (calcArr[1]) {
			case "/":
				mainScreen.innerHTML = divide(calcArr[0], calcArr[2]);
				break;
			case "*":
				mainScreen.innerHTML = multiply(calcArr[0], calcArr[2]);
				break;
			case "-":
				mainScreen.innerHTML = minus(calcArr[0], calcArr[2]);
				break;
			case "+":
				mainScreen.innerHTML = plus(calcArr[0], calcArr[2]);
				break;
		}
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
}

const keyEqualEvent = function () {
	btnClickColorChange(".btn-equal");
	if (/[+\-*/] $/.test(auxScreen.textContent)) {
		calculate();
		isMainResult = true;
		auxScreen.innerHTML = auxScreen.textContent + " =";
	}
};

const keySlashEvent = function() {
	btnClickColorChange(".btn-slash");
	if (/[+\-*/] $/.test(auxScreen.textContent)) {
		calculate();
	}
	auxScreen.innerHTML = mainScreen.textContent + " / ";
	isMainResult = true;
};

const keyStarEvent = function() {
	btnClickColorChange(".btn-star");
	if (/[+\-*/] $/.test(auxScreen.textContent)) {
		calculate();
	}
	auxScreen.innerHTML = mainScreen.textContent + " * ";
	isMainResult = true;
};

const keyMinusEvent = function() {
	btnClickColorChange(".btn-minus");
	if (/[+\-*/] $/.test(auxScreen.textContent)) {
		calculate();
	}
	auxScreen.innerHTML = mainScreen.textContent + " - ";
	isMainResult = true;
};

const keyPlusEvent = function() {
	btnClickColorChange(".btn-plus");
	if (/[+\-*/] $/.test(auxScreen.textContent)) {
		calculate();
	}
	auxScreen.innerHTML = mainScreen.textContent + " + ";
	isMainResult = true;
};

const keyInverseEvent = function() {
	btnClickColorChange(".btn-inverse");
	auxScreen.innerHTML = `1 / ${mainScreen.textContent}`;
	mainScreen.innerHTML = inverse(mainScreen.textContent);
	isMainResult = true;
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
};

const keyRootSquareEvent = function() {
	btnClickColorChange(".btn-rootSquare");
	auxScreen.innerHTML = `sqrt(${mainScreen.textContent})`;
	mainScreen.innerHTML = squareRoot(mainScreen.textContent);
	isMainResult = true;
	//control number of digitals
	mainScreen.innerHTML = controlDigits(mainScreen.textContent);
};


//--------------------------------------------
const main = function() {
	document.querySelector(".btn-back").addEventListener("click", keyBackEvent);
	document.querySelector(".btn-num-dot").addEventListener("click", keyDotEvent);
	document.querySelector(".btn-num-0").addEventListener("click", keyZeroEvent);
	document.querySelector(".btn-num-1").addEventListener("click", keyOneEvent);
	document.querySelector(".btn-num-2").addEventListener("click", keyTwoEvent);
	document.querySelector(".btn-num-3").addEventListener("click", keyThreeEvent);
	document.querySelector(".btn-num-4").addEventListener("click", keyFourEvent);
	document.querySelector(".btn-num-5").addEventListener("click", keyFiveEvent);
	document.querySelector(".btn-num-6").addEventListener("click", keySixEvent);
	document.querySelector(".btn-num-7").addEventListener("click", keySevenEvent);
	document.querySelector(".btn-num-8").addEventListener("click", keyEightEvent);
	document.querySelector(".btn-num-9").addEventListener("click", keyNineEvent);
	document.querySelector(".btn-plusMinus").addEventListener("click", keyPlusMinusEvent);
	document.querySelector(".btn-CE").addEventListener("click", keyCEEvent);
	document.querySelector(".btn-C").addEventListener("click", keyCEvent);
	document.querySelector(".btn-equal").addEventListener("click", keyEqualEvent);
	document.querySelector(".btn-slash").addEventListener("click", keySlashEvent);
	document.querySelector(".btn-star").addEventListener("click", keyStarEvent);
	document.querySelector(".btn-minus").addEventListener("click", keyMinusEvent);
	document.querySelector(".btn-plus").addEventListener("click", keyPlusEvent);
	document.querySelector(".btn-inverse").addEventListener("click", keyInverseEvent);
	document.querySelector(".btn-rootSquare").addEventListener("click", keyRootSquareEvent);

	document.addEventListener("keydown", function(e) {
		if (e.key === "Backspace") keyBackEvent();
		else if (e.key === ".") keyDotEvent();
		else if (e.key === "0") keyZeroEvent();
		else if (e.key === "1") keyOneEvent();
		else if (e.key === "2") keyTwoEvent();
		else if (e.key === "3") keyThreeEvent();
		else if (e.key === "4") keyFourEvent();
		else if (e.key === "5") keyFiveEvent();
		else if (e.key === "6") keySixEvent();
		else if (e.key === "7") keySevenEvent();
		else if (e.key === "8") keyEightEvent();
		else if (e.key === "9") keyNineEvent();
		else if (e.key === "=") keyEqualEvent();
		else if (e.key === "/") keySlashEvent();
		else if (e.key === "*") keyStarEvent();
		else if (e.key === "-") keyMinusEvent();
		else if (e.key === "+") keyPlusEvent();
	})
}

main();
