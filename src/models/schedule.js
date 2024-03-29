const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    nearestYard: {
      type: String,
      required: true,
    },
    sDate: {
      type: String,
      required: true,
    },
    sTime: {
      type: String,
      required: true,
    },
    itemDetails: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "null",
    },
        collectorid: {
      type: String,
      default: "null",
    },
        contact: {
      type: String,
      default: null,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PickupSchedule", UserSchema);
