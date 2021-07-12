import { FILTERS } from "../constants";

export const selectTodoList = store =>
    store && store.todos
        ? store.todos.allIds
        : [];

export const selectTodoById = (store, id) =>
    store && store.todos && store.todos.byIds
        ? { ...store.todos.byIds[id], id }
        : {};

export const selectTodos = store =>
    selectTodoList(store).map(id => selectTodoById(store, id));

export const selectTodoByFilter = (store, filter) => {
    const allTodos = selectTodos(store);

    switch (filter) {
        case FILTERS.COMPLETED:
            return allTodos.filter( todo => todo.completed)
        case FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed)
        case FILTERS.ALL:
        default:
            return allTodos;
    }
}