const mongoose = require("mongoose");
const DB_NAME = require("./constants");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log("connect to mongo succefully");
  } catch (err) {
    console.log(err);
    console.log("mongodb connection error");
  }
};
module.exports = connectDB;

