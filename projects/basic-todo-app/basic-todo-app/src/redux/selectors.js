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