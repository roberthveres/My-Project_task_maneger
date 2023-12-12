import React from 'react';
import './App.css';
import TaskViewer from './components/task-viewer/TaskViewer';
function App() {
  const data = [
    {
      id: "T-1",
      status: "In Progres",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-2",
      status: "Todo",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-3",
      status: "Todo",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 23),
    },
  ];

  return (
    <div className="app-container">
      <div className="app-content">
        <h3>Task Manager</h3>
        <TaskViewer taskList={data} />
      </div>
    </div>
  );
}

export default App;
