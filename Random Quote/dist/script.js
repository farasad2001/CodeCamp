function getQuote() {
  $.getJSON(
    "https://random-quote-generator.herokuapp.com/api/quotes/random",
    function(json) {
      $("#quote").html('"' + json.quote + '"');
      $("#author").html(json.author);
      //change color
      var x = document.getElementById("pq");
      var color =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";

      $("body").css("background-color", color);
      $("div").css("color", color);
      $("button").css("color", color);
    }
  );
}

$(document).ready(function() {
  getQuote();
  $("#getQuote").on("click", getQuote);
});