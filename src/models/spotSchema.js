const mongoose = require("mongoose");
const { User } = require("./userSchema");

const ParkingSpotSchema = new mongoose.Schema(
  {
    spotName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pricePerHour: {
      type: Number,
      required: true,
      default: 0,
    },
    capacity: {
      type: Number,
      required: true,
      default: 1,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    isApprovedStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    spotType: {
      type: String,
      enum: ["Driveway", "Garage", "Parking Lot", "Street Parking"],
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

ParkingSpotSchema.index({ coordinates: "2dsphere" });

const Spot = mongoose.model("Spot", ParkingSpotSchema);
module.exports = { Spot };
