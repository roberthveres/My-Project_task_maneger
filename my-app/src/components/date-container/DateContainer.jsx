import React from "react";
import "../date-container/DateContainer.css";

function DateContainer(props) {
  return (
    <div className="card-footer">
      <div>
        <p>Due Date</p>
        <p>{props.date.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default DateContainer;
