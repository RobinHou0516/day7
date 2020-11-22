const sunriset = require('sunriset');
const findCity = require('./utils/findCityByName')

const sunSetRise = function(cityName,date){
    var cityLoc = findCity(cityName).loc.coordinates.reverse()
    const getSuntime = sunriset(new Date(date),cityLoc[0], cityLoc[1])
    const output = {
        sunrise:getSuntime.sunrise.time,
        sunset:getSuntime.sunset.time,
    }
    return output
}

console.log(sunSetRise('Chengdu','2020.11.15'))