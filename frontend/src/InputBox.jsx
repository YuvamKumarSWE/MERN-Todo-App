import { FaSearch } from "react-icons/fa";
function InputBox({setNewTodo , addTodo , newTodo}) {

   

    return (
        <div className="relative flex items-center min-w-xl">
            <input
                className="border-white border-2 text-white pt-2 pb-2 pl-4 pr-10 rounded-2xl bg-transparent w-full"
                placeholder="Todo"
                value={newTodo}
                onChange={(e) => {setNewTodo(e.target.value)}}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
            />
            <button className="absolute right-3" onClick={() => addTodo()}>
                <FaSearch className="text-white" />
            </button>
        </div>
    );
}

export default InputBox;
