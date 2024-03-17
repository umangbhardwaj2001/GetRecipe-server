const express = require("express");
const cors = require("cors");

const recipeRouter = require("./routes/recipeRouter");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/recipes", recipeRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
