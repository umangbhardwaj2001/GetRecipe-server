const express = require("express");
const cors = require("cors");

const recipeRouter = require("./routes/recipeRouter");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/recipes", recipeRouter);
app.use((req, res) => {
  res.status(404).send("Sorry, the page you requested does not exist.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
