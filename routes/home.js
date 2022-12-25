import express from "express";
import { getTweets } from "../controllers/home.js";

const router = express.Router();

router.get("/", getTweets);

export default router;
