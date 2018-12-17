$(document).ready(function()  {
  $("form#form-a").submit(function(event) {
    var initialString = $("input#input-string").val();
    var stringToTweak = initialString.split(" ");
    var newArrayOfWords = stringToTweak.map(function(word) {
      if (word.length > 2) {
        console.log(word);
        return word;
      }
    });
    var filteredTweak = newArrayOfWords.filter(function(el) {
      return el != null;
    });
    var preReversedTweak = filteredTweak.map(function(word) {
      return word;
    });
    var reversedTweak = preReversedTweak.reverse();
    console.log(reversedTweak);
    console.log(filteredTweak);
    console.log(newArrayOfWords);
    console.log(stringToTweak);
    console.log(initialString);
    var finalTweak = reversedTweak.join(' ');

    $("ul#outputs").append("<li>"+ finalTweak + "</li>");
    event.preventDefault();
  });
});
