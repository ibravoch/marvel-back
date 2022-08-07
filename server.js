require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect;

const app = express();
app.use(cors());
const MARVEL_API_KEY = process.env.MARVEL_API_KEY;

app.get("/", (req, res) => {
  res.status(500).json("Welcome on my Backend !");
});

app.get("/characters", async (req, res) => {
  let limit = req.query.limit;
  let skip = limit * req.query.skip;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=KUuKXbduDgD49DN4&limit=${limit}&skip=${skip}`
    );
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/comics/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=KUuKXbduDgD49DN4`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/comics", async (req, res) => {
  let limit = req.query.limit;
  let skip = limit * req.query.skip;

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=KUuKXbduDgD49DN4&limit=${limit}&skip=${skip}`
    );
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/comics/:characterId", async (req, res) => {
  let limit = req.query.limit;
  let skip = limit * req.query.skip;

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=KUuKXbduDgD49DN4`
    );
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.all("*", (req, res) => {
  res.json({ message: "cette route n'existe pas" });
});

app.listen(process.env.PORT, () => {
  console.log("ready for use");
});
