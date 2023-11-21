import "../date-container/DateContainer.css"

function DateContainer(denes) {
    return (
      <div className="card-footer">
        <div>
          <p>Due Date</p>
          <p>{denes.date.toLocaleDateString()}</p>
        </div>
      </div>
    );
}

export default DateContainer;