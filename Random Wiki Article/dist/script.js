$(document).ready(function() {
  $("#searchForm").on("submit", function(e) {
    e.preventDefault();
    var x = document.getElementById("search").value;
    var url =
      "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&callback=?&formatversion=2&gsrsearch=" +
      x;
    $.getJSON(url, function(apiResult) {
      $("#result").empty();
      for (var i = 0; i < apiResult.query.pages.length; i++) {
        var page =
          '<div class="list-group"><a class="list-group-item-heading" target="_blank" href="https://en.wikipedia.org/?curid=' +
          apiResult.query.pages[i].pageid +
          '">' +
          apiResult.query.pages[i].title +
          '</a><p class="list-group-item-text">' +
          apiResult.query.pages[i].extract +
          "</p></div>";
        $("#result").append(page);
      }
    });
  });
});