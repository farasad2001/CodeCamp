
$(document).ready(function() {

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
   var latitude =  position.coords.latitude;
   var longitude =  position.coords.longitude;
   var wUrl = "https://api.apixu.com/v1/current.json?key=8ca498dfc1424ad6bb563136171307&q=" + latitude + "," + longitude;
   $.getJSON(wUrl, function(json) {
      console.log(json);
     $("#city").html(json.location.name)
        $("#currentWeather").html(json.current.temp_c + " c");
     $("#condition").html(json.current.condition.text);
     var iconUrl = json.current.condition.icon;
     $("#icon").attr("src", iconUrl);
      });
     
 
}); 
    
  }
  
});
  