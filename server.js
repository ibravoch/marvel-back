require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const axios = require("axios");

app.get("/", async (req, res) => {
  const response = await axios.get(
    "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=KUuKXbduDgD49DN4"
  );
  res.status(200).json(response.data);
  console.log("ma route is good");
});

app.get("/character/:characterId", async (req, res) => {
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=KUuKXbduDgD49DN4`
  );
  res.status(200).json(response.data);
  console.log(response.data);
});

app.all("*", (req, res) => {
  res.json({ message: "cette route n'existe pas" });
});

app.listen(process.env.PORT, () => {
  console.log("ready for use");
});
