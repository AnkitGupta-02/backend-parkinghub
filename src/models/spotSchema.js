const mongoose = require("mongoose");

const spotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    pricePerHour: {
      type: Number,
      default: 0,
    },
    capacity: {
      type: Number,
      default: 1,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Spot = mongoose.model("Spot", spotSchema);

module.exports = { Spot };
