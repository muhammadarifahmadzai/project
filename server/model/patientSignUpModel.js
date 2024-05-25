const mongoose = require("mongoose");

const patientSignUpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },   
});

const userPatient = mongoose.model("Patients", patientSignUpSchema);

module.exports = userPatient;
