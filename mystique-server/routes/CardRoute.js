const express = require('express')
const Card = require ("../models/productCard.js");
const sharp = require("sharp");
const Buffer = require('buffer')

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("get items");
  try {
    const item = await Card.find();
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  // var base64Data = req.body.image.replace(/^data:image\/png;base64,/, "");
  // var bufferdata = Buffer.from(base64Data, 'base64')
  // const sizedimg = await sharp(bufferdata).toBuffer()
  // req.body.image = sizedimg
  const card = new Card(req.body);
  console.log(card)
  try {
    await card.save();
    res.status(201).json(card);
  } catch (error) {console.log(error)}
});

module.exports = router