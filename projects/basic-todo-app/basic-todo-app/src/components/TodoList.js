import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { selectTodoByFilter, selectTodos } from "../redux/selectors";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos && todos.length
        ? todos.map((todo) => {
            return <TodoItem key={`todo-${todo.id}`} todo={todo} />;
          })
        : "All done!"}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { filter } = state;
  const todos = selectTodoByFilter(state, filter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
