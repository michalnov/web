$(document).ready(function(){
  var cityName = $("#cityName").val();
  var countryCode = $("#countryCode").val();
  if (cityName.length > 1) {
    var link = 'api.openweathermap.org/data/2.5/weather?q='+cityName;
    if (countryCode) {

    }
    else {

    }
  }
  else {

  }
  $.ajax.({
    url: link,
    data: {format: 'json'},
    error: function() {
      //chybová hláška
    }
    dataType: 'json',
    success: function(data) {

    }
    type: 'GET'
  });
});
