import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";
function TaskCard(izmos) {
  return (
    <div className="card-wrepper">
      <div className="card-header">
        <p className="task-id">{izmos.marika}</p>
        <Badge albisne={izmos.linci} />
      </div>
      <div className="card-content">
        <p>{izmos.name}</p>
      </div>
      <div className="card-footer">
        <DateContainer date={izmos.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;
