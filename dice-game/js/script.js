
var imgList1 = document.querySelectorAll(".dice-p1 img")
var imgList2 = document.querySelectorAll(".dice-p2 img")

function rollDice1() {
	var diceNo1 = imgList1.length;
	var dicePicked1 = Math.floor(Math.random(diceNo1) * diceNo1);
	var diceShowed1 = imgList1[dicePicked1];
	console.log(diceShowed1)
	 

	if (window.dicePicked1 == 0) {
		document.querySelector("#d12").classList.add("d-none");
		document.querySelector("#d13").classList.add("d-none");
		document.querySelector("#d14").classList.add("d-none");
		document.querySelector("#d15").classList.add("d-none");
		document.querySelector("#d16").classList.add("d-none");
	} 
	else if (window.dicePicked1 == 1) {
		document.querySelector("#d11").classList.add("d-none");
		document.querySelector("#d13").classList.add("d-none");
		document.querySelector("#d14").classList.add("d-none");
		document.querySelector("#d15").classList.add("d-none");
		document.querySelector("#d16").classList.add("d-none");
	}
	else if (window.dicePicked1 == 2) {
		document.querySelector("#d11").classList.add("d-none");
		document.querySelector("#d12").classList.add("d-none");
		document.querySelector("#d14").classList.add("d-none");
		document.querySelector("#d15").classList.add("d-none");
		document.querySelector("#d16").classList.add("d-none");
	}
	else if (window.dicePicked1 == 3) {
		document.querySelector("#d11").classList.add("d-none");
		document.querySelector("#d12").classList.add("d-none");
		document.querySelector("#d13").classList.add("d-none");
		document.querySelector("#d15").classList.add("d-none");
		document.querySelector("#d16").classList.add("d-none");
	}
	else if (window.dicePicked1 == 4) {
		document.querySelector("#d11").classList.add("d-none");
		document.querySelector("#d12").classList.add("d-none");
		document.querySelector("#d13").classList.add("d-none");
		document.querySelector("#d14").classList.add("d-none");
		document.querySelector("#d16").classList.add("d-none");
	}
	else if(window.dicePicked1 == 5) {
		document.querySelector("#d11").classList.add("d-none");
		document.querySelector("#d12").classList.add("d-none");
		document.querySelector("#d13").classList.add("d-none");
		document.querySelector("#d14").classList.add("d-none");
		document.querySelector("#d15").classList.add("d-none");
	}
	window.dicePicked1 = dicePicked1
}

function rollDice2() {
	var diceNo2 = imgList2.length;
	var dicePicked2 = Math.floor(Math.random(diceNo2) * diceNo2);
	var diceShowed2 = imgList2[dicePicked2];
	console.log(diceShowed2)
	window.dicePicked2 = dicePicked2
}
function winner(window) {
	if (dicePicked1 > dicePicked2) {
		alert("Player 1 wins!");
	}
	else if (dicePicked2 > dicePicked1) {
		alert("Player 2 wins!")
	} else {
		alert("Draw!")
	}
}