import React from 'react';
import Todo from './Todo'
import { connect } from 'react-redux';
import { selectTodos } from "../redux/selectors";

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

export default connect(state => ({ todos: selectTodos(state) }))(TodoList);