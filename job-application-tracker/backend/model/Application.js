const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  status: { type: String, default: "Applied" },
  date: { type: String },
  notes: { type: String }
});

module.exports = mongoose.model("Application", applicationSchema);
