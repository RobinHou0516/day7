const cityDB = require('all-the-cities')

const findCityByName = function(name){
    const output = cityDB.find(function(item){
        return (item.name === name)
    })
    return output
    
}

// console.log(findCityByName('Chengdu'))
module.exports = findCityByName
