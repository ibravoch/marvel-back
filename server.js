require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const axios = require("axios");

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apikey=${process.env.MARVEL_API_KEY}`
    );
    res.status(200).json(response.data);
    console.log("ma route is good");
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/character/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.all("*", (req, res) => {
  res.json({ message: "cette route n'existe pas" });
});

app.listen(4000, () => {
  console.log("ready for use");
});
