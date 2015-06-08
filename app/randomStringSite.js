
function randomString(array) {
  var randomIndex =  Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

$("button").on("click", function() {
  $("#movieQuote").show().text(randomString(starWarsQuotes));
});

var starWarsQuotes = [
  '"Your focus determines your reality." - Qui-Gon Jinn',
  '"Do. Or do not. There is no try." - Yoda',
  '"In my experience there is no such thing as luck." - Obi-Wan Kenobi',
  '"I find your lack of faith disturbing." - Darth Vader',
  '"It\'s a trap!" - Admiral Ackbar"',
  '"Never tell me the odds." - Han Solo',
  '"Stay on target." - Gold Five'
  ]

