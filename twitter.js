var dotenv=require('dotenv').config();

const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

client.get('application/rate_limit_status', function(error, data, response) {
  if(error) throw error;
  console.log('data = ', JSON.stringify(data));
  // console.log(response);  // Raw response object.
});