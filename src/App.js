import { React, useState, useEffect } from "react";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import AddTask from "./components/AddTask";
import Cart from "./components/Cart";
import Fetch from "./components/Fetch";
import Counter2 from "./components/Counter2";
import FetchPost from "./components/FetchPost";
import ParentComponent from "./components/CounterContext";
import Counter from "./components/Counter";
import DecrementCount from "./components/DecrementCount";
import { IncrementCount } from "./components/IncrementCount";
import Test3 from "./components/Test3";

const App = () => {
  const [tasks, setTask] = useState([
    { id: 0, text: "Doctor's Appt", day: "Feb 6", reminder: true },
    { id: 1, text: "Cat's Appt", day: "Feb 7", reminder: true },
    { id: 2, text: "Dog's Appt", day: "Feb 8", reminder: true },
    { id: 3, text: "Horse's Appt", day: "Feb 9", reminder: true },
  ]);

  const [buttonState, setButtonState] = useState(false);

  const deleteTask = (id) => {
    setTask(tasks.slice(0, id).concat(tasks.slice(id + 1)));
  };

  // const deleteTask = (id) => {
  //   // setTask(tasks.filter((task, index) => id !== index));
  //   setTask([...tasks.slice(0, id), ...tasks.slice(id + 1, tasks.length)]);
  // };
  //nested if we don't use spread operator

  // const deleteTask = (id) => {
  //   setTask(tasks.slice(0, id).concat(tasks.slice(id + 1)));
  // };

  const toggleReminder = (id) => {
    setTask((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          // Toggle the reminder property
          return { ...task, reminder: !task.reminder };
        }
        return task;
      });
    });
  };

  const addTask = (addedTask) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...addedTask };
    //spread otherwise nested
    // setTask((prev) => [...prev, newTask]);
    setTask([...tasks, newTask]);
  };

  useEffect(() => {
    console.log(tasks); // This will log the updated state
  }, [tasks]); // Run the effect whenever tasks is updated

  return (
    <div>
      <Header
        title="Task Tracker"
        buttonState={buttonState}
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
      {<hr></hr>}
      {/* {<hr></hr>}
      <Counter2></Counter2> */}
      {/* <Fetch></Fetch>
      {<hr></hr>} */}
      <ParentComponent></ParentComponent>
      {<hr></hr>}
      <DecrementCount></DecrementCount>
      {<hr></hr>}
      <IncrementCount></IncrementCount>
      {<hr></hr>}
      <Counter></Counter>
      {<hr></hr>}
      <Cart></Cart>
      {<hr></hr>}
      <FetchPost></FetchPost>
      <Test3></Test3>
    </div>
  );
};

export default App;
