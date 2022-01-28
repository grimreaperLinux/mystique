const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    outofstock: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      enum: ["Necklet", "Eardrops", "Wristlet"],
      required: true,
    },
    image: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", productSchema);

module.exports = Card;
