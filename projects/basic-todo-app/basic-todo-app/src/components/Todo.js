import React from 'react';

const TodoItem = ({ todo }) => {
    return (
        <li>
            {todo && todo.completed ? "DONE" : "DONEN'T"}{"  "}
            <span>
                {todo.content}
            </span>
        </li>
    );
}

export default TodoItem;