const https = require('https')
const querystring = require('querystring')
const api = require('./api')

// Print out temp details
// Print out error message

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
    // Read the data
    response.on('data', chunk => {
      body += chunk
    })
    response.on('end', () => {
      console.log(body)
      //Parse data
      //Print the data
    })
  })
}

module.exports.get = get
