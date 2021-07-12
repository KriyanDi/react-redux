import React from 'react';
import Todo from './'

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos && todos.length
                ? todos.map(todo => {
                    return <Todo key={`todo-${todo.id}`} todo={todo} />;
                })
                : "All done!"}
        </ul>
    );
}

export default TodoList;