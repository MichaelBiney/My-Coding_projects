import React, {useState} from "react";

function Todoform(addTodo) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInpoutChange(e){
        setTodo({ ...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuid.v4()})
            setTodo({ ...todo, task: ""});
         }
    }

    return(
    <form>
        <input
        type="text"value={todo.task} onChange={handleTaskInpoutChange} /> 
        <button type="subbmit" />
    </form>

    );
    }


export default Todoform;