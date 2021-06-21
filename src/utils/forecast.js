const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=b06a481cc3c63e6b3efb078a7eaf53de&query=${latitude},${longitude}`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      console.log(url)
      console.log(body)
      callback('Unable to find location', undefined)
    } else {
      current = body.current
      callback(undefined, `${current.weather_descriptions[0]}. It is ${current.temperature} degrees outside. It feels like ${current.feelslike} degrees out.`)
    }
  })
}

module.exports = forecast
