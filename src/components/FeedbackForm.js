import React, { useState } from "react";

function FeedbackForm({ refreshFeedback }) {
  const [form, setForm] = useState({
    name: "",
    comment: "",
    rating: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    refreshFeedback();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      /><br /><br />

      <textarea
        name="comment"
        placeholder="Your comment"
        onChange={handleChange}
        required
      /><br /><br />

      <input
        type="number"
        name="rating"
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        onChange={handleChange}
        required
      /><br /><br />

      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
