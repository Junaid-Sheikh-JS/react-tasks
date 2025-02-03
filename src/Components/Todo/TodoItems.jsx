import React from 'react';

const TodoItems = ({ todos, handleDelete }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <span>{todo}</span>
                    <button onClick={(() => handleDelete(index))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoItems;
