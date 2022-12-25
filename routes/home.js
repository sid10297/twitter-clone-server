import express from "express";
import { getTweets, postTweet } from "../controllers/home.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = express.Router();

router.get("/", getTweets);
router.post("/", postTweet);

export default router;
