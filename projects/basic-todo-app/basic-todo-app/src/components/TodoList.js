import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { selectTodoByFilter, selectTodos } from "../redux/selectors";
import { FILTERS } from "../constants";

const manageSelectedFilter = (filter) => {
  console.log(filter);
  switch (filter) {
    case FILTERS.ALL:
      return "All done!";
    case FILTERS.INCOMPLETE:
      return "There is no incomplete to-dos here!";
    case FILTERS.COMPLETED:
      return "There is no complete to-dos here!";
    default:
      return "";
  }
};

const TodoList = ({ todos, filter }) => {
  return (
    <div className="ui segment">
      <ul>
        {todos && todos.length ? (
          todos.map((todo) => {
            return <TodoItem key={`todo-${todo.id}`} todo={todo} />;
          })
        ) : (
          <h5 className="ui header">{manageSelectedFilter(filter)}</h5>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { filter } = state;
  const todos = selectTodoByFilter(state, filter);
  return { todos, filter };
};

export default connect(mapStateToProps)(TodoList);
