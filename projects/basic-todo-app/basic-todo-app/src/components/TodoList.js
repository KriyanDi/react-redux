import React from 'react';
import TodoItem from './TodoItem'
import { connect } from 'react-redux';
import { selectTodos } from "../redux/selectors";

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos && todos.length
                ? todos.map(todo => {
                    return <TodoItem key={`todo-${todo.id}`} todo={todo} />;
                })
                : "All done!"}
        </ul>
    );
}

export default connect(state => ({ todos: selectTodos(state) }))(TodoList);