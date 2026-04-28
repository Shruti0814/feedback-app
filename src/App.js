import React, { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState([]);

  const loadFeedback = async () => {
    const res = await fetch("http://localhost:5000/api/feedback");
    const data = await res.json();
    setFeedback(data);
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Feedback Form</h2>
      <FeedbackForm refreshFeedback={loadFeedback} />

      <h2>Feedback List</h2>
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;

