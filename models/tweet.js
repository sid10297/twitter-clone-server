import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
  tweet: String,
  tweeter: String,
  tags: [String],
  media: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  replyCount: {
    type: Number,
    default: 0,
  },
  retweetCount: {
    type: Number,
    default: 0,
  },
  tweetedAt: {
    type: Date,
    default: new Date(),
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
