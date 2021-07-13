import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const TodoItem = (props) => {
  return (
    <li onClick={() => props.toggleTodo(props.todo.id)}>
      {props.todo && props.todo.completed ? "✔️" : "❌"}
      {"  "}
      <span>{props.todo.content}</span>
    </li>
  );
};

export default connect(null, { toggleTodo })(TodoItem);
