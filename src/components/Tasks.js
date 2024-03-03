import Task from "./Task";

export const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <Task
            key={task.id}
            index={index}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          ></Task>
        );
      })}
    </div>
  );
};
