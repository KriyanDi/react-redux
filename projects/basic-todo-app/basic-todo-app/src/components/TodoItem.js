import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from '../redux/actions';

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

export default connect(null, { toggleTodo })(TodoItem);