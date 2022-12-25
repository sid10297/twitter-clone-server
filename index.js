import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import home from "./routes/home.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", home);

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://sid10297:bhaiji9730@cluster0.ostxzvb.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", true);

mongoose
  .connect(CONNECTION_URL, {
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
  )
  .catch((error) => console.log(error.message, "----ERROR MESSAGE----"));
