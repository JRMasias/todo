import { FaRegTrashCan, FaPencil } from "react-icons/fa6";
export default function Task(props) {
        return (
                <div
                        className="flex flex-col md:flex-row justify-between items-center w-4/5 md:w-[500px] bg-neutral-800 px-4 py-3 rounded-md gap-2 max-w-4xl"
                        key={props.index}
                >
                        <p className="text-xl self-start md:self-center md:grow-0 md:border-r md:border-b md:p-2 md:border-neutral-600 rounded-2xl md:w-4/5 bg-neutral-700">
                                {props.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-1 md:w-1/5">
                                <button
                                        type="button"
                                        className="bg-green-700 px-2 py-1 rounded-lg hover:bg-green-600 cursor-pointer flex justify-center items-center gap-1 col-span-1 max-w-24"
                                >
                                        <FaPencil /> Edit
                                </button>
                                <button
                                        type="button"
                                        className="bg-red-700 px-2 py-1 rounded-lg hover:bg-red-600 cursor-pointer flex justify-center items-center gap-1 col-span-1 max-w-24"
                                >
                                        <FaRegTrashCan /> Delete
                                </button>
                        </div>
                </div>
        );
}
