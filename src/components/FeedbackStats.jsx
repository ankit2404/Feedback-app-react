import React from "react";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  let average = 0;
  feedback.map((item) => (average += item.rating));

  average = average / feedback.length;
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average} </h4>
    </div>
  );
}

export default FeedbackStats;
