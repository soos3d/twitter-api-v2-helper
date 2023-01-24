# twitter-api-v2 library helper

 This repository teaches you how to use the `twitter-api-v2` library to programmatically send tweets.

## Project details

This project offers a convenient solution for sending tweets using the powerful `twitter-api-v2` library. The code in this repository uses the `v2.tweet()` method provided by the `twitter-api-v2` library, making it easy to send tweets with minimal setup.

The script features a single function, `sendTweet(tweetText)`, that accepts a single parameter, `tweetText`, which is used as the content for the tweet. This function is easy to use and understand, making it a great starting point for those looking to build more advanced projects that interact with the Twitter API.

Security is a top priority in this project; that's why the program uses environment variables to store the API keys and tokens, ensuring they are not publicly exposed on Github. Additionally, the program makes use of the dotenv library to load the environment variables, which simplifies the process of using the program in different environments.

Overall, this project is the perfect foundation for anyone looking to build on their understanding of the Twitter API and create powerful projects that can interact with the platform.

## Prerequisites

* Node.js: ^16.17.0— [install Node](https://nodejs.org/en/download/)
* A Twitter developer account— Sign up on the [Twitter developer portal](https://developer.twitter.com).

## Set up

To use the `twitter-api-v2` library, you will need to create a project on your Twitter developer portal, get your credentials and update the access permissions.

> :warning: You must give read and write permission, or you will not be able to send tweets.

1. Create a developer account on the Twitter Developer website (https://developer.twitter.com/en/apps).
1. Once you have created an account, create a new Project, and within the project, create a new Developer App.
1. Fill in the required details, such as name, website, and a brief description of your app.
1. Once you have created the app, it will take you to the app's overview page, where you can see your app's API Key and API Secret.
1. Go to the Keys and Tokens tab, and generate an Access Token and an Access Token Secret.
1. To allow your app to read and write tweets, go to the Permissions tab in the app's settings and select the Read, write, and direct messages options. You will also need to specify a URL and a website. You can use any; I usually use `http://localhost/3000` for the URL and `https://twitter.com/` for the website.
1. Save your changes.

## Quick start

### Clone this repository:

```sh
git clone https://github.com/soos3d/twitter-api-v2-helper.git
```

### Install dependencies:

```sh
npm ci
```

> Use `npm ci` to launch a `clean install` of the dependencies, this will install the same version as in the `package.json` file.

### Edit the `.env.sample` file:

Add your Twitter developer secrets and rename the file to `.env`:

```env
API_KEY='YOUR_API_KEY'
API_SECRET='YOUR_API_SECRET'
ACCESS_TOKEN='YOUR_ACCESS_TOKEN'
ACCESS_TOKEN_SECRET='YOUR_ACCESS_TOKEN_SECRET'
```

You can find your Twitter API credentials on the [Twitter developer portal](https://developer.twitter.com).

## Test the package 

Run the following command from the root directory where you cloned this project:

```sh
npm run test
```

As a result the console will log the following:

```sh
> twitter-api-v2-helper@1.0.0 test
> node test/test

Sending tweet...
Tweet sent successfully!
```

Check your profile and you will find a tweet saying: "This is a tweet sent using the Twitter API V2".

## Use the sendTweet() function

The `tweet.js` file holds the `sendTweet()` function. To use it in another script, simply:

Create a `js` file in the same root directory and import the function at the top:

```js
const { sendTweet } = require("./tweet")
```

Then create a variable with the text:

```js
const text = "This is a tweet sent using the Twitter API V2"
```

And invoke the function:

```js
sendTweet(text)
```

Complete code:

```js
const { sendTweet } = require("./tweet")

const text = "This is a tweet sent using the Twitter API V2"
sendTweet(text)
```

Another option is to copy the entire content of the `tweet.js` file into another file in a different project. Remember to install the `twitter-api-v2` library in the other project for this to work.

## How it all works

The `tweet.js` file is divided in two parts:

The first section creates a Twitter read and write client instance:

```js
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
```

The second part holds the function to send the tweet, it also exports the function so you can use it in other scripts.

```js
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

// Export the sendTweet function to be used in other parts of the program.
module.exports = { sendTweet };
```