require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const cors = require("cors");
const errorMiddle = require("./Middleware/ErrorMiddleware/errorMiddleWare");

// cors policy
app.use(cors("http://localhost:5173"));

// express json
app.use(express.json());

const authRouter = require("./Routes/AuthRoutes/AuthRoutes");
const recipeRouter = require("./Routes/RecipeRoutes/RecipeRoutes");
const userRouter = require("./Routes/UserRoutes/UserRoutes");
const ingredientRouter = require("./Routes/IngredientRoutes/IngredientRoutes");

// api
app.use("/api/auth", authRouter);
app.use("/api/recipe", recipeRouter);
app.use("/api/user", userRouter);
app.use("/api/ingredient", ingredientRouter);

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
