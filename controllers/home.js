import Tweet from "../models/tweet.js";

export const getTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.status(200).json(tweets);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postTweet = async (req, res) => {
  const tweet = req.body;
  console.log(tweet, "----BODY----");
  const newTweet = new Tweet(tweet);
  try {
    await newTweet.save();
    res.status(201).json(newTweet);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
