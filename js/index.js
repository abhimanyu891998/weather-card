$(document).ready(function() {
  var lat, long;
  var city;
  //getting coordinates
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      locationdetails(lat,long);
      weatherdetails(lat,long);
    
    });
  }
  
  //get locationdetails (location name)
  function locationdetails(latitude,longitude)
     { $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+ longitude+"80&key=AIzaSyCrTwmvBdez8KIplFv7v6CcBHSFYB96WFs", function(data){
        for(i = 0; i < data.results[0].address_components.length; i++){
      if(data.results[0].address_components[i].types[0] == "locality"){
        $("#location_info").html(data.results[0].address_components[i].long_name);
      }
    }
      
    }); }
  //getting weather
  function weatherdetails(latitude,longitude){
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+ latitude +"&lon=" + longitude , function(data){
      $("#weather_type").html(data.weather[0].description);
 $("#temp").html(Math.round(data.main.temp_max));
      
      //changing to farheneit 
  
  $("#unit2").on("click", function(){
    $("#temp").html(Math.round((data.main.temp_max* 9/5)+32)).addClass("animated fadeIn");
    $("#c_icon").css({ "color":"rgba(255,255,255,0.7)" });
    $('#unit2').css({"color":"white"});
   });
      //back to celsius
  $("#c_icon").on("click", function(){
    $("#temp").html(Math.round(data.main.temp_max)).addClass("animated fadeIn").removeClass("animate fadeIn");
    $("#unit2").css({"color":"rgba(255,255,255,0.7)"});
    $(this).css({"color":"white"});
  });
  
      
      
 $("#wind_speed").html("Wind Speed: " + data.wind.speed + " mph");
 $("#icon").html('<img src=" ' + data.weather[0].icon + '" height="70px">');
      //transitioning background-colors
       switch(data.weather[0].description){
        
      case "clear sky" :$(".card").animate({"background-color":"#FF9800","padding-top": "calc(50vh - 285px)"},1000);
        break; 
     
      case "scattered clouds" : $(".card").animate({"background-color":"#01579B","padding-top": "calc(50vh - 285px)"},1000);
        break;
      
         case "mist" :
           $(".card").animate({"background-color":"#00BCD4","padding-top": "calc(50vh - 285px)"},1000);
           break;
           
         case "light rain":
            $(".card").animate({"background-color":"#03A9F4","padding-top": "calc(50vh - 285px)"},1000);
           break;
           
         case "broken clouds":
            $(".card").animate({"background-color":"#A1887F","padding-top": "calc(50vh - 285px)"},1000);
           break;
           
         case "few clouds":
            $(".card").animate({"background-color":"#A1887F","padding-top": "calc(50vh - 285px)"},1000);
           break;
           
         case "thunderstorm":
             $(".card").animate({"background-color":"#795548","padding-top": "calc(50vh - 285px)"},1000);
           break;
         case "snow":
             $(".card").animate({"background-color":"#616161","padding-top": "calc(50vh - 285px)"},1000);
           break;
           
         case "haze":
              $(".card").animate({"background-color":"#A1887F","padding-top": "calc(50vh - 285px)"},1000);
           break;
           
           
        
           
           
           
           
                                      }
  });
    
    
    
   
    
  }
  
  
  

 
});