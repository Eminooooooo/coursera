$("button").click(nextSequence);
function nextSequence () {
  var randomNumber1 = Math.ceil(Math.random() * 6);
  var randomNumber2 = Math.ceil(Math.random() * 6);
  console.log(randomNumber1);
  console.log(randomNumber2);
  $(".dice-p1>img").attr("src","images/dice-" + randomNumber1 + ".png");
  $(".dice-p2>img").attr("src","images/dice-" + randomNumber2 + ".png");
  if (randomNumber1 == randomNumber2) {
    $("h1").html("Draw");
  } else if (randomNumber1 >= randomNumber2) {
    $("h1").html("Player 1 wins");
  } else {
    $("h1").html("Player 2 wins");
  }
};
