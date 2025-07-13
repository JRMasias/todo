'use client';

import { FaPlus } from "react-icons/fa6";
import Task from "./components/task";
import { test_tasks } from "./variables/test_tasks";
import { useState } from "react";
export default function Home() {
  const [tasks, setTasks] = useState(test_tasks);

  function handleDelete(data) {
    setTasks(prevItem => prevItem.filter(item => item.id != data));
  }

  return (
    <main className=" flex flex-col justify-start items-center py-10 px-5 w-full bg-neutral-950 gap-10">
      {/* Title */}
      <p className="text-4xl text-primary">To-Do List</p>

      {/* Add Task Button */}
      <button type="button" className="bg-blue-600 hover:bg-blue-500 cursor-pointer px-3 py-2 rounded-lg flex justify-center items-center gap-1"><FaPlus /> Add</button>

      {/* Tasks List Section */}
      {
        tasks.length <= 0 ? <p className="text-2xl">No tasks to display</p> :

          <section className="w-full flex flex-col justify-center items-center gap-4">
            {/* Task Card */}
            {
              tasks.map((task) => {
                return (<Task key={task.id} id={task.id} description={task.desc} handleDelete={handleDelete} />);
              })
            }
          </section>
      }
    </main>
  );
}