'use client';

import { FaPlus } from "react-icons/fa6";
import Task from "./components/task";
import { test_tasks } from "./variables/test_tasks";
import { useState } from "react";
export default function Home() {
  const [tasks, setTasks] = useState(test_tasks);
  const [newTask, setNewTask] = useState("");
  const [alert, setAlert] = useState("");

  function handleAdd() {
    if (newTask.length >= 1) {
      let newId;
      tasks.length <= 0 ? newId = 1 : newId = tasks[tasks.length - 1].id + 1;
      setTasks(prevItem => prevItem.concat({ id: newId, desc: newTask }))
      setNewTask("");
      setAlert('');
    }
    else {
      setAlert('Nothing entered');
    }
  }

  function handleDelete(data) {
    setTasks(prevItem => prevItem.filter(item => item.id != data));
  }

  return (
    <main className=" flex flex-col justify-start items-center py-10 px-5 w-full bg-neutral-950 gap-10 min-h-screen">
      {/* Title */}
      <p className="text-4xl text-primary">To-Do List</p>

      {/* Add Task Button */}
      <div className="flex flex-col md:flex-nowrap w-4/5 max-w-[500px] justify-between gap-2">
        <input type="text" className="bg-neutral-200 w-full rounded-md px-2 py-2" placeholder="Enter task here" id="new-task" value={newTask} onChange={e => setNewTask(e.target.value)} />
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-500 cursor-pointer px-3 py-2 rounded-lg flex justify-center items-center gap-1 text-white max-w-20 self-center"
          onClick={handleAdd}>
          <FaPlus /> Add
        </button>
      </div>

      {/* Alert message */}
      {
        alert.length < 1 ? <p></p> : <p className="text-destructive">{alert}</p>
      }

      {/* Tasks List Section */}
      {
        tasks.length <= 0 ? <p className="text-2xl text-white">No tasks to display</p> :

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