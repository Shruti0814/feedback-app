const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect("mongodb://localhost:27017/feedbackDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  comment: String,
  rating: Number,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// API to submit feedback
app.post("/api/feedback", async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.json({ message: "Feedback submitted!" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// API to get all feedback
app.get("/api/feedback", async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
