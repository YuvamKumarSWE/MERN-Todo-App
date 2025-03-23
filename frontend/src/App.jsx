import { useState } from "react";
import InputBox from './InputBox'
import Result from "./Result";
function App() {

  const [newTodo , setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (newTodo.trim() === "") return; 
    setTodos([...todos, newTodo]); 
    setNewTodo(""); 
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); 
};
  
  return (

    <div className="bg-black min-h-screen p-2">
      
      <div className="flex flex-col items-center" > 
        <h1 className="text-white font-mono text-4xl mb-5">
          React Todo App 
        </h1>
         
         <InputBox setNewTodo={setNewTodo} addTodo={addTodo} newTodo={newTodo} />

         <Result todos={todos} deleteTodo={deleteTodo} />

      </div>
      
      
      
    </div>
  );
}
export default App;