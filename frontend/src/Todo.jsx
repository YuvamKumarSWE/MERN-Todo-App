import { FaTrash } from "react-icons/fa";

function Todo({todo, deleteTodo, index}){
    return(
        <div className="min-w-lg flex flex-row items-center border-white border-2 text-white pt-2 pb-2 pl-4 pr-10 rounded-2xl bg-transparent mt-2 mb-2" >
            <div className="flex-1">
                    {todo}
            </div>
            <div>
                <button className="cursor-pointer" onClick={() => deleteTodo(index)}>
                    <FaTrash className="text-white text-xl" />
                </button>
            </div>

        </div>
    );
}
export default Todo;