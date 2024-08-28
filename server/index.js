require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;

// db connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((e) => {
    console.log(e);
  });

// db listen
app.listen(port, () => {
  console.log(`server started ${port}`);
});
