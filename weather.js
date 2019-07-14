const https = require('https')
const querystring = require('querystring')
const api = require('./api')

function printWeather(weather) {
  const message = `Current temperature in ${weather.name} is ${
    weather.main.temp
  }°C`
  console.log(message)
}

function get(query) {
  const parameters = {
    APPID: api.key,
    units: 'metric',
  }

  const zipCode = parseInt(query)
  if (!isNaN(zipCode)) {
    parameters.zip = zipCode + ',au'
  } else {
    parameters.q = query + ',au'
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?${querystring.stringify(
    parameters
  )}`

  const request = https.get(url, response => {
    let body = ''
    response.on('data', chunk => {
      body += chunk
    })
    response.on('end', () => {
      const weather = JSON.parse(body)
      printWeather(weather)
    })
  })
}

module.exports.get = get
