import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <Form onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask= {handleToggleTask} />
    </div>
  );
}

export default App;
