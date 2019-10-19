var channels = [
   "freecodecamp",
   "test_channel",
   "ESL_SC2",
   "OgamingSC2",
   "cretetion",
   "storbeck",
   "habathcx",
   "RobotCaleb",
   "noobs2ninjas"
];

function getChannels(mode) {
   $("#result").empty();
   channels.forEach(function(channel) {
      var url =
         "https://wind-bow.gomix.me/twitch-api/streams/" +
         channel +
         "?callback=?";
      $.getJSON(url, function(json) {
         if ((json.stream === null || json.stream === undefined) && (mode!="online")) {
            var status = "Offline  ";
            var channelOff =
               '<div class="alert alert-danger" role="alert"><a class="alert-link" target="_blank" href="https://www.twitch.tv/' +
               channel +
               '" >' +
               channel +
               "</a><div>" +
               status +
               "</div></div>";
            $("#result").append(channelOff);
         } else if (mode!="offline"){
            var game = json.stream.game;
            var status = "online...";
            var channelOn =
               '<div class="alert alert-success" role="alert"><a class="alert-link" target="_blank" href="https://www.twitch.tv/' +
               channel +
               '" >' +
               channel +
               "</a><div>" +
               status +
               game +
               "</div></div>";
            $("#result").append(channelOn);
         }
      });
   });
}

$(document).ready(function() {
   $("#all").on("click", function() {
      getChannels("all");
   });

   $("#online").on("click", function() {
      getChannels("online");
   });

   $("#offline").on("click", function() {
      getChannels("offline");
   });
});