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
            //console.log(data.main.temp);
            //var swap = +;
            //$('#results').append( swap );
      			},
          type: "GET"
  		});

		}

}

function createTable(data) {
  $("#results").html("");
  var table = '<br><br><table id="resultTable"></table>';
  $('#results').append( table );

  createLine('Temperature: ', (Math.round((parseInt(data.main.temp, 10)-273.15)*1000)/1000), '°C');
  createLine();
  createLine();
  createLine();
  if (true) {

  }
  else {
    return;
  }
}

function createLine(rowName, rowData, rowunit) {

}

function createAdditionalInfo() {

}
