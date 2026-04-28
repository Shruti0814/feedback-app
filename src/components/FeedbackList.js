import React from "react";

function FeedbackList({ feedback }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Comment</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {feedback.map((fb) => (
          <tr key={fb._id}>
            <td>{fb.name}</td>
            <td>{fb.comment}</td>
            <td>{fb.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FeedbackList;
