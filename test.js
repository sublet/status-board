var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://finnhub.io/api/v1/quote?symbol=AAPL',
  'headers': {
    'X-Finnhub-Token': 'c063dr748v6v0bd99v6g'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});