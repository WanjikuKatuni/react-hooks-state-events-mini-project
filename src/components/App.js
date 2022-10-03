import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleAddingTask(newTask){
    setTasks([...tasks, newTask]);
  }

  function handleDeletingTask(deletedTask){
    setTasks(tasks.filter((task)=> task.text !== deletedTask))
  }

  const seenTasks = tasks.filter((task)=> category === "All" || task.category === category);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = {CATEGORIES}
      selectedCategory={category}
      onSelectedCategory = {setCategory}
      />
      <div className="tasks">
        <h5>Tasksk</h5>
      <NewTaskForm 
      categories = {CATEGORIES.filter((cat)=> cat !== "All")}
      onTaskFormSubmit = {handleAddingTask}
      />
      <TaskList 
      onDeleteTask={handleDeletingTask}
      tasks={seenTasks}
      />
      </div>
    </div>
  );
}

export default App;
