import React, { useState } from "react";
import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";

const Todo = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, input]);
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));  
    }

    return (
        <>
            <h1>Todo List</h1>
            <TodoForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
            <TodoItems todos={todos} handleDelete={handleDelete} />
        </>
    );
};

export default Todo;
