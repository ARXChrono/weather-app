const weather = require('./weather')

const query = process.argv.slice(2).join(' ')

//query: 6155
//query: Perth

weather.get(query)
