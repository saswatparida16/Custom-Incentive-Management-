const express = require("express");
const connectDB  = require("./db")
require('dotenv').config()
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/holiday", require("./holidaylist"));

app.use("/api/employee", require("./employee"));

app.listen(port, () => {
  console.log(`app listiening on port ${port}`);
});
