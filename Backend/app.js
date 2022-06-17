const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/userRoutes");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
//5rGgoTCL9akwcvpC
const PORT = 3001;
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.0clti48.mongodb.net/auth?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error.message));
