// Import the TwitterApi class and the dotenv package to access environment variables
const { TwitterApi } = require("twitter-api-v2");
require('dotenv').config();

// Twitter API credentials
// Create a new instance of the TwitterApi
const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

// Client to read and write on the Twitter API
// Create a variable that references the readWrite property of the client object, which is used to read and write to the Twitter API
const twitterClient = client.readWrite;

// Function to send programmatically send a tweet.
async function sendTweet(tweetText) {  

  try {
    console.log("Sending tweet...");

    // Send the tweet
    await twitterClient.v2.tweet(tweetText);

    console.log("Tweet sent successfully!");
  } catch (error) {

    // Log an error message if there was a problem sending the tweet
    console.error(`An error occurred while sending the tweet: ${error}`);
  }
}

/*
// Define the tweet text
const tweet = `web3`;

// Call the function to send the tweet
sendTweet(tweet);
*/

// Export the sendTweet function to be used in other parts of the program.
module.exports = { sendTweet };