import { FaRegTrashCan, FaPencil, FaPlus } from "react-icons/fa6";
export default function Home() {
  return (
    <main className=" flex flex-col justify-start items-center py-10 px-5 w-full h-screen bg-neutral-900 gap-10">
      <p className="text-4xl text-green-500">To-Do List</p>
      <button type="button" className="bg-blue-600 px-3 py-2 rounded-lg flex justify-center items-center gap-1"><FaPlus /> Add</button>

      <section className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center w-4/5 bg-neutral-800 px-4 py-3 rounded-md gap-2">
          <p className="text-xl self-start">Some Task Desc Here</p>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" className="bg-green-700 px-2 py-1 rounded-lg hover:bg-green-600 cursor-pointer flex justify-center items-center gap-1 col-span-1"><FaPencil /> Edit</button>
            <button type="button" className="bg-red-700 px-2 py-1 rounded-lg hover:bg-red-600 cursor-pointer flex justify-center items-center gap-1 col-span-1"><FaRegTrashCan /> Delete</button>
          </div>
        </div>
      </section>
    </main>
  );
}
