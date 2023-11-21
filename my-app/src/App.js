
import './App.css';
import TaskCard from './components/task-card/TaskCard';
function App() {
  const data = [
    {
      id: "T-1",
      marika: "In Progres",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-2",
      marika: "Todo",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-3",
      marika: "Todo",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 23),
    },
  ];
  
  return (
    <div className="app-container">
      <TaskCard
        marika={data[0].id}
        linci={data[0].marika}
        name={data[0].name}
        dueDate={data[0].dueDate}
      />
      <TaskCard
        marika={data[1].id}
        linci={data[1].marika}
        name={data[1].name}
        dueDate={data[1].dueDate}
      />
      <TaskCard
        marika={data[2].id}
        linci={data[2].marika}
        name={data[2].name}
        dueDate={data[2].dueDate}
      />
    </div>
  );
}

export default App;
