// variables from the html
var rgbHeading = document.querySelector("#rgbHeading");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var new_game = document.querySelector("#new");
var squres = document.querySelectorAll(".color_squre");
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");

var level = 6;
var correct_color;

// get an Integer that is from 0 to max - 1;
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


// get the array of colors based on the game level
function getColors(level) {

	var colors = [];
	for (var i = 0; i < level; ++i) {
		
		var red = getRandomInt(256);
		var green = getRandomInt(256);
		var blue = getRandomInt(256);

		colors[i] = "rgb(" + red + ", " + green + ", " + blue + ")";
	}	

	return colors;

}

function reset() {
	
	var colors = [];
	if (level === 6) {
		colors = getColors(6);
		var display = getRandomInt(6);
	} else {
		colors = getColors(3);
		var display = getRandomInt(3);
	}

	h1.style.backgroundColor = "rgb(233,200,100)";
	rgbHeading.textContent = colors[display];
	correct_color = colors[display];
	new_game.textContent = "New Colors";
	message.textContent = "";

	for (var i = 0; i < squres.length; ++i) {
		if (i < level) {
			squres[i].style.backgroundColor = colors[i];
		} else {
			squres[i].style.backgroundColor = "#d0e0dc";
		}
	}
}

function setSquares() {
	for (var i = 0; i < squres.length; ++i) {
		squres[i].addEventListener("click", function() {
			if (this.style.backgroundColor === correct_color) {
				h1.style.backgroundColor = correct_color;
				win();
				new_game.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#d0e0dc";
				message.textContent = "Try Again"
			}
		})
	}
}

function win() {
	for (var i = 0; i < squres.length; ++i) {
		squres[i].style.backgroundColor = correct_color;
	}
	message.textContent = "WIN!";
}

new_game.addEventListener("click", function() {
	reset();
})


easy.addEventListener("click", function() {
	this.classList.add("change");
	hard.classList.remove("change");
	level = 3;
	reset();
})

hard.addEventListener("click", function() {
	easy.classList.remove("change");
	this.classList.add("change");
	level = 6;
	reset();
})


// initial the game
reset();
hard.classList.add("change");
setSquares();



