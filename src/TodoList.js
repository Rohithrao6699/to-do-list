import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  const handleNewTasks = (event) => {
    setNewTasks(event.target.value);
  };

  const handleAddTasks = () => {
    if (newTasks !== "") {
      setTasks([...tasks, newTasks]);
      setNewTasks("");
    }
  }

  const handleDeleteTasks = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setNewTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="input-wrapper">
        <input type="text" value={newTasks} onChange={handleNewTasks} />
        <button onClick={handleAddTasks}>Add</button>
      </div>
      <ul>
        {tasks.map((tasks, index) => (
          <li key={index}>
            {tasks}
            <button onClick={() => { handleDeleteTasks(index) }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
