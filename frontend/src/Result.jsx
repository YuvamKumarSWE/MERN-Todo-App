import Todo from "./Todo";

function Result({todos , deleteTodo}){

    return (
        <div className="mt-10 flex flex-col items-center">
            {
                todos.map(
                    (todo,index) => (
                        <Todo todo={todo} deleteTodo={deleteTodo} index={index} key={index}/>
                    )
                )
            }
            
        </div>
    );
}
export default Result;