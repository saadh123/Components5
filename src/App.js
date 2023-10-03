import { React, useState } from "react";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import AddTask from "./components/AddTask";
import Cart from "./components/Cart";

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, text: "Doctor's Appt", day: "Feb 6", reminder: true },
    { id: 2, text: "Cat's Appt", day: "Feb 7", reminder: true },
    { id: 3, text: "Dog's Appt", day: "Feb 8", reminder: true },
    { id: 4, text: "Horse's Appt", day: "Feb 9", reminder: true },
  ]);

  const [buttonState, setButtonState] = useState(false);

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => id !== task.id));
  };

  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };
  return (
    <div>
      <Header
        title="Task Tracker"
        // buttonState={buttonState}
        // setButtonState={setButtonState}

        onClick={() => setButtonState(!buttonState)}
      ></Header>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Tasks>
      ) : (
        "Please add task"
      )}
      {buttonState && <AddTask onAdd={addTask}></AddTask>}
      <Cart></Cart>
    </div>
  );
};

export default App;
