var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9a4865d440caa1d904b38d49a5db23a2';

//9a4865d440caa1d904b38d49a5db23a2

module.exports = {
  getTemp:function (location) {
    var emcodedLocation = encodeURIComponent(location);
    var reqestURL = `${OPEN_WEATHER_MAP_URL}&q=${emcodedLocation}`;

    return axios.get(reqestURL)
    .then(function(res){
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message)
      }else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
