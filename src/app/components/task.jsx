import { FaRegTrashCan, FaPencil } from "react-icons/fa6";
export default function Task(props) {
        function handleDeleteButton(data) {
                props.handleDelete(data);
        }

        return (
                <div
                        className="flex flex-col md:flex-row justify-between items-center w-4/5 md:w-[500px] bg-neutral-700 px-4 py-3 rounded-md gap-2 max-w-4xl text-white"
                        key={props.id}
                >
                        <p className="text-xl self-start md:self-center md:grow-0 md:border-r md:border-b p-2 md:border-neutral-500 rounded-2xl w-full md:w-4/5 bg-neutral-600">
                                {props.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-1 md:w-1/5">
                                <button
                                        type="button"
                                        className="bg-green-600 px-2 py-1 rounded-lg hover:bg-green-500 cursor-pointer flex justify-center items-center gap-1 col-span-1 max-w-24"
                                >
                                        <FaPencil /> Edit
                                </button>
                                <button
                                        type="button"
                                        className="bg-red-600 px-2 py-1 rounded-lg hover:bg-red-500 cursor-pointer flex justify-center items-center gap-1 col-span-1 max-w-24"
                                        onClick={() =>
                                                handleDeleteButton(props.id)
                                        }
                                >
                                        <FaRegTrashCan /> Delete
                                </button>
                        </div>
                </div>
        );
}
