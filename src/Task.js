// Task.jsx

import { FaCheckCircle, FaUndo, FaTrash } from "react-icons/fa";  

export const Task = (props) => {
  return (
    <div
    className={`task ${props.completed ? "completed" : ""}`}
      // style={{
      //   textDecoration: props.completed ? "line-through" : "none",
      //   backgroundColor: props.completed ? "#d4edda" : "#f8d7da",
      //   margin: "10px",
      //   padding: "10px",
      //   borderRadius: "8px"
      // }}
    >
      <h3>{props.taskName}</h3>
      <div className="task-buttons">
        <button
          className="complete-btn"
          onClick={() => props.completeTask(props.id)}
          title={props.completed ? "Undo" : "Mark as Complete"}
        >
          {props.completed ? <FaUndo /> : <FaCheckCircle />}
        </button>
        <button onClick={() => props.deleteTask(props.id)} title="Delete Task">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
