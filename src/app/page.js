import { FaPlus } from "react-icons/fa6";
import Task from "./components/task";
export default function Home() {
  return (
    <main className=" flex flex-col justify-start items-center py-10 px-5 w-full h-screen bg-neutral-900 gap-10">
      {/* Title */}
      <p className="text-4xl text-green-500">To-Do List</p>

      {/* Add Task Button */}
      <button type="button" className="bg-blue-600 px-3 py-2 rounded-lg flex justify-center items-center gap-1"><FaPlus /> Add</button>

      {/* Tasks List Section */}
      <section className="w-full flex flex-col justify-center items-center gap-4">
        {/* Task Card */}
        <Task />
      </section>
    </main>
  );
}
