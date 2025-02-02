import React, { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, input]);
    };

    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo-title"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span>{todo}</span>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Todo;
