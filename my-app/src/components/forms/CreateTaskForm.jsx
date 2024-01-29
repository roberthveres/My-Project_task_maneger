import React from "react"
import "./CreateTaskForm.css"
const CreateTaskForm = () => {
    return (
      <div>
        <form>
          <div className="form-row">
            <label>Task Name</label>
            <input type="text"></input>
          </div>

          <div className="form-row">
            <label>Due Date</label>
            <input type="text"></input>
          </div>

          <div className="form-row">
            <label>Task Details</label>
            <textarea name="" id="" cols={30} rows={3}></textarea>
          </div>

          <button type="submit">Create Task</button>
        </form>
      </div>
    );
}


export default CreateTaskForm;