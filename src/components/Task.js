import React from "react";


export default function Task({ task, onDeleteTask, onToggleTask }) {
    return (
      <li
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
              <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        {task.description}{" "}
        <button onClick={() => onDeleteTask(task.id)}>🚮</button>
      </li>
    );
  }