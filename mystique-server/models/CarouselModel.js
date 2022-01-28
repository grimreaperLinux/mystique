const mongoose = require('mongoose')

const CarouselSchema = mongoose.Schema(
  {
    comment: String,
    image: String,
    name: String,
  },
  { timestamps: true }
);

const Carousel = mongoose.model("Carousel", CarouselSchema);

module.exports = Carousel
