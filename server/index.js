require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const errorMiddle = require("./Middleware/ErrorMiddleware/errorMiddleWare");

// express json
app.use(express.json());

const authRouter = require("./Routes/AuthRoutes/AuthRoutes");

// api
app.use("/api/auth", authRouter);

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

app.use(errorMiddle);
