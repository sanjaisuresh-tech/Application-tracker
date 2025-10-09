const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Application = require("./models/Application");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/jobtracker")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => res.send("Job Application Tracker API running!"));

// Get all applications
app.get("/api/applications", async (req, res) => {
  const applications = await Application.find();
  res.json(applications);
});

// Add new application
app.post("/api/applications", async (req, res) => {
  const newApp = new Application(req.body);
  await newApp.save();
  res.status(201).json(newApp);
});

// Delete application
app.delete("/api/applications/:id", async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  res.json({ message: "Application deleted" });
});

// Update application
app.put("/api/applications/:id", async (req, res) => {
  const updated = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
