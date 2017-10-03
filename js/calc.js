// constants
var	SMALL_CHAR_TAPE_LENGTH_INCHES = 8; // for testing only
var MEDIUM_CHAR_TAPE_LENGTH_INCHES = 14; // for testing only
var LARGE_CHAR_TAPE_LENGTH_INCHES = 20; // for testing only
var INVALID_INPUT = 0;

var INCH_TO_METER = 1/39.3701; 

var X_CONST_USD = 90;
var THICKNESS_CM = 10;
var METER_TO_CM = 100;
var PX_TO_INCH = 1/6.4;
var PADDING_PX = 20;

var COL_TO_PX = 8; // for testing only
var ROW_TO_PX = 15; // for testing only

var DIMENSION_WEIGHT_CONVERT = 5000;
var DIMENSION_WEIGHT_DOLLARS_PER_KG = 7;

var WATERPROOF_MULTIPLIER = 1.3;
var INDOOR = 1;
 

// fontSize is the amount of tape you need to be able to make any character. set to small by default. this is for testing purposes only
var fontSize = SMALL_CHAR_TAPE_LENGTH_INCHES * INCH_TO_METER;

var inOutChoice = "indoor"; // default


/* 1. get the font size in meters
	1.1. get the font size selected
		1.1.1. if small, then font size = SMALL_CHAR_TAPE_LENGTH_INCHES
		1.1.2. if medium, then font size = MEDIUM_CHAR_TAPE_LENGTH_INCHES
		1.1.3. if large, then font size = LARGE_CHAR_TAPE_LENGTH_INCHES
	1.2. font size in meters = font size * INCHES TO METERS
*/
function changeFontSize(value) {
	if (value == "small") {
		fontSize = SMALL_CHAR_TAPE_LENGTH_INCHES;
	} else if (value == "medium") {
		fontSize = MEDIUM_CHAR_TAPE_LENGTH_INCHES;
	} else if (value == "large") {
		fontSize = LARGE_CHAR_TAPE_LENGTH_INCHES;
	} else {
		fontSize = INVALID_INPUT;
	}
	fontSize *= INCH_TO_METER;
	console.log("font size: " + value + "\nlength of tape needed for each char in meters: " + fontSize.toFixed(2));
}

// helper function for changeFontSize. gets the font size selected from the tab section
$(document).ready(function() {
    $("input[name='chooseFontSize']").click(function() {
        changeFontSize($(this).val());
        updateWidthHeight();
    });
});


/* 2. get the tape length in meters
	2.1. get the input length and trim it
		1.2.1. remove line breaks and spaces (or look for a function that counts the input length exluding line breaks and spaces. see the links clara posted)
	2.2. tape length in meters = font size in meters * trim length
*/
function getTapeLength() {
	var tape;
	var msg = document.getElementById("clientText").value;
	msg = msg.replace(/\s+/g, "").replace(/\r?\n|\r/g, "");
	tape = (msg.length * fontSize).toFixed(2)
	console.log("total number of characters: " + msg.length + "\n")
	return tape;
}

/** 3. get the dimension weight in kg **/

/* 3.1. get the width in cm
	3.1.1. get the width of the text area (use cols for now)
	3.1.2. width in meters = width * PX_TO_INCH * INCH_TO_METERS * METER_TO_CM
*/
function getWidth() {
	var width = document.getElementById("clientText").clientWidth - PADDING_PX;
	width = width * PX_TO_INCH * INCH_TO_METER * METER_TO_CM;
	return width.toFixed(2);
}

/* 3.2. get the height in cm
	3.2.1. get the height of the text area (use rows for now)
	3.2.2. height in meters = height * PX_TO_INCH * INCH_TO_METERS * METER_TO_CM
*/
function getHeight() {
	var height = document.getElementById("clientText").clientHeight - PADDING_PX;
	height = height * PX_TO_INCH * INCH_TO_METER * METER_TO_CM;
	return height.toFixed(2);
}

// update the width and height on the top panel
function updateWidthHeight() {
	var width = (document.getElementById("clientText").clientWidth - PADDING_PX) * PX_TO_INCH
	var height = (document.getElementById("clientText").clientHeight - PADDING_PX) * PX_TO_INCH;

	document.getElementById("width").innerHTML = Math.round(width)
	document.getElementById("height").innerHTML = Math.round(height);
}

/* 3.3. get the dimension weight in kg
	3.3.1. dimension weight in kg = (width * height * THICKNESS_CM) / DIMENSION_WEIGHT_CONVERT
*/
function getDimensionWeight() {
	var dimensionWeight;
	dimensionWeight = (getWidth() * getHeight() * THICKNESS_CM) / DIMENSION_WEIGHT_CONVERT;
	return dimensionWeight.toFixed(2);
}

/* 4. calculate the price
	4.1. price = (tape length in meters * X_CONST_USD + dimension weight in kg * DIMENSION_WEIGHT_DOLLARS_PER_KG) * isOutdoor()
	4.2. display the price
*/
function getQuote() {
	var price = getTapeLength() * X_CONST_USD + getDimensionWeight() * DIMENSION_WEIGHT_DOLLARS_PER_KG;
	console.log('price before waterproofing: ' + price.toFixed(2));
	price *= isOutdoor(inOutChoice);
	document.getElementById('price').innerHTML = price.toFixed(2);
}

// helper function for getQuote. adds waterproofing cost if needed
function isOutdoor(value) {
	var outdoor;
	
	// from altalt 
	// var inOutChoice = $("input[name='chooseIndoorOutdoor']:checked").val();
	// console.log(inOutChoice);

	if (value == "indoor") {
		outdoor = INDOOR;
		console.log("type of backdrop: " + value + "\nNo charge added");
	} else if (value == "outdoor") {
		outdoor = WATERPROOF_MULTIPLIER;
		console.log("type of backdrop: " + value + "\n30% waterproofing charge added");
	} else {
		outdoor = INVALID_INPUT;
	}
	return outdoor;
}

// helper function for isOutdoor. gets the font size selected from the tab section
$(document).ready(function() {
    $("input[name='chooseIndoorOutdoor']").click(function() {
        isOutdoor($(this).val());
    });
});

// tester methods (for console logs)
function testTapeLength() {
	var test = getTapeLength();
	console.log("tape length in meters: " + test);
}

function testWidth() {
	var test = getWidth();
	console.log("width in cm: " + test);
}

function testHeight() {
	var test = getHeight();
	console.log("height in cm: " + test);
}

function testDimensionWeight() {
	var test = getDimensionWeight();
	console.log("dimension weight in kg: " + test);
}