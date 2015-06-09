var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var quotes = [
  '"Your focus determines your reality." - Qui-Gon Jinn',
  '"Do. Or do not. There is no try." - Yoda',
  '"In my experience there is no such thing as luck." - Obi-Wan Kenobi',
  '"I find your lack of faith disturbing." - Darth Vader',
  '"It\'s a trap!" - Admiral Ackbar"',
  '"Never tell me the odds." - Han Solo',
  '"Stay on target." - Gold Five'
]

var jokes = [
  {"setup": "What do you call a fish with no eyes?", "punchline": "A FSHHHH"},
  {"setup": "What happens to a frog's car when it breaks down?", "punchline": "It gets toad away"},
  {"setup": "Why was six scared of seven?", "punchline": "Because seven ate nine."},
  {"setup": "How do you count cows?", "punchline": "With a cowculator"},
  {"setup": "What do computers eat for a snack?", "punchline": "Microchips"}
]

app.get("/joke", function(request, response) {
  var randomIndex = Math.floor(Math.random() * jokes.length);
  response.json(jokes[randomIndex]);
});

app.listen(port, function() {
  console.log('server started on port' + port);
})
