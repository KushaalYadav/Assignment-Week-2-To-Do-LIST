// App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import { Task } from './Task';

function App() {
  const [todolist, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");

  // Load from localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem("todolist");
    if (storedTasks) {
      setTodoList(JSON.parse(storedTasks));
    }
  }, []);

  // Save to localStorage on update
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty.");
      return;
    }

    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };

    setTodoList([...todolist, task]);
    setNewTask(""); // Clear input
  };

  const deleteTask = (id) => {
    setTodoList(todolist.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todolist.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filtering
  const filteredList = todolist.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  // Sorting
  const sortedList = [...filteredList].sort((a, b) => {
    if (sortOrder === "asc") return a.taskName.localeCompare(b.taskName);
    if (sortOrder === "desc") return b.taskName.localeCompare(a.taskName);
    return 0;
  });

  return (
    <div className="App">
      <h1>React To-Do List</h1>
      <div className="addtask">
        <input
          type='text'
          placeholder='What is your task today...'
          value={newTask}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="controls">
        <label>Filter:</label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>

        <label>Sort:</label>
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="none">None</option>
          <option value="asc">A–Z</option>
          <option value="desc">Z–A</option>
        </select>
      </div>

      <div className="list-box">
        {sortedList.map((task) => (
          <Task
            key={task.id}
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
