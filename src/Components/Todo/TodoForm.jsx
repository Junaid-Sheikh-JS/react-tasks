import React from 'react';

const TodoForm = ({ input, setInput, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todo-title"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;
