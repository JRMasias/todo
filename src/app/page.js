'use client';

import { FaPlus } from "react-icons/fa6";
import Task from "./components/task";
import { test_tasks } from "./variables/test_tasks";
export default function Home() {
  return (
    <main className=" flex flex-col justify-start items-center py-10 px-5 w-full bg-neutral-950 gap-10">
      {/* Title */}
      <p className="text-4xl text-green-500">To-Do List</p>

      {/* Add Task Button */}
      <button type="button" className="bg-blue-600 px-3 py-2 rounded-lg flex justify-center items-center gap-1"><FaPlus /> Add</button>

      {/* Tasks List Section */}
      <section className="w-full flex flex-col justify-center items-center gap-4">
        {/* Task Card */}
        {
          test_tasks.map((task, index) => {
            return (<Task key={index} description={task} />);
          })
        }
      </section>
    </main>
  );
}