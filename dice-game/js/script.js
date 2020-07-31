
var imgList1 = [0,1,2,3,4,5]
var imgList2 = [0,1,2,3,4,5]

function rollDice1() {
	var diceNo1 = imgList1.length;
	var dicePicked1 = Math.floor(Math.random(diceNo1) * diceNo1);
	var diceShowed1 = imgList1[dicePicked1];
	console.log(diceShowed1)
	console.log(dicePicked1)
	
	if (dicePicked1 == 0) {
		document.querySelector(".dice-p1 img").setAttribute("src", "images/dice-1.png")
	}
	else if (dicePicked1 == 1) {
		document.querySelector(".dice-p1 img").setAttribute("src", "images/dice-2.png")
	}
	else if (dicePicked1 == 2) {
		document.querySelector(".dice-p1 img").setAttribute("src", "images/dice-3.png")
	}
	else if (dicePicked1 == 3) {
		document.querySelector(".dice-p1 img").setAttribute("src", "images/dice-4.png")
	}
	else if (dicePicked1 == 4) {
		document.querySelector(".dice-p1 img").setAttribute("src", "images/dice-5.png")
	}
	else if (dicePicked1 == 5) {
		document.querySelector(".dice-p1 img").setAttribute("src", "images/dice-6.png")
	}

	window.dicePicked1 = dicePicked1
}

function rollDice2() {
	var diceNo2 = imgList2.length;
	var dicePicked2 = Math.floor(Math.random(diceNo2) * diceNo2);
	var diceShowed2 = imgList2[dicePicked2];
	console.log(diceShowed2)
	console.log(dicePicked2)

	if (dicePicked2 == 0) {
		document.querySelector(".dice-p2 img").setAttribute("src", "images/dice-1.png")
	}
	else if (dicePicked2 == 1) {
		document.querySelector(".dice-p2 img").setAttribute("src", "images/dice-2.png")
	}
	else if (dicePicked2 == 2) {
		document.querySelector(".dice-p2 img").setAttribute("src", "images/dice-3.png")
	}
	else if (dicePicked2 == 3) {
		document.querySelector(".dice-p2 img").setAttribute("src", "images/dice-4.png")
	}
	else if (dicePicked2 == 4) {
		document.querySelector(".dice-p2 img").setAttribute("src", "images/dice-5.png")
	}
	else if (dicePicked2 == 5) {
		document.querySelector(".dice-p2 img").setAttribute("src", "images/dice-6.png")
	}

	window.dicePicked2 = dicePicked2
}
function winner(window) {
	if (dicePicked1 > dicePicked2) {
		// alert("Player 1 wins!");
		document.querySelector("h1").innerHTML = " Player 1 Wins!"
	}
	else if (dicePicked2 > dicePicked1) {
		// alert("Player 2 wins!")
		document.querySelector("h1").innerHTML = " Player 2 Wins!"
	} else {
		// alert("Draw!")
		document.querySelector("h1").innerHTML = " Draw!"
	}
}