const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  id:{
    type:Number,
    required:true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "employee"],
    required: true,
  },
  sales: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const employee = mongoose.model("employee", employeeSchema);

module.exports = employee;
