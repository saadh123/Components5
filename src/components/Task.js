import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
        {/* If you're seeing the event object being logged when the deleteTask
        function is called, it's because React's event handling system
        automatically passes the event object as the first argument to the event
        handler function. In your case, the deleteTask function is expecting an
        id argument, but when you call it from the onClick event handler, React
        passes the event object as the first argument. That's why you're seeing
        the event object being logged. */}
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
