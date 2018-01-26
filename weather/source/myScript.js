var apiKey = '&appid=8fb00fda867fdada46649b87e3baf20b';
function proceed(){
    var city=$("#cityName").val();
    var code=$("#countryCode").val();
    if(city.length > 1){
      var urllink= 'http://api.openweathermap.org/data/2.5/weather?q=';
      urllink=urllink + city;

      if(code.length == 2){
          urllink=urllink + ',' + code;
      }

      urllink=urllink + apiKey;

      $.ajax({
          url: urllink,
          data: {format: 'json'},
          error: function(){
      				//vypis chyby
      			},
          dataType: "json",
          success: function(data){

            createTable(data);
      			},
          type: "GET"
  		});

		}

}

function createTable(data) {
  $("#results").html("");
  var table = '<br><br><table id="resultTable"></table>';
  $('#results').append( table );

  createLine('Temperature: ', (Math.round((parseInt(data.main.temp, 10)-273.15)*10)/10), '°C');
  createLine('Humidity: ', data.main.humidity, '%');
  createLine('Description: ', data.weather[0].description, ' ');
  createLine('Pressure: ', data.main.pressure, 'hpa');
  if (true) {
    var sunRise = new Date(data.sys.sunrise*1000);
    var sunSet = new Date(data.sys.sunset*1000);
    createLine('Sunrise: ', sunRise.getHours()+':'+sunRise.getMinutes(), ' ');
    createLine('Sunset: ', sunSet.getHours()+':'+sunSet.getMinutes(), ' ');
    createLink(data);
  }
  else {
    return;
  }
}

function createLine(rowName, rowData, rowunit) {
  var swap = '<tr><td><h3>'+rowName+'<h3><td><td><h3 style="color: green; margin: 5px;">'+rowData+' '+rowunit+'<h3><td></tr>';
  $('#resultTable').append( swap );
}

function createLink(data) {
  var swap = '<tr><td><h3>Open in Google Maps: <h3><td><td><h4><a href="https:google.com/maps/search/?api=1&query='+data.coord.lat+','+data.coord.lon+'" target="_blank" style="color: margin: 5px;"> Search </a></h4><td></tr>';
  $('#resultTable').append( swap );
}
